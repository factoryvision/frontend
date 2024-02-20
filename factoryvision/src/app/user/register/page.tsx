import Link from 'next/link';
import { ChangeEvent, useState } from "react";

const MenuBar = () => {
    return (         
    <div className="bg-white h-screen lg:w-60 flex flex-col justify-start">
        <img src="/logo.png" className="w-full" />
        <div className="text-blue text-xl p-4">메뉴1</div>
        <div className="text-blue text-xl p-4">메뉴2</div>        
      </div>
    );
  };

export default function LoginPage() {
    
    return (
        <div className="flex">
            <MenuBar />
            
            <div className='flex flex-1 justify-center items-center h-screen'>

                <div className="bg-gray-200 rounded-lg w-[300px] h-[450px] p-5" style={{backgroundImage: 'url(/login_img.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    
                </div>


                <div className="bg-white rounded-lg w-[370px] h-[450px] p-5">         

                    <div className="flex flex-col p-1 gap-[0.75rem] mt-1">

                        <div className="flex flex-col gap-[0.25rem] mt-0">
                            <div className="text-[0.875rem]">이름</div>
                                <input
                                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                                type="text"
                                placeholder="5자 이하로 입력해주세요"                    
                                />                
                        </div>

                        <div className="flex flex-col gap-[0.2rem] mt-1">
                            <div className="text-[0.875rem]">닉네임</div>
                                <input
                                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                                type="text"
                                placeholder="5자 이하로 입력해주세요"                    
                                />                
                        </div>


                        <div className="flex flex-col gap-[0.2rem] mt-1">
                            <div className="text-[0.875rem]">아이디</div>
                                <input
                                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                                type="text"
                                placeholder="5자 이하로 입력해주세요"                    
                                />                
                        </div>


                        <div className="flex flex-col gap-[0.2rem] mt-1">
                            <div className="text-[0.875rem]">비밀번호</div>
                                <input
                                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                                type="text"
                                placeholder="5자 이하로 입력해주세요"                    
                                />                
                        </div>


                        <div className="flex flex-col gap-[0.2rem] mt-1">
                            <div className="text-[0.875rem]">이메일</div>
                                <input
                                className="w-[17.5rem] h-[2rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-2 border border-blue-500"
                                type="text"
                                placeholder="5자 이하로 입력해주세요"                    
                                />                
                        </div>


                        <div className="flex justify-center items-center mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded p-5">
                                회원가입
                            </button>
                        </div> 
                               
                    </div>    



                    
                                 

                </div>    

            </div>
        </div>
    );
}