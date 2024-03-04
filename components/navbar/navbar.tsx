'use client'
import Link from 'next/link'
import React from 'react'
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdNewspaper } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { IoSettings } from "react-icons/io5";
import { BsMenuButtonWideFill } from "react-icons/bs";
import {useParams} from "next/navigation";

type Props = {}

const Navbar = (props: Props) => {
    

  return (
    <div className='navbar h-screen fixed top-0 left-0 flex flex-col bg-bgColor py-4 w-[300px] mt-[70px]'>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/"}> <FaHome  className='text-2xl mr-4'/> Bosh sahifa</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/users"}> <FaUser className='text-2xl mr-4'/> Foydalanuvchilar</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/announcements"}> <MdNewspaper  className='text-2xl mr-4'/>E&apos;lonlar</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/categories"}> <BsMenuButtonWideFill className='text-2xl mr-4'/>Kategorialar</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/payment"}> <FaSackDollar  className='text-2xl mr-4'/>To&apos;lovlar</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/advertising"}> <HiSpeakerphone  className='text-2xl mr-4'/>Reklama</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/banner"}> <TfiLayoutSliderAlt  className='text-2xl mr-4'/>Banerlar</Link>
          <Link className='p-4 font-bold text-white flex items-center text-[18px]' href={"/settings"}> <IoSettings  className='text-2xl mr-4'/>Sozlamalar</Link>
    </div>
  ) 
}

export default Navbar