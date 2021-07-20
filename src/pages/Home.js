import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function Home(){
  let history = useHistory();
  const dispatch = useDispatch();
  const name = useSelector(state => state.usuarios.name);
  const contador = useSelector(state => state.usuarios.contador);

  const handleButton = () => {
    history.replace('/');
  };

  const handleLays = () => {
    dispatch({
      type: 'SET_NAME',
      payload: {name: 'Lays'}
    });
  }

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT_COUNT'
    });
  }

  return(
    <div>
      <h4>Página HOME</h4>
      Nome: {name} <br />
      Contagem: {contador}
      <br />
      <button onClick={handleLays}>Mudar nome para Lays</button>
      <button onClick={handleIncrement}>+1</button>
      <br /><br />
      <button onClick={handleButton}>Home</button>
    </div>
  );
}

export default Home;