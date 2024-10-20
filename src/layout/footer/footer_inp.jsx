import React from "react";
import { PrimaryBtn } from "../../components/btns/button";

export const FooterInp = () => {
    return (
        <div className=" pt-[185px] pb-[117px] ">
            <div className="container">
                <div className="inp_block bg-[url('./assets/inp_back.png')] bg-cover bg-no-repeat py-[105px] px-[75px] rounded-[20px]">
                    <div className="wrapper flex items-center justify-between">
                        <div className="w-[370px]">
                            <h2 className="text-white text-h2Title font-main">
                                Subscribe to our Newsletter
                            </h2>
                        </div>

                        <form
                            className="flex items-center gap-[6px]"
                            method="post"
                        >
                            <input
                                className="text-p text-pT font-p w-[350px] py-[31px] rounded-[16px] bg-white px-[23px]"
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="Your Email Address"
                                aria-label="type your email"
                            />

                            <PrimaryBtn
                                children={"Subscribe"}
                                className={
                                    "bg-title rounded-[16px] py-[30px] px-[64px] text-white font-bold text-[20px]"
                                }
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
