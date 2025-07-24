// LinkHeader.tsx
import { Link } from '@tanstack/react-router'
import React from 'react'
import { useUser } from '~/utils/queries'
export type LinkItem = {
	_name?: string
	_url?: string
	openInNewTab: boolean
	title: string
	link: string
	internalLink: string | null
	hideFromLoggedIn: boolean
	hideFromNeverLoggedIn: boolean
	hideFromEverLoggedIn: boolean
	hideFromNonLoggedIn: boolean
}

export type HeaderItem = { name: string; links: LinkItem[] } | LinkItem

export const LinkHeader = () => {
	const { data: user } = useUser()
	return (
		<nav className="flex items-center gap-10 text-lg px-6 py-3 bg-white shadow-sm rounded-lg">
			{/* Auth Links */}
			{!user ? (
				<div className="flex gap-2 items-center">
					<Link
						to="/member/login"
						activeProps={{ className: 'font-bold text-blue-700 underline underline-offset-4' }}
						className="px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition font-medium"
					>
						Login
					</Link>
					<Link
						to="/member/create_account"
						activeProps={{ className: 'font-bold text-blue-700 underline underline-offset-4' }}
						className="px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition font-medium"
					>
						Create Account
					</Link>
				</div>
			) : (
				<>
					{user.name && <span className="text-blue-700 font-semibold">Welcome, {user.name}!</span>}
					<Link
						to="/member/dashboard"
						activeProps={{ className: 'font-bold text-blue-700 underline underline-offset-4' }}
						className="px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition font-medium"
					>
						dashboard
					</Link>
				</>
			)}

			{/* Navigation Links */}
			{data.map((item, idx) => {
				if ('links' in item) {
					// Grouped dropdown item
					return (
						<div key={idx} className="relative group">
							<button
								className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition font-medium focus:outline-none"
								type="button"
							>
								{item.name}
								<svg
									className="w-4 h-4 ml-1 text-blue-400 group-hover:text-blue-700 transition"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{/* Dropdown Menu */}
							<div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md z-50 min-w-[14rem] border border-gray-100 animate-fade-in">
								{item.links.map((link, i) => (
									<Link
										key={i}
										to={link.link}
										target={link.openInNewTab ? '_blank' : undefined}
										className="block px-5 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition whitespace-nowrap rounded-md"
									>
										{link.title}
									</Link>
								))}
							</div>
						</div>
					)
				}

				// Single link
				return (
					<Link
						key={idx}
						to={item.link}
						target={item.openInNewTab ? '_blank' : undefined}
						className="px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition font-medium"
					>
						{item.title}
					</Link>
				)
			})}
		</nav>
	)
}

const data: HeaderItem[] = [
	{
		name: 'Find A Hotel',
		links: [
			{
				_name: 'Our Hotels',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/our-hotels',
				openInNewTab: false,
				title: 'Our Hotels',
				link: '/search/hotels?keyword=&clearBookingParams=1&clearHotelSearchParams=1',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Our Destinations',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/our-destinations',
				openInNewTab: false,
				title: 'Our Destinations',
				link: '/destinations-by-region',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Our Brands',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/our-brands',
				openInNewTab: false,
				title: 'Our Brands',
				link: '/our-brands',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Ultratravel Collection',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/ultratravel-collection',
				openInNewTab: false,
				title: 'Ultratravel Collection',
				link: '/explore-ultratravel-collection',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Green Collection',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/green-collection',
				openInNewTab: false,
				title: 'Green Collection',
				link: '/explore-green-collection',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'New Hotels',
				_url: '/Media/configuration/navigations/links/website-header-links/find-a-hotel/new-hotels',
				openInNewTab: false,
				title: 'New Hotels',
				link: 'https://stage.d2.gha.conciliolabs.com/new-hotels',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
		],
	},
	{
		name: 'Explore',
		links: [
			{
				_name: 'Stay Offers',
				_url: '/Media/configuration/navigations/links/website-header-links/explore/stay-offers',
				openInNewTab: false,
				title: 'Stay Offers',
				link: '/explore-stay-offers',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Local Offers',
				_url: '/Media/configuration/navigations/links/website-header-links/explore/local-offers',
				openInNewTab: false,
				title: 'Local Offers',
				link: '/search/local_offers',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Experiences',
				_url: '/Media/configuration/navigations/links/website-header-links/explore/experiences',
				openInNewTab: false,
				title: 'Experiences',
				link: '/search/experiences',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Promotions',
				_url: '/Media/configuration/navigations/links/website-header-links/explore/promotions',
				openInNewTab: false,
				title: 'Promotions',
				link: '/promotions',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
		],
	},
	{
		openInNewTab: false,
		title: 'Our Brands',
		link: '/our-brands',
		internalLink: null,
		hideFromLoggedIn: false,
		hideFromNeverLoggedIn: false,
		hideFromEverLoggedIn: false,
		hideFromNonLoggedIn: false,
	},
	{
		openInNewTab: false,
		title: 'Destinations map',
		link: 'https://www.ghadiscovery.com/destinations-map',
		internalLink: null,
		hideFromLoggedIn: false,
		hideFromNeverLoggedIn: false,
		hideFromEverLoggedIn: false,
		hideFromNonLoggedIn: false,
	},
	{
		name: 'Our Programme',
		links: [
			{
				_name: 'How It Works',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/how-it-works',
				openInNewTab: false,
				title: 'How It Works',
				link: '/our-programme',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Member Benefits',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/member-benefits',
				openInNewTab: false,
				title: 'Member Benefits',
				link: '/gha-discovery-benefits',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'DISCOVERY Dollars',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/discovery-dollars',
				openInNewTab: false,
				title: 'DISCOVERY Dollars',
				link: '/DISCOVERY-Dollars',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Member Rates',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/member-rates',
				openInNewTab: false,
				title: 'Member Rates',
				link: '/member-rates',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Live Local',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/live-local',
				openInNewTab: false,
				title: 'Live Local',
				link: '/live-local',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
			{
				_name: 'Book Direct',
				_url: '/Media/configuration/navigations/links/website-header-links/our-programme/book-direct',
				openInNewTab: false,
				title: 'Book Direct',
				link: '/book-direct',
				internalLink: null,
				hideFromLoggedIn: false,
				hideFromNeverLoggedIn: false,
				hideFromEverLoggedIn: false,
				hideFromNonLoggedIn: false,
			},
		],
	},
	{
		openInNewTab: false,
		title: 'Our App',
		link: '/mobile-app',
		internalLink: null,
		hideFromLoggedIn: false,
		hideFromNeverLoggedIn: false,
		hideFromEverLoggedIn: false,
		hideFromNonLoggedIn: false,
	},
]
