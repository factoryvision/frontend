"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

interface Board {
  id: number;
  title: string;
  content: string;
  createdOn: string;
}

const boardList: React.FC = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
 

  const currentPage = 2;
  const totalPages = 5;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          {/*  */}
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between">
            <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
              게시글 목록
            </div>
            <Link href="/board/boardCreate">
              <button className="bg-blue-700 rounded-md px-4 py-2 text-sm text-white">
                글 작성
              </button>
            </Link>
          </div>
          {/*  */}
          <div className="mt-10 boardList border-b border-blue-400 p-2 bg-white rounded-lg font-thin">
            <table className="hover:table-auto w-full text-blue-400">
              <thead>
                <tr>
                  <th className="px-4 py-2">순서</th>
                  <th className="px-4 py-2">제목</th>
                  <th className="px-4 py-2">작성자</th>
                  <th className="px-4 py-2">조회수</th>
                  <th className="px-4 py-2">작성일자</th>
                </tr>
                <tr className="underline"></tr>
              </thead>
              <tbody>
                {boardList.map((board) => (
                  <tr key={board.id}>
                    <td className="border px-4 py-2">{board.id}</td>
                    <td className="border px-4 py-2">{board.title}</td>
                    <td className="border px-4 py-2">{board.createdOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row gap-2 text-blue-500 justify-end mt-3 mr-3"> */}
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
};

export default boardList;
