import React from "react";
import { MainData } from "../../data/main-data/main-datas";
import { organicData } from "../../data/organic-data/organic-datas";
import { Link, useParams } from "react-router-dom";
import { forYou } from "../../data/for-you-data/forYou-datas";
import { StarIcon } from "../../data/star-icon";
import { PrimaryBtn } from "../../components/btns/button";
import { RightIcon } from "../../components/hero/right-icon";
import { ProductRend } from "./product-rend";
import { Cont } from "./cont";

export const ProdDetail = () => {
    const { id } = useParams();
    const main_product = MainData.find((item) => item.id == parseInt(id));
    const organic = organicData.find((item) => item.id == parseInt(id));
    const for_you = forYou.find((item) => item.id == parseInt(id));

    return (
        <>
            {main_product && (
                <>
                    <div className="container">
                        <div className="wrapper flex items-center gap-[88px]">
                            <div className="bg-whiteGray  rounded-[20px]">
                                <img
                                    className="w-[580px]"
                                    src={main_product.img}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="font-semibold text-h3Title text-title mb-[9px]">
                                    {main_product.name}
                                </h2>
                                <StarIcon />
                                <div className="price_block flex items-center gap-[9px] mt-[9px]">
                                    <p className="text-[20px] font-semibold text-[#b8b8b8] line-through">
                                        {main_product.lastPrice}
                                    </p>
                                    <p className="text-title font-bold text-h6Title">
                                        {main_product.price}
                                    </p>
                                </div>

                                <p className="text-pT text-p font-p leading-p w-[658px] mt-[27px] mb-[35px]">
                                    Simply dummy text of the printing and
                                    typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer
                                    took a galley.
                                </p>

                                <div className="flex items-center gap-[22px]">
                                    <p className="text-title font-bold text-[20px]">
                                        Quantity :
                                    </p>

                                    <PrimaryBtn
                                        children={"1"}
                                        className={
                                            "bg-white rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-title "
                                        }
                                    />

                                    <PrimaryBtn
                                        children={"Add To Cart"}
                                        className={
                                            "bg-title rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-white flex items-center gap-[10px]"
                                        }
                                        nextIcon={<RightIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Cont />
                    <ProductRend />
                </>
            )}
            {organic && (
                <>
                    <div className="container">
                        <div className="wrapper flex items-center gap-[88px]">
                            <div className="bg-whiteGray  rounded-[20px]">
                                <img
                                    className="w-[580px]"
                                    src={organic.img}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="font-semibold text-h3Title text-title mb-[9px]">
                                    {organic.name}
                                </h2>
                                <StarIcon />
                                <div className="price_block flex items-center gap-[9px] mt-[9px]">
                                    <p className="text-[20px] font-semibold text-[#b8b8b8] line-through">
                                        {organic.lastPrice}
                                    </p>
                                    <p className="text-title font-bold text-h6Title">
                                        {organic.price}
                                    </p>
                                </div>

                                <p className="text-pT text-p font-p leading-p w-[658px] mt-[27px] mb-[35px]">
                                    Simply dummy text of the printing and
                                    typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer
                                    took a galley.
                                </p>

                                <div className="flex items-center gap-[22px]">
                                    <p className="text-title font-bold text-[20px]">
                                        Quantity :
                                    </p>

                                    <PrimaryBtn
                                        children={"1"}
                                        className={
                                            "bg-white rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-title "
                                        }
                                    />

                                    <PrimaryBtn
                                        children={"Add To Cart"}
                                        className={
                                            "bg-title rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-white flex items-center gap-[10px]"
                                        }
                                        nextIcon={<RightIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                        <Cont />
                        <ProductRend />
                    </div>
                </>
            )}

            {for_you && (
                <>
                    <div className="container">
                        <div className="wrapper flex items-center gap-[88px]">
                            <div className="bg-whiteGray  rounded-[20px]">
                                <img
                                    className="w-[580px]"
                                    src={for_you.img}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="font-semibold text-h3Title text-title mb-[9px]">
                                    {for_you.name}
                                </h2>
                                <StarIcon />

                                <p className="text-pT text-p font-p leading-p w-[658px] mt-[27px] mb-[35px]">
                                    Simply dummy text of the printing and
                                    typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer
                                    took a galley.
                                </p>

                                <div className="flex items-center gap-[22px]">
                                    <p className="text-title font-bold text-[20px]">
                                        Quantity :
                                    </p>

                                    <PrimaryBtn
                                        children={"1"}
                                        className={
                                            "bg-white rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-title "
                                        }
                                    />

                                    <PrimaryBtn
                                        children={"Add To Cart"}
                                        className={
                                            "bg-title rounded-[16px] py-[28px] px-[61px] border border-title font-bold text-[20px] text-white flex items-center gap-[10px]"
                                        }
                                        nextIcon={<RightIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                        <Cont />
                        <ProductRend />
                    </div>
                </>
            )}
        </>
    );
};
