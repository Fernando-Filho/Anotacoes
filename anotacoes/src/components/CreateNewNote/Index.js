import "./CreateNewNote.css"

import React, { useState } from "react";

import { AiOutlineCheck } from "react-icons/ai";

const CreateNewNote = (props) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleCreateNewNote(e){
        e.preventDefault()
        const data = { title, text }
        console.log(data)
        props.onAddNote(data)
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
            <form className="CreateNewNote"  onSubmit={handleCreateNewNote}>


                <div className="Inputs">

                    <input  type="text"
                            value={title}
                            placeholder="title"
                            onChange={e => setTitle(e.target.value)}
                            required/>

                    <textarea   value={text}
                                placeholder="text"
                                onChange={e => setText(e.target.value)}
                                required/>

                </div>

                <div className="orientionButtons">

                    <button type="submit"
                            onClick={handleCreateNewNote}>
                                <AiOutlineCheck 
                                    size={25}
                                    color="var(--Preto1)"/>
                    </button>
                    
                    <button type="reset"
                            onClick={handleExitCreateNewNote}
                            />
                </div>

            </form>
        )
    }
}

export default CreateNewNote