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
                    

                    <div className="absolute mt-1 flex ml-[10rem] text-[13px]">
                        <div className='h-screen mr-3'>
                            계정이 없으신가요
                        </div>                        
                        <Link href="/register">
                            <div className="text-blue-500 hover:underline text-[15px]">계정만들기</div>
                        </Link>
                                                 
                    </div>

                    <div className="flex flex-col p-5 gap-[0.75rem] mt-10">
                        <div className="text-[0.875rem]">아이디</div>
                            <input
                            className="w-[17.5rem] h-[2.3125rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                            type="text"
                            placeholder="5자 이하로 입력해주세요"                    
                            />                
                    </div>

                    <div className="flex flex-col p-5 gap-[0.75rem]">
                        <div className="text-[0.875rem]">비밀번호</div>
                            <input
                            className="w-[17.5rem] h-[2.3125rem] bg-[#fff] text-[0.8125rem] rounded-[0.5rem] p-4 border border-blue-500"
                            type="text"
                            placeholder="5자 이하로 입력해주세요"                    
                            />                
                        </div>

                        <div className="flex justify-center items-center mt-10">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded p-5">
                                로그인
                            </button>
                        </div> 
                               
                    </div>                        

                </div>    

            </div>
    );
}

  