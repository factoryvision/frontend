// 게시물수정
"use client";

import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { ChangeEvent, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { createSearchParamsBailoutProxy } from "next/dist/client/components/searchparams-bailout-proxy";

const currentPage = 2;
const totalPages = 5;

export default function boardUpdate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.boardId;
  const [userId, setuserId] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value); // 제목 변경 핸들러
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value); // 내용 변경 핸들러
  };

  // 토큰을 이용하여 사용자의 아이디를 얻는 API 호출
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/factoryvision/tokenInfo",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("access-token")}`,
            },
          }
        );
        if (response.ok) {
          const userId = await response.text(); // 사용자 아이디만 받아옴
          setuserId(userId); // 사용자 아이디를 이용하여 사용자 정보를 가져오는 함수 호출
        } else {
          console.error("사용자 아이디를 가져오는데 실패했습니다.", response);
        }
      } catch (error) {
        console.error("사용자 아이디를 가져오는데 에러가 발생했습니다:", error);
      }
    };

    fetchUserId(); // useEffect가 호출되면 사용자 아이디를 가져오는 함수 호출
  }, []);

  useEffect(() => {
    // board 아이디를 가져오는 API 호출
    const fetchBoardId = async () => {
      fetch(`http://localhost:8080/factoryvision/board/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("access-token")}`,
        },
        method: "GET",
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("가져온 board 아이디 확인", id);
        });
    };
    fetchBoardId();
  }, []);
  // console.log("boardupdate아이디 확인", id);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/factoryvision/board/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify({
            //
            userId,
            title,
            content,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        alert("수정이 완료되었습니다.");
        console.log("수정된 게시글 id ", id);
        router.push(`/board/boardList`);
      } else {
        console.error("글을 수정하는데 실패했습니다.");
      }
    } catch (error) {
      console.error("게시물 수정 중 오류 발생:", error);
    }
  };

  console.log("boardUpdate된 내용", content);
  useEffect(() => {
    // 게시물 데이터 가져오기
    fetch(`http://localhost:8080/factoryvision/board/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("access-token")}`,
      },
      method: "GET",
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log("boardDetail data", data);
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((error) =>
        console.error("게시물 상세 정보를 가져오는 중 오류 발생:", error)
      );
  }, [id]);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between ">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
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
              onChange={handleTitleChange}
              value={title}
            />

            <div>내용</div>
            <textarea
              className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              placeholder="내용을 입력해주세요."
              onChange={handleContentChange}
              value={content}
            />

            <div className="pt-5">
              <button
                className="bg-blue-700 rounded-md mr-5 px-4 py-2 text-sm text-white"
                onClick={handleSubmit}
              >
                수정
              </button>

              <button
                className="bg-blue-700 rounded-md p-4 px-4 py-2 text-sm text-white"
                onClick={() => router.push(`/board/boardDetail/${id}`)}
              >
                취소
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
