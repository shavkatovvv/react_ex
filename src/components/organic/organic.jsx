import React from "react";
import { PrimaryBtn } from "../btns/button";
import { RightIcon } from "../hero/right-icon";
import { organicData } from "../../data/organic-data/organic-datas";
import { Link } from "react-router-dom";
import { StarIcon } from "../../data/star-icon";

export const Organic = () => {
    return (
        <section className="bg-title py-[200px]">
            <div className="container">
                <div className="main_block ">
                    <div className="organic_block flex items-center  justify-between mb-[50px]">
                        <div className="title_block">
                            <p className="font-Yellowtail text-green font-p text-h4Title mb-[8px]">
                                Offer
                            </p>
                            <h2 className="text-white text-h2Title font-main">
                                We Offer Organic For You
                            </h2>
                        </div>

                        <PrimaryBtn
                            children={"View All Product"}
                            className={
                                "font-bold text-[20px] text-title   px-[64px] bg-yellow flex items-center gap-[10px] rounded-[16px] h-[79px]"
                            }
                            nextIcon={<RightIcon />}
                        />
                    </div>

                    <div className="product_block">
                        <ul className="flex items-center gap-[20px] ">
                            {organicData.map((item) => {
                                return (
                                    <Link
                                        to={`/prod-det/${item.id}`}
                                        key={item.id}
                                    >
                                        <li className="bg-whiteGray rounded-[30px] pt-[40px] pb-[17px] px-[25px] w-[369px]">
                                            <div className="text-white text-[15px] font-semibold py-[5px] px-[12px] bg-title rounded-[8px] mb-[10px] inline-block">
                                                {item.category}
                                            </div>
                                            <div className="p-[20px]">
                                                <img
                                                    className="w-[359px] h-[359px]"
                                                    src={item.img}
                                                    alt="pr"
                                                />
                                            </div>

                                            <h3 className="text-title text-p font-semibold mb-[19px]">
                                                {item.name}
                                            </h3>
                                            <div className="bg-gray h-[2px]" />
                                            <div className="mt-[6px] flex items-center justify-between">
                                                <div className="flex items-center gap-[11px]">
                                                    <p className="line-through text-gray text-[15px] font-semibold">
                                                        {item.lastPrice}
                                                    </p>
                                                    <p className="text-title text-p font-bold">
                                                        {item.price}
                                                    </p>
                                                </div>
                                                <button>{<StarIcon />}</button>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
