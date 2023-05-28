import "./app.css"

import { useState } from "react";

import Search from "./components/Search/Index";
import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";

import { VscAdd } from "react-icons/vsc";

function App() {

  const [list, setList] = useState([])
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")


  function handleSaveNote(note){
    setList([...list, note])
  }

  const filteredList = searchTitle !== "" ? list.filter((item) => item.title.includes(searchTitle)) : list
  
  const ToAddButton = () => {
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
        <Search setSearchTitle={setSearchTitle}
                searchTitle={searchTitle}
                />
        
      </header>

      <main>
        <CaixaDeConteudo  list={filteredList}/>
        <CreateNewNote  handleSaveNote={handleSaveNote}
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
