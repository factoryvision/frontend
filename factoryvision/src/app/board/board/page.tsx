"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

interface BoardProps {
  id: number;
  title: string;
  content: string;
  createdOn: string;
}

const Board: React.FC<BoardProps> = ({ id, title, content, createdOn }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between ">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 w-30 border-blue-700 text-center">
              게시글
            </div>
            {/*  */}
          </div>
          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div>제목</div>
            <h2 className="text-lg font-bold">내용{title}</h2>
            <div>내용</div>
            <h2 className="text-lg font-bold">내용{content}</h2>
            {/* 댓글쪽 */}
            <div className="pt-5">
              <div>
                <div className="rid gap-x-8 gap-y-2 flex place-content-between ">
                  {/*  */}
                  <div className="text-blue-700 text-sm px-4 text-center">
                    댓글
                  </div>
                  {/*  */}
                </div>
                <textarea
                  className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                  placeholder="댓글을 입력해주세요."
                />

                <button className="ml-auto bg-blue-700 rounded-md px-4 py-2 text-sm text-white">
                  등록
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Board;
