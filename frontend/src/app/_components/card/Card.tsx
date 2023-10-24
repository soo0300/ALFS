import React from "react";
import Image from "next/image";
import BreadImg from "../../_asset/img/Testbread.png";
import { Button } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { BsChatLeftDots } from "react-icons/bs";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className="w-[178px] h-[374px]">
      <Image src={BreadImg} className="w-[178px] h-[240px]" alt="product image" />
      <Button className="w-[178px] h-[32px] rounded-none mt-[18px] border-2 text-[15px] flex items-center justify-center">
        <LuShoppingCart className="mr-2" />
        담기
      </Button>
      <div className="CardFooter w-[178px] h-[80px] mt-[4px]">
        <div className="CardTitle w-[full] h-[15px] text-[13px]">[도제] 촉촉한 생식빵 2종 (택1)</div>
        <div className="CardSubtitle w-[full] h-[10px] opacity-[0.3] mt-[7px] text-[10px]">수분 가득 쫄깃한 식빵</div>
        <div className="CardPrice w-[full] h-[16px] text-[14px] font-bold mt-[9px]">6,300원</div>
        <div className="CardComment w-[full] h-[6px] text-[6px] mt-[7px] opacity-0.3 flex items-center">
          <BsChatLeftDots className="mr-0.5" />
          9,999+
        </div>
      </div>
    </div>
  );
}
