import React from "react";
import LandingImg from "../Assets/LandingImg.svg";
import WaveOne from "../Assets/WaveOne.svg";
import Welcome from "../Assets/Welcome.svg";

function LandingPage() {
  return (
    <>
    <div>
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
                  CoinBase is a platform for trading your bitcoin and giftcard
                  at the best rate, why not give us a trial.
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
            <img
              src={LandingImg}
              className="mt-[60px] mr-[88px]"
              alt="LandingImg"
            ></img>
          </div>
        </div>
        <img src={WaveOne} className="w-[100%]" alt="WaveOne"></img>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="bg-gray-200 h-[500px] p-4">
          <div className="mt-[51px] ml-[218px]">
            <img src={Welcome} alt="WelcomeImg" className="w-[100%]"></img>
          </div>
        </div>

        <div className="bg-gray-200 h-[500px] p-4">
          <div className="mt-[37px] ml-[36px] mr-[384px] xl:w-[315px] xl:h-[65px]">
            <p className="bg-gradient-to-r from-pink-500 to-indigo-800 bg-clip-text text-transparent font-[poppins] text-[28px] font-[700] leading-[65px]">
              Welcome to CoinBase
            </p>
          </div>
          <div className="mt-[36px] ml-[36px] mr-[157px] xl:w-[542px] xl:h-[268px]">
            <p className="font-[poppins] text-[16px] font-[400] leading-[40px] left-53.4% right-10.47% text-[#333333]">
            We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.
            </p>
          </div>
          <div className="mt-[35px] ml-[36px] mr-[541.81px] xl:w-[157px] xl-h[54px]">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-800 text-[white] px-[24px] py-[8px]">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

    </>
  );
}

export default LandingPage;
