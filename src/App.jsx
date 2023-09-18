import { nanoid } from 'nanoid'
import './App.css'
import Hello from './components/Hello'
import PersonList from './components/person-list/PersonList'

function App() {

  const william = {
    name: "Jean",
    age: 19
  }

  const personnes = [
    {
      id: nanoid(),
      name: "William",
      age: 29
    },
    {
      id: nanoid(),
      name: "Jean",
      age: 70
    },
    {
      id: nanoid(),
      name: "Leo",
      age: 14
    }
  ]

  return (
    <>
      <h1 className='title'>Titre de mon app</h1>
      {/* <Hello personne={william} /> */}
      <PersonList personnes={personnes}/>
    </>
  )
}

export default App
