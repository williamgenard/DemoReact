import { useState } from "react"

function CounterButton(props) {

    const { onIncrement, onDecrement } = props

    const [incr, setIncr] = useState("0")

    return (
        <>
            <input type="number" value={incr} onChange={e => setIncr(e.target.value)}/>
            <button onClick={() => onIncrement(incr)}>+</button>
            <button onClick={() => onDecrement(incr)}>-</button>
        </>
    )
}

export default CounterButton