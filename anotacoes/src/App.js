import "./app.css"

import { useState } from "react";

import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import CaixaDeConteudo from "./components/CaixaDeConteudo/Index";
import CreateNewNote from "./components/CreateNewNote/Index";


function App() {

  const [list, setList] = useState([])
  const [openCreateNewNote, setOpenCreateNewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")


  function handleSaveNote(note){
    setList([...list, note])
  }

  const filteredList = searchTitle !== "" ? list.filter((item) => item.title.includes(searchTitle)) : list
  
  // const ToAddButton = () => {
  //   if(openCreateNewNote === false){
  //     return(
  //       <button className="ToAddButton" onClick={() => setOpenCreateNewNote(true)}>
  //         <VscAdd className="More"  size={24} color=""/>
  //       </button>
  //     )
  //   }
  // }


  return (
    <div className="App">

      <Header setSearchTitle={setSearchTitle}
              searchTitle={searchTitle}/>
        


      <main>
        <CaixaDeConteudo  list={filteredList}/>
        <CreateNewNote  handleSaveNote={handleSaveNote}
                        openCreateNewNote={openCreateNewNote}
                        setOpenCreateNewNote={setOpenCreateNewNote}/>
      </main>

      <Footer openCreateNewNote={openCreateNewNote}
              setOpenCreateNewNote={setOpenCreateNewNote}/>

    </div>
  );
}

export default App
