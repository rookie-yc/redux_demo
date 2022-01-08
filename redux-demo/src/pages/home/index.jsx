import React, {useEffect, useState} from "react";

import store from "../../store";

import sendAction from "../../action";

const Home = () => {

  const handleClick = () => {
    const action = sendAction()
    store.dispatch(action)
  } 

  const[value, setValue] = useState({})

  useEffect(() => {
    store.subscribe(() => {
      console.log('subscribe', store.getState());
      setValue({})
    })
  }) 

  return(
    <>
      <button onClick={ handleClick }>点我，发送一个action</button>
      <div> { store.getState().value } </div>
    </>
  )
}

export default Home