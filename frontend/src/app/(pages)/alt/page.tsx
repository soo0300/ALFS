"use client";

import { AlterList, AlterDetail, AlterAll } from "@/app/api/alt/AltPage";
import React, { useState, useEffect } from "react";
type Props = {};

export default function Page({}: Props) {
  const [alterList, setAlterList] = useState<Array<string>>([]);
  const [selectedButtonIndices, setSelectedButtonIndices] = useState<number[]>([]);
  const [totalCnt, setTotalCnt] = useState<number>(0);
  useEffect(() => {
    const fetchAlterData = async () => {
      const res: any = await AlterList();
      console.log(res);
      setAlterList(res);
      const CatName: Array<string> = res.map((item: any) => item.alternativeName);
      console.log("카테고리이름", CatName);
      const Allres: Array<string> = await AlterAll(CatName);
      console.log("대체식품 전체조회", Allres, Allres.length);
      setTotalCnt(Allres.length);
    };
    fetchAlterData();
  }, []);

  const handleButtonClick = (index: number) => {
    if (selectedButtonIndices.includes(index)) {
      setSelectedButtonIndices(selectedButtonIndices.filter((i) => i !== index));
    } else {
      setSelectedButtonIndices([...selectedButtonIndices, index]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-5 gap-4 w-800 border border-[#33C130] p-4">
        {alterList &&
          alterList.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`text-center ${selectedButtonIndices.includes(index) ? "text-[#33C130]" : ""}`}
            >
              <div>{item.alternativeName}</div>
            </button>
          ))}
      </div>
      <div className="Container flex flex-col justify-center w-[1000px] h-auto mt-[124px]">총 {totalCnt}건</div>
    </div>
  );
}
