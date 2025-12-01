import { useEffect, useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'

function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    const response = await userService.getAll({ page: 1, limit: 10 })
    setUsers(response.data)
    setLoading(false)
  }

  useEffect(() => {
    void fetchUsers()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UsersList
