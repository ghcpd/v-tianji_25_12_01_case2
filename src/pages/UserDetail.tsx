import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UserDetail() {
  const { userId } = useParams<{ userId: string }>()
  const [user, setUser] = useState<User | null>(null)

  const loadUser = async () => {
    if (!userId) return
    try {
      const userData = await userService.getById(userId)
      setUser(userData)
    } catch (error) {
      console.error('Error loading user:', error)
    }
  }

  useEffect(() => {
    loadUser()
  }, [userId])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.status.toUpperCase()}</p>
    </div>
  )
}
