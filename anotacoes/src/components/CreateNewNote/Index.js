import "./CreateNewNote.css"

import React, { useState } from "react";

const CreateNewNote = ({onAddNote}) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleCreateNewNote(e){
        e.preventDefault()
        const data = {
            title, text
        }
        console.log(data)
        onAddNote(data)
        handleClearInput()
    }

    function handleClearInput(){
        setTitle("")
        setText("")
    }

    return(
        <form className="CreateNewNote"  onSubmit={handleCreateNewNote}>

            <input  type="text"
                    value={title}
                    placeholder="title"
                    onChange={e => setTitle(e.target.value)}
                    required
            />

            <input  type="text"
                    value={text}
                    placeholder="text"
                    onChange={e => setText(e.target.value)}
                    required
            />

            <button type="submit" onClick={handleCreateNewNote}/>
            <button type="reset"/>

        </form>
    )
}

export default CreateNewNote