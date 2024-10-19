import React from "react";
import { SoupIcon } from "./soup-icon";
import { PochtaIcon } from "./pochta-icon";

export const About = () => {
    return (
        <section className="about  bg-[#F9F8F8] pb-[199px] bg-no-repeat">
            <div className="container">
                <div className="about_block bg-[url('./assets/About.png')] pt-[186px] bg-cover ">
                    <div className="main_block w-[702px] ml-auto">
                        <p className="font-Yellowtail font-p text-green text-h4Title mb-[8px]">
                            About Us
                        </p>
                        <h2 className="text-title font-main text-h2Title mb-[14px]">
                            We Believe in Working Accredited Farmers
                        </h2>
                        <p className="font-p text-pT text-p leading-p mb-[46px]">
                            Simply dummy text of the printing and typesetting
                            industry. Lorem had ceased to been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>

                        <div className="detail_block">
                            <div className="first_detail flex items-center gap-[19px] mb-[30px]">
                                <div className="py-[23px] px-[21px] bg-white rounded-[20px]">
                                    <SoupIcon />
                                </div>

                                <div className="w-[445px]">
                                    <h3 className="text-title mb-[7px] font-main text-h6Title">
                                        Organic Foods Only
                                    </h3>
                                    <p className="text-pT text-p leading-p font-p">
                                        Simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>
                            </div>

                            <div className="first_detail flex items-center gap-[19px]">
                                <div className="py-[23px] px-[21px] bg-white rounded-[20px]">
                                    <PochtaIcon />
                                </div>

                                <div className="w-[445px]">
                                    <h3 className="text-title mb-[7px] font-main text-h6Title">
                                        Quality Standards
                                    </h3>
                                    <p className="text-pT text-p leading-p font-p">
                                        Simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
