import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, CreditCard, Heart, Clock, Zap, Gift, Play, CheckCircle, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Profissional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Announcement Bar */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                <span>🔥 BLACK FRIDAY: Até 70% OFF + Frete Grátis</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
                Tudo para seu
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Pet Feliz
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-700 font-bold">
                  em um só lugar
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Mais de <span className="font-bold text-green-600">50.000 produtos</span> selecionados, 
                <span className="font-bold text-blue-600">entrega em 1 hora</span> e os 
                <span className="font-bold text-purple-600">melhores preços</span> do Brasil.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                  <Gift className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Ganhar 15% OFF Agora
                </Button>
                
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 group">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Ver Como Funciona
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="pt-12">
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-3 border-white shadow-lg"></div>
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-3 border-white shadow-lg"></div>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white text-sm font-bold">+</div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">+120.000</div>
                      <div className="text-sm">clientes felizes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">4.9/5</div>
                      <div className="text-sm">15.2k avaliações</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="h-8 w-8 text-green-500" />
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Loja do Ano</div>
                      <div className="text-sm">E-commerce Brasil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Product Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-8 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl shadow-2xl p-4 w-48 pointer-events-auto cursor-pointer hover:shadow-3xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl mb-3 flex items-center justify-center text-4xl">
                🐕
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Ração Premium</h4>
              <p className="text-green-600 font-bold">R$ 89,90</p>
              <div className="flex text-yellow-400 text-xs mt-1">
                ★★★★★ <span className="text-gray-500 ml-1">(127)</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/3 right-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl shadow-2xl p-4 w-48 pointer-events-auto cursor-pointer hover:shadow-3xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-3 flex items-center justify-center text-4xl">
                🏠
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Casa & Jardim</h4>
              <p className="text-red-600 font-bold">40% OFF</p>
              <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mt-1 inline-block">
                BLACK FRIDAY
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl shadow-2xl p-4 w-48 pointer-events-auto cursor-pointer hover:shadow-3xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl mb-3 flex items-center justify-center text-4xl">
                🌱
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Plantas & Jardim</h4>
              <p className="text-green-600 font-bold">Frete Grátis</p>
              <div className="flex text-yellow-400 text-xs mt-1">
                ★★★★★ <span className="text-gray-500 ml-1">(89)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Design Limpo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Por que somos a <span className="text-green-600">melhor escolha?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Mais de 120.000 clientes confiam em nossa experiência de compra única
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrega em 1 Hora</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Receba seus produtos em tempo recorde. Cobrimos 95% da região metropolitana com nossa logística expressa.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Disponível 24/7</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Seguro</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Criptografia de nível bancário, certificação SSL e total conformidade com a LGPD. Seus dados estão protegidos.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Certificado SSL</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcele sem Juros</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Até 12x sem juros no cartão ou 5% de desconto no PIX. Flexibilidade total para suas compras.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>5% OFF no PIX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Grid Moderno */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Explore por <span className="text-green-600">Categoria</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mais de 50.000 produtos organizados para você encontrar exatamente o que precisa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/categoria/pets" className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 p-1 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <div className="bg-white rounded-3xl p-8 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🐕</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Pets</h3>
                      <p className="text-gray-600 mb-4">Tudo para seu melhor amigo</p>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        +15.000 produtos
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/categoria/casa" className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 p-1 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <div className="bg-white rounded-3xl p-8 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Casa</h3>
                      <p className="text-gray-600 mb-4">Decoração e utilidades</p>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Até 50% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/categoria/jardim" className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 p-1 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <div className="bg-white rounded-3xl p-8 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🌱</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Jardim</h3>
                      <p className="text-gray-600 mb-4">Plantas e jardinagem</p>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Frete Grátis
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/categoria/piscina" className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-500 p-1 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <div className="bg-white rounded-3xl p-8 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">🏊</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Piscina</h3>
                      <p className="text-gray-600 mb-4">Produtos aquáticos</p>
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Verão 2024
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Design Premium */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold border border-white/20">
                <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
                <span>Oferta Limitada - Apenas hoje!</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Pronto para fazer seu
              <span className="block bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                Pet Feliz?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Cadastre-se agora e ganhe <span className="font-bold text-yellow-300">15% de desconto</span> na primeira compra + 
              <span className="font-bold text-green-300">frete grátis</span> para todo o Brasil
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/register">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 text-xl px-16 py-8 rounded-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                  <Gift className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Ganhar 15% OFF Agora
                </Button>
              </Link>
              
              <Link href="/produtos">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 text-xl px-16 py-8 rounded-2xl font-bold backdrop-blur-sm transition-all duration-300 group">
                  <ArrowRight className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  Explorar Produtos
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h4 className="font-bold text-lg mb-2">100% Seguro</h4>
                <p className="text-gray-300 text-sm">Certificação SSL e LGPD</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-blue-300" />
                </div>
                <h4 className="font-bold text-lg mb-2">Entrega Rápida</h4>
                <p className="text-gray-300 text-sm">Em até 1 hora na sua região</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-300" />
                </div>
                <h4 className="font-bold text-lg mb-2">120k+ Clientes</h4>
                <p className="text-gray-300 text-sm">Avaliação 4.9/5 estrelas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
