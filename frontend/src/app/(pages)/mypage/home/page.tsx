"use client";

import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox, Button } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { AddressAll, ChangeStatus } from "@/app/api/user/user";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import DaumPost from "@/app/_components/location/Daumpost";

type Inputs = {
  id: number;
  address_1: string;
  address_2: string;
  alias: string;
};

export default function Page() {
  const [id, setId] = useState();
  const [myAddress, setMyAddress] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();

  const GetAddress = async (id: any) => {
    const res = await AddressAll(id);
    if (res) {
      setMyAddress(res.data.data);
      console.log(res);
    }
  };
  const changeStatus = async (id: any) => {
    const data = [id, Number(sessionStorage.getItem("id"))];
    const res = await ChangeStatus(data);
    console.log(res);
  };

  const setAddress = (address: string) => {
    setValue("address_1", address);
  };

  useEffect(() => {
    if (sessionStorage.getItem("id")) {
      const data = sessionStorage.getItem("id");
      GetAddress(sessionStorage.getItem("id"));
    }
  }, [typeof window !== "undefined" && sessionStorage.getItem("id")]);

  return (
    <div>
      <div className="border-black border-b-[4px] mb-[23px]">
        <p className="text-[30px]">나의 배송지</p>
        <div className="flex items-center justify-end mb-[26px]">
          <Button onClick={onOpen} variant="outline" colorScheme="whatsapp" display="flex">
            <AiOutlinePlus />새 배송지 추가
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>새 배송지 입력</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="flex justify-evenly mb-[20px]">
                  <div className="w-[100px] h-[40px]  flex items-center">
                    주소<p className="text-red-500">*</p>
                  </div>
                  <div className="w-[300px]">
                    <Input borderColor="gray.300" disabled {...register("address_1")} />
                  </div>
                  <div className="w-[100px]">
                    <DaumPost data={setAddress} />
                  </div>
                </div>

                <div className="flex justify-evenly mb-[20px]">
                  <div className="w-[100px] h-[40px]  flex items-center">상세주소</div>
                  <div className="w-[300px]">
                    <Input
                      borderColor="gray.300"
                      focusBorderColor="green.500"
                      placeholder="상세주소를 입력해주세요"
                      {...register("address_2")}
                    ></Input>
                  </div>
                  <div className="w-[100px]"></div>
                </div>

                <div className="flex justify-evenly mb-[20px]">
                  <div className="w-[100px] h-[40px]  flex items-center">주소명칭</div>
                  <div className="w-[300px]">
                    <Input
                      borderColor="gray.300"
                      focusBorderColor="green.500"
                      placeholder="주소명칭을 입력해주세요"
                      {...register("alias")}
                    ></Input>
                  </div>
                  <div className="w-[100px]"></div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <div>
        <TableContainer whiteSpace={"pre-line"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th width={100}>선택</Th>
                <Th width={200}>명칭</Th>
                <Th width={400}>주소</Th>
                <Th width={100}>수정</Th>
              </Tr>
            </Thead>
            {myAddress.map((data: any) => (
              <>
                <Tbody key={data.id}>
                  <Tr>
                    <Td>
                      {data.status ? (
                        <Checkbox colorScheme="green" defaultChecked size="lg"></Checkbox>
                      ) : (
                        <Checkbox colorScheme="green" size="lg" onChange={() => changeStatus(data.id)}></Checkbox>
                      )}
                    </Td>
                    <Td>{data.alias}</Td>
                    <Td>
                      {data.address_1} <br />
                      {data.address_2}
                    </Td>
                    <Td>
                      <BiEdit className="text-[20px]"></BiEdit>
                    </Td>
                  </Tr>
                </Tbody>
              </>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
