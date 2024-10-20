import React from "react";
import { Link } from "react-router-dom";
import { MainData } from "../../data/main-data/main-datas";
import { StarIcon } from "../../data/star-icon";

export const ProductRend = () => {
    return (
        <>
            <div className="container">
                <div className="mt-[140px]">
                    <h2 className="text-title text-h2Title font-main text-center mb-[40px]">
                        Related Products
                    </h2>

                    <ul className="flex items-center flex-wrap gap-[20px] justify-center mb-[120px]">
                        {MainData.slice(0, 4).map((item) => {
                            return (
                                <Link to={`/prod-det/${item.id}`} key={item.id}>
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
        </>
    );
};
