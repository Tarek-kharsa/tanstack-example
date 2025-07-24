import { queryOptions, useQuery } from '@tanstack/react-query'
import { fetchUser } from './auth'

export const userQueryOptions = queryOptions({
	queryKey: ['user'],
	queryFn: () => fetchUser,
})

export const pageQueryOptions = (path: string) => {
	return queryOptions({
		queryKey: ['page', path],
		queryFn: () =>
			Promise.resolve({
				title: 'Home Page' + path,
				content: 'Welcome to the home page!' + path,
			}),
		staleTime: 1000 * 60 * 5, // 5 minutes
	})
}

export const useUser = () => useQuery(userQueryOptions)
