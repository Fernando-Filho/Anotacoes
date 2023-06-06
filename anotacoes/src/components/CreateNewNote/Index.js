import React, { useState } from "react";

import { ModalCreateNewNote, Modal, Inputs, InputText, InputTextArea, ButtonBox, Buttons } from './style'

const CreateNewNote = ({handleSaveNote, openCreateNewNote, setOpenCreateNewNote}) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleCreateNewNote(e){
        e.preventDefault()
        const data = { title, text }
        console.log(data)
        handleSaveNote(data)
        handleClearInput()
        handleExitCreateNewNote(e)
    }

    function handleClearInput(){
        setTitle("")
        setText("")
    }

    function handleExitCreateNewNote(e){
        e.preventDefault()
        handleClearInput()
        setOpenCreateNewNote(!openCreateNewNote)
    }

    if(openCreateNewNote === true){
        return(
            <ModalCreateNewNote onSubmit={handleCreateNewNote}>
                <Modal>

                    <h1>Crie sua anotação</h1>

                    <Inputs>
                        <InputText  type="text"
                                    value={title}
                                    placeholder="Título"
                                    onChange={e => setTitle(e.target.value)}
                                    required/>

                        <InputTextArea  value={text}
                                        placeholder="Assunto..."
                                        onChange={e => setText(e.target.value)}
                                        required/>
                    </Inputs>

                    <ButtonBox>
                        <Buttons    $submit
                                    type="submit"
                                    onClick={handleCreateNewNote}>
                                    SALVAR
                        </Buttons>
                        
                        <Buttons    $reset
                                    type="reset"
                                    onClick={handleExitCreateNewNote}
                                    >CANCELAR
                        </Buttons>
                    </ButtonBox>
                </Modal>
            </ModalCreateNewNote>
        )
    }
}

export default CreateNewNote