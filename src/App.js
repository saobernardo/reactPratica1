import { props } from 'bluebird';
import React from 'react';

function Avatar(data){
  return(
    <>
      <img src={data.user.image} alt={data.user.name}/>
      <br/>
      <span>{data.user.name}</span>
    </>
  )
}

function App(){
  let user = {
    image: "https://avatars.githubusercontent.com/u/43080002?v=4",
    name: "Lucas São Bernardo Pinheiro" 
  }

  return <>
    <Avatar user={user}/>
  </>
}

export default App;