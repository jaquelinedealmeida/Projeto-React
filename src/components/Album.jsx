import musicas from "../service/Dados"
import "./index.css"

function Album() {
    return (
        <div>
        {musicas.map(musica => {
            return (
                <div>
                <ul>
                    <li>{musica.id}</li>
                    <li>{musica.nome}</li>
                    <li>{musica.album}</li>
                    <li>{musica.genero}</li>
                    <img src ={musica.capa} alt={musica.nome}/>
                </ul>
                </div>
            )
        })}
    </div> 
    )
}

export default Album 
