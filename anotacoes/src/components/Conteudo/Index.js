import "./Conteudo.css"

import React, { useState } from "react";


import { CiTrash } from "react-icons/ci";

const Conteudo = ({title, text}) => {

    const [openModalConteudo, setopenModalConteudo] = useState(false)

    const ModalConteudo = () => {

        // setopenModalConteudo(!openModalConteudo)

        if(openModalConteudo === true){

            return(
                <div className="ModalNotion">
                    <div className="ContainerModal">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="Conteudo" onClick={() => setopenModalConteudo(!openModalConteudo)}>
            
            <div className="singleCaracter">
                <h1>
                    {title.charAt(0).toUpperCase()}
                </h1>
            </div>

            <div className="DivdoTexto">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

            <CiTrash className="lixeira" size={40} color={"black"}/>

            <ModalConteudo/>

        </div>
    )
}

export default Conteudo