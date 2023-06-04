import { FooterContainer, Copyright, Link, AddButton } from './style'

import { VscAdd } from "react-icons/vsc";

const Footer = ({openCreateNewNote, setOpenCreateNewNote}) => {

    const ToAddButton = () => {
        if(openCreateNewNote === false){
          return(
            <AddButton onClick={() => setOpenCreateNewNote(true)}>+</AddButton>
          )
        }
      }

    return( 
        <FooterContainer>
            <Copyright> 
                Developed by
                <Link href="https://www.github.com/Fernando-Filho" target='_BLANK'>Fernando Filho</Link>
            </Copyright>
            <ToAddButton/>
        </FooterContainer>
     )
}

export default Footer