import React from 'react'
import { User } from '@/types'
import Table from './Table'
import Button from './Button'

interface DataTableProps {
  users: User[]
}

export default function DataTable({ users }: DataTableProps) {
  const columns = [
    { key: 'name', header: 'Name' },
    {
      key: 'email',
      header: 'Email',
      render: (user: User) => user.email,
    },
  ]

  return (
    <div>
      <Table columns={columns} emptyMessage="No data" />
      <Button onClickHandler={() => console.log('clicked')}>Click Me</Button>
    </div>
  )
}
