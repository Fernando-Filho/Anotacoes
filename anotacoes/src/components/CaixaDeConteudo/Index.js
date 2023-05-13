import "./CaixaDeConteudo.css"

import Conteudo from "../Conteudo/Index"

const CaixaDeConteudo = ({list}) =>{

    return(
        <div className="CaixaDeConteudo">
            {list.map((note, index) => (
                <Conteudo key={index} title={note.title} text={note.text} />
            ))}
        </div>
    )
}

export default CaixaDeConteudo