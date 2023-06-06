import React, { useState } from "react";

import { Content, SingleCaracter, TextContainer } from './style'
import { ModalContainer, Modal, ButtonContainer, Buttons} from './styleModal'


import { CiTrash } from "react-icons/ci";

const Conteudo = ({title, text, handleDeleteNote}) => {

    const [openModalConteudo, setopenModalConteudo] = useState(false)

    const ModalConteudo = () => {

        if(openModalConteudo === true){

            return(
                <ModalContainer>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <h2>{title}</h2>
                        <p>{text}</p>


                        <ButtonContainer>
                            <Buttons    $Exit
                                        type="reset"
                                        onClick={() => setopenModalConteudo(!openModalConteudo)}
                                        >FECHAR
                            </Buttons>

                            <Buttons    $Delete
                                        type="submit"
                                        onClick={DeleteItemList}>
                                        DELETAR
                            </Buttons>
                        </ButtonContainer>
                        
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

            <CiTrash className="lixeira" color="black" onClick={DeleteItemList}/>

            <ModalConteudo/>

        </Content>
    )
}

export default Conteudo