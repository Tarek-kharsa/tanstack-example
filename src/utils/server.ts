// src/lib/auth/server.ts
import { createServerFn } from '@tanstack/react-start'
import { useAppSession } from './session'

// Server function to set token in session
export const setAuthToken = createServerFn({ method: 'POST' })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }) => {
    const session = await useAppSession()
    if (!data?.token) {
      return { success: false, error: 'No token provided' }
    }
    await session.update({ token: data.token })
    return { success: true }
  })

// Server function to get token from session
export const getAuthToken = createServerFn({ method: 'GET' })
  .handler(async () => {
    const session = await useAppSession()
    return session.data?.token || null
  })

// Server function to clear session
export const clearAuthToken = createServerFn({ method: 'POST' })
  .handler(async () => {
    const session = await useAppSession()
    await session.clear()
    return { success: true }
  })
