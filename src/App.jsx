import { nanoid } from 'nanoid'
import './App.css'
import Hello from './components/hello/Hello'
import PersonList from './components/person-list/PersonList'
import EventComponent from './components/event-component/EventComponent'
import InputComponent from './components/event-component/InputComponent'
import DemoForm from './components/demo-form/DemoForm'
import CounterValue from './components/counter-comm/CounterValue'
import CounterButton from './components/counter-comm/CounterButton'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)

  const increment = (incr) => {
    setCounter(currentValue => currentValue + parseInt(incr))
  }

  const decrement = (incr) => {
    setCounter(currentValue => currentValue - parseInt(incr))
  }

  return (
    <>
      <h1 className='title'>Titre de mon app</h1>
      {/* <Hello personne={william} />
      <PersonList personnes={personnes}/> */}
      {/* <EventComponent/>
      <InputComponent/> */}
      {/* <DemoForm/> */}
      <CounterValue counter={counter}/>
      <CounterButton onIncrement={increment} onDecrement={decrement}/>
    </>
  )
}

export default App
