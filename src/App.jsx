import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./home/home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
