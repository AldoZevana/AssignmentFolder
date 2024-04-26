import PersonCard from './components/PersonCard'
import './App.css'

function App() {

  return (
    <>
      <PersonCard 
        lastName={"Doe"} 
        firstName={"Jane"}
        initialAge={45}
        hairColor={"Black"}/>  
      <PersonCard
        lastName={"Smith"} 
        firstName={"John"}
        initialAge={88}
        hairColor={"Brown"}
      />
      <PersonCard
        lastName={"Fillmore"} 
        firstName={"Millard"}
        initialAge={50}
        hairColor={"Brown"}
      />
      <PersonCard
        lastName={"Smith"} 
        firstName={"Maria"}
        initialAge={62}
        hairColor={"Brown"}
      />
    </>
  )
}

export default App
