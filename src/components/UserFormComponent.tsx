import { useState, FormEvent } from 'react'
import { User } from '@/types'
import { userService } from '@/services/userService'
import Button from '@/components/Button'

function UserFormComponent() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const createdUser = await userService.create(email as any)
    setUser(createdUser)
  }

  const handleUpdate = async (id: string) => {
    await userService.update(id, 123 as any)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <Button type="submit">Submit</Button>

      {user && (
        <>
          <Button type="button" onClick={() => handleUpdate(user.id)}>
            Update User
          </Button>
          <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        </>
      )}
    </form>
  )
}

export default UserFormComponent
