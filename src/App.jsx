import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./home/home";
import { About } from "./pages/about/about";
import { Shop } from "./pages/shop-page/shop";
import { ProdDetail } from "./pages/prod-detail/prod-detail";
import { OurTeam } from "./pages/our-team/our-team";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="our-team" element={<OurTeam />} />
                    <Route path="prod-det/:id" element={<ProdDetail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
