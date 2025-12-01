# Tutorial 4: Create API Service Functions

This tutorial will guide you through creating API service functions for user operations.

## Steps

### Step 1: Create the Service File
Create a new file `src/services/userApiService.ts`

### Step 2: Import Required Dependencies
Import:
- `apiService` from `@/services/api`
- `User` type from `@/types`

### Step 3: Create Fetch User Function
Create an async function `fetchUser` that:
- Takes an `id` parameter (string)
- Calls `apiService.get<User>('/user/' + id)`
- Returns the user

### Step 4: Create User Function
Create an async function `createUser` that:
- Takes a `name` parameter (string)
- Calls `apiService.post<User>('/users', { name })`
- Returns the created user

### Step 5: Create Update User Function
Create an async function `updateUser` that:
- Takes an `id` (string) and `name` (string)
- Calls `apiService.get<User>('/users/' + id, { name })`
- Returns the updated user

### Step 6: Export All Functions
Export all three functions

## Expected Result
API service functions for fetching, creating, and updating users.

