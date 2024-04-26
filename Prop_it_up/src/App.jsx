import { useState } from 'react'
import './App.css'
import Card from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
        lastName={"Doe"} 
        firstName={"Jane"}
        age={45}
        hairColor={"Black"}/>  
      <Card
        lastName={"Smith"} 
        firstName={"John"}
        age={88}
        hairColor={"Brown"}
      />
      <Card
        lastName={"Fillmore"} 
        firstName={"Millard"}
        age={50}
        hairColor={"Brown"}
      />
      <Card
        lastName={"Smith"} 
        firstName={"Maria"}
        age={62}
        hairColor={"Brown"}
      />
    </>
  )
}

export default App
