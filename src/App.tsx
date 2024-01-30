import './global.css'

import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { ThemeProvider } from './components/theme/theme.provider'

import { router } from './routes'
import { Toaster } from './components/ui/sonner'
import { AuthProvider } from './context/authContext'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="sislocacao-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | sislocação" />
        <Toaster richColors />

        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
