// src/lib/auth/utils.ts
import { useAuthStore } from '~/store/auth'

// Get token for API calls (can be used outside React)
export const getToken = () => {
  return useAuthStore.getState().token
}

// Set token from outside React
export const setToken = async (token: string) => {
  return useAuthStore.getState().setToken(token)
}

// Clear token from outside React
export const clearToken = async () => {
  return useAuthStore.getState().clearToken()
}

// Check if authenticated (can be used outside React)
export const isAuthenticated = () => {
  return !!useAuthStore.getState().token
}

// Listen to auth changes (can be used outside React)
export const subscribeToAuth = (callback: (token: string | null) => void) => {
  return useAuthStore.subscribe(
    (state) => state.token,
    callback
  )
}