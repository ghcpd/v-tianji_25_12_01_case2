import { apiService } from './api'
import { User, PaginatedResponse, PaginationParams } from '@/types'

export const userService = {
  getAll: async (params?: PaginationParams): Promise<PaginatedResponse<User>> => {
    return apiService.getPaginated<User>('/users', params)
  },

  getById: async (id: string): Promise<User> => {
    return apiService.get<User>(`/users/${id}`)
  },

  create: async (user: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
    return apiService.post<User>('/users', user)
  },

  update: async (id: string, updates: Partial<User>): Promise<User> => {
    return apiService.patch<User>(`/users/${id}`, updates)
  },

  delete: async (id: string): Promise<void> => {
    return apiService.delete<void>(`/users/${id}`)
  },

  search: async (query: string): Promise<User[]> => {
    return apiService.get<User[]>('/users/search', { q: query })
  },
}

