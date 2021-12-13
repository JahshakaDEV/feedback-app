import {FaTimes} from 'react-icons/fa'
import React, {useContext} from 'react';
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item, reverse}) {

    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={reverse}>
            <div className={"num-display"}>{item.rating}</div>
            <button className={"close"} onClick={() => deleteFeedback(item.id)}>
                <FaTimes color={'purple'}/>
            </button>
            <div className={"text-display"}>{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    reverse: PropTypes.bool
}

FeedbackItem.defaultProps = {
    reverse: false
}


export default FeedbackItem;