import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Item from context1',
            rating: 10
        }, {
            id: 2,
            text: 'Item from context2',
            rating: 8
        }, {
            id: 3,
            text: 'Item from context3',
            rating: 3
        }, {
            id: 4,
            text: 'Item from context4',
            rating: 6
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});
    const [reverse, setReverse] = useState(false);

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? {...item, ...updItem} : item)))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        reverse,
        setReverse,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext