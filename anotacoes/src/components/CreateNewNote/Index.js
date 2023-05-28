import "./CreateNewNote.css"

import React, { useState } from "react";

const CreateNewNote = (props) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleCreateNewNote(e){
        e.preventDefault()
        const data = { title, text }
        console.log(data)
        props.handleSaveNote(data)
        handleClearInput()
        handleExitCreateNewNote(e)
    }

    function handleClearInput(){
        setTitle("")
        setText("")
    }

    function handleExitCreateNewNote(e){
        e.preventDefault()
        props.setOpenCreateNewNote(!props.openCreateNewNote)
    }

    if(props.openCreateNewNote === true){
        return(
            <form className="CreateNewNote" onSubmit={handleCreateNewNote}>

                <div className="Modal">

                    <h1>Crie sua anotação</h1>

                    <div className="Inputs">

                        <input  type="text"
                                value={title}
                                placeholder="Título"
                                onChange={e => setTitle(e.target.value)}
                                required/>

                        <textarea   value={text}
                                    placeholder="Assunto..."
                                    onChange={e => setText(e.target.value)}
                                    required/>

                    </div>

                    <div className="orientionButtons">

                        <button type="submit"
                                onClick={handleCreateNewNote}>
                                    {/* <AiOutlineCheck 
                                        size={25}
                                        color="var(--Preto1)"/> */}

                                    <span>SALVAR</span>
                        </button>
                        
                        <button type="reset"
                                onClick={handleExitCreateNewNote}
                                >CANCELAR</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CreateNewNote