"use client";
import React, { useState } from "react";
import { useRef } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import Link from "next/link";

const Home = () => {
  const [video, setVideo] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
    }
  };

  const fileRef = useRef<HTMLInputElement>(null);
  // input click method
  const handleClick = () => {
    fileRef?.current?.click();
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg py-20  bg-[#F5F7FA]">
          <div className="bg-[url(/mainframe.png)] flex-between px-4 py-10">
            <p className="text-2xl text-center align-middle font-bold pb-3">
              FactoryVision
            </p>
            <p></p>
            <p className="text-center text-lg">쓰러진 사람을 감지합니다.</p>
            <p className="text-center  text-lg">
              비상 호출 버튼을 눌러 도음 요청을 할 수 있습니다.
            </p>
          </div>
          <div className="rid flex-col py-20 place-content-between">
            {/* 영상업로드 버튼 */}
            <div className="flex flex-col justify-center items-center px-10 ">
              <div className="rid w-[500px] h-[200px] text-center bg-white flex flex-nowrap place-content-center rounded-lg items-center ">
                <form>
                  <div className="flex flex-col px-10 " onClick={handleClick}>
                    <img
                      src="../imageupload.png"
                      alt="logo"
                      className="w-25 h-25 cursor-pointer"
                    />
                  </div>
                  <input
                    className="hidden"
                    ref={fileRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                  />
                </form>
                <div className="p-5">
                  <p className="text-center text-lg pb-4 font-bold">
                    영상 업로드
                  </p>
                  <p className="text-center text-xs text-[#718EBF]">
                    쓰러짐 감지를 위해 영상을 업로드해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
