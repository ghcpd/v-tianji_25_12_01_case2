import { useMemo } from 'react'
import { User } from '@/types'
import Table from './Table'
import Button from './Button'

interface DataTableProps {
  users: User[]
}

export default function DataTable({ users }: DataTableProps) {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email', render: (user: User) => user.email },
  ]

  const handleClick = () => {
    console.log('clicked')
  }

  const userCount = useMemo(() => users.length, [users])

  return (
    <div>
      <div>{`Showing ${userCount} users`}</div>
      <Table columns={columns} emptyMessage="No data" />
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  )
}
