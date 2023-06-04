import { FooterContainer, AddButton } from './style'

import { VscAdd } from "react-icons/vsc";

const Footer = ({openCreateNewNote, setOpenCreateNewNote}) => {

    const ToAddButton = () => {
        if(openCreateNewNote === false){
          return(
            <AddButton onClick={() => setOpenCreateNewNote(true)}>
              <VscAdd className="More"  size={24}/>
            </AddButton>
          )
        }
      }

    return( 
        <FooterContainer>
            <ToAddButton/>
        </FooterContainer>
     )
}

export default Footer