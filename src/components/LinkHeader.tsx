// LinkHeader.tsx
import { Link } from '@tanstack/react-router'
import React from 'react'
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

export const LinkHeader = () => (
	<nav className="flex space-x-4">
		<div className="p-2 flex gap-2 text-lg">
			<Link
				to="/member/login"
				activeProps={{
					className: 'font-bold',
				}}
			>
				login
			</Link>
			<Link
				to="/$"
				search={{ likes: undefined }}
				activeProps={{
					className: 'font-bold',
				}}
			>
				create account
			</Link>
		</div>
		{data.map((item, idx) => {
			// Grouped item
			if ('links' in item) {
				return (
					<div key={idx} className="relative group">
						<button className="hover:text-blue-600 transition">{item.name}</button>
						<div className="absolute hidden group-hover:block bg-white shadow mt-2 rounded">
							{item?.links?.map((link, i) => (
								<Link
									key={i}
									to={link.link}
									target={link.openInNewTab ? '_blank' : undefined}
									className="block px-4 py-2 hover:bg-gray-100"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
				)
			}

			// Single link item
			return (
				<Link
					key={idx}
					to={item.link}
					target={item.openInNewTab ? '_blank' : undefined}
					className="hover:text-blue-600 transition"
				>
					{item.title}
				</Link>
			)
		})}
	</nav>
)

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
