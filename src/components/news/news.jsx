import React from "react";
import { PrimaryBtn } from "../btns/button";
import { RightIcon } from "../hero/right-icon";
import { UserIcon } from "./user-icon";

export const News = () => {
    return (
        <section className="news pt-[177px]">
            <div className="container">
                <div className="news_block">
                    <div className="wrapper flex items-center justify-between">
                        <div className="title_block w-[760px]">
                            <p className="font-Yellowtail font-p text-green text-h4Title mb-[8px]">
                                News
                            </p>
                            <h2 className="text-title text-h2Title font-main">
                                Discover weekly content about organic food, &
                                more
                            </h2>
                        </div>

                        <div>
                            <PrimaryBtn
                                children={"More News"}
                                className={
                                    "text-title text-[20px] font-bold py-[28px] px-[45px] flex items-center gap-[10px] border border-title rounded-[16px]"
                                }
                                nextIcon={<RightIcon />}
                            />
                        </div>
                    </div>

                    <div className="content_block relative flex items-center gap-[46px]">
                        <div className="news_1 bg-[url('./assets/news_1.png')]  bg-contain bg-no-repeat h-[524px] w-[677px] mt-[48px]"></div>
                        <div className="con_1 rounded-[30px] bg-white py-[60px] px-[57px] absolute top-[45%] left-[2%] shadow-[0_20px_35px_0_rgba(167,167,167,0.25);]">
                            <div className="flex items-center gap-[8px] mb-[15px]">
                                <UserIcon />
                                <p className="font-p text-[18px] text-title">
                                    By Rachi Card
                                </p>
                            </div>
                            <h3 className="text-title font-main text-h6Title mb-[5px]">
                                The Benefits of Vitamin D & How to Get It
                            </h3>
                            <p className="text-p font-p text-pT leading-p w-[450px] mb-[15px]">
                                Simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum
                            </p>
                            <PrimaryBtn
                                children={"Read More"}
                                className={
                                    "text-title text-[20px] font-bold py-[28px] px-[45px] flex items-center gap-[10px] border border-title rounded-[16px] bg-yellow"
                                }
                                nextIcon={<RightIcon />}
                            />
                        </div>

                        <div className="news_1 bg-[url('./assets/news_2.png')]  bg-contain bg-no-repeat h-[524px] w-[677px] mt-[48px]"></div>
                        <div className="con_1 rounded-[30px] bg-white py-[60px] px-[57px] absolute top-[45%] left-[51%] shadow-[0_20px_35px_0_rgba(167,167,167,0.25);]">
                            <div className="flex items-center gap-[8px] mb-[15px]">
                                <UserIcon />
                                <p className="font-p text-[18px] text-title">
                                    By Rachi Card
                                </p>
                            </div>
                            <h3 className="text-title font-main text-h6Title mb-[5px]">
                                Our Favourite Summertime Tommeto
                            </h3>
                            <p className="text-p font-p text-pT leading-p w-[450px] mb-[15px]">
                                Simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum
                            </p>
                            <PrimaryBtn
                                children={"Read More"}
                                className={
                                    "text-title text-[20px] font-bold py-[28px] px-[45px] flex items-center gap-[10px] border border-title rounded-[16px] bg-yellow"
                                }
                                nextIcon={<RightIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
