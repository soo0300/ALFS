"use client";

import React, { useState } from "react";
import { FormControl, FormHelperText, Input } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

type Inputs = {
  name: string;
  id: string;
  password: string;
  birth: number;
  address_1: string;
  address_2: string;
  email: string;
  phone_number: string;
};

export default function Page() {
  const idRex = /^[a-zA-Z0-9]{6,16}$/;
  const pwRex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,15}$/;
  const nameRex = /^[가-힣]{2, 6}$/;
  const emailRex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRex = /^010-\d{3,4}-\d{4}$/;

  const [text, setText] = useState({
    showId: false,
    showPw: false,
    showPwCheck: false,
    showName: false,
    showEmail: false,
    showPhone: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //helpertext출력
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((prev) => ({
      ...prev,
      [e.target.id]: true,
    }));
  };

  return (
    <div className="min-w-[650px] flex justify-center">
      <FormControl width={650}>
        <div className="text-center text-[30px] my-[20px]">회원가입</div>
        <div className="flex justify-end">
          <p className="text-red-500">*</p>는 필수사항입니다.
        </div>
        <div className="border-y-2">
          <div className="flex justify-evenly my-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">아이디</div>
            <div className="w-[300px]">
              <Input
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="아이디를 입력해주세요"
                {...(register("id"), { required: true })}
                id="showId"
                onChange={changeText}
              />
              {text.showId && (
                <FormHelperText className="text-red-500 text-xs">
                  *6자이상 16자 이하의 영문 혹은 영문과 숫자를 조합
                </FormHelperText>
              )}
            </div>
            <div className="w-[100px] flex justify-evenly">
              <button className="w-[100px] h-[40px] border-green-500 border-[1px] text-green-500">중복확인</button>
            </div>
          </div>

          <div className=" flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              비밀번호<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="비밀번호를 입력해주세요"
                {...(register("id"), { required: true })}
                id="showPw"
                onChange={changeText}
              />
              {text.showPw && (
                <FormHelperText className="text-red-500 text-xs">
                  *영문, 숫자, 특수문자 포함 8자 이상 15자 이하
                </FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              비밀번호확인<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="비밀번호를 확인해주세요"
                {...(register("id"), { required: true })}
                id="showPwCheck"
                onChange={changeText}
              />
              {text.showPwCheck && (
                <FormHelperText className="text-red-500 text-xs">*비밀번호가 같지 않습니다.</FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              이름<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="이름을 입력해주세요"
                {...(register("id"), { required: true })}
                id="showName"
                onChange={changeText}
              />
              {text.showName && (
                <FormHelperText className="text-red-500 text-xs">*한글로 2자 이상 6자 이하</FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              이메일<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="이메일을 입력해주세요"
                {...(register("id"), { required: true })}
                id="showEmail"
                onChange={changeText}
              />
              {text.showEmail && (
                <FormHelperText className="text-red-500 text-xs">*이메일 형식이 아닙니다.</FormHelperText>
              )}
            </div>
            <div className="w-[100px] flex justify-evenly">
              <button className="w-[100px] h-[40px] border-green-500 border-[1px] text-green-500">중복확인</button>
            </div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              휴대폰<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                type="number"
                focusBorderColor="green.500"
                borderColor="gray.300"
                placeholder="휴대폰 번호를 입력해주세요"
                {...(register("id"), { required: true })}
                id="showPhone"
                onChange={changeText}
              />
              {text.showPhone && (
                <FormHelperText className="text-red-500 text-xs">*번호 형식이 아닙니다.</FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              주소<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <button className="w-[300px] h-[40px] border-green-500 border-[1px] text-green-500 flex justify-center items-center">
                <AiOutlineSearch className="w-[23px] h-[23px]" />
                주소검색
              </button>

              {text.showPhone && (
                <FormHelperText className="text-red-500 text-xs">*번호 형식이 아닙니다.</FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              생년월일<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                type="date"
                borderColor="gray.300"
                justifyContent="center"
                focusBorderColor="green.500"
                {...(register("id"), { required: true })}
              />
              {text.showPhone && (
                <FormHelperText className="text-red-500 text-xs">*생년월일을 선택해주세요</FormHelperText>
              )}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly mb-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              알러지<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <button className="w-[300px] h-[40px] border-green-500 border-[1px] text-green-500 flex justify-center items-center">
                <AiOutlineSearch className="w-[23px] h-[23px]" />
                알러지 선택하기
              </button>
              {text.showPhone && <FormHelperText className="text-red-500 text-xs">*</FormHelperText>}
            </div>
            <div className="w-[100px]"></div>
          </div>

          <div className="flex justify-evenly my-[20px]">
            <div className="w-[100px] h-[40px]  flex items-center">
              기피식품<p className="text-red-500">*</p>
            </div>
            <div className="w-[300px]">
              <Input
                type="date"
                borderColor="gray.300"
                justifyContent="center"
                focusBorderColor="green.500"
                {...(register("id"), { required: true })}
              />
              {text.showPhone && (
                <FormHelperText className="text-red-500 text-xs">*생년월일을 선택해주세요</FormHelperText>
              )}
            </div>
            <div className="w-[100px] flex justify-evenly">
              <button className="w-[100px] h-[40px] border-green-500 border-[1px] text-green-500">추가하기</button>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly my-[50px]">
          <button className="w-[200px] h-[40px] border-green-500 border-[1px] bg-green-500 text-white">가입하기</button>
        </div>
      </FormControl>
    </div>
  );
}
