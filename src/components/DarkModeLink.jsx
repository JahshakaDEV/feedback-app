import React, {useContext} from 'react';
import {FaMoon} from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function DarkModeLink() {

    const {reverse, setReverse} = useContext(FeedbackContext)

    return (
        <div onClick={() => {
            setReverse(!reverse);
        }} className={'darkmode-link'}>
            <FaMoon size={30}/>
        </div>
    );
}

export default DarkModeLink;