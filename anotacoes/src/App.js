import "./app.css"

import { useState } from "react";

import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Main from "./components/Main/Index";


function App() {

  const [list, setList] = useState([])
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")


  function handleSaveNote(note){
    setList([...list, note])
  }

  const filteredList = searchTitle !== "" ? list.filter((item) => item.title.includes(searchTitle)) : list

  return (
    <div className="App">

      <Header setSearchTitle={setSearchTitle}
              searchTitle={searchTitle}/>
        


      <Main list={filteredList}
            handleSaveNote={handleSaveNote}
            openCreateNewNote={openCreateNewNote}
            setOpenCreateNewNote={setOpenCreateNewNote}/>


      <Footer/>

    </div>
  );
}

export default App
