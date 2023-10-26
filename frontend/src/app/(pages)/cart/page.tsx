import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
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
        <div className="orderBox w-[272px] h-[463px] sticky left-[1100px] top-[300px]">
          <div className="RightBox w-[272px] border border-opacity-30">
            <div className="OrderTop w-[272px] p-[20px]">
              <div className="Address text-[20px] flex items-center">
                <GrLocation />
                <span className="ml-[5px]">배송지</span>
              </div>
              <div className="text-[20px]">
                광주 광산구 하남산단 <br />
                6번로 107
              </div>
              <button className="SubmitBtn w-[225px] h-[42px] mt-[11px] mb-[11px] flex items-center justify-center text-[#33C130] text-[12px] border border-[#33C130]">
                배송지 변경
              </button>
            </div>
            <hr />
            <div className="OrderBottom w-[272px] p-[20px] text-[16px]">
              <div className="flex justify-between mb-[10px]">
                <span>상품금액</span>
                <span>26,700원</span>
              </div>
              <div className="flex justify-between mb-[10px]">
                <span>상품할인금액</span>
                <span>-8,010원</span>
              </div>
              <div className="flex justify-between">
                <span>배송비</span>
                <span>+3,000원</span>
              </div>
            </div>
            <hr />
            <div className="OrderPrice w-[272px] p-[20px] text-[16px]">
              <div className="flex justify-between">
                <span>결제예정금액</span>
                <b>
                  <span>21,690원</span>
                </b>
              </div>
            </div>
          </div>
          <button className="Submit w-[272px] h-[62px] mt-[11px] flex items-center justify-center bg-[#33C130] text-white">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}
