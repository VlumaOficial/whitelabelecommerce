import { createBrowserClient } from '@supabase/ssr'
import { supabase } from './supabase'
import type { User, LoginForm, RegisterForm } from '@/types'

// Configuração do cliente Supabase para autenticação
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const authClient = createBrowserClient(supabaseUrl, supabaseAnonKey)

// Tipos de resposta da autenticação
export interface AuthResponse {
  success: boolean
  user?: User
  error?: string
  message?: string
}

// Classe para gerenciar autenticação
export class AuthService {
  // Login do usuário
  static async signIn({ email, password, remember }: LoginForm): Promise<AuthResponse> {
    try {
      const { data, error } = await authClient.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      if (data.user) {
        // Buscar dados completos do usuário
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single()

        if (userError) {
          return {
            success: false,
            error: 'Erro ao carregar dados do usuário'
          }
        }

        // Atualizar último login
        await supabase
          .from('users')
          .update({ last_login_at: new Date().toISOString() })
          .eq('id', data.user.id)

        return {
          success: true,
          user: userData,
          message: 'Login realizado com sucesso'
        }
      }

      return {
        success: false,
        error: 'Erro desconhecido no login'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Registro de novo usuário
  static async signUp({ email, password, full_name, phone, acceptTerms }: RegisterForm): Promise<AuthResponse> {
    try {
      if (!acceptTerms) {
        return {
          success: false,
          error: 'Você deve aceitar os termos de uso'
        }
      }

      const { data, error } = await authClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name,
            phone
          }
        }
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      if (data.user) {
        // Criar registro na tabela users
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: data.user.email!,
            full_name,
            phone,
            role: 'customer',
            is_active: true,
            email_verified: false
          })

        if (insertError) {
          return {
            success: false,
            error: 'Erro ao criar perfil do usuário'
          }
        }

        return {
          success: true,
          message: 'Conta criada com sucesso! Verifique seu email para ativar a conta.'
        }
      }

      return {
        success: false,
        error: 'Erro desconhecido no registro'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Logout do usuário
  static async signOut(): Promise<AuthResponse> {
    try {
      const { error } = await authClient.auth.signOut()

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        message: 'Logout realizado com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Recuperação de senha
  static async resetPassword(email: string): Promise<AuthResponse> {
    try {
      const { error } = await authClient.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        message: 'Email de recuperação enviado com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Atualizar senha
  static async updatePassword(newPassword: string): Promise<AuthResponse> {
    try {
      const { error } = await authClient.auth.updateUser({
        password: newPassword
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        message: 'Senha atualizada com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Obter usuário atual
  static async getCurrentUser(): Promise<User | null> {
    try {
      const { data: { user } } = await authClient.auth.getUser()

      if (!user) return null

      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) return null

      return userData
    } catch (error) {
      return null
    }
  }

  // Verificar se usuário está autenticado
  static async isAuthenticated(): Promise<boolean> {
    try {
      const { data: { user } } = await authClient.auth.getUser()
      return !!user
    } catch (error) {
      return false
    }
  }

  // Atualizar perfil do usuário
  static async updateProfile(updates: Partial<User>): Promise<AuthResponse> {
    try {
      const { data: { user } } = await authClient.auth.getUser()

      if (!user) {
        return {
          success: false,
          error: 'Usuário não autenticado'
        }
      }

      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single()

      if (error) {
        return {
          success: false,
          error: 'Erro ao atualizar perfil'
        }
      }

      return {
        success: true,
        user: data,
        message: 'Perfil atualizado com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Verificar se email já existe
  static async checkEmailExists(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single()

      return !error && !!data
    } catch (error) {
      return false
    }
  }

  // Login com Google (OAuth)
  static async signInWithGoogle(): Promise<AuthResponse> {
    try {
      const { data, error } = await authClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        message: 'Redirecionando para Google...'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }

  // Reenviar email de confirmação
  static async resendConfirmation(email: string): Promise<AuthResponse> {
    try {
      const { error } = await authClient.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`
        }
      })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        message: 'Email de confirmação reenviado'
      }
    } catch (error) {
      return {
        success: false,
        error: 'Erro interno do servidor'
      }
    }
  }
}

// Utilitários para validação
export const validatePassword = (password: string): string[] => {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula')
  }

  if (!/\d/.test(password)) {
    errors.push('A senha deve conter pelo menos um número')
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('A senha deve conter pelo menos um caractere especial')
  }

  return errors
}

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword
}

// Middleware para proteção de rotas
export const requireAuth = async (): Promise<User | null> => {
  const user = await AuthService.getCurrentUser()
  
  if (!user) {
    // Redirecionar para login se não autenticado
    window.location.href = '/auth/login'
    return null
  }

  return user
}

// Middleware para verificar role do usuário
export const requireRole = async (requiredRole: string): Promise<boolean> => {
  const user = await AuthService.getCurrentUser()
  
  if (!user || user.role !== requiredRole) {
    return false
  }

  return true
}
