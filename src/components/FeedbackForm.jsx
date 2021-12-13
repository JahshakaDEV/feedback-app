import React, {useContext, useState} from 'react';
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm({reverse}) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const {addFeedback} = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true);
            setMessage('Text muss be at least 10 characters');
        } else {
            setMessage(null)
            setbtnDisabled(false);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback);
            setText('');
        }
    }

    return (
        <Card reverse={reverse}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className={"input-group"}>
                    <input onChange={handleTextChange} type={"text"} value={text} placeholder={"Write a review"}/>
                    <Button type={"submit"} isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className={"message"}>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;