export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  avatar?: string
  createdAt: string
  status: 'active' | 'inactive' | 'suspended'
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  image?: string
  rating: number
  reviews: number
  createdAt: string
}

export interface Order {
  id: string
  userId: string
  userName: string
  products: OrderProduct[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  shippingAddress: Address
}

export interface OrderProduct {
  productId: string
  productName: string
  quantity: number
  price: number
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface AnalyticsData {
  totalUsers: number
  totalOrders: number
  totalRevenue: number
  activeProducts: number
  growthRate: number
  topProducts: Product[]
  recentOrders: Order[]
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

