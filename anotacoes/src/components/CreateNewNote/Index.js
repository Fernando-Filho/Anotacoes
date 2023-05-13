import "./CreateNewNote.css"

import React, { useState } from "react";

const CreateNewNote = ({onAddNote}) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleCreateNewNote(){
        const data = {
            title, text
        }
        console.log(data)
        onAddNote(data)
    }

    return(
        <div    ClassName="CreateNewNote">

            <input  type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="title"
            />

            <input  type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="text"
            />

            <button type="submit" onClick={handleCreateNewNote}/>

        </div>
    )
}

export default CreateNewNote