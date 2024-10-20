import React from "react";
import { FooterInp } from "./footer_inp";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { InstagramIcon } from "./instagram-icon";
import { FacebookIcon } from "./facebook-icon";
import { TwitterIcon } from "./twitter-icon";
import { PinterestIcon } from "./pinterest-icon";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FooterInp />
                <div className="wrapper flex gap-[45px] justify-center">
                    <div className="cont_block w-[285px] text-right">
                        <h3 className="font-bold text-title text-h5Title mb-[32px]">
                            Contact Us
                        </h3>

                        <div className="email mb-[32px]">
                            <h4 className="leading-p text-opBlack font-bold mb-[6px] text-[20px] ">
                                Email
                            </h4>
                            <p className="leading-p text-opBlack font-p text-[20px]">
                                needhelp@Organia.com
                            </p>
                        </div>

                        <div className="email mb-[32px]">
                            <h4 className="leading-p text-opBlack font-bold mb-[6px] text-[20px] ">
                                Phone
                            </h4>
                            <p className="leading-p text-opBlack font-p text-[20px]">
                                666 888 888
                            </p>
                        </div>

                        <div className="email mb-[32px]">
                            <h4 className="leading-p text-opBlack font-bold mb-[6px] text-[20px] ">
                                Address
                            </h4>
                            <p className="leading-p text-opBlack font-p text-[20px]">
                                88 road, borklyn street, USA
                            </p>
                        </div>
                    </div>

                    <div className="w-[1px] h-[370px] bg-[#d4d4d4]"></div>

                    <div className="main_block w-[550px] text-center">
                        <div className="w-[200px] ml-auto mr-auto mb-[23px]">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <p className="text-pT font-p text-p leading-p mb-[49px]">
                            Simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum simply dummy text of the
                            printing
                        </p>

                        <div className="social_block">
                            <ul className="flex items-center gap-[15px] justify-center">
                                <li className="bg-opGreen p-[20px] rounded-full">
                                    <button>{<InstagramIcon />}</button>
                                </li>

                                <li className="bg-opGreen p-[20px] rounded-full">
                                    <button>{<FacebookIcon />}</button>
                                </li>

                                <li className="bg-opGreen p-[20px] rounded-full">
                                    <button>{<TwitterIcon />}</button>
                                </li>

                                <li className="bg-opGreen p-[20px] rounded-full">
                                    <button>{<PinterestIcon />}</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[1px] h-[370px] bg-[#d4d4d4]"></div>

                    <div className="utility">
                        <h3 className="text-title font-bold text-h5Title mb-[24px]">
                            Utility Pages
                        </h3>

                        <ul>
                            <li>
                                <p className="text-p font-p text-pT mb-[35px]">
                                    Style Guide
                                </p>
                            </li>
                            <li>
                                <p className="text-p font-p text-pT mb-[35px]">
                                    404 Not Found
                                </p>
                            </li>
                            <li>
                                <p className="text-p font-p text-pT mb-[35px]">
                                    Password Protected
                                </p>
                            </li>
                            <li>
                                <p className="text-p font-p text-pT mb-[35px]">
                                    Licences
                                </p>
                            </li>
                            <li>
                                <p className="text-p font-p text-pT mb-[15px]">
                                    Changelog
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
