import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function TopNav() {
  return (
    <div className="min-w-[1000px] h-[30px] mt-[10px] flex justify-center">
      <div className="min-w-[1000px] flex items-center justify-end">
        <a href="/login">
          <Button variant="unstyled" marginRight="10px">
            로그인
          </Button>
        </a>
        <a href="signup">
          <Button variant="unstyled" marginRight="10px">
            회원가입
          </Button>
        </a>

        {/* <Button variant="unstyled">신대혁님</Button> */}

        <Menu>
          <MenuButton>고객센터</MenuButton>
          <MenuList>
            <MenuItem>1:1 문의</MenuItem>
            <MenuItem>상품 문의</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
