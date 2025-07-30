import { createFileRoute } from '@tanstack/react-router'
import { logout } from '~/utils/auth'

export const Route = createFileRoute('/logout')({
	// The loader runs on the server, making it a secure place to trigger logout
	preload: false,
	loader: async ({ context }) => {
		await Promise.all([
			context.queryClient.invalidateQueries({ queryKey: ['authToken'] }),
			context.queryClient.invalidateQueries({ queryKey: ['user'] }),
			logout(),
		])
	},
})
