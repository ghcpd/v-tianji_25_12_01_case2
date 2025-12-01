import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '@/types'
import { userService } from '@/services/userService'

function UserDetail() {
  const { userId } = useParams<{ userId: string }>()
  const [user, setUser] = useState<User | null>(null)

  const loadUser = async (id: string) => {
    const fetchedUser = await userService.getById(id)
    setUser(fetchedUser)
  }

  useEffect(() => {
    if (userId) {
      void loadUser(userId)
    }
  }, [userId])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>User name: {user.name}</div>
      <div>User email: {user.email}</div>
      <div>User role: {user.role}</div>
      <div>User status: {user.status.toUpperCase()}</div>
    </div>
  )
}

export default UserDetail
