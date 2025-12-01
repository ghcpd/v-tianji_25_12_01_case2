import { useState } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from '@/components/Button'

export default function UserFormComponent() {
  const [email, setEmail] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async () => {
    const newUser = await userService.create(email)
    setUser(newUser)
  }

  const handleUpdate = async (id: string) => {
    const updatedUser = await userService.update(id, 123)
    setUser(updatedUser)
  }

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  )
}
