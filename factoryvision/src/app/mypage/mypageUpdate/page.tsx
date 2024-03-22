//마이페이지 편집
"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";


const myPageMain = () => {
  

  const [user_Id, setUser_Id] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    phone: "",
    userId: ""
  });


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
          const user_Id = await response.text(); // 사용자 아이디만 받아옴
          setUser_Id(user_Id);
          
        } else {
          console.error("사용자 아이디를 가져오는데 실패했습니다.",response);          
                    
        }
      } catch (error) {
        console.error("사용자 아이디를 가져오는데 에러가 발생했습니다:", error);
      }
    };

    fetchUserId(); // useEffect가 호출되면 사용자 아이디를 가져오는 함수 호출
  }, []);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/factoryvision/${user_Id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem("access-token")}`
        },
        body: JSON.stringify(userInfo)
      });
      if (response.ok) {
        console.log("사용자 정보가 성공적으로 업데이트되었습니다.");
        // 업데이트 후 필요한 작업 수행
      } else {
        console.error("사용자 정보 업데이트에 실패했습니다.");
      }
    } catch (error) {
      console.error("사용자 정보 업데이트 중 에러가 발생했습니다:", error);
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
                  <div className="py-4">이름</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    value={userInfo.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="이름을 입력해주세요."                    
                  />
                  <div className="py-4">닉네임</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    value={userInfo.nickname}
                    onChange={handleChange}
                    name="nickname"
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                  />

                  <div className="py-4">아이디</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    value={userInfo.userId}
                    onChange={handleChange}
                    name="userId"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <div className="py-4">이메일</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    value={userInfo.email}
                    onChange={handleChange}
                    name="email"
                    type="text"
                    placeholder="you@example.com."
                  />
                  <div className="py-4">비밀번호</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"                    
                    type="text"
                    placeholder="영문, 숫자를 조합한 13자리를 입력해주세요."
                  />
                  <div className="py-4">전화번호</div>
                  <input
                    className="w-full h-full bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                    value={userInfo.phone}
                    onChange={handleChange}
                    name="phone"
                    type="text"
                    placeholder="11자리의 올바른 숫자를 입력해주세요."
                  />
                </div>
              </div>
            </div>
            <button 
              className="text-white rounded-md px-4 py-2 text-sm bg-[#1814F3] w-32 text-center drop-shadow-lg mt-4"
              onClick={handleSave}>
                Save
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default myPageMain;
