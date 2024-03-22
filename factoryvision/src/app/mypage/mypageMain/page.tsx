//마이페이지 편집
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

const MyPageMain = () => {

  interface UserInfo {
    name: string;
    email: string;
    nickname: string;
    phone: string;    
    userId: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    nickname: "",
    phone: "",
    userId: "",
  });
  const router = useRouter();

  

  // 토큰을 이용하여 사용자의 아이디를 얻는 API 호출
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch("http://localhost:8080/factoryvision/tokenInfo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("access-token")}`        
          },
        });
        if (response.ok) {
          const userId = await response.text(); // 사용자 아이디만 받아옴
          fetchUserInfo(userId); // 사용자 아이디를 이용하여 사용자 정보를 가져오는 함수 호출
        } else {
          console.error("사용자 아이디를 가져오는데 실패했습니다.",response);          
                    
        }
      } catch (error) {
        console.error("사용자 아이디를 가져오는데 에러가 발생했습니다:", error);
      }
    };

    fetchUserId(); // useEffect가 호출되면 사용자 아이디를 가져오는 함수 호출
  }, []);

  // 사용자 아이디를 이용하여 사용자 정보를 가져오는 API 호출
  const fetchUserInfo = async (user_Id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/factoryvision/userInfo/${user_Id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("access-token")}`        
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("사용자 정보",data)
        setUserInfo(data); // 받아온 사용자 정보를 상태에 저장
      } else {
        console.error("사용자 정보를 가져오는데 실패했습니다.");
        // 사용자 정보를 가져오지 못한 경우 로그인 페이지로 이동 또는 오류 처리
        // router.push("/login");
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는데 에러가 발생했습니다:", error);
    }
  };


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          {/*  */}
          <div className="rid gap-x-8 gap-y-4 flex py-20 place-content-between">
            <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
              마이페이지
            </div>
          </div>
          {/*  */}

          <div className="bg-white rounded-lg border-gray-400  bg-white rounded-lg justify-center items-center p-4 space-y-4">
            <div className="flex space-x-4 grid grid-flow-col justify-stretch">
              {/*  */}
              {/* <div className="flex-none w-30 h-30">이미지</div> */}
              {/*  */}
              <div>
                <div className="flex flex-col">
                  <div className="py-4 font-bold">이름</div>
                  <div className="py-4">{userInfo.name}</div>
                  <div className="py-4 font-bold">닉네임</div>
                  <div className="py-4">{userInfo.nickname}</div>

                  <div className="py-4 font-bold">아이디</div>
                  <div className="py-4">{userInfo.userId}</div>
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <div className="py-4 font-bold">이메일</div>
                  <div className="py-4">{userInfo.email}</div>
                  <div className="py-4 font-bold">비밀번호</div>
                  <div className="py-4">**************</div>
                  <div className="py-4 font-bold">전화번호</div>
                  <div className="py-4">{userInfo.phone}</div>
                </div>
              </div>
            </div>
            <Link href="/mypage/mypageUpdate">
              <button className="text-white rounded-md px-4 py-2 text-sm bg-[#1814F3] w-32 text-center drop-shadow-lg mt-4">
                Edit
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyPageMain;
