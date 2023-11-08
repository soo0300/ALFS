import React from "react";
import Logo from "../../_asset/img/Logo.jpg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Link from "next/link";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export default function MiddleNav() {
  return (
    <div className="min-w-[1000px] h-[100px] justify-center flex ">
      <div className="min-w-[1000px] flex items-center justify-between">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image src={Logo} width={50} height={50} alt="" priority />
            <p className="text-[30px] ml-[10px]">
              <b>ALFS</b>
            </p>
          </div>
        </Link>

        <div>
          <InputGroup size="lg" width={400}>
            <Input type="text" placeholder="검색어를 입력하세요" focusBorderColor="green.500" />
            <InputRightElement display="flex" justifyContent="center" alignItems="center">
              <AiOutlineSearch className="w-[40px] h-[40px]" />
            </InputRightElement>
          </InputGroup>
        </div>

        <div className="flex gap-[20px]">
          <Popover>
            <PopoverTrigger>
              <Button width="40px" height="40px">
                <AiOutlineEnvironment className="min-w-[40px] min-h-[40px]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>

          {/* </Link> */}
          <FaRegHeart className="min-w-[40px] h-[40px]" />
          <Link href={{ pathname: `/cart` }}>
            <AiOutlineShoppingCart className="min-w-[40px] h-[40px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
