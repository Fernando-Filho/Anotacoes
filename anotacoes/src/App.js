import "./app.css"

import { useState } from "react";

import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";

function App() {

  const [list, setList] = useState([])

  function handleSaveNote(note){
    setList([...list, note])
  }

  return (
    <div className="App">

      <h1>O que vamos fazer hoje?</h1>

      <CaixaDeConteudo list={list}/>
      <CreateNewNote onAddNote={handleSaveNote}/>

    </div>
  );
}

export default App
