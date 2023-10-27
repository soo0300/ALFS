"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Alps from "../app/_asset/img/알프스.jpg";

type Props = {};

export default function Page({}: Props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-w-[1000px] flex justify-center">
      <div className="w-[1000px]">
        <div data-aos="fade-up" className="h-[300px] border-[1px]">
          <Image src={Alps} alt="asdf"></Image>
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
        <div data-aos="fade-up" className="h-[300px]">
          asdfad
        </div>
      </div>
    </div>
  );
}
