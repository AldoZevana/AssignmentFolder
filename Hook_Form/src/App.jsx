import { useState } from "react"
import Form from "./components/Form"
import ShowUser from "./components/ShowUser"
import './App.css'

function App() {
  const [regUser,setRegUser] = useState({})

  return (
    <>
      <Form setRegUser={setRegUser}></Form>
      <ShowUser regUser={regUser} setRegUser={setRegUser}/>
    </>
  )
}

export default App
