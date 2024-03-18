// 게시물수정
"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const currentPage = 2;
const totalPages = 5;
export default function boardCreate() {

  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [content, setContent] = useState(""); // 내용 상태 추가
  const router = useRouter();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value); // 제목 변경 핸들러
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value); // 내용 변경 핸들러
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/factoryvision/board",{   
      method: "post",
      headers:{
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwNzQ5OTIyLCJleHAiOjE3MTA3NTM1MjJ9.4iLDsTB3czGKvUXJOk8vkMNUlilJa2RVb_j0zePwftk`
        
      },
      body: JSON.stringify({
        "userId": 1,
        "title": title,
        "content": content
      }),
    })
    .then((response)=>{
      if (response.ok) {
        console.log("게시글 작성 성공");
        router.push("/board/boardList")
      } else {
        console.log(response);
        console.error("게시글 작성 실패");        
      }
    })
    .catch((error)=>{
      console.log("게시글 작성 오류",error);
    });
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between ">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
              게시글 작성
            </div>
            {/*  */}
          </div>
          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div>글제목</div>

            <input
              className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              type="text"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={handleTitleChange}
            />

            <div>내용</div>
            <textarea
              className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={handleContentChange}
            />

            <div className="pt-5">
              <button 
                className="bg-blue-700 rounded-md mr-5 px-4 py-2 text-sm text-white" 
                onClick={handleSubmit}>
                작성
              </button>

              <button className="bg-blue-700 rounded-md p-4 px-4 py-2 text-sm text-white">
                <Link href="./boardList">취소</Link>
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
