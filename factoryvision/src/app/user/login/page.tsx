"use client";

import Sidebar from "@/app/components/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/factoryvision/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("토큰 data", data);
        const accessToken = data.accessToken; // Assuming the token is returned as accessToken
        localStorage.setItem("access-token", accessToken);
        router.push("/");
      } else {
        console.error("Login failed 로그인 실패");
        console.error(response);
      }
    } catch (error) {
      console.error("Error during login 로그인 catch에러:", error);
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setuserId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-1 justify-center items-center h-screen">
        <div
          className="bg-gray-200 rounded-lg w-[300px] h-[450px] p-5"
          style={{
            backgroundImage: "url(/login_img.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="bg-white rounded-lg w-[370px] h-[450px] p-5">
          <div className="absolute mt-1 flex ml-[10rem] text-[13px]">
            <div className="h-screen mr-3">계정이 없으신가요</div>
            <Link href="/user/register">
              <div className="text-blue-500 hover:underline text-[15px]">
                계정만들기
              </div>
            </Link>
          </div>

          <div className="flex flex-col p-5 gap-[0.75rem] mt-10">
            <div className="text-[0.875rem]">아이디</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              type="text"
              placeholder="5자 이하로 입력해주세요"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="flex flex-col p-5 gap-[0.75rem]">
            <div className="text-[0.875rem]">비밀번호</div>
            <input
              className="w-[17.5rem] h-[2.3125rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
              type="password"
              placeholder="5자 이하로 입력해주세요"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex justify-center items-center mt-10">
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded p-5"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
