import React, { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const response = await userService.getAll({ page: 1, limit: 10 })
    setUsers(response.data)
    setLoading(false)
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}
