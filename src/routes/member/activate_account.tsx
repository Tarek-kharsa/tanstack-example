import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/member/activate_account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/member/activate_account"!</div>
}
