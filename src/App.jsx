import './App.css'
import Hello from './components/Hello'

function App() {

  const william = {
    name: "William",
    age: 29
  }

  return (
    <>
      <h1 className='title'>Titre de mon app</h1>
      <Hello personne={william} />
      <Hello />
    </>
  )
}

export default App
