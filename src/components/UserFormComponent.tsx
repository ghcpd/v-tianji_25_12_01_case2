import React, { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from '@/components/Button'

export default function UserFormComponent() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const created = await userService.create(email)
    setUser(created)
  }

  const handleUpdate = async (id: string) => {
    await userService.update(id, 123)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
