import React from "react";

export const Cont = () => {
    return (
        <div>
            <div className="container">
                <div className="cont_block mt-[90px] text-center ">
                    <div className="flex items-center gap-[20px] justify-center mb-[27px]">
                        <span className="text-white bg-title font-bold text-h6Title rounded-[16px] py-[23px] px-[57px]">
                            Product Description
                        </span>

                        <span className="text-title bg-opGreen font-bold text-h6Title rounded-[16px] py-[23px] px-[57px]">
                            Additional Info
                        </span>
                    </div>
                    <p className="text-pT text-p font-p leading-p w-[800px] ml-auto mr-auto">
                        Welcome to the world of natural and organic. Here you
                        can discover the bounty of nature. We have grown on the
                        principles of health, ecology, and care. We aim to give
                        our customers a healthy chemical-free meal for perfect
                        nutrition. It offers about 8–10% carbs. Simple sugars —
                        such as glucose and fructose — make up 70% and 80% of
                        the carbs in raw.
                    </p>
                </div>
            </div>
        </div>
    );
};
