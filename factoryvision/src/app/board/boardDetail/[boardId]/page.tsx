"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { GetServerSideProps } from 'next';

interface Comment {
  id: number;
  content: string;
  nickname: string;
}


export default function BoardDetail({
  params,
}: {
  params: {boardId: string; userId: string};
  
}){  
  const id = params.boardId;
  const userId = params.userId;
  const [boatdTitle, setBoardTitle] = useState("");
  const [boatdContent, setboatdContent] = useState("");
  console.log("param",params)
  console.log("boardId param",id)
  console.log("userId param",userId)
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");

  const [comments, setComments] = useState<Comment[]>([]);
  


  useEffect(() => {
    // 사용자 정보 가져오는 API 호출
    console.log("userid",userId);
    fetch(`http://localhost:8080/factoryvision/userInfo/1`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwODQ5NTczLCJleHAiOjE3MTA4ODU1NzN9.gjPovjoR1LO2bgqxqIJTWPk0mAk6tWY5aPM4Uf3oiqU`,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // API 응답에서 닉네임 추출
        console.log("닉네임 추출",data.nickname)
        setNickname(data.nickname);
      });
  }, []);


  useEffect(()=> {
    //게시물 상세 정보 api 호출
    fetch(`http://localhost:8080/factoryvision/board/${id}`,{
      headers: {
        // "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwODQ5NTczLCJleHAiOjE3MTA4ODU1NzN9.gjPovjoR1LO2bgqxqIJTWPk0mAk6tWY5aPM4Uf3oiqU`
      },
      method: "GET",
    })
     .then((Response) => Response.json())
     .then((data) => {
      console.log('boardDetail data',data)
      setBoardTitle(data.title);
      setboatdContent(data.content);
    })
    .catch(error => console.error("게시물 상세 정보를 가져오는 중 오류 발생:", error));

    fetch(`http://localhost:8080/factoryvision/board/${id}/comment`,{
      headers: {
        // "Authorization": `Bearer ${localStorage.getItem("access-token")}`
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwODQ5NTczLCJleHAiOjE3MTA4ODU1NzN9.gjPovjoR1LO2bgqxqIJTWPk0mAk6tWY5aPM4Uf3oiqU`
      },
      method: "GET",
    })
    .then(response => response.json())
    .then(data => {
      console.log("댓글 리스트 데이터", data);
      setComments(data);
    })
    .catch(error => console.error("댓글 목록을 가져오는 중 오류 발생:", error));

  }, [id]);


  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };


  const handleSubmitComment = () => {
    //댓글 등록 api
    fetch(`http://localhost:8080/factoryvision/board/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoiQURNSU4iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzEwODQ5NTczLCJleHAiOjE3MTA4ODU1NzN9.gjPovjoR1LO2bgqxqIJTWPk0mAk6tWY5aPM4Uf3oiqU`
      },
      body: JSON.stringify({ 
        content: comment,
        nickname: nickname,
       }),
    })
      .then((response) => {
        if(!response.ok){
          throw new Error("not ok response 응답 에러");
        }
        console.log(response);
        return response.ok;        
      })     
      .catch((error) => {
        console.error('Error posting comment catch 에러:', error);
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
                    댓글 {}  
                    {comments.map((comment, index) => (
                      <div key={index}>
                        <span style={{ marginRight: '8px'}}>{comment.nickname}</span>
                        <span>{comment.content}</span>
                      </div>
                    ))}                  
                  </div>
                  <div>
                    
                  </div>
                  {/*  */}
                </div>
                <textarea
                  className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                  placeholder="댓글을 입력해주세요."
                  value={comment} 
                  onChange={handleCommentChange}
                />

                <button 
                  onClick={handleSubmitComment} 
                  className="ml-auto bg-blue-700 rounded-md px-4 py-2 text-sm text-white">
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


