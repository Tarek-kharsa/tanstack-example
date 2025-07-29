import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { setAuthToken, getAuthToken, clearAuthToken } from '~/utils/server'

interface AuthState {
	token: string | null
	isLoading: boolean
	isHydrated: boolean
}

interface AuthActions {
	setToken: (token: string) => Promise<void>
	clearToken: () => Promise<void>
	initAuth: () => Promise<void>
	setHydrated: () => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
	subscribeWithSelector((set, get) => ({
		// State
		token: null,
		isLoading: false,
		isHydrated: false,

		// Actions
		setToken: async (token: string) => {
			set({ isLoading: true })
			try {
				await setAuthToken({ data: { token } })
				set({ token, isLoading: false })
			} catch (error) {
				console.error('Failed to set token:', error)
				set({ isLoading: false })
			}
		},

		clearToken: async () => {
			set({ isLoading: true })
			try {
				await clearAuthToken()
				set({ token: null, isLoading: false })
			} catch (error) {
				console.error('Failed to clear token:', error)
				set({ token: null, isLoading: false })
			}
		},

		initAuth: async () => {
			if (get().isHydrated) return

			set({ isLoading: true })
			try {
				const token = await getAuthToken()
				set({ token, isLoading: false, isHydrated: true })
			} catch (error) {
				console.error('Failed to initialize auth:', error)
				set({ token: null, isLoading: false, isHydrated: true })
			}
		},

		setHydrated: () => {
			set({ isHydrated: true })
		},
	})),
)

// Computed selectors
export const useIsAuthenticated = () => useAuthStore(state => !!state.token)
export const useAuthToken = () => useAuthStore(state => state.token)
export const useAuthLoading = () => useAuthStore(state => state.isLoading)
