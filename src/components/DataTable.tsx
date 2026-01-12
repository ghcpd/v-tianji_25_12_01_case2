import { User } from '@/types'
import Table from '@/components/Table'
import Button from '@/components/Button'

interface DataTableProps {
  users: User[]
}

export default function DataTable({ users }: DataTableProps) {
  const columns = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'email',
      header: 'Email',
      render: (user: User) => user.email,
    },
  ]

  return (
    <div>
      <Table columns={columns} emptyMessage="No data" />
      <Button onClick={() => console.log('clicked')}>Click Me</Button>
    </div>
  )
}
