import { useState } from "react";

import { MainContainer, AddButton } from './style'

import Conteudo from "../Conteudo/Index"
import CreateNewNote from "../CreateNewNote/Index";

const Main = ({list, handleSaveNote, handleDeleteNote}) =>{

    const [openCreateNewNote, setOpenCreateNewNote] = useState(false)

    const ToAddButton = () => {
        if(openCreateNewNote === false){
          return(
            <AddButton onClick={() => setOpenCreateNewNote(true)}>+</AddButton>
          )
        }
    }

    return(
        <MainContainer>
            {list.map((props, index) => (
                <Conteudo key={index} title={props.title} text={props.text} handleDeleteNote={handleDeleteNote}/>
            ))}

            <CreateNewNote  handleSaveNote={handleSaveNote}
                            openCreateNewNote={openCreateNewNote}
                            setOpenCreateNewNote={setOpenCreateNewNote}/>

            <ToAddButton/>
        </MainContainer>
    )
}

export default Main