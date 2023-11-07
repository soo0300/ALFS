"use client";

import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import CartItem from "@/app/_components/cartItem/CartItem";
import { CartList } from "@/app/api/cart/CartPage";
import SnowImage from "../../_asset/img/SnowImage.svg";
import WaterDropImage from "../../_asset/img/WaterDropImage.svg";
import SunImage from "../../_asset/img/SunImage.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type Props = {};

type CartData = {
  basket_id: number;
  count: number;
  product: {
    id: number;
    name: string;
    title: string;
    price: number;
    sale: number;
    img: string;
  };
  isCheck: boolean;
  pack: string;
};

export default function Page({}: Props) {
  const [isAllCheck, setIsAllCheck] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(3000);
  const [memberData, setMemberData] = useState<CartData[]>([]);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [isFrozenVisible, setFrozenVisible] = useState<boolean>(false);
  const [isRefrigeratedVisible, setRefrigeratedVisible] = useState<boolean>(false);
  const [isRoomTemperatureVisible, setRoomTemperatureVisible] = useState<boolean>(false);
  const toggleFrozenPV = () => {
    setFrozenVisible(!isFrozenVisible);
  };
  const toggleRefrigeratedPV = () => {
    setRefrigeratedVisible(!isRefrigeratedVisible);
  };
  const toggleRoomTempPV = () => {
    setRoomTemperatureVisible(!isRoomTemperatureVisible);
  };
  // const member_id: string = localStorage.getItem("id")!;
  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response: CartData[] = await CartList(member_id);
  //       console.log("리스폰스", response);
  //       setMemberData(response);
  //       response.forEach((item) => {
  //         if (item.pack === "냉동") {
  //           setFrozenVisible(!isFrozenVisible);
  //         } else if (item.pack === "냉장") {
  //           setRefrigeratedVisible(!isRefrigeratedVisible);
  //         } else if (item.pack === "상온") {
  //           setRoomTemperatureVisible(!isRoomTemperatureVisible);
  //         }
  //       });
  //       const selectedProducts = response.filter((item) => item.isCheck).length;
  //       const selectedProductsCount = selectedProducts > 0 ? selectedProducts : 0;
  //       setSelectedCount(selectedProductsCount);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProductData();
  // }, []);
  // const toggleAllProducts = () => {
  //   const updatedMemberData = memberData.map((item) => ({
  //     ...item,
  //     isCheck: !isAllCheck,
  //   }));
  //   setMemberData(updatedMemberData);
  //   const selectedProductsCount = updatedMemberData.filter((item) => item.isCheck).length;
  //   setSelectedCount(selectedProductsCount);
  //   setIsAllCheck(!isAllCheck);
  // };
  // const toggleCheck = (index: number, isChecked: any) => {
  //   setMemberData((prevMemberData: CartData[]) => {
  //     const updatedMemberData = [...prevMemberData];
  //     updatedMemberData[index].isCheck = isChecked;
  //     const selectedProductsCount = updatedMemberData.filter((item) => item.isCheck).length;
  //     setSelectedCount(selectedProductsCount);
  //     return updatedMemberData;
  //   });
  // };
  // useEffect(() => {
  //   // 비동기로 count가 변경될 때마다 totalPrice, totalDiscount, totalItemCount 업데이트
  //   let price = 0;
  //   let discount = 0;
  //   memberData.forEach((cartItem) => {
  //     if (cartItem.isCheck) {
  //       price += cartItem.product.price * cartItem.count; // 상품 가격 * 수량
  //       discount += (cartItem.product.price - cartItem.product.sale) * cartItem.count; // 할인 가격 * 수량
  //     }
  //   });

  //   // 배송비 계산
  //   let deliveryFee = totalPrice - totalDiscount > 50000 ? 0 : 3000;

  //   // 업데이트된 값들을 상태로 저장
  //   setTotalPrice(totalPrice);
  //   setTotalDiscount(totalDiscount);
  //   setDeliveryFee(deliveryFee);
  // }, [memberData]);
  return (
    // <div className="Container mt-[76px] flex flex-col items-center">
    //   <span className="text-[36px]">장바구니</span>
    //   <div className="MainBox w-[1097px] mt-[20px] ml-[149px] flex">
    //     <div className="PdBox w-[800px] h-[3000px] mr-[25px]">
    //       <div className="SelectAllBox flex items-center text-[20px] ml-[10px] mb-[10px]">
    //         <BsCheckCircleFill className="w-[30px] h-[30px] mr-[15px]" style={{ color: "#21A71E" }} />
    //         {memberData !== null && selectedCount === memberData.length ? (
    //           <span onClick={toggleAllProducts}>
    //             전체선택해제 ({selectedCount}/{memberData.length})
    //           </span>
    //         ) : (
    //           <span onClick={toggleAllProducts}>
    //             전체선택 ({selectedCount}/{memberData.length})
    //           </span>
    //         )}
    //         <span className="opacity-30">|</span>
    //         <span className="ml-[20px]">선택삭제</span>
    //       </div>
    //       {isFrozenVisible && (
    //         <div className="mt-[20px]">
    //           <hr className="border-black" />
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <Image src={SnowImage} width={50} height={50} className="SnowImg" alt="snow Img" />
    //               <span className="ml-[20px]">냉동상품</span>
    //             </div>
    //             <div onClick={toggleFrozenPV}>
    //               {isFrozenVisible ? (
    //                 <IoIosArrowUp className="w-[30px] h-[30px]" />
    //               ) : (
    //                 <IoIosArrowDown className="w-[30px] h-[30px]" />
    //               )}
    //             </div>
    //           </div>
    //           {memberData &&
    //             memberData.map((cartItem: any, index: number) => {
    //               if (cartItem.pack === "냉동") {
    //                 return (
    //                   <CartItem
    //                     key={index}
    //                     product={cartItem.product}
    //                     count={cartItem.count}
    //                     member_id={member_id}
    //                     isCheck={cartItem.isCheck}
    //                     setIsCheck={(isChecked) => toggleCheck(index, isChecked)}
    //                     pack={cartItem.pack}
    //                     isProductVisible={isFrozenVisible}
    //                     basket_id={cartItem.basket_id}
    //                   />
    //                 );
    //               }
    //               return null;
    //             })}
    //         </div>
    //       )}
    //       {isRefrigeratedVisible && (
    //         <div className="mt-[20px]">
    //           <hr className="border-black" />
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <Image src={WaterDropImage} width={50} height={50} className="WaterDropImg" alt="waterdrop Img" />
    //               <span className="ml-[20px]">냉장상품</span>
    //             </div>
    //             <div onClick={toggleRefrigeratedPV}>
    //               {isRefrigeratedVisible ? (
    //                 <IoIosArrowUp className="w-[30px] h-[30px]" />
    //               ) : (
    //                 <IoIosArrowDown className="w-[30px] h-[30px]" />
    //               )}
    //             </div>
    //           </div>
    //           {memberData &&
    //             memberData.map((cartItem: any, index: number) => {
    //               if (cartItem.pack === "냉장") {
    //                 return (
    //                   <CartItem
    //                     key={index}
    //                     product={cartItem.product}
    //                     count={cartItem.count}
    //                     member_id={member_id}
    //                     isCheck={cartItem.isCheck}
    //                     setIsCheck={(isChecked) => toggleCheck(index, isChecked)}
    //                     pack={cartItem.pack}
    //                     isProductVisible={isRefrigeratedVisible}
    //                     basket_id={cartItem.basket_id}
    //                   />
    //                 );
    //               }
    //               return null;
    //             })}
    //         </div>
    //       )}
    //       {isRoomTemperatureVisible && (
    //         <div className="mt-[20px]">
    //           <hr className="border-black" />
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <Image src={SunImage} width={50} height={50} className="SunImg" alt="sun Img" />
    //               <span className="ml-[20px]">상온상품</span>
    //             </div>
    //             <div onClick={toggleRoomTempPV}>
    //               {isRoomTemperatureVisible ? (
    //                 <IoIosArrowUp className="w-[30px] h-[30px]" />
    //               ) : (
    //                 <IoIosArrowDown className="w-[30px] h-[30px]" />
    //               )}
    //             </div>
    //           </div>
    //           {memberData &&
    //             memberData.map((cartItem: any, index: number) => {
    //               if (cartItem.pack === "상온") {
    //                 return (
    //                   <CartItem
    //                     key={index}
    //                     product={cartItem.product}
    //                     count={cartItem.count}
    //                     member_id={member_id}
    //                     isCheck={cartItem.isCheck}
    //                     setIsCheck={(isChecked) => toggleCheck(index, isChecked)}
    //                     pack={cartItem.pack}
    //                     isProductVisible={isRoomTemperatureVisible}
    //                     basket_id={cartItem.basket_id}
    //                   />
    //                 );
    //               }
    //               return null;
    //             })}
    //         </div>
    //       )}
    //     </div>

    //     <div className="orderBox w-[272px] h-[463px] sticky left-[1100px] top-[100px]">
    //       <div className="RightBox w-[272px] border border-opacity-30">
    //         <div className="OrderTop w-[272px] p-[20px]">
    //           <div className="Address text-[20px] flex items-center">
    //             <GrLocation />
    //             <span className="ml-[5px]">배송지</span>
    //           </div>
    //           <div className="text-[20px]">
    //             광주 광산구 하남산단 <br />
    //             6번로 107
    //           </div>
    //           <Link
    //             href={{ pathname: `/mypage/home` }}
    //             className="SubmitBtn w-[225px] h-[42px] mt-[11px] mb-[11px] flex items-center justify-center text-[#33C130] text-[12px] border border-[#33C130]"
    //           >
    //             배송지 변경
    //           </Link>
    //         </div>
    //         <hr />
    //         <div className="OrderBottom w-[272px] p-[20px] text-[16px]">
    //           <div className="flex justify-between mb-[10px]">
    //             <span>상품금액</span>
    //             <span>{totalPrice}원</span>
    //           </div>
    //           <div className="flex justify-between mb-[10px]">
    //             <span>상품할인금액</span>
    //             <span>-{totalDiscount}원</span>
    //           </div>
    //           <div className="flex justify-between">
    //             <span>배송비</span>
    //             <span>{deliveryFee}원</span>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="OrderPrice w-[272px] p-[20px] text-[16px]">
    //           <div className="flex justify-between">
    //             <span>결제예정금액</span>
    //             <b>
    //               <span>{totalPrice - totalDiscount + deliveryFee}원</span>
    //             </b>
    //           </div>
    //         </div>
    //       </div>
    //       <button className="Submit w-[272px] h-[62px] mt-[11px] flex items-center justify-center bg-[#33C130] text-white">
    //         결제하기
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}
