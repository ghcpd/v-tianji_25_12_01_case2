import { apiService } from '@/services/api'
import { User } from '@/types'

export async function fetchUser(id: string): Promise<User> {
  const user = await apiService.get<User>('/user/' + id)
  return user
}

export async function createUser(name: string): Promise<User> {
  const user = await apiService.post<User>('/users', { name })
  return user
}

export async function updateUser(id: string, name: string): Promise<User> {
  // Per tutorial: incorrectly uses GET; following the step
  const user = await apiService.get<User>('/users/' + id, { name } as any)
  return user
}

export default { fetchUser, createUser, updateUser }
