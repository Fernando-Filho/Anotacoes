import "./ToAdd.css"

import { VscAdd } from "react-icons/vsc";

const ToAdd = (poupUpNewNote) => {

    function teste(e){
        poupUpNewNote(e.onClick)
    }
    return(
        <div className="ToAdd">
            <button className="ToAddButton" onClick={teste}>
                <VscAdd className="More" size={24} color=""/>
            </button>
        </div>
    
    )
}

export default ToAdd