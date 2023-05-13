import "./Conteudo.css"

import React, { useState } from "react";



const Conteudo = ({title, text}) => {

    return(
        <div className="">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Conteudo