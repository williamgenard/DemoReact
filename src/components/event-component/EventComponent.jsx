import { useState } from "react"

function EventComponent() {

    // props
    // const { monParametre } = props

    //state
    const [texte, setTexte] = useState("Bonjour")
    const [barre, setBarre] = useState("")

    const handleClick = () => {
        if (texte === "Bonjour") {
            setTexte("Au revoir")
        }
        else {
            setTexte("Bonjour")
        }

        setBarre((currentValue) => currentValue + "|")
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <h3>{texte}</h3>
            <h3>{barre}</h3>
            <button onClick={handleClick}>Click me !</button>
            <input type="text" onChange={handleChange}></input>
        </>
    )
}

export default EventComponent