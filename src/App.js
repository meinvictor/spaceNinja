import React from "react";
import {Route, Routes} from 'react-router-dom';
import Content from "./components/content/Content";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <div className="App">
                <Routes>
                  <Route path="/welcome" element={<Content/>}/>
                  <Route path="/home" element={<HomePage/>}/>
                  <Route path="/signup" element={<SignUpPage/>}/>
                </Routes>
        </div>
    );
}

export default App;
