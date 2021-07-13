import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(){
  let history = useHistory();

  const handleButton = () => {
    history.replace('/');
  };

  return(
    <div>
      <h4>Página HOME</h4>
      <button>Home</button>
    </div>
  );
}

export default Home;