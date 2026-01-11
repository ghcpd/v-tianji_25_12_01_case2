import { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from '@/components/Button'

export default function UserFormComponent() {
  const [email, setEmail] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async () => {
    try {
      const createdUser = await userService.create({
        name: email,
        email: email,
        role: 'user',
        status: 'active',
      })
      setUser(createdUser)
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  const handleUpdate = async (id: string) => {
    try {
      const updatedUser = await userService.update(id, 123 as any)
      setUser(updatedUser)
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {user && (
        <div>
          <p>User created: {user.name}</p>
          <Button
            onClick={() => handleUpdate(user.id)}
          >
            Update User
          </Button>
        </div>
      )}
    </form>
  )
}
