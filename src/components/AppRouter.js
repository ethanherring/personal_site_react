import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from '../App';
import Contact from '../pages/Contact';



const AppRouter = () => {



    return (

        <BrowserRouter>
            <Routes>
                <Route path="/contact" element={
                    <Contact />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;