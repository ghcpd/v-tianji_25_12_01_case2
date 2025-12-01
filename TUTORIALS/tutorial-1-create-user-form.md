# Tutorial 1: Create a User Form Component

This tutorial will guide you through creating a user form component that allows creating and updating users.

## Steps

### Step 1: Create the Component File
Create a new file `src/components/UserFormComponent.tsx`

### Step 2: Import Required Dependencies
Import the following:
- `useState` from React
- `User` type from `@/types`
- `userService` from `@/services/userService`
- `Button` component from `@/components/Button`

### Step 3: Create the Component Function
Create a function component called `UserFormComponent` that:
- Has state for `email` (string)
- Has state for `user` (User | null)
- Has a `handleSubmit` function that calls `userService.create(email)` and sets the user
- Has a `handleUpdate` function that takes an `id` (string) and calls `userService.update(id, 123)`

### Step 4: Render the Form
Return a form with:
- An email input field bound to the `email` state
- A submit button that calls `handleSubmit`

### Step 5: Export the Component
Export the component as default

## Expected Result
A working user form component that can create and update users.

