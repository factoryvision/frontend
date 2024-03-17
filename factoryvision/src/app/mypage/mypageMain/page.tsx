//마이페이지 편집
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

const myPageMain = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          {/*  */}
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between">
            <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
              마이페이지
            </div>
          </div>
          {/*  */}

          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div className="flex space-x-4 grid grid-flow-col justify-stretch">
              {/*  */}
              {/* <div className="flex-none w-30 h-30">이미지</div> */}
              {/*  */}
              <div>
                <div className="flex flex-col">
                  <div className="py-4">이름</div>
                  <div className="py-4">니콜라</div>
                  <div className="py-4">닉네임</div>
                  <div className="py-4">nicola</div>

                  <div className="py-4">아이디</div>
                  <div className="py-4">mynameis?</div>
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <div className="py-4">이메일</div>
                  <div className="py-4">you@example.com</div>
                  <div className="py-4">비밀번호</div>
                  <div className="py-4">**************</div>
                  <div className="py-4">전화번호</div>
                  <div className="py-4">010-0000-0000</div>
                </div>
              </div>
            </div>
            <Link href="/mypage/mypageUpdate">
              <button className="text-white rounded-md px-4 py-2 text-sm bg-[#1814F3] w-32 text-center drop-shadow-lg mt-4">
                Edit
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default myPageMain;
