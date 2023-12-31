"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { RegisterIngredient, RegisterManufacturing, RegisterProduct } from "@/app/api/supervisor/supervisor";
import { useRouter } from "next/navigation";
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
  allergyList: string;
  manufacture: string;
};

const category = [
  { idx: 0, title: "채소" },
  { idx: 1, title: "과일 · 견과 · 쌀" },
  { idx: 2, title: "수산 · 해산 · 건어물" },
  { idx: 3, title: "정육 · 계란" },
  { idx: 4, title: "국 · 반찬 · 메인요리" },
  { idx: 5, title: "샐러드 · 간편식" },
  { idx: 6, title: "면 · 양념 · 오일" },
  { idx: 7, title: "생수 · 음료 · 우유 · 커피" },
  { idx: 8, title: "간식 · 과자 · 떡" },
  { idx: 9, title: "베이커리 · 치즈 · 델리" },
];

export default function NextStep(props: any) {
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();
  const [show, setShow] = useState(false);
  const router = useRouter();

  const registerProduct = async (e: any) => {
    setShow(true);
    const data = e;
    data["img_1"] = props.props.imgUrls[0];
    data["img_2"] = props.props.imgUrls[1];
    data["img_3"] = props.props.imgUrls[2];
    const res = await RegisterProduct(data);
    if (res?.data) {
      const data_1 = e.allergyList.replace(/\s+/g, " ").split(" ");
      const res1 = await RegisterIngredient(data_1, res?.data);

      const allergyNameList = e.manufacture.replace(/\s+/g, " ").split(" ");
      const data_2 = {
        productId: res?.data,
        allergyNameList,
      };

      const res2 = await RegisterManufacturing(data_2);
      router.push(`/detail/${res?.data}`);
    }
  };
  return (
    <div>
      <div className="my-[20px]">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  원재료 추출내역 (클릭하면 아래에 원재료추출내역이 나옵니다.)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {props.props.ingredients.map((item: any, idx: number) => (
                <p className="inline-block whitespace-pre-line" key={idx}>
                  {item} &nbsp;
                </p>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <form onSubmit={handleSubmit(registerProduct)} className="grid grid-cols-2 gap-5  justify-items-center">
        <FormControl width={300}>
          <FormLabel>제품명</FormLabel>
          <Input
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="제품명을 입력해주세요."
            {...register("name")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>부제목</FormLabel>
          <Input
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="부제목을 입력해주세요."
            {...register("title")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>상품가격</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="상품가격을 입력해주세요."
            {...register("price")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>할인가격</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="할인가격을 입력해주세요."
            {...register("sale")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>배송정보</FormLabel>
          <Select
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="배송정보를 선택해주세요."
            {...register("delivery")}
          >
            <option value="일반배송">일반배송</option>
          </Select>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>판매자명</FormLabel>
          <Select
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="판매자를 선택해주세요."
            {...register("seller")}
          >
            <option value="알프스">알프스</option>
          </Select>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>패키징정보</FormLabel>
          <Select
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="패키징정보를 선택해주세요."
            {...register("pack")}
          >
            <option value="냉동">냉동</option>
            <option value="냉장">냉장</option>
          </Select>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>수량</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="수량을 입력해주세요."
            {...register("count")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>제품무게</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="제품무게를 입력해주세요."
            {...register("weight")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>구매유형</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="구매유형를 입력해주세요."
            {...register("buyType")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>재고수량</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="재고수량을 입력해주세요."
            {...register("stock")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>카테고리</FormLabel>
          <Select
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="카테고리를 선택해주세요."
            {...register("category")}
          >
            {category.map((item) => (
              <option key={item.idx} value={item.idx}>
                {item.title}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>알레르기정보</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="알레르기정보를 입력해주세요."
            {...register("allergy")}
          ></Textarea>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>유통기한정보</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="유통기한정보를 입력해주세요."
            {...register("expireDate")}
          ></Textarea>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>추가정보</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="추가정보를 입력해주세요."
            {...register("information")}
          ></Textarea>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>제품설명</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="제품설명을 입력해주세요."
            {...register("content")}
          ></Textarea>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>알러지 전체정보</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="전체정보를 입력해주세요."
            {...register("allergyList")}
          ></Textarea>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>제조시설 전체정보</FormLabel>
          <Textarea
            width={300}
            height={200}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="전체정보를 입력해주세요."
            {...register("manufacture")}
          ></Textarea>
        </FormControl>
        <div></div>
        <div className="flex justify-evenly mt-[20px]">
          <Button width={300} variant="outline" colorScheme="whatsapp" type="submit" isLoading={show}>
            상품 등록하기
          </Button>
        </div>
      </form>
    </div>
  );
}
