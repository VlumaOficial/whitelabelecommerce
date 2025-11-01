import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, CreditCard, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tudo para seu <span className="text-green-200">Pet</span> e sua <span className="text-green-200">Casa</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Encontre os melhores produtos com entrega rápida, preços incríveis e atendimento especializado. 
                Sua satisfação é nossa prioridade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                  Comprar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
                  Ver Ofertas
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">50k+</div>
                    <div className="text-sm text-green-100">Produtos</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">1h</div>
                    <div className="text-sm text-green-100">Entrega</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm text-green-100">Avaliação</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">100k+</div>
                    <div className="text-sm text-green-100">Clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Receba seus produtos em até 1 hora na região metropolitana</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compra Segura</h3>
              <p className="text-gray-600">Seus dados protegidos com criptografia de ponta</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Parcele sem Juros</h3>
              <p className="text-gray-600">Divida em até 12x sem juros no cartão de crédito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore nossas Categorias</h2>
            <p className="text-gray-600 text-lg">Encontre exatamente o que você precisa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/categoria/pets" className="group">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🐕</div>
                  <h3 className="font-semibold text-lg mb-2">Pets</h3>
                  <p className="text-gray-600 text-sm">Tudo para seu melhor amigo</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/casa" className="group">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="font-semibold text-lg mb-2">Casa</h3>
                  <p className="text-gray-600 text-sm">Decoração e utilidades</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/jardim" className="group">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="font-semibold text-lg mb-2">Jardim</h3>
                  <p className="text-gray-600 text-sm">Plantas e jardinagem</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/categoria/piscina" className="group">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏊</div>
                  <h3 className="font-semibold text-lg mb-2">Piscina</h3>
                  <p className="text-gray-600 text-sm">Produtos aquáticos</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-gray-600">Os mais vendidos da semana</p>
            </div>
            <Link href="/produtos">
              <Button variant="outline">
                Ver Todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🦴</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(127)</span>
                </div>
                <h3 className="font-semibold mb-2">Ração Premium para Cães</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">R$ 79,90</span>
                    <span className="text-sm text-gray-500 line-through ml-2">R$ 89,90</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎾</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(89)</span>
                </div>
                <h3 className="font-semibold mb-2">Bola Resistente</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">R$ 15,90</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🐱</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(203)</span>
                </div>
                <h3 className="font-semibold mb-2">Ração para Gatos Castrados</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">R$ 85,90</span>
                    <span className="text-sm text-gray-500 line-through ml-2">R$ 95,90</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(156)</span>
                </div>
                <h3 className="font-semibold mb-2">Arranhador Torre</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">R$ 99,90</span>
                    <span className="text-sm text-gray-500 line-through ml-2">R$ 129,90</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-8 text-green-100">
            Cadastre-se agora e ganhe 10% de desconto na primeira compra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                Criar Conta Grátis
              </Button>
            </Link>
            <Link href="/produtos">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
