import style from "./Hello.module.css"

function Hello(props) {
    const { personne } = props

    return (
        <h1 className={style.blue}>
            Hello je m'appelle {personne.name}, j'ai {personne.age} ans
        </h1>
    )
}

Hello.defaultProps = {
    personne : {
        name: "Unknown",
        age: 0
    }
}

export default Hello