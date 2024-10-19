import React from "react";
import { PrimaryBtn } from "../btns/button";
import { RightIcon } from "./right-icon";

export const Hero = () => {
    return (
        <section className="bg-[url('./assets/Banner.jpg')] py-[247px] bg-cover bg-no-repeat">
            <div className="container">
                <div className="main_block">
                    <div className="title_block w-[550px]">
                        <p className="font-Yellowtail text-h4Title text-green font-p mb-[8px]">
                            100% Natural Food
                        </p>
                        <h1 className="text-h1Title text-title font-main mb-[23px]">
                            Choose the best healthier way of life
                        </h1>
                        {
                            <PrimaryBtn
                                children={"Explore Now"}
                                className={
                                    "bg-yellow py-[28px] px-[39px] font-bold text-title text-p rounded-[16px] flex items-center gap-[10px]"
                                }
                                nextIcon={<RightIcon />}
                            />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
