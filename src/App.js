import React from 'react';
import styled from 'styled-components';

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00FF00;
`;

const Botao = styled.button`
  font-size: 19px;
  padding: 10px 15px;
  border: 3px solid #FF0000;
  color: #FF0000;
  background-color: #FFF;
  margin: 5px;
  border-radius: 5px;
`;

const BotaoPequeno = styled(Botao)`
  padding: 5px 10px;
  font-size: 16px;
  color: ${props => props.ativo ? '#CCC' : '#000'};
`;

function App(){

  return (
    <Site>
      <Botao>Clique aqui</Botao>
      <BotaoPequeno ativo={true}>Clique aqui</BotaoPequeno>
    </Site>
  );
}

export default App;