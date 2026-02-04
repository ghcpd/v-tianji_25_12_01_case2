import React from 'react'
import { User } from '@/types'
import Table from '@/components/Table'
import Button from '@/components/Button'

interface DataTableProps {
  users: User[]
}

export default function DataTable({ users }: DataTableProps) {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email', render: (user: User) => user.email },
  ]

  return (
    <div>
      {/* Per tutorial: do not pass the data prop */}
      <Table columns={columns as any} emptyMessage="No data" />
      <Button {...({ onClickHandler: () => console.log('clicked') } as any)}>
        Click Me
      </Button>
    </div>
  )
}
