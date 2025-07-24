import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/member/forgot_password')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/member/forgot_password"!</div>
}
