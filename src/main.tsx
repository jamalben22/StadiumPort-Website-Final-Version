import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Emergency error handling for initialization
try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  const root = createRoot(rootElement)
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} catch (error) {
  console.error('Failed to initialize React app:', error)
  
  // Display fallback error message
  const fallbackHtml = `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    ">
      <div style="
        text-align: center;
        padding: 2rem;
        max-width: 500px;
      ">
        <h1 style="
          color: #1f2937;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        ">Website Temporarily Unavailable</h1>
        <p style="
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        ">We're experiencing technical difficulties. Please try refreshing the page.</p>
        <button onclick="location.reload()" style="
          background: #10b981;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 500;
        ">Refresh Page</button>
      </div>
    </div>
  `
  
  document.body.innerHTML = fallbackHtml
}
