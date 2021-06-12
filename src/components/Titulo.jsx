import "./index.css"

function Titulo(props) {
    return (
        <div>
            <h1 className="texto">{props.titulo}</h1>
        </div>
    )
}

export default Titulo