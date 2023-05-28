import "./CaixaDeConteudo.css"

import Conteudo from "../Conteudo/Index"

const CaixaDeConteudo = ({list}) =>{

    return(
        <div className="CaixaDeConteudo">
            {list.map((props, index) => (
                <Conteudo key={index} title={props.title} text={props.text} />
            ))}
        </div>
    )
}

export default CaixaDeConteudo