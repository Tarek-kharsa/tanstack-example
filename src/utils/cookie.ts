import { createIsomorphicFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import { parse, serialize, parseSetCookie, splitSetCookieString } from 'cookie-es'

// Use AppCookie in client.tsx and server.ts and you are good to go. 
export const AppCookie = createIsomorphicFn()
	.server(() => {
		const cookie = getCookie('app_session')
		console.log('server cookie', cookie)
	})
	.client(() => {
		const cookie = parse(document.cookie)
		console.log('client cookie', cookie)
	})
