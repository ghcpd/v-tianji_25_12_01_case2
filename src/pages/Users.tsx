import { useEffect, useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { userService } from '@/services/userService'
import { User } from '@/types'
import Card from '@/components/Card'
import Table from '@/components/Table'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import UserForm from '@/components/UserForm'
import { formatDate } from '@/utils/format'
import './Users.css'

export default function Users() {
  const { users, setUsers, loading, setLoading, selectedUser, setSelectedUser } =
    useAppStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await userService.getAll({ page: 1, limit: 50 })
      setUsers(response.data)
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = () => {
    setSelectedUser(null)
    setIsEditMode(false)
    setIsModalOpen(true)
  }

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setIsEditMode(true)
    setIsModalOpen(true)
  }

  const handleDeleteUser = async (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await userService.delete(id)
        fetchUsers()
      } catch (error) {
        console.error('Failed to delete user:', error)
      }
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedUser(null)
  }

  const handleFormSubmit = () => {
    fetchUsers()
    handleModalClose()
  }

  const columns = [
    {
      key: 'name',
      header: 'Name',
      render: (user: User) => (
        <div className="user-cell">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      render: (user: User) => (
        <span className={`user-role user-role-${user.role}`}>
          {user.role}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (user: User) => (
        <span className={`user-status user-status-${user.status}`}>
          {user.status}
        </span>
      ),
    },
    {
      key: 'createdAt',
      header: 'Created',
      render: (user: User) => formatDate(user.createdAt),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (user: User) => (
        <div className="user-actions">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => handleEditUser(user)}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="users-page">
      <div className="users-header">
        <h1 className="users-title">Users</h1>
        <Button onClick={handleAddUser}>Add User</Button>
      </div>
      <Card>
        {loading ? (
          <div className="users-loading">Loading users...</div>
        ) : (
          <Table
            data={users}
            columns={columns}
            onRowClick={handleEditUser}
            emptyMessage="No users found"
          />
        )}
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={isEditMode ? 'Edit User' : 'Add User'}
        size="md"
      >
        <UserForm
          user={selectedUser}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  )
}

