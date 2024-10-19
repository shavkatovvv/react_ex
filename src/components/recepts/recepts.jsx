import React from "react";
import { PrimaryBtn } from "../btns/button";

export const Recepts = () => {
    return (
        <section className="py-[187px] bg-[#f1f8f4]">
            <div className="container">
                <div className="recepts_block">
                    <ul className="flex items-center gap-[42px]">
                        <li className="py-[255px] pl-[100px] bg-[url('./assets/r_1.png')] w-[480px] bg-no-repeat">
                            <PrimaryBtn
                                children={"Organic Juice"}
                                className={
                                    "text-title font-medium text-h6Title bg-white py-[33px] px-[83px] rounded-[20px]"
                                }
                            />
                        </li>

                        <li className="py-[255px] pl-[100px] bg-[url('./assets/r_2.png')] w-[480px] bg-no-repeat">
                            <PrimaryBtn
                                children={"Organic Food"}
                                className={
                                    "text-title font-medium text-h6Title bg-white py-[33px] px-[83px] rounded-[20px]"
                                }
                            />
                        </li>

                        <li className="py-[255px] pl-[100px] bg-[url('./assets/r_3.png')] w-[480px] bg-no-repeat">
                            <PrimaryBtn
                                children={"Nuts Cookis"}
                                className={
                                    "text-title font-medium text-h6Title bg-white py-[33px] px-[83px] rounded-[20px]"
                                }
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
