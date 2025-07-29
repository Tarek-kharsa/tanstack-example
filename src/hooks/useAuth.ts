// src/hooks/useAuth.ts
import { useAuthStore, useIsAuthenticated, useAuthToken, useAuthLoading } from '~/store/auth'

export function useAuth() {
  const { setToken, clearToken, initAuth } = useAuthStore()
  const token = useAuthToken()
  const isAuthenticated = useIsAuthenticated()
  const isLoading = useAuthLoading()

  return {
    // State
    token,
    isAuthenticated,
    isLoading,

    // Actions
    setToken,
    clearToken,
    initAuth,
  }
}
