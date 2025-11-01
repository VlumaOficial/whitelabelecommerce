'use client'

import { useState, useEffect, useContext, createContext, ReactNode } from 'react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { authClient, AuthService } from '@/lib/auth'
import type { User } from '@/types'

// Tipos do contexto de autenticação
interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string, remember?: boolean) => Promise<{ success: boolean; error?: string }>
  signUp: (data: { email: string; password: string; full_name: string; phone?: string; acceptTerms: boolean }) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>
  isAuthenticated: boolean
  isAdmin: boolean
  isSeller: boolean
}

// Contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider de autenticação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Verificar usuário atual ao inicializar
  useEffect(() => {
    const getInitialUser = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.error('Erro ao carregar usuário:', error)
      } finally {
        setLoading(false)
      }
    }

    getInitialUser()
  }, [])

  // Escutar mudanças no estado de autenticação
  useEffect(() => {
    const { data: { subscription } } = authClient.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const userData = await AuthService.getCurrentUser()
          setUser(userData)
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
        } else if (event === 'TOKEN_REFRESHED' && session?.user) {
          const userData = await AuthService.getCurrentUser()
          setUser(userData)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Função de login
  const signIn = async (email: string, password: string, remember: boolean = false) => {
    setLoading(true)
    try {
      const result = await AuthService.signIn({ email, password, remember })
      
      if (result.success && result.user) {
        setUser(result.user)
        return { success: true }
      }
      
      return { success: false, error: result.error }
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' }
    } finally {
      setLoading(false)
    }
  }

  // Função de registro
  const signUp = async (data: { 
    email: string
    password: string
    full_name: string
    phone?: string
    acceptTerms: boolean 
  }) => {
    setLoading(true)
    try {
      const result = await AuthService.signUp({
        email: data.email,
        password: data.password,
        confirmPassword: data.password, // Assumindo que a validação já foi feita
        full_name: data.full_name,
        phone: data.phone,
        acceptTerms: data.acceptTerms
      })
      
      return { success: result.success, error: result.error }
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' }
    } finally {
      setLoading(false)
    }
  }

  // Função de logout
  const signOut = async () => {
    setLoading(true)
    try {
      await AuthService.signOut()
      setUser(null)
    } catch (error) {
      console.error('Erro no logout:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função de recuperação de senha
  const resetPassword = async (email: string) => {
    try {
      const result = await AuthService.resetPassword(email)
      return { success: result.success, error: result.error }
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' }
    }
  }

  // Função de atualização de perfil
  const updateProfile = async (updates: Partial<User>) => {
    try {
      const result = await AuthService.updateProfile(updates)
      
      if (result.success && result.user) {
        setUser(result.user)
        return { success: true }
      }
      
      return { success: false, error: result.error }
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' }
    }
  }

  // Valores computados
  const isAuthenticated = !!user
  const isAdmin = user?.role === 'admin'
  const isSeller = user?.role === 'seller' || user?.role === 'admin'

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
    isAuthenticated,
    isAdmin,
    isSeller
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  
  return context
}

// Hook para verificar se usuário está carregando
export function useAuthLoading() {
  const { loading } = useAuth()
  return loading
}

// Hook para verificar se usuário está autenticado
export function useIsAuthenticated() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated
}

// Hook para obter dados do usuário
export function useUser() {
  const { user } = useAuth()
  return user
}

// Hook para verificar permissões
export function usePermissions() {
  const { user, isAdmin, isSeller } = useAuth()
  
  return {
    isAdmin,
    isSeller,
    isCustomer: user?.role === 'customer',
    canManageProducts: isAdmin || isSeller,
    canManageOrders: isAdmin,
    canManageUsers: isAdmin,
    canViewAnalytics: isAdmin || isSeller
  }
}

// Hook para proteção de rotas
export function useRequireAuth() {
  const { user, loading } = useAuth()
  
  useEffect(() => {
    if (!loading && !user) {
      // Redirecionar para login se não autenticado
      window.location.href = '/auth/login'
    }
  }, [user, loading])
  
  return { user, loading }
}

// Hook para proteção de rotas por role
export function useRequireRole(requiredRole: string) {
  const { user, loading } = useAuth()
  
  useEffect(() => {
    if (!loading) {
      if (!user) {
        window.location.href = '/auth/login'
      } else if (user.role !== requiredRole && user.role !== 'admin') {
        window.location.href = '/unauthorized'
      }
    }
  }, [user, loading, requiredRole])
  
  return { user, loading, hasPermission: user?.role === requiredRole || user?.role === 'admin' }
}

// Hook para gerenciar sessão
export function useSession() {
  const [session, setSession] = useState<any>(null)
  const [sessionLoading, setSessionLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await authClient.auth.getSession()
      setSession(session)
      setSessionLoading(false)
    }

    getSession()

    const { data: { subscription } } = authClient.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
        setSessionLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { session, loading: sessionLoading }
}
