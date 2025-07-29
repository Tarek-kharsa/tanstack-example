// src/components/auth/AuthProvider.tsx
import { ReactNode, useEffect } from 'react'
import { useAuth } from '~/hooks/useAuth'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { initAuth } = useAuth()

  useEffect(() => {
    initAuth()
  }, [initAuth])

  return <>{children}</>
}