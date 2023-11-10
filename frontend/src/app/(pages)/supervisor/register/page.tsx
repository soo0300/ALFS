"use client";

import { baseAxios } from "@/app/api/Api";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../_asset/img/Logo.jpg";
import { Input } from "@chakra-ui/react";
import CropImage from "./_components/image";

type Inputs = {
  name: string;
  title: string;
  price: number;
  sale: number;
  img_1: string;
  img_2: string;
  img_3: string;
  delivery: string;
  seller: string;
  pack: string;
  count: string;
  weight: string;
  allergy: string;
  expireDate: string;
  information: string;
  buyType: string;
  stock: number;
  content: string;
  category: number;
};

export default function Page() {
  const [image, setImage] = useState<string>("");
  const [image1, setImage1] = useState<string>("");
  const [image2, setImage2] = useState<string>("");
  const [image3, setImage3] = useState<string>("");
  const [form, setForm] = useState([]);
  const [form1, setForm1] = useState([]);
  const [form2, setForm2] = useState([]);
  const [form3, setForm3] = useState([]);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append(`images`, form[0]);
    formData.append(`images`, form1[0]);
    formData.append(`images`, form2[0]);
    formData.append(`images`, form3[0]);
    const ocrRequest = { format: "jpg", name: "20구" };
    formData.append("OcrFileRequest", new Blob([JSON.stringify(ocrRequest)], { type: "application/json" }));

    try {
      const res = await baseAxios.post<any>("api/supervisor/ocr/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlechangefile = (e: any) => {
    console.log(e.target.files);
    const [newfile] = e.target.files;
    setForm(e.target.files);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(newfile);
    fileReader.onload = (e) => {
      const result = e?.target?.result as string;
      setImage(result);
    };
  };
  const handlechangefile1 = (e: any) => {
    console.log(e.target.files);
    const [newfile] = e.target.files;
    setForm1(e.target.files);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(newfile);
    fileReader.onload = (e) => {
      const result = e?.target?.result as string;
      setImage1(result);
    };
  };
  const handlechangefile2 = (e: any) => {
    console.log(e.target.files);
    const [newfile] = e.target.files;
    setForm2(e.target.files);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(newfile);
    fileReader.onload = (e) => {
      const result = e?.target?.result as string;
      setImage2(result);
    };
  };
  const handlechangefile3 = (e: any) => {
    console.log(e.target.files);
    const [newfile] = e.target.files;
    setForm3(e.target.files);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(newfile);
    fileReader.onload = (e) => {
      const result = e?.target?.result as string;
      setImage3(result);
    };
  };
  return (
    <div>
      <div className=" border-black border-b-[4px]">
        <p className="text-[30px] mb-[50px]">상품등록</p>
      </div>
      <div className="mb-[50px]">
        <div className="mt-[20px] flex justify-between">
          <div className="flex flex-col ustify-between items-center w-[240px]">
            <p className="flex text-[30px]">상품 메인 사진</p>
            <Input width={240} type="file" onChange={handlechangefile} marginBottom={10} />
            <Image width={240} height={240} src={image || Logo} alt="" />
          </div>
          <div>
            <div className="flex flex-col justify-between items-center w-[240px]">
              <p className="text-[30px]">상품 상세사진</p>
              <Input type="file" onChange={handlechangefile1} marginBottom={10} />
              <Image width={240} height={240} src={image1 || Logo} alt="" />
            </div>
          </div>
          <div>
            <div className="flex flex-col ustify-between items-center w-[240px]">
              <p className="text-[30px]">상품 정보사진</p>

              <Input type="file" onChange={handlechangefile2} marginBottom={10} />
              <Image width={240} height={240} src={image2 || Logo} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[20px] flex">
          <div>
            <div className="flex flex-col justify-between items-center">
              <p className="text-[20px]">상품 원재료 사진</p>

              <Input type="file" onChange={handlechangefile3}></Input>
              <Image width={240} height={240} src={image3 || Logo} alt=""></Image>
            </div>
          </div>
        </div>
        <CropImage />
      </div>
    </div>
  );
}
