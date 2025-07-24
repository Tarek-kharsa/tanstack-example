import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/member/create_account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/member/create_account"!</div>
}
