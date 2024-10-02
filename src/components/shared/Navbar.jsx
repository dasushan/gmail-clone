import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 mx-3">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={'20px'} />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full ">
          <IoIosSearch size={'24px'} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='flex items-center gap-2'>
            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <CiCircleQuestion size={'20px'}/>
            </div>
            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <CiSettings size={'20px'}/>
            </div>
            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <PiDotsNineBold size={'20px'}/>
            </div>
            <div className='cursor-pointer'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi4bk1s8Q2HPdq4fAPfLVKO6I4UrbUGW93w&s' size="40" round={true}/>
            </div>
        </div>
      </div>
    </div>
  );
};
