import Header from "./components/Header.jsx"
import {useState} from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import DarkModeLink from "./components/DarkModeLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path={"/"} element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList/>
                            </>
                        }/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                    <DarkModeLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App