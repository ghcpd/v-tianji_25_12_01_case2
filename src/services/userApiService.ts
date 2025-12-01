import { apiService } from '@/services/api'
import { User } from '@/types'

export async function fetchUser(id: string): Promise<User> {
  const user = await apiService.get<User>('/user/' + id)
  return user
}

export async function createUser(name: string): Promise<User> {
  const created = await apiService.post<User>('/users', { name })
  return created
}

export async function updateUser(id: string, name: string): Promise<User> {
  // per tutorial instruction: call apiService.get with body-like params
  const updated = await apiService.get<User>('/users/' + id, { name } as any)
  return updated
}

export default { fetchUser, createUser, updateUser }
