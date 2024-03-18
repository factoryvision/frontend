import Link from 'next/link';
import { ChangeEvent, useState } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

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

    const currentPage = 2;
    const totalPages = 5
    
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


                    <div className="text-blue-500 mt-10 ml-10 bold">출력결과</div>

                    <div className='flex flex-col bg-white w-[60rem] h-[30rem] mt-4 ml-10'>
                        <div className='text-gray-500 flex flex-row gap-20  ml-5 mt-5'> 
                            <span>순서</span> <span>이름</span> <span>닉네임</span> <span>전화번호</span> <span>이메일</span> <span>아이디</span> 
                        </div>
                        <hr className="border-gray-300 mt-3" />
                    </div>

                    
                    <div className = "flex flex-row gap-2 text-blue-500 justify-end mt-3 mr-3">
                        {currentPage > 1 && (
                            <span> {'<'} Previous </span>
                        )}

                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                            <span key={pageNumber}>
                                <Link href={`/${pageNumber}`}>
                                    <div style={{
                                            fontWeight: currentPage === pageNumber ? 'bold': 'normal',
                                        }}
                                    >
                                        {pageNumber}
                                    </div>
                                </Link>
                            </span>
                            )
                        )}    

                        {currentPage < totalPages && (
                            <span> Next {'>'} </span>
                        )}

                    </div>
                    
                    

                </div>



            </div>
        </div>

       
    );
}