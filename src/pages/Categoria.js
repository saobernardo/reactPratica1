import React from 'react';
import {useLocation} from 'react-router-dom';

//Busca o query da URL
function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Categoria(){
  let query = useQuery();
  let cat = query.get('tipo');
  let subtipo = query.get('subtipo');

  return(
    <div>
      <h4>Página Categoria</h4>
      Exibindo itens da categoria: {cat} - {subtipo}
    </div>
  );
}

export default Categoria;