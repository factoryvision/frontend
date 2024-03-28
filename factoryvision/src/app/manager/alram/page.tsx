"use client";
import Link from 'next/link';
import { ChangeEvent, useState, useEffect } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";


const Alram = () => {

    const [alrams, setAlrams] = useState([]);

    const currentPage = 2;
    const totalPages = 5

    interface AlramInfo {        
        userId: string;
        name: string;
        phone: string;        
        createdAt: string;
      }

      useEffect(() => {
        // 사용자 데이터를 가져오는 비동기 함수
        const fetchAlramData = async () => {
            try {
                const response = await fetch("http://localhost:8080/factoryvision/admin/emergency", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${localStorage.getItem("access-token")}`        
                    },
                });
                const data = await response.json();
                console.log("전체 사용자 정보",response);
                setAlrams(data); // 사용자 데이터를 상태에 설정
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchAlramData(); // 데이터 가져오기 함수 호출
    }, []);
    
    return (
        <div className="flex flex-col">

            <div className="flex flex-col">                
                <Header/>
            </div>

            <div className="flex flex-row">
                
                <div className="flex flex-col">
                    <Sidebar/>
                </div>


                <div className="flex flex-col p-3">
                    
                    {/* 여기에 화면 구현 */}                   
                    

                    <div>
                        <img src="/realtime.png" className="w-[8rem] mt-3 ml-3" />
                    </div>
                    

                    <div className="text-blue-500 mt-5 ml-10 bold">호출 알람 조회</div>

                    <div className='flex flex-col bg-white w-[60rem] h-[20rem] mt-2 ml-10'>
                        <div className='text-gray-500 flex flex-row gap-20  ml-7 mt-5'> 
                            <span>순서</span> <span>이름</span> <span>전화번호</span> <span>요청 시간</span>  
                        </div>
                        <hr className="border-gray-300 mt-3" />
                        {alrams.map((user: AlramInfo, index) => (
                            <div key={index} className="flex flex-row ml-5 mt-3 gap-20">
                                <span>{index + 1}</span> {/* 순서 */}                                  
                                <span>{user.name || '-'}</span> {/* 이름 */}                                                         
                                <span>{user.phone || ' 000-0000   '}</span> {/* 전화번호 */}
                                <span>{user.createdAt || '-'}</span> {/* 요청 시간 */}                                     
                            </div>
                        ))}

                    </div>

                    
                    {/* <div className = "flex flex-row gap-2 text-blue-500 justify-end mt-3 mr-3">
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

                    </div> */}
                    
                    

                </div>

            </div>
        </div>

       
    );
}
export default Alram;