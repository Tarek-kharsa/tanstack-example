import { queryOptions } from '@tanstack/react-query'

export const userQueryOptions = queryOptions({
	queryKey: ['user'],
	queryFn: () =>
		Promise.resolve({
			id: 1,
			name: 'John Doe',
			email: 'john@example.com',
		}),
})
