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

const TopBar = () => {
    return (         
      <div className="bg-white w-screen lg:w-300 lg:h-16 flex flex-col items-center justify-center">
        상단 바
      </div>
    );
};


export default function LoginPage() {
    
    return (
        <div className="flex flex-col">

            <div className="flex flex-col">                
                <TopBar/>
            </div>

            <div className="flex flex-row">
                
                <div className="flex flex-col">
                    <MenuBar/>
                </div>


                <div className="flex flex-col p-3">
                    
                    {/* 여기에 화면 구현 */}
                    
                    <div className="text-blue-500 p-3 ml-10 mt-5" style={{ borderBottom: '4px solid blue', display: 'inline-block', width: '70px' }}>관리자</div>



                    <div className="flex flex-row mt-5 ml-10 gap-10">
                        
                        <div className="flex flex-row w-[13rem] h-20 bg-white rounded-lg">
                            <img src="/mngimg1.png" className="h-full ml-3" />
                            <div className="flex items-center justify-center">사용자 정보</div>
                        </div>

                        <div className="flex flex-row w-[13rem] h-20 bg-white rounded-lg">
                            <img src="/mngimg2.png" className="h-full ml-3" />
                            <div className="flex items-center justify-center">사용자 정보</div>
                        </div>

                        <div className="flex flex-row w-[13rem] h-20 bg-white rounded-lg">
                            <img src="/mngimg4.png" className="h-full ml-3" />
                            <div className="flex items-center justify-center">사용자 정보</div>
                        </div>

                        <div className="flex flex-row w-[13rem] h-20 bg-white rounded-lg">
                            <img src="/mngimg3.png" className="h-full ml-3" />
                            <div className="flex items-center justify-center">사용자 정보</div>
                        </div>

                    </div>

                    <div className="text-blue-500 mt-10 ml-10 bold">출력결과</div>

                    <div className='flex flex-col bg-white w-90 h-[30rem] mt-4 ml-10'>
                        <div className='text-gray-500 flex flex-row gap-20  ml-5 mt-5'> 
                            <span>순서</span> <span>상태</span> <span>정확도</span> <span>시간</span> <span>안내메세지 전송 속도</span> 
                        </div>
                        <hr className="border-gray-300 mt-3" />
                    </div>

                    
                    

                </div>



            </div>
        </div>

       
    );
}