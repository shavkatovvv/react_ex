import React from "react";
import { MainData } from "../../data/main-data/main-datas";
import { Link } from "react-router-dom";
import { StarIcon } from "../../data/star-icon";
import { PrimaryBtn } from "../btns/button";
import { RightIcon } from "../hero/right-icon";

export const OurProducts = () => {
    return (
        <section className="py-[176px]">
            <div className="container">
                <div className="pr_block">
                    <p className="font-Yellowtail mb-[8px] font-p text-green text-h4Title text-center">
                        Categories
                    </p>

                    <h2 className="text-title font-main text-h2Title text-center mb-[40px]">
                        Our Products
                    </h2>

                    <ul className="flex items-center flex-wrap gap-[20px] justify-center mb-[120px]">
                        {MainData.slice(0, 8).map((item) => {
                            return (
                                <Link key={item.id}>
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
                    <div className="w-[250px] ml-auto mr-auto">
                        <PrimaryBtn
                            children={"Load More"}
                            nextIcon={<RightIcon />}
                            className={
                                "bg-title py-[28px] px-[46px] flex items-center gap-[10px] text-white font-bold text-p rounded-[16px]"
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
