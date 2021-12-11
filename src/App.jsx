import Header from "./components/Header.jsx"
import FeedbackData from "./data/FeedbackData";
import {useState} from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import DarkModeLink from "./components/DarkModeLink";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    const [reverse, setReverse] = useState(false);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    return (
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route exact path={"/"} element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} reverse={reverse}
                                          handleDelete={deleteFeedback}/>

                        </>
                    }/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
                <DarkModeLink setReverse={setReverse} reverse={reverse}/>
            </div>
        </Router>
    )
}

export default App