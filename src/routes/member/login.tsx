import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'

import { useQueryClient } from '@tanstack/react-query'
import { login } from '~/utils/auth'
import { userQueryOptions } from '~/utils/queries'

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
			router.navigate({ to: '/member/dashboard' })
		} catch (error) {
			console.error('Unexpected login error:', error)
		}
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<h2 className="text-2xl font-bold mb-6 text-center">Member Login</h2>
				<form
					onSubmit={e => {
						e.preventDefault()
						onSubmit()
					}}
					className="flex flex-col gap-4"
				>
					{/* Username and password fields can be added here in the future */}
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
