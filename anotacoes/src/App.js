import "./app.css"

import { useState } from "react";

import Search from "./components/Search/Index";
import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";

import { VscAdd } from "react-icons/vsc";

function App() {

  const [list, setList] = useState([])
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false)

  function handleSaveNote(note){
    setList([...list, note])
  }

  const ToAddButton = () =>{
    if(openCreateNewNote === false){
      return(
        <button className="ToAddButton" onClick={() => setOpenCreateNewNote(true)}>
          <VscAdd className="More"  size={24} color=""/>
        </button>
      )
    }
  }

  return (
    <div className="App">

      <header>
        <Search placeholder="O que vamos fazer hoje?"/>
        
      </header>

      <main>
        <CaixaDeConteudo  list={list}/>
        <CreateNewNote  onAddNote={handleSaveNote}
                        openCreateNewNote={openCreateNewNote}
                        setOpenCreateNewNote={setOpenCreateNewNote}/>
      </main>

      <footer>
        <ToAddButton/>
      </footer>

    </div>
  );
}

export default App
