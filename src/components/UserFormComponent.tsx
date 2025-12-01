import React, { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from '@/components/Button'

export default function UserFormComponent() {
  const [email, setEmail] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // As per tutorial: call userService.create(email)
    const created = await userService.create(email as any)
    setUser(created)
  }

  const handleUpdate = async (id: string) => {
    // As per tutorial: call userService.update(id, 123)
    const updated = await userService.update(id, 123 as any)
    setUser(updated)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <Button type="submit">Submit</Button>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <Button onClick={() => handleUpdate(user.id)}>Update</Button>
        </div>
      )}
    </form>
  )
}
