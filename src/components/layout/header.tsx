'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, Heart, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'

// Componente do cabeçalho principal
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { user, isAuthenticated, signOut } = useAuth()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implementar busca
      console.log('Buscar:', searchQuery)
    }
  }

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-green-600 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>(11) 3333-5555</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Encontre nossa loja mais próxima</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/atendimento" className="hover:underline">
                Atendimento
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/ofertas" className="hover:underline font-semibold">
                🔥 BLACK FRIDAY
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              WLE
            </div>
            <span className="hidden sm:block font-bold text-xl text-gray-800">
              WhiteLabel<span className="text-green-600">Ecommerce</span>
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Busque por produtos, marcas ou categorias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 h-12 text-base"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 bg-green-600 hover:bg-green-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            {isAuthenticated && (
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
            )}

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            {/* User Menu */}
            <div className="relative">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Link href="/account">
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">Olá, {user?.full_name?.split(' ')[0]}</p>
                    <button
                      onClick={signOut}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/auth/login">
                    <Button variant="ghost" size="sm">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Cadastrar
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Busque por produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 bg-green-600 hover:bg-green-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Categories Menu */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 font-medium"
                >
                  <Menu className="h-4 w-4" />
                  <span>Todas as Categorias</span>
                </Button>
                {/* Dropdown menu seria implementado aqui */}
              </div>

              {/* Main Navigation Links */}
              <div className="hidden lg:flex items-center space-x-6">
                <Link
                  href="/categoria/pets"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Pets
                </Link>
                <Link
                  href="/categoria/casa"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Casa
                </Link>
                <Link
                  href="/categoria/jardim"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Jardim
                </Link>
                <Link
                  href="/categoria/piscina"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Piscina
                </Link>
                <Link
                  href="/servicos"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Serviços
                </Link>
                <Link
                  href="/ofertas"
                  className="text-red-600 hover:text-red-700 font-bold transition-colors"
                >
                  Ofertas
                </Link>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <Link
                href="/entrega-rapida"
                className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium"
              >
                <span>🚚</span>
                <span>Entrega em 1h</span>
              </Link>
              <Link
                href="/compra-programada"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                <span>🔄</span>
                <span>Compra Programada</span>
              </Link>
              <Link
                href="/programa-fidelidade"
                className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium"
              >
                <span>⭐</span>
                <span>Programa Fidelidade</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/categoria/pets"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pets
              </Link>
              <Link
                href="/categoria/casa"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Casa
              </Link>
              <Link
                href="/categoria/jardim"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Jardim
              </Link>
              <Link
                href="/servicos"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/ofertas"
                className="text-red-600 hover:text-red-700 font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
              
              {!isAuthenticated && (
                <div className="pt-4 border-t">
                  <Link
                    href="/auth/login"
                    className="block text-gray-700 hover:text-green-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block text-gray-700 hover:text-green-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cadastrar
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
