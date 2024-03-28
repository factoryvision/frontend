"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { useRouter, useParams } from "next/navigation";

interface Board {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdOn: string;
}

const boardList: React.FC = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const currentPage = 2;
  const totalPages = 5;
  const router = useRouter();
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    // 사용자 정보 가져오는 API 호출   여기를 현재 사용자로
    console.log("userid", userId);
    fetch(`http://localhost:8080/factoryvision/tokenInfo`, {
      headers: {
        Authorization: `${localStorage.getItem("access-token")}`,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // API 응답에서 닉네임 추출
        console.log("아이디 추출", data.userId);
      });
  }, []);

  useEffect(() => {
    // 게시글 데이터를 불러오는 함수
    const fetchBoardList = async () => {
      try {
        // 게시글 데이터를 가져오는 API 호출 (예시)
        const response = await fetch(
          "http://localhost:8080/factoryvision/board",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("access-token")}`,
            },
          }
        );
        console.log("response", response);
        console.log(
          "localstrage 토큰 받아오기",
          localStorage.getItem("access-token")
        );

        if (!response.ok) {
          throw new Error("게시글 데이터를 불러오는데 실패했습니다.");
        }
        const data = await response.json();
        setBoardList(data); // 가져온 데이터를 상태에 설정
      } catch (error) {
        console.error("게시글 데이터를 에러:", error);
      }
    };

    fetchBoardList(); // 함수 호출하여 데이터 불러오기
  }, []);

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
          <div className="mt-10 boardList p-2 bg-white rounded-lg ">
            <table className="hover:table-auto w-full ">
              <thead className="border-b border-blue-400 ">
                <tr>
                  <th className="px-4 py-2">순서</th>
                  <th className="px-4 py-2">제목</th>
                  <th className="px-4 py-2">작성자</th>
                  <th className="px-4 py-2">조회수</th>
                  <th className="px-4 py-2">작성일자</th>
                </tr>
                <tr className="underline"></tr>
              </thead>
              <tbody className="mt-7 border-collapse	">
                {boardList.map((board) => (
                  <tr className="hover:bg-slate-100" key={board.id}>
                    <td className=" px-4 py-2">{board.id}</td>
                    <td
                      className="px-4 py-2"
                      onClick={() =>
                        router.push(`/board/boardDetail/${board.id}`)
                      }
                    >
                      {board.title}
                    </td>
                    <td className=" px-4 py-2">{board.nickname}</td>
                    <td className=" px-4 py-2">{board.createdOn}</td>
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
