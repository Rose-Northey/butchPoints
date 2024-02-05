import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.tsx'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="roa-2023-rose.au.auth0.com"
      clientId="RFORpHUwDPOBi7fUHfrAKeZJLuMiia3s"
      // audience="https://butchpoints/api"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
