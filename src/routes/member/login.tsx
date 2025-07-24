import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'

import { useQueryClient } from '@tanstack/react-query'
import { login } from '~/utils/auth'
import { userQueryOptions } from '~/utils/users'

export const Route = createFileRoute('/member/login')({
	beforeLoad: async ({ context }) => {
		if (context.token) {
			throw redirect({ to: '/member/dashboard' })
		}
	},
	component: MemberLoginPage,
})

function MemberLoginPage() {
	const router = useRouter()
	const queryClient = useQueryClient()

	const onSubmit = async () => {
		try {
			const response = await login({ data: { username: 'test', password: 'test' } })

			if (response?.error) {
				console.error('Login failed:', response.error)
				return
			}

			await queryClient.ensureQueryData(userQueryOptions)
			router.navigate({ to: '/$', search: { likes: undefined } })
		} catch (error) {
			console.error('Unexpected login error:', error)
		}
	}

	return (
		<>
			<button onClick={onSubmit}>login</button>
		</>
	)
}
