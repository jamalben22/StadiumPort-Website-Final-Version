
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
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

// AppRoutes component that combines ScrollToTop with routing
export function AppRoutes() {
  try {
    const element = useRoutes(routes)
    const navigate = useNavigate() // Always call useNavigate at the top level
    
    // Set up navigation in useEffect
    useEffect(() => {
      if (!window.REACT_APP_NAVIGATE) {
        window.REACT_APP_NAVIGATE = navigate
        navigateResolver(window.REACT_APP_NAVIGATE)
      }
    }, [navigate])
    
    if (!element) {
      console.error('No routes matched, returning null')
      return null
    }
    
    return element
  } catch (error) {
    console.error('Error in AppRoutes:', error)
    // Return a simple error message instead of JSX since this is a .ts file
    return null
  }
}
