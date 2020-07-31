import preloader from "../../../assets/images/loaderr.svg";
import React from "react";

let Preloader = () => {
    return (
        <div style={{backgroundColor: "White"}}>
            <img src={preloader} alt="preload"/>
        </div>
    )
}

export default Preloader;

