import { useSession } from '@tanstack/react-start/server'

// Define the data structure forgetContext your session
export type SessionData = {
	token: string
}

// This password is used to encrypt the session cookie.
// IMPORTANT: Store this securely in an environment variable in production.
const sessionPassword = 'ChangeThisBeforeShippingToProdOrYouWillBeFired'

export function useAppSession() {
	return useSession<SessionData>({
		password: sessionPassword,
		name: 'app_session', // The name of the cookie
		cookie: {
			// Prevents client-side JS from accessing the cookie (XSS protection)
			httpOnly: true,
			// Ensures the cookie is only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// Provides CSRF protection
			sameSite: 'lax',
			// Makes the cookie available to all pages
			path: '/',
			// Sets the session duration (e.g., 30 days)
			maxAge: 60 * 60 * 24 * 30,
		},
	})
}
