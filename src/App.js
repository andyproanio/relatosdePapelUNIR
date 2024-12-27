import React, { useEffect, useState } from 'react'
import MainComponent from './views/MainComponent';
import './App.css';

const App = () => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, "5000");
  }, [])

  return (
    <>
      {visible ? <div className='d-flex justify-content-center logo'>
        <img src="/assets/images/logo.PNG" alt='Relatos de Papel'></img>
      </div> : <MainComponent />}
    </>
  )
}

export default App
