"use client";

import React, { useState } from "react";
import DetailImg from "../../_asset/img/TestDetail.png";
import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  const [count, setCount] = useState<number>(1);
  const changeCount = (operator: string) => {
    if (operator === "+") {
      setCount(count + 1);
    } else if (operator === "-" && count > 1) {
      setCount(count - 1);
    }
  };
  const formattedPrice = new Intl.NumberFormat().format(6230 * count);
  return (
    <div className="DetailBox w-[1130px] h-[945px] mt-[109px] ml-[149px] flex">
      <div className="ImgBox w-[414px] h-[612px]">
        <Image src={DetailImg} className="DetailImg w-[414px] h-[622px]" alt="detail Img" />
      </div>
      <div className="DetailDescriptionBox w-[633px] h-[945px] ml-[83px]">
        <div className="Title w-[633px] h-[26px] text-[24px]">[일일특가][압구정주꾸미] 주꾸미 볶음 300g</div>
        <div className="Subtitle w-[633px] h-[26px] text-[16px] opacity-[0.3] mt-[7px]">마늘의 감칠맛이 듬뿍</div>
        <div className="Price w-[633px] h-[26px] mt-[7px] text-[20px]">
          <span className="Discount" style={{ color: "red" }}>
            30%
          </span>{" "}
          6,230원
        </div>
        <div className="Cost w-[full] h-[14px] mt-[7px] text-[13px] opacity-[0.3] line-through">8,900원</div>
        <div className="Origin w-[full] h-[26px] text-[20px] mt-[7px]">원산지 : 상세정보 참조</div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center mt-[31px] text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">배송</div>
          <div className="DeliveryContents w-[503px] h-[full]">샛별배송</div>
        </div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">판매자</div>
          <div className="DeliveryContents w-[503px] h-[full]">알프스</div>
        </div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">포장타입</div>
          <div className="DeliveryContents w-[503px] h-[full]">
            냉동(종이포장) <br />
            <span className="text-[12px] opacity-[0.5]">택배배송은 에코포장이 스티로폼으로 대체됩니다.</span>
          </div>
        </div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">판매단위</div>
          <div className="DeliveryContents w-[503px] h-[full]">1팩</div>
        </div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">중량/용량</div>
          <div className="DeliveryContents w-[503px] h-[full]">300g</div>
        </div>
        <div className="Delivery w-[full] h-[63px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">알레르기정보</div>
          <div className="DeliveryContents w-[503px] h-[full]">
            -대두, 밀 함유
            <br />
            -이 제품은 알레르기 발생 가능성이 있는 고등어, 게, 새우, 오징어, 조개류(굴, 전복, 홍합을 포함)을 사용한
            제품과 같은 제조시설에서 제조
          </div>
        </div>
        <div className="Delivery w-[full] h-[87px] border-t border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">유통기한(또는 소비기한) 정보</div>
          <div className="DeliveryContents w-[503px] h-[full]">
            수령일 포함 180일 이상 남은 제품을 보내드립니다.(총 유통기한 365일)
          </div>
        </div>
        <div className="Delivery w-[full] h-[87px] border-t border-b border-opacity-10 flex items-center text-[15px]">
          <div className="DeliveryTitle w-[130px] h-[full]">상품선택</div>
          <div className="DeliveryContents w-[503px] h-[full] pl-[5px] ml-[60px] mt-[13px] border border-opacity-10">
            [일일특가][압구정주꾸미] 주꾸미 볶음 300g
            <br />
            <div className="flex justify-between items-center w-[full] h-[40px]">
              <div className="ButtonBox w-[81px] h-[27px] flex">
                <button
                  onClick={() => changeCount("-")}
                  className="w-[27px] h-[27px] items-center justify-center border-t border-l border-b border-opacity-50"
                >
                  -
                </button>
                <div className="Count w-[27px] h-[27px] border-t border-b border-opacity-50 flex items-center justify-center">
                  {count}
                </div>
                <button
                  onClick={() => changeCount("+")}
                  className="w-[27px] h-[27px] items-center justify-center border-t border-b border-r border-opacity-50"
                >
                  +
                </button>
              </div>
              <div className="flex ">
                <span className="line-through opacity-[0.5] mr-[10px]">8,900</span>
                <span className="mr-[45px]">6,230원</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Totalprice mt-[36px] h-[59px] flex justify-end items-end">
          <span className="text-[15px] pb-[10px]">총 상품금액 : </span>
          <span className="text-[40px]">{formattedPrice}원</span>
        </div>
        <div className="Submit w-[633px] h-[62px] flex justify-end">
          <button className="SubmitBtn w-[472px] h-[62px] mt-[11px] flex items-center justify-center bg-[#33C130] text-white">
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}
