import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:400px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
  `;

function App(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(true);

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const handleButton = (e) => {
    alert(email+ ' - '+password);
  }

  return (
    <>
      <Input type="email" placeholder="Digite um email" value={email} onChange={(e) => setEmail(e.target.value)} />
       
      {isLogged ? <button>Sair</button> : <button>Login</button> }
    </>
  );
}

export default App;