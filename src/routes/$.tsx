// routes/cms/[...path].tsx
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useParams, useRouter } from '@tanstack/react-router'
import { pageQueryOptions } from '~/utils/queries'

export const Route = createFileRoute('/$')({
	// beforeLoad: () => {
	// 	const { headers } = getWebRequest();
	// 	console.log('headers', headers.get('cookie'));
	// },
	loader: async ({ params, context }) => {
		const asPath = `${params._splat || ''}`
		if (asPath.includes('.well-known')) {
			return
		}
		context.queryClient.ensureQueryData(pageQueryOptions(asPath))
	},
	component: CMSPage,
})

function CMSPage() {
	const params = useParams({ from: "/$"})
	const { data: page } = useQuery(pageQueryOptions(params._splat || ''));
	console.log('page', page)
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h1 className="text-3xl font-bold mb-4 text-center text-blue-700">CMS Page {params._splat}</h1>
				<p className="mb-6 text-gray-600 text-center">
					Welcome to the CMS page. Here you can view dynamic content. {params._splat}
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
	)
}

export default CMSPage
