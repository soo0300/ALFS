import React from 'react';
import { Input } from '@chakra-ui/react';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="min-w-[1000px] flex justify-center m-[100px]">
      {/* <h1>회원가입</h1> */}
      <div className="w-[800px] h-[70px]">
        <div className="w-[100px]">아이디*</div>
        <div className="w-[500px] h-[100px]">
          <Input placeholder="Basic usage" variant="filled" />
          <Input focusBorderColor="pink.400" placeholder="Here is a sample placeholder" />
        </div>
      </div>
    </div>
  );
}
