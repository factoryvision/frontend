import Link from 'next/link';
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
    
    return (
      <div className="flex flex-col items-center mt-[6em]">
        <Link href="/">
            <div className="text-6xl font-light mb-10">factory</div>
        </Link>      
        <div className="flex flex-col gap-[1.25rem] mt-[2.06rem]">

            <div className="flex flex-col gap-[0.75rem]">
                <div className="text-[0.875rem]">아이디</div>
                <input
                    className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
                    type="text"
                    placeholder="5자 이하로 입력해주세요"                    
                />                
            </div>
            <div className="flex flex-col gap-[0.75rem]">
                <div className="text-[0.875rem]">비밀번호</div>
                <input
                    className="w-[17.5rem] h-[2.3125rem] bg-[#FCF2DD] text-[0.8125rem] rounded-[0.5rem] p-4"
                    type="text"
                    placeholder="5자 이하로 입력해주세요"                    
                />                
            </div>
        </div>

        <div>
          아이디가 없으시다면?
          <Link href={'/register'} className="ml-2">
            <div className="text-6xl font-light mb-10">factory</div>
          </Link>
        </div>
      </div>
    );
  }