"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Sidebar } from "semantic-ui-react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
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

interface Board {
  id: number;
  title: string;
  content: string;
  createdOn: string;
}

const boardList: React.FC = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);

  useEffect(() => {
    axios
      .get<Board[]>("/api/factoryvision/board")
      .then((res) => setBoardList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const currentPage = 2;
  const totalPages = 5;

  return (
    <div className="flex-center">
      <TopBar />
      <div className="flex flex-1 justify-center items-center ">
        <div className="rounded-lg p-5 md:container md:mx-auto]">
          {/*  */}
          <div className="rid gap-x-8 gap-y-4 flex place-content-between">
            <div className="text-blue-700 border-b-4 text-sm px-4 py-2 w-30 border-blue-700 text-center">
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
