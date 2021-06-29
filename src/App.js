import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/searchBox';

function App(){

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      {id:1, title: 'Comprar o bolo', done: false},
      {id:2, title: 'Pegar o cachorro no petshop', done: true},
      {id:3, title: 'Gravar aula', done:false}
    ]);
  }, []);

  function handleSearchInput(novoTexto){
    setSearchText(novoTexto);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça sua busca..." onChangeText={handleSearchInput} />

      <hr />

      <ul>
        {list.map((item) =>  (
            <li key={item.id.toString()}>{item.title}</li>
          )
        )}
      </ul>
    </>


  );
}

export default App;