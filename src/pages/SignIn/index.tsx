import { FormEvent, useState } from 'react'

import { Logo } from '../../Logo'
import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { Input } from '../../components/Input'
import { Checkbox } from '../../components/Checkbox'
import { Button } from '../../components/Button'

import { Envelope, Lock } from 'phosphor-react'

import axios from 'axios'

export function SignIn() {
  const [ isUserSignedIn, setIsUserSignedIn ] = useState(false)

  async function heandleSignIn(e: FormEvent) {
    e.preventDefault()

    await axios.post('/sessions', {
      email: 'rafael@madeincode.com.br',
      senha: '12345678'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div
      className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100"
    >
      <header
        className="flex flex-col items-center"
      >
        <Logo />
        <Heading
          asChild
          className="mt-4"
          size="lg"
        >
          <h1>Ignite Lab</h1>
        </Heading>
        <Text
          className="text-gray-400 mt-1"
          size="lg"
        >
          Faça login e começe a usar!
        </Text>
      </header>

      <form
        className="flex flex-col gap-3 items-stretch w-full max-w-sm mt-10"
        onSubmit={heandleSignIn}
      >
        { isUserSignedIn && <Text>Login realizado!</Text> }

        <label
          className="flex flex-col gap-3"
          htmlFor="email"
        >
          <Text
            className="font-semibold"
          >
            Endereço de e-mail
          </Text>
          <Input.Root>
            <Input.Icon>
              <Envelope weight="bold" />
            </Input.Icon>
            <Input.Input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
            />
          </Input.Root>
        </label>

        <label
          className="flex flex-col gap-3"
          htmlFor="password"
        >
          <Text
            className="font-semibold"
          >
            Senha
          </Text>
          <Input.Root>
            <Input.Icon>
              <Lock weight="bold" />
            </Input.Icon>
            <Input.Input
              id="password"
              placeholder="********"
              type="password"
            />
          </Input.Root>
        </label>

        <label
          className="flex items-center gap-2"
          htmlFor="remember"
        >
          <Checkbox
            id="remember"
          />
          <Text
            className="text-gray-200"
            size="sm"
          >
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button
          className="mt-4"
          type="submit"
        >
          Entrar na plataforma
        </Button>
      </form>
      
      <footer
        className="flex flex-col items-center gap-4 mt-4"
      >
        <Text
          asChild
          size="sm"
        >
          <a
            className="text-gray-400 underline hover:text-gray-200"
            href=""
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text
          asChild
          size="sm"
        >
          <a
            className="text-gray-400 underline hover:text-gray-200"
            href=""
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>

    </div>
  )
}