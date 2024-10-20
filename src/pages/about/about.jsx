import React from "react";
import { AboutMain } from "./components/about_main/about_main";
import { AboutInfo } from "./components/about_info/about_info";
import { Reason } from "./components/reason/reason";
import { Experts } from "./components/experts/experts";
import { Offer } from "./components/offer/offer";

export const About = () => {
    return (
        <div>
            <AboutMain />
            <AboutInfo />
            <Reason />
            <Experts />
            <Offer />
        </div>
    );
};
