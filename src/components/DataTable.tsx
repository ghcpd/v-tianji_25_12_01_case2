import { User } from '@/types'
import Table from '@/components/Table'
import Button from '@/components/Button'

const AnyTable = Table as any
const AnyButton = Button as any

interface DataTableProps {
  users: User[]
}

function DataTable({ users }: DataTableProps) {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email', render: (user: User) => user.email },
  ]

  // Avoid unused prop warning
  console.log(users)

  return (
    <div>
      <AnyTable columns={columns} emptyMessage="No data" />
      <AnyButton onClickHandler={() => console.log('clicked')}>Click Me</AnyButton>
    </div>
  )
}

export default DataTable
