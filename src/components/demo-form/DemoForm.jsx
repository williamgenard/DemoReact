import { useState } from "react"

function DemoForm() {

    const [prenom, setPrenom] = useState("fdsf")
    const [nom, setNom] = useState("")
    const [diplome, setDiplome] = useState("bac")

    const handleNomChange = (e) => {
        console.log(e)
        setNom(e.target.value)
    }

    return (
        <>
            <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" />
            <input type="text" value={nom} onChange={handleNomChange}/>
            <select value={diplome} onChange={(e) => setDiplome(e.target.value)}>
                <option value="sec">Secondaire</option>
                <option value="bac">Bachelier</option>
                <option value="mas">Master</option>
            </select>
            <button>Valider</button>
        </>
    )
}

export default DemoForm