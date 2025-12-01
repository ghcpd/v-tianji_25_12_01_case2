import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '@/types'
import { userService } from '@/services/userService'

export default function UserDetail() {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  const loadUser = async (id?: string) => {
    if (!id) return
    const u = await userService.getById(id)
    setUser(u)
  }

  useEffect(() => {
    loadUser(userId)
  }, [userId])

  if (!user) return <div>Loading user...</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <p>{user.status.toUpperCase()}</p>
    </div>
  )
}
