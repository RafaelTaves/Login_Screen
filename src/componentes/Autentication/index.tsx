import { useState } from "react";
import Botao from "./Botao";
import Email from "./Email";
import Senha from "./Senha";
import Titulo from "./Titulo";
import axios from 'axios'


export default function Autentication() {
    const[email, setEmail] = useState<string>('')
    const[senha, setSenha] = useState<string>('')
    const [responseCode, setResponseCode] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function aoSubmeter(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault()
      const usuario = {
        login: email,
        password: senha
      };
      console.log(usuario)
      await axios.post('https://apifoodlivre.inffel.com/auth/login', usuario)
            .then(resposta => {
              sessionStorage.setItem('token', resposta.data.access_token)
              setResponseCode(resposta.status)
              console.log(responseCode)
              setEmail('')
              setSenha('')
            })
            .catch((err) => {
              alert('Aconteceu um erro inesperado ao afetuar o seu login!')
              setError(err.response ? err.response.status : 500);
              console.log(error)
          })
    }
      
  return (
      <>
        {}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Titulo/>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={aoSubmeter} className="space-y-6" action="#" method="POST">
              <Email valor={email} aoAlterado={(valor: string) => setEmail(valor)}/>
              <Senha valor={senha} aoAlterado={(valor: string)=> setSenha(valor)}/>
              <Botao/>
            </form>
          </div>
        </div>
      </>
    )
  }
  