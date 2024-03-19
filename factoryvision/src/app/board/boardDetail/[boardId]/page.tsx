"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { GetServerSideProps } from 'next';



interface BoardProps {
  id: number;
  title: string;
  content: string;
  createdOn: string;
}


const content = "test";


export default function BoardDetail({
  params,
}: {
  params: {boardId: string};
}){  
  const id = params.boardId;
  const [boatdTitle, setBoardTitle] = useState("");
  const [boatdContent, setboatdContent] = useState("");
  console.log("boardId param",id)

  useEffect(()=> {
    fetch(`http://localhost:8080/factoryvision/board/${id}`,{
      headers: {
        // "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwODM1NjAxLCJleHAiOjE3MTA4MzkyMDF9.jesfo2SSS6OiSSTPjDLLGBEmJ5BQIjVugHCoPYw9My4`
      },
      method: "GET",
    })
     .then((Response) => Response.json())
     .then((data) => {
      console.log('boardDetail data',data)
      setBoardTitle(data.title);
      setboatdContent(data.content);
    });
  }, []);

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
            <h2 className="text-lg font-bold">{boatdTitle}</h2>
            <div>내용</div>
            <h2 className="text-lg font-bold">{boatdContent}</h2>
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
}





// export default Board;


