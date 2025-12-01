# Tutorial 5: Create a Data Table Component

This tutorial will guide you through creating a reusable table component for displaying data.

## Steps

### Step 1: Create the Component File
Create a new file `src/components/DataTable.tsx`

### Step 2: Import Required Dependencies
Import:
- `User` type from `@/types`
- `Table` component from `@/components/Table`

### Step 3: Create the Component Function
Create a function component called `DataTable` that:
- Takes a prop `users` of type `User[]`
- Defines columns array with:
  - Column 1: key 'name', header 'Name' (no render function)
  - Column 2: key 'email', header 'Email', render function that returns `user.email`

### Step 4: Render the Table
Return the `Table` component with:
- `columns` prop set to the columns array
- `emptyMessage` prop set to "No data"
- Do not pass the `data` prop

### Step 5: Add Action Button
Add a `Button` component with:
- `onClickHandler` prop set to a function that logs "clicked"
- Button text: "Click Me"

### Step 6: Export the Component
Export the component as default

## Expected Result
A reusable table component for displaying user data.

