import "./Conteudo.css"

const Conteudo = ({title, text}) => {

    function mudarCor(){
        alert("oi")
    }

    return(
        <div className="Conteudo" onClick={mudarCor}>
            
            <div className="singleCaracter">
                <h1>
                    {title.charAt(0).toUpperCase()}
                </h1>
            </div>

            <div className="DivdoTexto">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Conteudo