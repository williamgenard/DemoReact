import { useState } from "react"

function InputComponent() {

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClick = () => {
        console.log(`Mon message = ${message}`)
        setMessage("")
    }

    return (
        <>
            <h3>{message}</h3>
            <input type="text" value={message} onChange={handleChange}></input>
            <button onClick={handleClick}>Reset</button>
        </>
    )
}

export default InputComponent