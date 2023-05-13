import "./Search.css"

import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
    return(
        <div ClassName="Search">
            <input 
                type="text"
                placeholder="Busque aqui!!"
                />
                <AiOutlineSearch/>
        </div>
    )
}

export default Search