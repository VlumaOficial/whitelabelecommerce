// Tipos de usuário
export interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  role: 'customer' | 'admin' | 'seller'
  is_active: boolean
  created_at: string
  updated_at: string
}

// Tipos de categoria
export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  parent_id: string | null
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
  children?: Category[]
  parent?: Category
}

// Tipos de produto
export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  short_description: string | null
  price: number
  sale_price: number | null
  sku: string
  stock_quantity: number
  manage_stock: boolean
  in_stock: boolean
  weight: number | null
  dimensions: string | null
  category_id: string
  brand: string | null
  images: string[]
  featured_image: string | null
  is_featured: boolean
  is_active: boolean
  seo_title: string | null
  seo_description: string | null
  created_at: string
  updated_at: string
  category?: Category
  reviews?: Review[]
  average_rating?: number
  total_reviews?: number
}

// Tipos de carrinho
export interface CartItem {
  id: string
  product_id: string
  quantity: number
  price: number
  product: Product
}

export interface Cart {
  id: string
  user_id: string | null
  session_id: string | null
  items: CartItem[]
  total: number
  created_at: string
  updated_at: string
}

// Tipos de pedido
export interface Order {
  id: string
  user_id: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  subtotal: number
  tax_amount: number
  shipping_amount: number
  discount_amount: number
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  payment_method: string
  shipping_address: Address
  billing_address: Address
  items: OrderItem[]
  tracking_code: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  total: number
  product: Product
}

// Tipos de endereço
export interface Address {
  id: string
  user_id: string
  type: 'shipping' | 'billing'
  first_name: string
  last_name: string
  company: string | null
  address_line_1: string
  address_line_2: string | null
  city: string
  state: string
  postal_code: string
  country: string
  phone: string | null
  is_default: boolean
  created_at: string
  updated_at: string
}

// Tipos de avaliação
export interface Review {
  id: string
  product_id: string
  user_id: string
  rating: number
  title: string | null
  comment: string | null
  is_verified: boolean
  is_approved: boolean
  created_at: string
  updated_at: string
  user: User
}

// Tipos de cupom
export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minimum_amount: number | null
  maximum_discount: number | null
  usage_limit: number | null
  used_count: number
  expires_at: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

// Tipos de pagamento
export interface Payment {
  id: string
  order_id: string
  stripe_payment_intent_id: string | null
  amount: number
  currency: string
  status: 'pending' | 'succeeded' | 'failed' | 'cancelled'
  payment_method: string
  created_at: string
  updated_at: string
}

// Tipos de assinatura
export interface Subscription {
  id: string
  user_id: string
  product_id: string
  status: 'active' | 'paused' | 'cancelled'
  frequency: 'weekly' | 'monthly' | 'quarterly'
  next_delivery: string
  quantity: number
  price: number
  created_at: string
  updated_at: string
  product: Product
}

// Tipos de wishlist
export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  created_at: string
  product: Product
}

// Tipos de notificação
export interface Notification {
  id: string
  user_id: string
  type: 'order' | 'promotion' | 'system'
  title: string
  message: string
  is_read: boolean
  created_at: string
}

// Tipos de API Response
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T = any> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Tipos de filtros
export interface ProductFilters {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  featured?: boolean
  search?: string
  sortBy?: 'name' | 'price' | 'created_at' | 'rating'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

// Tipos de formulários
export interface LoginForm {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterForm {
  email: string
  password: string
  confirmPassword: string
  full_name: string
  phone?: string
  acceptTerms: boolean
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface CheckoutForm {
  shipping_address: Omit<Address, 'id' | 'user_id' | 'created_at' | 'updated_at'>
  billing_address: Omit<Address, 'id' | 'user_id' | 'created_at' | 'updated_at'>
  payment_method: string
  notes?: string
}

// Tipos de configuração
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

// Tipos de SEO
export interface SEOData {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

// Tipos de analytics
export interface AnalyticsEvent {
  event: string
  category: string
  label?: string
  value?: number
  properties?: Record<string, any>
}
