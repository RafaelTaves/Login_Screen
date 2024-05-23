import { useState } from "react";
import Botao from "./Botao";
import Email from "./Email";
import Senha from "./Senha";
import Titulo from "./Titulo";
import axios from 'axios'


export default function Autentication() {
    const[email, setEmail] = useState<string>('')
    const[senha, setSenha] = useState<string>('')

    function aoSubmeter(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault()
      const usuario = {
        login: email,
        password: senha
      };
      console.log(usuario)
      axios.post('https://apifoodlivre.inffel.com/auth/login', usuario)
            .then(reposta => {
              sessionStorage.setItem('token', reposta.data.access_token)
              setEmail('')
              setSenha('')
            })
            .catch(() => {
              alert('Aconteceu um erro inesperado ao afetuar o seu login!')
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
  