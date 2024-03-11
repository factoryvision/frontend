// 게시물수정
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

const currentPage = 2;
const totalPages = 5;
export default function boardCreate() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className=" flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between ">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 w-30 border-blue-700 text-center">
              게시글 수정
            </div>
            {/*  */}
          </div>
          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
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
                수정
              </button>
              <button className="bg-blue-700 rounded-md p-4 px-4 py-2 text-sm text-white">
                <Link href="">삭제</Link>
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
