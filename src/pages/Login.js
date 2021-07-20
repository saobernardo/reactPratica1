import React from 'react';
import {connect} from 'react-redux'

function Login(props){
  const handleManu = () => {
    props.setName("Manu");
  };

  return(
    <div>
      <h4>Página LOGIN</h4>
      O nome é {props.name}
      <br /><br />
      <button onClick={handleManu}>Trocar nome para Manu</button>
    </div>
  );
}

const mapStateToProps = state => ({
    name: state.usuarios.name
});

const mapDispatchToProps = dispatch => ({
  setName: (newName) => dispatch({
    type: 'SET_NAME',
    payload: {name: newName}
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);