// 게시글 작성
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Sidebar } from "semantic-ui-react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <img src="/mainlogo.png" alt="visionfactory" className="w-70 h-10" />

      <div className="flex items-center space-x-4  mr-10">
        <Link href="/user/login">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            로그인
          </div>
        </Link>
        <Link href="user/signup">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            회원가입
          </div>
        </Link>
      </div>
    </div>
  );
};

const currentPage = 2;
const totalPages = 5;
export default function boardCreate() {
  return (
    <div className="flex-center">
      <div className="bg-white">
        <TopBar />
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <div className="rounded-lg p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex place-content-between ">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 py-2 w-30 border-blue-700 text-center">
              게시글 작성
            </div>
            {/*  */}
          </div>
          <div className="mt-10 bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div>글제목</div>
            <input
              className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              type="text"
              placeholder="제목을 입력해주세요."
            />
            <div>내용</div>
            <textarea
              className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              placeholder="내용을 입력해주세요."
            />
            <div className="pt-5">
              <button className="bg-blue-700 rounded-md mr-5 px-4 py-2 text-sm text-white">
                저장
              </button>
              <button className="bg-blue-700 rounded-md p-4 px-4 py-2 text-sm text-white">
                <Link href="board/boardList">취소</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 페이지네이션 */}
      <div className="flex flex-row gap-2 text-blue-500 justify-end mt-3 mr-3">
        {currentPage > 1 && <span> {"<"} Previous </span>}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <span key={pageNumber}>
              <Link href={`/${pageNumber}`}>
                <div
                  style={{
                    fontWeight: currentPage === pageNumber ? "bold" : "normal",
                  }}
                >
                  {pageNumber}
                </div>
              </Link>
            </span>
          )
        )}

        {currentPage < totalPages && <span> Next {">"} </span>}
      </div>
    </div>
  );
}
