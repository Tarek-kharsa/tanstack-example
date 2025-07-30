import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/member/create_account')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
		if (context.isLoggedIn) {
			throw redirect({ to: '/member/dashboard' })
		}
	},
})

function RouteComponent() {
  return <div>Hello "/member/create_account"!</div>
}
