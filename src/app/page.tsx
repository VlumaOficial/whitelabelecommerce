import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, CreditCard, Heart, Clock, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Estilo Cobasi Moderno */}
      <section className="relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2 text-yellow-300" />
                Entrega em 1 hora disponível
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Tudo para seu
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Pet Feliz
                </span>
                <span className="block text-4xl lg:text-5xl text-green-100">
                  e Casa Perfeita
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-green-50 leading-relaxed max-w-lg">
                Mais de <strong>50.000 produtos</strong> com os melhores preços, 
                entrega ultra-rápida e atendimento que você merece.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Gift className="mr-2 h-5 w-5" />
                  Ganhe 15% OFF
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-xl font-bold backdrop-blur-sm">
                  <Clock className="mr-2 h-5 w-5" />
                  Entrega 1h
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-green-100">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium">+100k clientes felizes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  <span className="font-bold">4.9</span>
                  <span className="text-sm">(12.5k avaliações)</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Cards Flutuantes */}
              <div className="relative z-10 space-y-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl">
                      🐕
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Ração Premium</h3>
                      <p className="text-green-100">A partir de R$ 29,90</p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-300 text-sm">★★★★★</span>
                        <span className="text-xs ml-2 text-green-200">Mais vendido</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl">
                      🏠
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Casa & Jardim</h3>
                      <p className="text-green-100">Até 40% OFF</p>
                      <div className="flex items-center mt-1">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          BLACK FRIDAY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-black text-yellow-300">1h</div>
                      <div className="text-xs text-green-200">Entrega</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-blue-300">12x</div>
                      <div className="text-xs text-green-200">Sem Juros</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-pink-300">24h</div>
                      <div className="text-xs text-green-200">Suporte</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos Decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Moderna */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a gente?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiência única de compra com benefícios que fazem a diferença
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrega Ultra-Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Receba seus produtos em até <strong>1 hora</strong> na região metropolitana. 
                Seu pet não pode esperar!
              </p>
              <div className="mt-4 inline-flex items-center text-green-600 font-semibold">
                <Clock className="h-4 w-4 mr-2" />
                Disponível 24/7
              </div>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compra 100% Segura</h3>
              <p className="text-gray-600 leading-relaxed">
                Seus dados protegidos com <strong>criptografia militar</strong>. 
                Certificação SSL e conformidade LGPD.
              </p>
              <div className="mt-4 inline-flex items-center text-blue-600 font-semibold">
                <Shield className="h-4 w-4 mr-2" />
                Certificado SSL
              </div>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcele sem Juros</h3>
              <p className="text-gray-600 leading-relaxed">
                Divida em até <strong>12x sem juros</strong> no cartão de crédito. 
                Ou pague no PIX e ganhe 5% de desconto.
              </p>
              <div className="mt-4 inline-flex items-center text-purple-600 font-semibold">
                <Gift className="h-4 w-4 mr-2" />
                5% OFF no PIX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section Moderna */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore nossas Categorias</h2>
            <p className="text-xl text-gray-600">Encontre exatamente o que seu pet e sua casa precisam</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/categoria/pets" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🐕</div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Pets</h3>
                  <p className="text-gray-600 mb-4">Tudo para seu melhor amigo</p>
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    +10.000 produtos
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/casa" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏠</div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Casa</h3>
                  <p className="text-gray-600 mb-4">Decoração e utilidades</p>
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Até 40% OFF
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/jardim" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌱</div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Jardim</h3>
                  <p className="text-gray-600 mb-4">Plantas e jardinagem</p>
                  <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Frete Grátis
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/piscina" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏊</div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Piscina</h3>
                  <p className="text-gray-600 mb-4">Produtos aquáticos</p>
                  <div className="bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Verão 2024
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl lg:text-2xl mb-10 text-green-50 leading-relaxed">
              Cadastre-se agora e ganhe <strong>15% de desconto</strong> na primeira compra + 
              <strong> frete grátis</strong> para todo o Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <Gift className="mr-3 h-6 w-6" />
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link href="/produtos">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-xl px-12 py-6 rounded-2xl font-bold backdrop-blur-sm">
                  <ArrowRight className="mr-3 h-6 w-6" />
                  Explorar Produtos
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-green-100">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 Avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
