import { createMiddleware } from '@tanstack/react-start'
import { useAppSession } from '~/utils/session'

export const authMiddleware = createMiddleware({ type: 'function' }).server(
  async ({ next, context }) => {
    const session = await useAppSession()
    if (!session.data.token) {
      // You can throw an error, return a specific response, or redirect
      throw new Error('Unauthorized')
    }
    return next({ context:{ token: session.data.token}})
  }
)