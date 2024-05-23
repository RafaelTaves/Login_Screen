import React, { useEffect, useState } from 'react';
import Login from './componentes/Login'

interface LoginData {
  email: string;
  senha: string;
}

function App() {
  const [login, setLogin] = useState<LoginData | null>(null)

  function loginAdicionado(novoLogin: LoginData)  {
    setLogin(novoLogin)
  }

  useEffect(() => {
    if (login) {
      console.log('Login atual', login);
    }
  }, [login]);

  return (
    <div className="App">
      <Login loginInformado={(novoLogin: LoginData) => loginAdicionado(novoLogin)} />
    </div>
  );
}

export default App;
