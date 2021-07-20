//state: estado inicial
//action:

const initialState = {
  name: 'Larissa',
  contador: 0
};

const UsuarioReducer = (state = initialState, action) => {

  //action.type = ação executada
  //action.payload = informações que queremos enviar
  switch(action.type){
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'INCREMENT_COUNT':
      let newCount = state.contador + 1;
      return {...state, contador: newCount};
      break;
  }

  return state;
};

export default UsuarioReducer;