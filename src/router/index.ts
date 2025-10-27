
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import { useRoutes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import routes from './config'

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve
})

// ScrollToTop function that scrolls to top on route changes
function useScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

// AppRoutes component that combines ScrollToTop with routing
export function AppRoutes() {
  const element = useRoutes(routes)
  const navigate = useNavigate() // Always call useNavigate at the top level
  
  // Use the scroll to top functionality
  useScrollToTop()
  
  // Set up navigation in useEffect
  useEffect(() => {
    if (!window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE = navigate
      navigateResolver(window.REACT_APP_NAVIGATE)
    }
  }, [navigate])
  
  return element
}
