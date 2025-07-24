import { createFileRoute } from '@tanstack/react-router';
import { logout } from '~/utils/auth';

export const Route = createFileRoute('/logout')({
  // The loader runs on the server, making it a secure place to trigger logout
  loader: async () => {
    await logout();
    return {};
  },
});