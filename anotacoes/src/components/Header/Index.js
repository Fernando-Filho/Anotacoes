import { useState } from "react";

import { HeaderContainer, Search } from './style'

import { AiOutlineSearch } from "react-icons/ai";

const Header = ({searchTitle, setSearchTitle}) => {

    const [searchIcon, setSearchIcon] = useState(true)

    function handleChangeSearch(e) {
        setSearchTitle(e.target.value);
        e.target.value === "" ? setSearchIcon(true) : setSearchIcon(false);
    }

    const SearchIcon = (e) => {
        if( searchIcon === true )
        return <AiOutlineSearch className="IconSearch" size={24} color="white"/>
    }


    return(
        <HeaderContainer>
            <Search 
                type="text"
                value={searchTitle}
                placeholder="O que vamos fazer hoje?"
                onChange={handleChangeSearch}

            />

            <SearchIcon/>            
        </HeaderContainer>
    )
}

export default Header