import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="w-[400px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="tex-2xl font-semibold tracking-tight">
              Criar sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              E comece a gerenciar suas locações
            </p>
          </div>

          <form className="space-y-4" onSubmit={() => {}}>
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input id="nome" type="text" />
            </div>

            <div className="flex flex-row gap-2">
              <div className="space-y-2 w-full">
                <Label htmlFor="rg">RG</Label>
                <Input id="rg" type="text" />
              </div>

              <div className="space-y-2 w-full">
                <Label>CPF</Label>
                <Input id="cpf" type="text" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nacionalidade">Nacionalidade</Label>
              <Input id="nacionalidade" type="text" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" />
            </div>

            <Button type="submit" className="w-full">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
