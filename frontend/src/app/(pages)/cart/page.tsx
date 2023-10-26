import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
type Props = {};

export default function page({}: Props) {
  return (
    <div className="Container mt-[76px] flex flex-col items-center">
      <span className="text-[36px]">장바구니</span>
      <div className="MainBox w-[1097px] mt-[20px] ml-[149px] flex">
        <div className="PdBox w-[800px] h-[3000px] mr-[25px] border">
          <BsCheckCircle className="w-[40px] h-[40px]" />
          <BsCheckCircleFill style={{ color: "#21A71E" }} />
        </div>
        <div className="orderBox w-[272px] h-[432px] border fixed left-[1100px] top-[300px]"></div>
      </div>
    </div>
  );
}
