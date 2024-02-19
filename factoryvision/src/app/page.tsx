// 메인페이지
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex justify-between items-center p-4">
      <img src="/logo.png" alt="visionfactory" className="w-95 h-12" />

      <div className="flex items-center space-x-4  mr-10">
        <Link href="/user/login">
          <div className="text-white border border-black rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center">
            로그인
          </div>
        </Link>
        <Link href="user/signup">
          <div className="text-white border border-black rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center">
            회원가입
          </div>
        </Link>
      </div>
    </div>
  );
}
