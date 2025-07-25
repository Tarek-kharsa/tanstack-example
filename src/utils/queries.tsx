import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchUser } from './auth'

export const userQueryOptions = queryOptions({
	queryKey: ['user'],
	queryFn: fetchUser,
	enabled: false,
})

export const pageQueryOptions = (path: string) => {
	return queryOptions({
		queryKey: ['page', path],
		queryFn: () =>
			Promise.resolve({
				title: 'Home Page' + path,
				content: 'Welcome to the home page!' + path,
			}),
		staleTime: 1000 * 60 * 5,
	})
}

export const useUser = () => useQuery(userQueryOptions)
