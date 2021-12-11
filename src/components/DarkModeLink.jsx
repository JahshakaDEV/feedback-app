import React from 'react';
import {FaMoon} from "react-icons/fa";

function DarkModeLink({setReverse, reverse}) {
    return (
        <div onClick={() => {
            setReverse(!reverse);
        }} className={'darkmode-link'}>
            <FaMoon size={30}/>
        </div>
    );
}

export default DarkModeLink;