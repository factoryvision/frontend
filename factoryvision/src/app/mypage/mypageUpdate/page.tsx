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
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="이름을 입력해주세요."
                  />
                  <div className="py-4">닉네임</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                  />

                  <div className="py-4">아이디</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <div className="py-4">이메일</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="you@example.com."
                  />
                  <div className="py-4">비밀번호</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="영문, 숫자를 조합한 13자리를 입력해주세요."
                  />
                  <div className="py-4">전화번호</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    type="text"
                    placeholder="11자리의 올바른 숫자를 입력해주세요."
                  />
                </div>
              </div>
            </div>
            <button className="text-white rounded-md px-4 py-2 text-sm bg-[#1814F3] w-32 text-center drop-shadow-lg mt-4">
              Save
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default myPageMain;
