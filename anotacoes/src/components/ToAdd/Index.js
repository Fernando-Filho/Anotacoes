import "./ToAdd.css"

import { VscAdd } from "react-icons/vsc";

const ToAdd = (props) => {
    return(
        <div className="ToAdd">
            <button className="ToAddButton">
                <VscAdd className="More" size={24} color=""/>
            </button>
        </div>
    
    )
}

export default ToAdd