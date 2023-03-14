import React from "react";
import LandingImg from "../Assets/LandingImg.svg";
import WaveOne from "../Assets/WaveOne.svg";

function LandingPage() {
  return (
    <div className=" w-[100%] h-[740px] absolute left-0 top-134 bg-gradient-to-r from-pink-500 to-indigo-800">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="h-[auto]">
          <div className="ml-[172px] mt-[142px] mr-[73px]">
            <span className="text-[#FFFFFF] font-[poppins] leading-60 xl:text-[40px] sm:text-base md:text-lg lg:text-xl not-italic font-[400px] leading-[60px]">
              We provide easy solution to exchange your Bitcoin/ GiftCard for
              money.
            </span>
            <div className="mt-[21px]">
              <span className="text-[#FFFFFF] font-[poppins] text-[18px] not-italic font-[400px] mt-[21px]">
                CoinBase is a platform for trading your bitcoin and giftcard at
                the best rate, why not give us a trial.
              </span>

              <div className="mt-[30px]">
              <button class="w-157 h-54 px-[36px] py-[8px] absolute bg-white text-[poppins] text-[14px] font-[700] text-[bg-gradient-to-r from-pink-500 to-indigo-800] rounded-full">
                Click me
              </button>
              </div>

            </div>
          </div>
        </div>
        <div class="h-[auto]">
          <img src={LandingImg} className="mt-[60px] mr-[88px]" alt="LandingImg"></img>
        </div>
      </div>
      <img src={WaveOne} className="w-[100%]" alt="WaveOne"></img>
    </div>
  );
}

export default LandingPage;
