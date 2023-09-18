function PersonListItem(props) {
    const { personne } = props

    return (
        <li>
            <h3>Nom : {personne.name}</h3>
            <h3>Age : {personne.age}</h3>
        </li>
    )
}

export default PersonListItem