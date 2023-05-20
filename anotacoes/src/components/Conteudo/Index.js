import "./Conteudo.css"

import React, { useState } from "react";

const Conteudo = ({title, text}) => {

    const [openModal, setOpenModal] = useState(false)

    function modalNotion(){

        setOpenModal(!openModal)

        if(openModal === true){

            return(
                <div className="ModalNotion">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            )
        }

    }

    return(
        <div className="Conteudo" onClick={modalNotion}>
            
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