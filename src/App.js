import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:400px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
  `;

function App(){

  const [contagem, setContagem] = useState(0);
  
  useEffect(() => {
    document.title = `Contagem ${contagem}`
  }
  , [contagem]);

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={() => {setContagem(contagem+1)}} >Aumentar número</button>
    </>
  );
}

export default App;