"use client";
import React, { useState } from "react";
import { useRef } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import Link from "next/link";

const Home = () => {
  const [video, setVideo] = useState<File | null>(null); 
  
  const fileRef = useRef<HTMLInputElement>(null);

  // input click method
  const handleClick = () => {
    fileRef?.current?.click();    
    console.log("파일 업로드 클릭",fileRef);
  };

  const uploadFile = async (fileName: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('file', file);

      console.log("파일테스트",file, fileName);
      console.log("formdata", formData.get('file'));
      console.log("formdata", formData.get('fileName'));

      const response = await fetch('http://localhost:8080/factoryvision/upload', {    
        headers: {          
          "Authorization": `${localStorage.getItem("access-token")}`        
        },
        method: 'POST',
        body: formData,
      });
      console.log("response",response);

      if (response.ok) {
        console.log('파일이 성공적으로 업로드되었습니다.', response);
      } else {
        console.error('파일 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('파일 업로드 중 오류가 발생했습니다:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("핸들체인지",file);
      setVideo(file);
      uploadFile('test.mp4', file); // 파일이 선택되면 업로드 함수 호출
    }
  };
 
  // uploadFile('영상파일.mp4', video);
  

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
                    <input
                      className="hidden"
                      ref={fileRef}
                      type="file"
                      accept="video/*"
                      onChange={handleFileChange}
                    />
                  </div>                

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
