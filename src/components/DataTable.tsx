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

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <Table columns={columns} data={users} emptyMessage="No data" />
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  )
}
