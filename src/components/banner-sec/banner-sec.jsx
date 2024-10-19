import React from "react";

export const BannerSec = () => {
    return (
        <section className="pt-[154px] pb-[190px]">
            <div className="container">
                <div className="wrapper flex items-center gap-[36px] justify-center">
                    <div className="first_banner w-[735px] bg-[url('./assets/banner_1.png')] bg-cover bg-no-repeat py-[110px] pl-[54px] rounded-[20px]">
                        <p className="font-Yellowtail text-white font-p text-h4Title mb-[5px]">
                            Natural!!
                        </p>
                        <h2 className="text-h3Title text-white font-main w-[277px]">
                            Get Garden Fresh Fruits
                        </h2>
                    </div>

                    <div className="first_banner w-[735px] bg-[url('./assets/banner_2.png')] bg-cover bg-no-repeat py-[110px] pl-[54px] rounded-[20px]">
                        <p className="font-Yellowtail text-green font-p text-h4Title mb-[5px]">
                            Offer!!
                        </p>
                        <h2 className="text-h3Title text-title font-main w-[290px]">
                            Get 10% off on Vegetables
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
