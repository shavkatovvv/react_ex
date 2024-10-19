import React from "react";
import woman from "../../assets/woman.jpg";
import { StarIcon } from "../../data/star-icon";

export const Testi = () => {
    return (
        <section className="py-[164px] bg-[url('./assets/Counter.png')]  bg-cover bg-no-repea">
            <div className="container">
                <div className="testimonial_block text-center">
                    <p className="font-Yellowtail text-green text-h4Title font-p mb-[8px]">
                        Testimonial
                    </p>
                    <h2 className="text-title font-main text-h2Title mb-[60px]">
                        What Our Customer Saying?
                    </h2>

                    <div className="w-[116px] ml-auto mr-auto mb-[20px]">
                        <img className="rounded-full" src={woman} alt="woman" />
                    </div>

                    <button className="mb-[25px]">{<StarIcon />}</button>

                    <p className="text-p font-p text-pT leading-p w-[780px] ml-auto mr-auto mb-[20px]">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been.
                    </p>

                    <h3 className="text-title font-semibold text-h6Title mb-[5px]">
                        Sara Taylor
                    </h3>

                    <p className="text-pT text-[15px] font-p leading-p mb-[129px]">
                        Consumer
                    </p>

                    <div className="h-[2px] bg-[#e0e0e0]"></div>

                    <div className="detail_block mt-[102px]">
                        <ul className="flex items-center gap-[62px] justify-center">
                            <li className="rounded-full py-[60px] px-[44px] bg-[#F1F1F1] border  border-[green] w-[227px]">
                                <p className="text-title font-main text-h2Title ">
                                    100%
                                </p>
                                <p className="text-p text-pT font-semibold leading-p">
                                    Organic
                                </p>
                            </li>

                            <li className="rounded-full py-[60px] px-[44px] bg-[#F1F1F1] border  border-[green] w-[227px]">
                                <p className="text-title font-main text-h2Title ">
                                    285
                                </p>
                                <p className="text-p text-pT font-semibold leading-p">
                                    Active Product
                                </p>
                            </li>

                            <li className="rounded-full py-[60px] px-[44px] bg-[#F1F1F1] border  border-[green] w-[227px]">
                                <p className="text-title font-main text-h2Title ">
                                    350+
                                </p>
                                <p className="text-p text-pT font-semibold leading-p">
                                    Organic Orchads
                                </p>
                            </li>

                            <li className="rounded-full py-[60px] px-[44px] bg-[#F1F1F1] border  border-[green] w-[227px]">
                                <p className="text-title font-main text-h2Title ">
                                    25+
                                </p>
                                <p className="text-p text-pT font-semibold leading-p">
                                    Years of Farming
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
