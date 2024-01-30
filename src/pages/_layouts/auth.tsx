import { Outlet } from 'react-router-dom'

import signInLogo from '../../assets/sign-in-logo.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between rounded-e-[90px]">
        <div />
        <div className="flex items-center justify-center">
          <img src={signInLogo} alt="" className="w-[550px]" />
        </div>
        <footer className="text-sm">
          Painel do parceiro @copy; sislocação - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}
