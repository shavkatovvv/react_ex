import React from "react";
import { RoundIcon } from "./round-icon";
import veg from "../../../../assets/veg.png";
import { BgIcon } from "./bg-icon";
import { EcoIcon } from "./eco-icon";
import { TimeIcon } from "./time-icon";
import { GuardIcon } from "./guard-icon";

export const Reason = () => {
    return (
        <div className="section bg-[#f9f8f8] py-[190px]">
            <div className="container">
                <div className="wrapper flex items-center justify-between mb-[113px]">
                    <div className="cont_block">
                        <div className="title_block w-[595px] mb-[25px]">
                            <p className="font-Yellowtail text-green text-h4Title font-p ">
                                Why Choose us?
                            </p>
                            <h2 className="text-title text-h2Title font-main">
                                We do not buy from the open market & traders.
                            </h2>
                        </div>

                        <p className="text-pT text-p fonnt-p leading-p w-[671px]">
                            Simply dummy text of the printing and typesetting
                            industry. Lorem had ceased to been the industry's
                            standard the 1500s, when an unknown
                        </p>

                        <div className="detail_block mt-[36px]">
                            <div className="rounded-[49px] py-[29px] pl-[27px]  bg-[#ececec] w-[340px] flex items-center gap-[7px]">
                                <RoundIcon />
                                <p className="text-title text-[20px] font-medium">
                                    100% Natural Product
                                </p>
                            </div>
                            <p className="text-pT text-p leading-p font-p w-[445px] mt-[12px] mb-[24px]">
                                Simply dummy text of the printing and
                                typesetting industry Lorem Ipsum
                            </p>

                            <div className="rounded-[49px] py-[29px] pl-[27px]  bg-[#ececec] w-[340px] flex items-center gap-[7px]">
                                <RoundIcon />
                                <p className="text-title text-[20px] font-medium">
                                    Increases resistance
                                </p>
                            </div>
                            <p className="text-pT text-p leading-p font-p w-[445px] mt-[12px] mb-[24px]">
                                Filling, and temptingly healthy, our Biona
                                Organic Granola with Wild Berries is just the
                                thing
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={veg} alt="veg" />
                    </div>
                </div>

                <div className="list_block">
                    <ul className="flex items-center gap-[30px] justify-center">
                        <li className="rounded-[30px] bg-white w-[257px] pt-[50px] pr-[38px] pb-[25px] pl-[38px] text-center">
                            <div className="bg-[#f9f8f8] rounded-[18px] py-[20px] px-[22px] w-[95px] ml-auto mr-auto mb-[15px]">
                                <BgIcon />
                            </div>

                            <h3 className="text-title text-h6Title font-main mb-[12px]">
                                Return Policy
                            </h3>

                            <p className="text-pT leading-p font-p text-p">
                                Simply dummy text of the printintypesetting
                                industry.
                            </p>
                        </li>

                        <li className="rounded-[30px] bg-white w-[257px] pt-[50px] pr-[38px] pb-[25px] pl-[38px] text-center">
                            <div className="bg-[#f9f8f8] rounded-[18px] py-[20px] px-[22px] w-[95px] ml-auto mr-auto mb-[15px]">
                                <EcoIcon />
                            </div>

                            <h3 className="text-title text-h6Title font-main mb-[12px]">
                                100% Fresh
                            </h3>

                            <p className="text-pT leading-p font-p text-p">
                                Simply dummy text of the printintypesetting
                                industry.
                            </p>
                        </li>

                        <li className="rounded-[30px] bg-white w-[257px] pt-[50px] pr-[38px] pb-[25px] pl-[38px] text-center">
                            <div className="bg-[#f9f8f8] rounded-[18px] py-[20px] px-[22px] w-[95px] ml-auto mr-auto mb-[15px]">
                                <TimeIcon />
                            </div>

                            <h3 className="text-title text-h6Title font-main mb-[12px]">
                                Support 24/7
                            </h3>

                            <p className="text-pT leading-p font-p text-p">
                                Simply dummy text of the printintypesetting
                                industry.
                            </p>
                        </li>

                        <li className="rounded-[30px] bg-white w-[257px] pt-[50px] pr-[38px] pb-[25px] pl-[38px] text-center">
                            <div className="bg-[#f9f8f8] rounded-[18px] py-[20px] px-[22px] w-[95px] ml-auto mr-auto mb-[15px]">
                                <GuardIcon />
                            </div>

                            <h3 className="text-title text-[21px] font-main mb-[12px]">
                                Secured Payment
                            </h3>

                            <p className="text-pT leading-p font-p text-p">
                                Simply dummy text of the printintypesetting
                                industry.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
