import React from "react";
import {Input} from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
  return (
    
    <Input
    type="search"
    className="w-[80%]"
    placeholder="search"
    labelPlacement="inside"
    startContent={
      <IoSearchOutline className="text-2xl  text-gray-600 pointer-events-none flex-shrink-0" />
    }
  />
  
  );
}
