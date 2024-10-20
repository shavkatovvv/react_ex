import React from "react";
import { forYou } from "../../../../data/for-you-data/forYou-datas";
import { Link } from "react-router-dom";

export const Offer = () => {
    return (
        <section className="py-[188px] bg-title">
            <div className="container">
                <div className="title_block text-center mb-[33px]">
                    <p className="font-Yellowtail text-green text-h4Title font-p mb-[8px]">
                        About Us
                    </p>
                    <h2 className="text-white text-h2Title font-main">
                        What We Offer for You
                    </h2>
                </div>

                <div className="cont_block">
                    <ul className="flex items-center gap-[21px] justify-center">
                        {forYou.map((item) => {
                            return (
                                <Link to={`/prod-det/${item.id}`} key={item.id}>
                                    <li className="text-center w-[334px]">
                                        <div>
                                            <img
                                                className="rounded-[20px] w-[334px] h-[314px]"
                                                src={item.img}
                                                alt="img"
                                            />
                                        </div>
                                        <p className="font-medium text-h6Title text-white mt-[24px]">
                                            {item.name}
                                        </p>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
