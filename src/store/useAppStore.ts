import { create } from 'zustand'
import { User, Product, Order } from '@/types'

interface AppState {
  users: User[]
  products: Product[]
  orders: Order[]
  loading: boolean
  error: string | null
  selectedUser: User | null
  selectedProduct: Product | null
  filters: {
    search: string
    category: string
    status: string
  }
  setUsers: (users: User[]) => void
  setProducts: (products: Product[]) => void
  setOrders: (orders: Order[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setSelectedUser: (user: User | null) => void
  setSelectedProduct: (product: Product | null) => void
  updateFilters: (filters: Partial<AppState['filters']>) => void
  addUser: (user: User) => void
  updateUser: (id: string, updates: Partial<User>) => void
  deleteUser: (id: string) => void
  addProduct: (product: Product) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  users: [],
  products: [],
  orders: [],
  loading: false,
  error: null,
  selectedUser: null,
  selectedProduct: null,
  filters: {
    search: '',
    category: '',
    status: '',
  },
  setUsers: (users) => set({ users }),
  setProducts: (products) => set({ products }),
  setOrders: (orders) => set({ orders }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  updateFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  updateUser: (id, updates) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updates } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  updateProduct: (id, updates) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}))

