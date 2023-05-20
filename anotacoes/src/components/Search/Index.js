import "./Search.css"

import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {

    const [searchTitle, setSearchTitle] = useState()

    function handleSearchNote(props){

        setSearchTitle(props.target.value)
        // console.log(props.target.value)
    }

    return(
        <div className="Search">
            <input 
                type="text"
                value={searchTitle}
                placeholder={props.placeholder}
                onChange={handleSearchNote}

            />
            <AiOutlineSearch className="IconSearch" size={24} color="white"/>
        </div>
    )
}

export default Search