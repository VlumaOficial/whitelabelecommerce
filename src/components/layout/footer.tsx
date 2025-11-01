'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar newsletter
    console.log('Newsletter subscription')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Receba nossas ofertas exclusivas!</h3>
              <p className="text-green-100">Cadastre-se e seja o primeiro a saber das promoções</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="rounded-r-none bg-white text-gray-900 min-w-[250px]"
                required
              />
              <Button
                type="submit"
                className="rounded-l-none bg-green-700 hover:bg-green-800 px-6"
              >
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                WLE
              </div>
              <span className="font-bold text-lg">
                WhiteLabel<span className="text-green-400">Ecommerce</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Sua loja online completa com os melhores produtos para pets, casa, jardim e muito mais. 
              Qualidade e confiança em cada compra.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/como-comprar" className="text-gray-300 hover:text-white transition-colors">
                  Como Comprar
                </Link>
              </li>
              <li>
                <Link href="/entrega" className="text-gray-300 hover:text-white transition-colors">
                  Entrega e Frete
                </Link>
              </li>
              <li>
                <Link href="/trocas-devolucoes" className="text-gray-300 hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/programa-fidelidade" className="text-gray-300 hover:text-white transition-colors">
                  Programa Fidelidade
                </Link>
              </li>
              <li>
                <Link href="/compra-programada" className="text-gray-300 hover:text-white transition-colors">
                  Compra Programada
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categoria/pets" className="text-gray-300 hover:text-white transition-colors">
                  Pets
                </Link>
              </li>
              <li>
                <Link href="/categoria/cachorros" className="text-gray-300 hover:text-white transition-colors">
                  Cachorros
                </Link>
              </li>
              <li>
                <Link href="/categoria/gatos" className="text-gray-300 hover:text-white transition-colors">
                  Gatos
                </Link>
              </li>
              <li>
                <Link href="/categoria/casa" className="text-gray-300 hover:text-white transition-colors">
                  Casa
                </Link>
              </li>
              <li>
                <Link href="/categoria/jardim" className="text-gray-300 hover:text-white transition-colors">
                  Jardim
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços Pet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">(11) 3333-5555</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">contato@whitelabelecommerce.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span className="text-gray-300">
                  Rua das Flores, 123<br />
                  São Paulo - SP<br />
                  CEP: 01234-567
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Horário de Atendimento</h5>
              <p className="text-gray-300 text-sm">
                Segunda à Sexta: 8h às 18h<br />
                Sábado: 8h às 14h<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-medium">Entrega Rápida</h5>
                <p className="text-gray-400 text-sm">Receba em até 1 hora*</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-medium">Compra Segura</h5>
                <p className="text-gray-400 text-sm">Seus dados protegidos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-medium">Parcele sem Juros</h5>
                <p className="text-gray-400 text-sm">Em até 12x no cartão</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WhiteLabelEcommerce. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap items-center space-x-4 text-sm">
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </Link>
              <Link href="/lgpd" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </Link>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-2 md:mb-0">
                <span className="text-gray-400 text-sm">Formas de Pagamento:</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-white p-1 rounded text-xs font-bold text-gray-900 px-2">VISA</div>
                <div className="bg-white p-1 rounded text-xs font-bold text-gray-900 px-2">MASTER</div>
                <div className="bg-white p-1 rounded text-xs font-bold text-gray-900 px-2">ELO</div>
                <div className="bg-white p-1 rounded text-xs font-bold text-gray-900 px-2">PIX</div>
                <div className="bg-white p-1 rounded text-xs font-bold text-gray-900 px-2">BOLETO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
