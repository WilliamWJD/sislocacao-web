import { api } from '@/lib/axios'

export interface RegisterUser {
  nome: string
  rg: string
  cpf: string
  nacionalidade: string
  email: string
  senha: string
}

export async function registerUserIn({
  nome,
  rg,
  cpf,
  nacionalidade,
  email,
  senha,
}: RegisterUser) {
  await api.post('/usuarios', {
    nome,
    rg,
    cpf,
    nacionalidade,
    email,
    senha,
  })
}
