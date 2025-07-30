import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getIsAuth, login } from '~/utils/auth'
import { authTokenQueryOptions, userQueryOptions } from '~/utils/queries'
import { useServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/member/login')({
	beforeLoad: async ({ context }) => {
		if (context.isLoggedIn) {
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
			// getAuth().then((isAuth) => {
			// 	console.log('isAuth', isAuth)
			// })
			// refetch()
			const token = await queryClient.invalidateQueries({ queryKey: ['authToken'] })
			console.log('token', token)
			queryClient.ensureQueryData(userQueryOptions)
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
