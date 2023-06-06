import React, { useState } from "react";

import { Content, SingleCaracter, TextContainer } from './style'
import { ModalContainer, Modal} from './styleModal'


import { CiTrash } from "react-icons/ci";

const Conteudo = ({title, text, handleDeleteNote}) => {

    const [openModalConteudo, setopenModalConteudo] = useState(false)

    const ModalConteudo = () => {

        if(openModalConteudo === true){

            return(
                <ModalContainer onClick={() => setopenModalConteudo(!openModalConteudo)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Modal>
                </ModalContainer>
            )
        }
    }

    function DeleteItemList (e) {
        e.stopPropagation();
        handleDeleteNote(title)
    }

    return(
        <Content onClick={() => setopenModalConteudo(!openModalConteudo)}>
            
            <SingleCaracter>
                {title.charAt(0).toUpperCase()}
            </SingleCaracter>

            <TextContainer>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextContainer>

            <CiTrash className="lixeira" size={40} color="black" onClick={DeleteItemList}/>

            <ModalConteudo/>

        </Content>
    )
}

export default Conteudo