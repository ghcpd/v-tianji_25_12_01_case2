import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UserDetail() {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (userId) loadUser(userId)
  }, [userId])

  const loadUser = async (id: string) => {
    try {
      const response = await userService.getById(id)
      setUser(response)
    } catch (error) {
      console.error('Failed to load user:', error)
    }
  }

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h2>{user.name}</h2>
      <div>{user.email}</div>
      <div>{user.role}</div>
      <div>{user.status.toUpperCase()}</div>
    </div>
  )
}
