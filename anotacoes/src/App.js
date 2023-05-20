import "./app.css"

import { useState } from "react";

import Search from "./components/Search/Index";
import ToAdd from "./components/ToAdd/Index";
import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";

function App() {

  const [list, setList] = useState([])
  const [CreateNewNotes, setCreateNewNotes] = useState()

  function handleSaveNote(note){
    setList([...list, note])
  }

  function poupUpNewNote(){
    setCreateNewNotes(<CreateNewNote onAddNote={handleSaveNote}/>)
  }
  
  const eu = CreateNewNotes

  return (
    <div className="App">

      <header>
        <Search 
          placeholder="O que vamos fazer hoje?"
        />
        
      </header>

      <main>
        <CaixaDeConteudo list={list}/>
        <CreateNewNote onAddNote={handleSaveNote}/>
      </main>

      <footer>
        <ToAdd onclick={poupUpNewNote}/>
      </footer>

    </div>
  );
}

export default App
