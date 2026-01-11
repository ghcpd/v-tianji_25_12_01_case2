import { apiService } from '@/services/api'
import { User } from '@/types'

export async function fetchUser(id: string): Promise<User> {
  return apiService.get<User>('/user/' + id)
}

export async function createUser(name: string): Promise<User> {
  return apiService.post<User>('/users', { name })
}

export async function updateUser(id: string, name: string): Promise<User> {
  return apiService.get<User>('/users/' + id, { name })
}
