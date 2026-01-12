import { useState, useEffect } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const response = await userService.getAll({ page: 1, limit: 10 })
    setUsers(response.data)
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
