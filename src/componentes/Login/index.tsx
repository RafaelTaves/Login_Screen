import { useState } from "react";
import Botao from "./Botao";
import Email from "./Email";
import Senha from "./Senha";
import Titulo from "./Titulo";

interface LoginProps {
  loginInformado: (loginData: { email: string; senha: string }) => void;
}

export default function Login(props: LoginProps) {
    const[email, setEmail] = useState<string>('')
    const[senha, setSenha] = useState<string>('')

    function aoSalvar(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault()
      props.loginInformado({email, senha})
      setEmail('')
      setSenha('')
    }
      
  return (
      <>
        {}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Titulo/>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={aoSalvar} className="space-y-6" action="#" method="POST">
              <Email valor={email} aoAlterado={(valor: string) => setEmail(valor)}/>
              <Senha valor={senha} aoAlterado={(valor: string)=> setSenha(valor)}/>
              <Botao/>
            </form>
          </div>
        </div>
      </>
    )
  }
  