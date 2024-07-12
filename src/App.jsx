import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Login from './Components/Login'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Signup from './Components/Signup'

function App() {
  let [showsignup,setShowsignup] = useState(false)

  function pageChanger(){
    setShowsignup(!showsignup);
  }
  return (
    <>
    {
      showsignup ? <Signup change={pageChanger}/> :  <Login change={pageChanger}/>
    }
    </>
  )
}

export default App
