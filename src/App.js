import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/searchBox';

function App(){
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça sua busca..."/>
    </>
  );
}

export default App;