import React from "react";
import { Hero } from "../components/hero/hero";
import { BannerSec } from "../components/banner-sec/banner-sec";
import { About } from "../components/about/about";
import { OurProducts } from "../components/our_products/our_products";
import { Testi } from "../components/testimonial/testi";
import { Organic } from "../components/organic/organic";
import { Eco } from "../components/eco/eco";
import { Recepts } from "../components/recepts/recepts";
import { News } from "../components/news/news";

export const Home = () => {
    return (
        <div>
            <Hero />
            <BannerSec />
            <About />
            <OurProducts />
            <Testi />
            <Organic />
            <Eco />
            <Recepts />
            <News />
        </div>
    );
};
