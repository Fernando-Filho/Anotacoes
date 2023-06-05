import { useState } from "react";

import { AppContainer } from './styleApp'

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

  function handleDeleteNote(itemToDelete){
    const upadetedItems = list.filter((item) => item.title !== itemToDelete)
    setList(upadetedItems)
  }

  return (
    <AppContainer>

      <Header setSearchTitle={setSearchTitle}
              searchTitle={searchTitle}/>
        


      <Main list={filteredList}
            handleSaveNote={handleSaveNote}
            openCreateNewNote={openCreateNewNote}
            setOpenCreateNewNote={setOpenCreateNewNote}
            handleDeleteNote={handleDeleteNote}/>


      <Footer/>

    </AppContainer>
  );
}

export default App
