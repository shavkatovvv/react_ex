import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { RoutesLinks } from "../../routes/routes";
import { HeaderInp } from "./header_inp";

export const Header = () => {
    return (
        <header className="py-[75px]">
            <div className="container">
                <div className="block_main flex items-center justify-between ">
                    <div className="logo_block">
                        <Link>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="links_block">
                        <ul className="flex items-center gap-[40px]">
                            {RoutesLinks.map((item) => {
                                return (
                                    <Link key={item.id}>
                                        <li>
                                            <p className="text-p font-bold text-title">
                                                {item.name}
                                            </p>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>

                    <HeaderInp />
                </div>
            </div>
        </header>
    );
};
