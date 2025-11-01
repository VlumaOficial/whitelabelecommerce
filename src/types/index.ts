// Tipos de usuário
export interface User {
  id: string; // UUID do Supabase Auth
  user_number: number; // ID numérico para administração
  email: string;
  full_name?: string;
  avatar_url?: string;
  phone?: string;
  cpf?: string;
  birth_date?: string;
  gender?: 'M' | 'F' | 'O';
  role: 'customer' | 'admin' | 'seller';
  is_active: boolean;
  email_verified: boolean;
  phone_verified: boolean;
  accepts_marketing: boolean;
  last_login_at?: string;
  tenant_id?: number;
  created_at: string;
  updated_at: string;
}

// Tipos de endereço
export interface Address {
  id: number;
  user_id: string; // UUID do usuário
  type: 'shipping' | 'billing';
  first_name: string;
  last_name: string;
  company?: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone?: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

// Tipos de categoria
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: number;
  sort_order: number;
  is_active: boolean;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
}

// Tipos de produto
export interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price: number;
  sale_price?: number;
  sku: string;
  stock_quantity: number;
  manage_stock: boolean;
  in_stock: boolean;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  category_id: number;
  brand?: string;
  images: string[];
  featured_image?: string;
  is_featured: boolean;
  is_active: boolean;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
}

// Tipos de carrinho
export interface Cart {
  id: number;
  user_id?: string; // UUID do usuário
  session_id?: string;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: number;
  cart_id: number;
  product_id: number;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
  product?: Product;
}

// Tipos de pedido
export interface Order {
  id: number;
  order_number: string;
  user_id: string; // UUID do usuário
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  total: number;
  subtotal: number;
  tax_amount: number;
  shipping_amount: number;
  discount_amount: number;
  coupon_id?: number;
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
  payment_method?: string;
  shipping_address: Address;
  billing_address: Address;
  tracking_code?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  product_sku: string;
  quantity: number;
  price: number;
  total: number;
  created_at: string;
}

// Tipos de pagamento
export interface Payment {
  id: number;
  order_id: number;
  stripe_payment_intent_id?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed' | 'cancelled';
  payment_method: string;
  failure_reason?: string;
  created_at: string;
  updated_at: string;
}

// Tipos de avaliação
export interface Review {
  id: number;
  product_id: number;
  user_id: string; // UUID do usuário
  order_id?: number;
  rating: number;
  title?: string;
  comment?: string;
  is_verified: boolean;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
  user?: User;
}

export interface ProductAttribute {
  id: number;
  product_id: number;
  name: string;
  value: string;
  created_at: string;
}

export interface Coupon {
  id: number;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minimum_amount?: number;
  maximum_discount?: number;
  usage_limit?: number;
  used_count: number;
  expires_at?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface WishlistItem {
  id: number;
  user_id: string; // UUID do usuário
  product_id: number;
  created_at: string;
  product?: Product;
}

export interface Subscription {
  id: number;
  user_id: string; // UUID do usuário
  product_id: number;
  status: 'active' | 'paused' | 'cancelled';
  frequency: 'weekly' | 'monthly' | 'quarterly';
  next_delivery: string;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
  product?: Product;
}

export interface Notification {
  id: number;
  user_id: string; // UUID do usuário
  type: 'order' | 'promotion' | 'system' | 'review';
  title: string;
  message: string;
  data?: any;
  is_read: boolean;
  created_at: string;
}

// Novo tipo para configurações WhiteLabel
export interface TenantConfig {
  id: number;
  tenant_name: string;
  domain?: string;
  logo_url?: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  custom_css?: any;
  settings?: any;
  is_active: boolean;
  created_at: string;
  updated_at: string;
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
