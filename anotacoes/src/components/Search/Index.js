import "./Search.css"

import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = ({searchTitle, setSearchTitle}) => {

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
        <div className="Search">
            <input 
                type="text"
                value={searchTitle}
                placeholder="O que vamos fazer hoje?"
                onChange={handleChangeSearch}

            />

            <SearchIcon/>            
        </div>
    )
}

export default Search