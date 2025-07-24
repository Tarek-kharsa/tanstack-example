import { createFileRoute, redirect } from "@tanstack/react-router";

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
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Welcome to your Dashboard</h1>
        <p className="mb-6 text-gray-600 text-center">
          Here you can manage your account, view your activity, and access exclusive member features.
        </p>
        <form action="/logout" method="post" className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold shadow"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}