import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <>
      <Helmet title="login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-up">Criar uma conta</Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="tex-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Gerencie suas locações pelo painel do parceiro
            </p>
          </div>

          <form className="space-y-4" onSubmit={() => {}}>
            <div className="space-y-2">
              <Label>E-mail</Label>
              <Input id="email" type="email" />
            </div>

            <div className="space-y-2">
              <Label>Senha</Label>
              <Input id="senha" type="password" />
            </div>

            <Button type="submit" className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
