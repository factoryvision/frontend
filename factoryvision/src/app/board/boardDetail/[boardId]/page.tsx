"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { GetServerSideProps } from "next";

interface Comment {
  id: number;
  content: string;
  nickname: string;
}

export default function BoardDetail() {
  //   params,
  // }: {
  //   params: { boardId: string; userId: string };
  // }) {
  const router = useRouter();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setboardContent] = useState("");
  const params = useParams();
  const id = params.boardId;
  const [userId, setuserId] = useState("");
  console.log("param", params);
  console.log("boardId param", id);
  console.log("userId param", userId);
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // 사용자 정보 가져오는 API 호출   여기를 현재 사용자로
    const fetchUserId = async () => {
      console.log("userid", userId);
      fetch(`http://localhost:8080/factoryvision/tokenInfo`, {
        headers: {
          Authorization: `${localStorage.getItem("access-token")}`,
        },
        method: "GET",
      })
        .then((response) => response.text())
        .then((data) => {
          userId;
          console.log("아이디 확인", userId);
          setuserId(data);
        });
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    //게시물 상세 정보 api 호출
    fetch(`http://localhost:8080/factoryvision/board/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("access-token")}`,
      },
      method: "GET",
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log("boardDetail data", data);
        setBoardTitle(data.title);
        setboardContent(data.content);
      })
      .catch((error) =>
        console.error("게시물 상세 정보를 가져오는 중 오류 발생:", error)
      );

    fetch(`http://localhost:8080/factoryvision/board/${id}/comment`, {
      headers: {
        Authorization: `${localStorage.getItem("access-token")}`,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("댓글 리스트 데이터", data);
        setComments(data);
      })
      .catch((error) =>
        console.error("댓글 목록을 가져오는 중 오류 발생:", error)
      );
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
        Authorization: `${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({
        id: id,
        content: comment,
        nickname: nickname,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("not ok response 응답 에러");
        }
        console.log(response);
        return response.ok;
      })
      .catch((error) => {
        console.error("Error posting comment catch 에러:", error);
      });
  };

  //수정 페이지로 넘어가게끔
  const handleUpdate = () => {
    router.push(`/board/boardUpdate/${id}`);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:8080/factoryvision/board/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("access-token")}`,
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("게시글이 성공적으로 삭제되었습니다.");
        router.push("/board/boardList"); // 삭제 후 목록 페이지로 이동
      } else {
        throw new Error("게시글 삭제 실패");
      }
    } catch (error) {
      console.error("게시글 삭제 중 오류 발생:", error);
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between">
            {/*  */}
            <div className="text-blue-700 border-b-4 text-sm px-4 w-30 border-blue-700 text-center">
              게시글
            </div>
            {/*  */}
          </div>
          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div>
              <div className="text-lg">제목 </div>
              <h2 className="text-base  mt-3 mb-5">{boardTitle}</h2>
              <div className="text-lg">내용</div>
              <h2 className="text-base mt-3">{boardContent}</h2>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleUpdate}
                className="bg-blue-700 rounded-md  px-4 py-2 text-sm text-white"
              >
                수정
              </button>
              <button
                className="bg-blue-700 rounded-md  px-4 py-2 text-sm text-white"
                onClick={handleDelete}
              >
                삭제
              </button>
              <Link href="/board/boardList">
                <button className="bg-blue-700 rounded-md  px-4 py-2 text-sm text-white">
                  목록
                </button>
              </Link>
            </div>
            {/* 댓글쪽 */}
            <div className="pt-5">
              <div>
                <div className="text-lg border-b-2"></div>
                <div className="rid gap-x-8 gap-y-2 flex place-content-between py-4">
                  {/*  */}
                  <div className="text-sm space-y-4">
                    {}
                    {comments.map((comment, index) => (
                      <div key={index}>
                        <span style={{ marginRight: "8px" }}>
                          {comment.nickname}
                        </span>
                        <span>{comment.content}</span>
                      </div>
                    ))}
                  </div>
                  <div></div>
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
                  className="ml-auto bg-blue-700 rounded-md px-4 py-2 text-sm text-white"
                >
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
