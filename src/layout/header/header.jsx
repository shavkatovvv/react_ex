import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { HeaderInp } from "./header_inp";

export const Header = () => {
    return (
        <header className="py-[75px]">
            <div className="container">
                <div className="block_main flex items-center justify-between ">
                    <div className="logo_block">
                        <Link to={"/"}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="links_block">
                        <ul className="flex items-center gap-[40px]">
                            <Link to={"/"}>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        Home
                                    </p>
                                </li>
                            </Link>

                            <Link to={"/about"}>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        About
                                    </p>
                                </li>
                            </Link>

                            <Link>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        Pages
                                    </p>
                                </li>
                            </Link>

                            <Link to={"/shop"}>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        Shop
                                    </p>
                                </li>
                            </Link>

                            <Link>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        Projects
                                    </p>
                                </li>
                            </Link>

                            <Link>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        News
                                    </p>
                                </li>
                            </Link>

                            <Link to={"/our-team"}>
                                <li>
                                    <p className="text-p font-bold text-title">
                                        OurTeam
                                    </p>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <HeaderInp />
                </div>
            </div>
        </header>
    );
};
