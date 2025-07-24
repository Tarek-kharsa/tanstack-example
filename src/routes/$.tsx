// routes/cms/[...path].tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'

// Dynamic imports - TanStack Start supports lazy loading
// import { lazy } from "react";

// const LandingPage = lazy(() => import("@app/components/pages/LandingPage"));
// const RedOnlyLandingPage = lazy(() => import("@app/components/pages/RedOnlyLandingPage"));
// const FolderPage = lazy(() => import("@app/components/pages/FolderPage"));
// const BrandPage = lazy(() => import("@app/components/pages/BrandPage"));
// const HotelPage = lazy(() => import("@app/components/pages/HotelPage"));
// const OfferPage = lazy(() => import("@app/components/pages/OfferPage"));
// const TextPage = lazy(() => import("@app/components/pages/TextPage"));
// const Press = lazy(() => import("@app/components/pages/Press"));
// const GDSCodesPage = lazy(() => import("@app/components/pages/GDSCodesPage"));
// const NotFoundPage = lazy(() => import("@app/components/pages/NotFoundPage"));
// const LocalOfferPage = lazy(() => import("@app/components/pages/LocalOfferPage"));
// const ExperiencePage = lazy(() => import("@app/components/pages/ExperiencePage"));
// const ProductPage = lazy(() => import("@app/components/pages/ProductPage"));
// const PromoSubscriptionPage = lazy(() => import("@app/components/pages/PromoSubscriptionPage"));
// const StayOfferCategoryPage = lazy(() => import("@app/components/pages/StayOfferCategoryPage"));
// const RoomPage = lazy(() => import("@app/components/pages/RoomPage"));
// const DestinationsMapPage = lazy(() => import("@app/components/pages/DestinationsMapPage"));

const RED_MEMBER_PATHS = [
	'/exclusive-red-member-benefits-and-rewards',
	'/additional-brand-benefits/exclusive-red',
	'/complimentary-breakfast/red-members',
	'/red-member-benefits-and-rewards',
]

export const Route = createFileRoute('/$')({
	// Define search params validation
	validateSearch: (search: Record<string, unknown>) => {
		return {
			likes: search.likes as string | undefined,
			...search,
		}
	},
	loaderDeps: ({ search: { likes } }) => ({
		likes,
	}),
	// beforeLoad: () => {
	// 	const { headers } = getWebRequest();
	// 	console.log('headers', headers.get('cookie'));
	// },
	loader: async ({ params, context, deps: { likes } }) => {
		const asPath = `${params._splat || ''}`
		if (asPath.includes('.well-known')) {
			return
		}
		// context.queryClient.ensureQueryData(pageQueryOptions(asPath))
	},
	// errorComponent: ({ error }) => {
	//   return (
	//     <div>Error loading page: {error?.message}</div>
	//   );
	// },
	// notFoundComponent: () => {
	//   return (
	//     <div>
	//       not found
	//     </div>
	//   );
	// },
	component: CMSPage,
})

// Main component that renders different page types
function CMSPage() {
	const router = useRouter()
	// const { data, isLoading, isError } = usePage(router.state.location.pathname)
	// console.log('first', typeof data)
	// console.log('data', data)
	// const loaderData = useLoaderData({ from: '__root__' })
	// const {data , isLoading} = useUser();
	// const {data:userLocation} = useUserLocation()

	// const {
	//   page,
	//   notFound,
	//   isRedMemberProtectedPath,
	//   xkey,
	//   subHeaderNavItems,
	//   subHeaderExplore,
	//   isSubHeaderNavThin,
	// } = Route.useLoaderData();

	// // Handle sessionStorage check and anchor navigation on client-side
	// useEffect(() => {
	//   // Check for media/lobby access restriction
	//   const currentPath = window.location.pathname;
	//   const searchParams = new URLSearchParams(window.location.search);

	//   if (
	//     currentPath?.toLowerCase().includes('media/lobby')
	//     && !searchParams.get('likes')
	//     && !sessionStorage?.getItem(KEYS.myGHA)
	//   ) {
	//     // Redirect to 404 or show error - you might want to handle this differently
	//     window.location.href = '/404';
	//     return;
	//   }

	//   // Navigate to anchor - same logic as original
	//   const path = window.location.hash;
	//   if (path && path.includes("#")) {
	//     const callback = () => {
	//       const id = path.replace("#", "");
	//       const el = window.document.getElementById(id);
	//       const r = el?.getBoundingClientRect();
	//       if (r) {
	//         window.top?.scroll({top: window.scrollY + r.top});
	//         return !!window.top;
	//       }
	//       return false;
	//     };

	//     if (!callback()) {
	//       setTimeout(() => {
	//         if (!callback()) {
	//           setTimeout(() => {
	//             if (!callback()) {
	//               setTimeout(callback, 600);
	//             }
	//           }, 200);
	//         }
	//       }, 50);
	//     }
	//   }
	// }, [page]);

	return (
		<>
			CMSPage
			<form action="/logout" method="post">
				<button type="submit" className="text-blue-600 hover:underline">
					Logout
				</button>
			</form>
		</>

		// <ErrorBoundary>
		//   <React.Suspense fallback={<div>Loading...</div>}>
		//     {page.type === "landing_page" && isRedMemberProtectedPath && (
		//       <RedOnlyLandingPage {...page} siteSection={page.name} notFound={notFound}/>
		//     )}
		//     {page.type === "landing_page" && !isRedMemberProtectedPath && (
		//       <LandingPage {...page} siteSection={page.name}/>
		//     )}
		//     {page.type === "folder" && (
		//       <FolderPage {...page}/>
		//     )}
		//     {page.type === "brand" && (
		//       <BrandPage {...page}/>
		//     )}
		//     {page.type === "hotel" && (
		//       <HotelPage {...page}/>
		//     )}
		//     {page.type === "stay_offer" && (
		//       <OfferPage {...page}/>
		//     )}
		//     {page.type === "so_category_page" && (
		//       <StayOfferCategoryPage {...page}/>
		//     )}
		//     {page.type === "text_page" && (
		//       <TextPage {...page}/>
		//     )}
		//     {page.type === "press" && (
		//       <Press {...page}/>
		//     )}
		//     {page.type === "press_container" && (
		//       <Press {...page} {...page._location.children.edges[0].node.content}/>
		//     )}
		//     {page.type === "gds_codes" && (
		//       <GDSCodesPage {...page}/>
		//     )}
		//     {page.type === "not_found_page" && (
		//       <NotFoundPage {...page}/>
		//     )}
		//     {page.type === "local_offer" && (
		//       <LocalOfferPage {...page}/>
		//     )}
		//     {(page.type === "experience" || page.type === "city_unscripted_experience") && (
		//       <ExperiencePage {...page}/>
		//     )}
		//     {page.type === "product_page" && (
		//       <ProductPage {...page}/>
		//     )}
		//     {page.type === "promo_subscription" && (
		//       <PromoSubscriptionPage {...page}/>
		//     )}
		//     {page.type === "room" && (
		//       <RoomPage {...page}/>
		//     )}
		//     {page.type === "destinations_map" && (
		//       <DestinationsMapPage {...page}/>
		//     )}
		//   </React.Suspense>
		// </ErrorBoundary>
	)
}

export default CMSPage
