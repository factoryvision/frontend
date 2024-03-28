"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import { useRouter } from "next/navigation";

export default function RegisterPage() {


  const router = useRouter();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("ADMIN");

  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRole("ADMIN");
    } else {
      setRole("USER");
    }
  };


  const handleRegister = async () => {

    if (password !== confirmPassword) {
      console.error("비밀번호가 일치하지 않습니다.");
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/factoryvision/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          nickname,
          phone,
          email,
          userId,
          profilePhoto,
          role
        }),
      });

      if (response.ok) {
        router.push("/"); // Redirect to login page after successful registration
      } else {
        // Handle error response
        console.error("Registration failed");
      }
    }catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
  const handleUserIdChange = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  const handleProfilePhotoChange = (e: ChangeEvent<HTMLInputElement>) => setProfilePhoto(e.target.value);
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center h-screen">
        <div
          className="bg-gray-200 rounded-lg w-[300px] h-[630px] p-5"
          style={{
            backgroundImage: "url(/login_img.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="bg-white rounded-lg w-[370px] h-[630px] p-5">
          <div className="flex flex-col p-1 gap-[0.75rem] mt-1">
            <div className="flex flex-col gap-[0.25rem] mt-0">
              <div className="text-[0.875rem]">이름</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="text"
                placeholder="5자 이하로 입력해주세요"
                onChange={handleNameChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-0.7">
              <div className="text-[0.875rem]">닉네임</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="text"
                placeholder="5자 이하로 입력해주세요"
                onChange={handleNicknameChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-0.7">
              <div className="text-[0.875rem]">아이디</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="text"
                placeholder="5자 이하로 입력해주세요"
                onChange={handleUserIdChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-0.7">
              <div className="text-[0.875rem]">비밀번호</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="password"
                placeholder="5자 이하로 입력해주세요"
                onChange={handlePasswordChange}
              />
            </div>

            <div className="flex flex-col gap-[0.1rem] mt-0.5">
              <div className="text-[0.875rem]">비밀번호 확인</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="password"
                placeholder="5자 이하로 입력해주세요"
                onChange={handleConfirmPasswordChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-0.7">
              <div className="text-[0.875rem]">이메일</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="text"
                placeholder="5자 이하로 입력해주세요"
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-0.7">
              <div className="text-[0.875rem]">전화번호</div>
              <input
                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                type="text"
                placeholder="5자 이하로 입력해주세요"
                onChange={handlePhoneChange}
              />
            </div>

            <div className="flex flex-col gap-[0.2rem] mt-2">
              <div className="text-[0.875rem]">권한 설정</div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={role === "ADMIN"}
                  onChange={handleRoleChange}
                />
                <span>관리자</span>
              </label>
            </div>

            <div className="flex justify-center items-center mt-2">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded p-5"
                onClick={handleRegister}>
                  회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
