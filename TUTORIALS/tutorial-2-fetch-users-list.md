# Tutorial 2: Create a Users List Component

This tutorial will guide you through creating a component that fetches and displays a list of users.

## Steps

### Step 1: Create the Component File
Create a new file `src/components/UsersList.tsx`

### Step 2: Import Required Dependencies
Import:
- `useState` from React
- `User` type from `@/types`
- `userService` from `@/services/userService`

### Step 3: Create the Component Function
Create a function component called `UsersList` that:
- Has state for `users` (User[] array)
- Has state for `loading` (boolean)
- Uses `useEffect` to fetch users when component mounts
- Creates a `fetchUsers` function that:
  - Sets loading to true
  - Calls `userService.getAll({ page: 1, limit: 10 })`
  - Sets the users state with `response.data`
  - Sets loading to false

### Step 4: Render the List
Return:
- If loading, show "Loading..."
- Otherwise, map through users and display each user's name

### Step 5: Export the Component
Export the component as default

## Expected Result
A component that displays a list of users fetched from the API.

