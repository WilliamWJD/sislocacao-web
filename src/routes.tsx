import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   errorElement: <NotFound />,
  //   children: [
  //     { path: '/', element: <Dashboard /> },
  //     { path: '/orders', element: <Orders /> },
  //   ],
  // },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      // { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
