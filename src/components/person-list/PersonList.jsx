import PersonListItem from "./PersonListItem"

function PersonList(props) {
    const { personnes } = props

    const personnesJSX = personnes.map(
        p => <PersonListItem key={p.id} personne={p}/>
    )

    return (
        <ul>
            {personnesJSX}
        </ul>
    )
}

export default PersonList