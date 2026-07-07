import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Route, Routes} from "react-router";
import Draws from "./views/Draws";
import NavigationBar from "./views/Navigation-bar";
import {useLocation} from "react-router-dom";
import Footer from "./views/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));

function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/"

    return (
        <>
            {!isHome && <NavigationBar/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/draws" element={<Draws/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </React.StrictMode>
)
