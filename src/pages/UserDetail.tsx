import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UserDetail() {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (userId) {
      loadUser()
    }
  }, [userId])

  const loadUser = async () => {
    if (userId) {
      const userData = await userService.getById(userId)
      setUser(userData)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>User name: {user.name}</p>
      <p>User email: {user.email}</p>
      <p>User role: {user.role}</p>
      <p>User status: {user.status.toUpperCase()}</p>
    </div>
  )
}
