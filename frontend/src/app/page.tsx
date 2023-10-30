"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Alps from "../app/_asset/img/알프스.jpg";
import Emogi from "../app/_components/animate/Emoji";
import Food from "./_components/animate/food";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-w-[1000px] flex justify-center">
      <div className="flex flex-col">
        <div className="w-[1000px] flex">
          <div data-aos="fade-up" className=" w-[500px] h-[300px]  flex justify-center items-center">
            <p className="text-[30px]">
              새로운 기능!
              <br />
              알러지 기능을 확인해보세요!
            </p>
          </div>
          <div data-aos="fade-up" className=" w-[500px] h-[300px] flex justify-center items-center">
            <Food />
          </div>
        </div>

        <div className="w-[1000px] flex"></div>

        <div className="w-[1000px] flex">
          <div data-aos="fade-up" className=" w-[500px] h-[300px] border-[1px] flex justify-center items-center">
            <p className="text-[30px]">
              새로운 기능!
              <br />
              알러지 기능을 확인해보세요{" "}
            </p>
            {/* <Image src={Alps} alt="asdf"></Image> */}
          </div>
          <div data-aos="fade-up" className=" w-[500px] h-[300px] border-[1px]">
            asdf
            {/* <Image src={Alps} alt="asdf"></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
}
