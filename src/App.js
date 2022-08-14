import React from "react";
import Header from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import Content from "./components/content/Content";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Header/>
                <Routes>
                  <Route path="/welcome" element={<Content/>}/>
                  <Route path="/home" element={<HomePage/>}/>
                </Routes>
        </div>
    );
}

export default App;
