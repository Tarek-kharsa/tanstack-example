import { redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'redaxios'
import { useAppSession } from './session'
import { authMiddleware } from '~/middleware/authMiddleware'

/**
 * Fetches the current user from the session.
 * Returns the user object or null if not authenticated.
 */
export const fetchUser = createServerFn({ method: 'GET' })
	.middleware([authMiddleware])
	.handler(async ({ context }) => {
		console.log('fetchUser ', context)
		try {
			const response = await Promise.resolve({
				data: {
					id: 1,
					name: 'John Doe',
				},
			})
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
				// Store user info in session (only allowed fields)
				await session.update({
					token: resData.token,
				})
				return { token: resData.token }
			}
		} catch (error: any) {}
	})

export const logout = createServerFn({ method: 'POST' }).handler(async () => {
	const session = await useAppSession()
	await session.clear()
	// Redirect after clearing the session
	throw redirect({ to: '/member/login' })
})

export const getAuthToken = createServerFn({ method: 'GET' }).handler(async () => {
	const session = await useAppSession()
	if (!session.data.token) {
		return null
	}
	return session.data.token
})
