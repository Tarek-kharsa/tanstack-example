import { createFileRoute, getRouterContext, redirect, useRouteContext } from "@tanstack/react-router";
import { userQueryOptions } from "~/features/auth/queries";
import { fetchUser, getAuthToken, logout } from "~/utils/auth";

export const Route = createFileRoute("/member/dashboard")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.token) {
      throw redirect({ to: "/member/login" });
    }
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Dashboard</h1>
      <form action="/logout" method="post">
        <button type="submit" className="text-blue-600 hover:underline">
          Logout
        </button>
      </form>
    </div>
  );
}