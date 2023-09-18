import style from "./Hello.module.css"

function Hello(props) {
    const { personne } = props

    if (personne.name === "William") {
        return (
            <h1>???</h1>
        )
    }

    return (
        <>
            {/* <h1 className={personne.age >= 18 ? style.blue : ""}>
                Hello je m'appelle {personne.name}, j'ai {personne.age} ans
            </h1> */}
            <h1 className={personne.age >= 18 && style.blue}>
                Hello je m'appelle {personne.name}, j'ai {personne.age} ans
            </h1>
            {personne.age >= 18 ? (
                <p>La personne a plus de 18 ans</p>
            ): (
                <p>La personne a moins de 18 ans</p>
            )}
        </>
    )
}

Hello.defaultProps = {
    personne : {
        name: "Unknown",
        age: 0
    }
}

export default Hello