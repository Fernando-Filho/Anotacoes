import { FooterContainer, Copyright, Link } from './style'

const Footer = ({openCreateNewNote, setOpenCreateNewNote}) => {

    return( 
        <FooterContainer>
            <Copyright> 
                Developed by
                <Link href="https://www.github.com/Fernando-Filho" target='_BLANK'>Fernando Filho</Link>
            </Copyright>
        </FooterContainer>
     )
}

export default Footer