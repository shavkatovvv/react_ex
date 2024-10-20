import React from "react";
import { exportsData } from "../../../../data/experts-data/experts-datas";
import { FacebookIcon } from "../../../../layout/footer/facebook-icon";
import { InstagramIcon } from "../../../../layout/footer/instagram-icon";
import { TwitterIcon } from "../../../../layout/footer/twitter-icon";

export const Experts = () => {
    return (
        <section className="pt-[177px] pb-[200px]">
            <div className="container">
                <div className="title_block text-center mb-[42px]">
                    <p className="font-Yellowtail text-green font-p text-h4Title mb-[5px]">
                        Team
                    </p>
                    <h2 className="text-title text-h2Title font-main mb-[16px]">
                        Our Organic Experts
                    </h2>
                    <p className="text-pT text-p font-p leading-p w-[855px] ml-auto mr-auto">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem had ceased to been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley.
                    </p>
                </div>

                <div className="cont_block">
                    <ul className="flex items-center gap-[27px]">
                        {exportsData.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="rounded-[20px]  pb-[34px] bg-[#F9F8F8]"
                                >
                                    <div>
                                        <img
                                            className="rounded-t-lg"
                                            src={item.img}
                                            alt="people"
                                        />
                                    </div>
                                    <div className="px-[28px] pt-[35px] flex items-center justify-between">
                                        <div>
                                            <h3 className="text-title text-h6Title font-main mb-[3px]">
                                                {item.name}
                                            </h3>
                                            <p className="font-Yellowtail text-green font-p text-h6Title">
                                                {item.about}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-[17px]">
                                            <FacebookIcon />
                                            <TwitterIcon />
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
