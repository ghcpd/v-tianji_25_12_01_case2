export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/',
  USERS: '/users',
} as const

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const

export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Food',
  'Books',
  'Home & Garden',
  'Sports',
  'Toys',
  'Health & Beauty',
] as const

export const PAGINATION_DEFAULT = {
  page: 1,
  limit: 10,
} as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    BASE: '/users',
    SEARCH: '/users/search',
  },
  PRODUCTS: {
    BASE: '/products',
    CATEGORY: '/products/category',
  },
  ORDERS: {
    BASE: '/orders',
    STATUS: '/orders/:id/status',
  },
  ANALYTICS: {
    DASHBOARD: '/analytics/dashboard',
    REVENUE: '/analytics/revenue',
    GROWTH: '/analytics/growth',
  },
} as const

