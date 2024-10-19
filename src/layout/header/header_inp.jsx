import React from "react";
import { SearchIcon } from "./search-icon";
import { BagIcon } from "./bag-icon";

export const HeaderInp = () => {
    return (
        <div className="inp_block flex items-center gap-[18px]">
            <form className="flex items-center relative" method="post">
                <input
                    className="w-[376px] rounded-[36px] bg-inp py-[16px]"
                    type="search"
                    name="userinp"
                    id="search_user"
                    aria-label="search"
                />

                <button
                    className="rounded-[100%] bg-green py-[13px] px-[17px] absolute right-[2%]"
                    type="submit"
                >
                    {<SearchIcon />}
                </button>
            </form>
            <div className=" flex items-center gap-[12px]  count_block border border-[#e0e0e0] py-[5px] rounded-[33px] w-[159px] ">
                <button className="rounded-[100%] bg-title py-[8px] px-[12px] ml-[6px] ">
                    {<BagIcon />}
                </button>
                <p className="font-semibold text-p text-title ">Cart (0)</p>
            </div>
        </div>
    );
};
