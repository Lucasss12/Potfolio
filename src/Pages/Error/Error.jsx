import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="containerError">
            <div><h1>Error 404</h1></div>
            <div><Link to="/">Pour retourner sur la page d'accueil c'est ici !</Link></div>
        </div>
    )
}

export default Error