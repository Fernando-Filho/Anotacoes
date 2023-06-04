import React, { useState } from "react";

import { Content, SingleCaracter, TextContainer, Title, Text } from './style'
import { ModalContainer, Modal, ModalTitle, ModalText} from './styleModal'


import { CiTrash } from "react-icons/ci";

const Conteudo = ({title, text}) => {

    const [openModalConteudo, setopenModalConteudo] = useState(false)

    const ModalConteudo = () => {

        if(openModalConteudo === true){

            return(
                <ModalContainer onClick={() => setopenModalConteudo(!openModalConteudo)}>
                    <Modal>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalText>{text}</ModalText>
                    </Modal>
                </ModalContainer>
            )
        }
    }

    return(
        <Content onClick={() => setopenModalConteudo(!openModalConteudo)}>
            
            <SingleCaracter>
                {title.charAt(0).toUpperCase()}
            </SingleCaracter>

            <TextContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TextContainer>

            <CiTrash className="lixeira" size={40} color={"black"}/>

            <ModalConteudo/>

        </Content>
    )
}

export default Conteudo