// utils/global-context.ts
import { AsyncLocalStorage } from 'node:async_hooks'
import { useAppSession } from './session'
import { createMiddleware } from '@tanstack/react-start'

type GlobalStorage = {
	token: string | null
	user: any | null
	session: Awaited<ReturnType<typeof useAppSession>>
}

const globalStorage = new AsyncLocalStorage<GlobalStorage>()

const getGlobalStorage = () => {
	const storage = globalStorage.getStore()
	if (!storage) {
		throw new Error('Global storage unavailable - make sure middleware is properly configured')
	}
	return storage
}

// Auth helpers that can be used anywhere in server functions
export const getAuthToken = () => {
	const storage = getGlobalStorage()
	return storage.token
}

export const getOptionalUser = () => {
	const storage = getGlobalStorage()
	return storage.user
}

export const getUser = () => {
	const user = getOptionalUser()
	if (!user) {
		throw new Error('User should be authenticated here')
	}
	return user
}

export const getSession = () => {
	const storage = getGlobalStorage()
	return storage.session
}

// Check if user is authenticated
export const isAuthenticated = () => {
	const storage = getGlobalStorage()
	return !!storage.token && !!storage.user
}

// Middleware function compatible with TanStack Start
// export const createGlobalStorageMiddleware = () => {
// 	return async (event: any, next: () => Promise<any>) => {
// 		const session = await useAppSession()
// 		const token = session.data?.token || null

// 		let user: any | null = null

// 		// Only fetch user if we have a token
// 		if (token) {
// 			try {
// 				const response = await Promise.resolve({
// 					data: {
// 						id: 1,
// 						name: 'John Doe',
// 					},
// 				})
// 				user = response.data as any
// 			} catch (error) {
// 				// Token might be invalid, clear session
// 				await session.clear()
// 			}
// 		}

// 		return new Promise(resolve => {
// 			globalStorage.run(
// 				{
// 					token,
// 					user,
// 					session,
// 				},
// 				() => {
// 					resolve(next())
// 				},
// 			)
// 		})
// 	}
// }

// Global middleware compatible with TanStack Start
// Global middleware using the correct TanStack Start pattern
export const globalStorageMiddleware = createMiddleware({ type: 'function' }).server(async ({ next, context }) => {
	const session = await useAppSession()
	const token = session.data?.token || null

	let user: any | null = null

	// Only fetch user if we have a token
	if (token) {
		try {
			const response = await Promise.resolve({
				data: {
					id: 1,
					name: 'John Doe',
				},
			})
			user = response.data as any
		} catch (error) {
			// Token might be invalid, clear session
			await session.clear()
		}
	}

	return globalStorage.run(
		{ token, user, session },
		next
	)
})