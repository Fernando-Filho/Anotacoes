import "./app.css"

import { useState } from "react";

import Search from "./components/Search/Index";
import ToAdd from "./components/ToAdd/Index";
import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";

function App() {

  const [list, setList] = useState([])

  function handleSaveNote(note){
    setList([...list, note])
  }

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
        <ToAdd/>
      </footer>

    </div>
  );
}

export default App
