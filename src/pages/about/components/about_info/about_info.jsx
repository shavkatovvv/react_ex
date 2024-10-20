import React from "react";
import soup from "../../../../assets/soup.png";
import { TrIcon } from "../tr-icon";
import { FabIcon } from "../fab-icon";
import { PrimaryBtn } from "../../../../components/btns/button";
import { RightIcon } from "../../../../components/hero/right-icon";

export const AboutInfo = () => {
    return (
        <section className="pt-[200px] pb-[143px]">
            <div className="container">
                <div className="wrapper flex items-center justify-between">
                    <div className="img_block">
                        <img src={soup} alt="soup" />
                    </div>

                    <div className="cont_block w-[680px]">
                        <div className="title_block w-[500px]">
                            <p className="font-Yellowtail text-green text-h4Title font-p mb-[8px]">
                                About Us
                            </p>

                            <h2 className="text-title font-main text-h2Title mb-[14px]">
                                We do Creative Things for Success
                            </h2>
                        </div>

                        <p className="text-pT text-p font-p leading-p mb-[48px]">
                            Simply dummy text of the printing and typesetting
                            industry. Lorem had ceased to been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>

                        <p className="text-pT text-p font-p leading-p mb-[48px]">
                            Simply dummy text of the printing and typesetting
                            industry. Lorem had ceased to been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>

                        <div className="detail_block flex items-center gap-[65px] ">
                            <div className="first_detail flex items-center gap-[15px] w-[295px]">
                                <TrIcon />
                                <h3 className="text-title font-medium text-h6Title">
                                    Modern Agriculture Equipment
                                </h3>
                            </div>

                            <div className="first_detail flex items-center gap-[15px] w-[295px]">
                                <FabIcon />
                                <h3 className="text-title font-medium text-h6Title">
                                    No growth hormones are used
                                </h3>
                            </div>
                        </div>

                        <PrimaryBtn
                            children={"Explore More"}
                            className={
                                "bg-title text-[20px] font-bold text-white py-[28px] px-[39px] rounded-[16px] flex items-center gap-[10px] mt-[58px]"
                            }
                            nextIcon={<RightIcon />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
