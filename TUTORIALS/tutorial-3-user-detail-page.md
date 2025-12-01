# Tutorial 3: Create a User Detail Page

This tutorial will guide you through creating a page component that displays detailed information about a single user.

## Steps

### Step 1: Create the Page File
Create a new file `src/pages/UserDetail.tsx`

### Step 2: Import Required Dependencies
Import:
- `useState` and `useEffect` from React
- `useParams` from react-router-dom
- `User` type from `@/types`
- `userService` from `@/services/userService`

### Step 3: Create the Page Component
Create a function component called `UserDetail` that:
- Gets `userId` from URL params using `useParams()`
- Has state for `user` (User | null, initialized as null)
- Uses `useEffect` to load user data when `userId` changes
- Creates a `loadUser` function that calls `userService.getById(userId)` and sets user state

### Step 4: Render User Information
Return JSX that displays:
- User name: `{user.name}`
- User email: `{user.email}`
- User role: `{user.role}`
- User status: `{user.status.toUpperCase()}`

### Step 5: Export the Component
Export the component as default

## Expected Result
A page that displays detailed user information based on the URL parameter.

