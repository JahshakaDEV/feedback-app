import {createContext, useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        fetchFeedback()
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order?desc")
        const data = await response.json()
        setFeedback(data);
        setLoading(false);
    }


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
        updateFeedback,
        loading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext