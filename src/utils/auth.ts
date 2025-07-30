import { redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { authMiddleware } from '~/middleware/authMiddleware'
import { useAppSession } from './session'

/**
 * Fetches the current user from the session.
 * Returns the user object or null if not authenticated.
 */
export const fetchUser = createServerFn({ method: 'GET' })
	.middleware([authMiddleware])
	.handler(async ({ context }) => {
		try {
			await new Promise(resolve => setTimeout(resolve, 3000))
			const response = {
				data: {
					id: 1,
					name: 'John Doe',
				},
			}
			return response.data as any
		} catch (error) {
			return null
		}
	})

export const login = createServerFn({ method: 'POST' })
	.validator(({ username, password }: { username: string; password: string }) => ({
		username,
		password,
	}))
	.handler(async ({ data }) => {
		const session = await useAppSession()

		if (!data.username || !data.password) {
			return { error: 'Email and password are required.' }
		}
		try {
			// Call the external API
			const response = await Promise.resolve({
				data: {
					token: 'test-token-12345',
				},
			})
			const resData = response.data
			if (resData.token) {
				await session.update({
					token: resData.token,
				})
				return { success: true }
			}
		} catch (error: any) {}
	})

export const logout = createServerFn({ method: 'POST' }).handler(async () => {
	const session = await useAppSession()
	await session.clear()
	// Redirect after clearing the session
	throw redirect({ to: '/member/login' })
})

export const getIsAuth = createServerFn({ method: 'GET' }).handler(async () => {
	const session = await useAppSession()
	console.log('session.data.token', session.data.token)
	if (!session.data.token) {
		return false
	}
	return true
})
