import React from "react";
import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

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

export default function NextStep() {
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();

  const registerProduct = () => {};
  return (
    <div>
      <form action="" className="grid grid-cols-2 gap-5  justify-items-center">
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
          <FormLabel>할인율</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="할인율을 입력해주세요."
            {...register("sale")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>배송정보</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="배송정보를 입력해주세요."
            {...register("delivery")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>판매자명</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="판매자명을 입력해주세요."
            {...register("seller")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>패키징정보</FormLabel>
          <Input
            type="number"
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="패키징정보를 입력해주세요."
            {...register("pack")}
          ></Input>
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
          <FormLabel>알레르기정보</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="알레르기정보를 입력해주세요."
            {...register("allergy")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>유통기한정보</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="유통기한정보를 입력해주세요."
            {...register("expireDate")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>추가정보</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="추가정보를 입력해주세요."
            {...register("information")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>추가정보</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="추가정보를 입력해주세요."
            {...register("buyType")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>구매유형</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="구매유형을 입력해주세요."
            {...register("stock")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>재고수량</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="재고수량을 입력해주세요."
            {...register("name")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>카테고리</FormLabel>
          <Input
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="재고수량을 입력해주세요."
            {...register("category")}
          ></Input>
        </FormControl>

        <FormControl width={300}>
          <FormLabel>제품설명</FormLabel>
          <Textarea
            width={300}
            focusBorderColor="green.500"
            borderColor="gray.300"
            placeholder="제품설명을 입력해주세요."
            {...register("content")}
          ></Textarea>
        </FormControl>
      </form>

      <div className="flex justify-evenly mt-[20px]">
        <Button width={300} variant="outline" colorScheme="whatsapp" onClick={registerProduct}>
          상품 등록하기
        </Button>
      </div>
    </div>
  );
}
