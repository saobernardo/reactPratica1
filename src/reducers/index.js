import {combineReducers} from 'redux';
import UsuarioReducer from './UsuarioReducer';

//combinando reducers para enviar apenas um no index do projeto
export default combineReducers({
  usuarios: UsuarioReducer
});