import React, { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from './Button'

export default function UserFormComponent() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const created = await userService.create({ email } as any)
      setUser(created)
    } catch (error) {
      console.error('Failed to create user:', error)
    }
  }

  const handleUpdate = async (id: string) => {
    try {
      // per tutorial instructions, pass 123 as updates
      const updated = await userService.update(id, 123 as any)
      setUser(updated)
    } catch (error) {
      console.error('Failed to update user:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button type="submit">Submit</Button>
      {user && (
        <div>
          <div>{user.email}</div>
          <Button onClick={() => handleUpdate(user.id)}>Update</Button>
        </div>
      )}
    </form>
  )
}
