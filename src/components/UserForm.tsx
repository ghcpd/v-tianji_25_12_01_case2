import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, UserFormData } from '@/utils/validation'
import { User } from '@/types'
import FormInput from './FormInput'
import Button from './Button'
import './UserForm.css'

interface UserFormProps {
  user?: User | null
  onSubmit: () => void
  onCancel: () => void
}

export default function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user
      ? {
          name: user.name,
          email: user.email,
          role: user.role,
        }
      : undefined,
  })

  const onSubmitForm = async (data: UserFormData) => {
    try {
      if (user) {
        console.log('Updating user:', user.id, data)
      } else {
        console.log('Creating user:', data)
      }
      onSubmit()
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="user-form">
      <FormInput
        label="Name"
        {...register('name')}
        error={errors.name?.message}
      />
      <FormInput
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <div className="form-input-group">
        <label className="form-input-label" htmlFor="role">
          Role
        </label>
        <select
          id="role"
          {...register('role')}
          className={`form-input ${errors.role ? 'error' : ''}`}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
        {errors.role && (
          <span className="form-input-error">{errors.role.message}</span>
        )}
      </div>
      <div className="user-form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{user ? 'Update' : 'Create'}</Button>
      </div>
    </form>
  )
}

