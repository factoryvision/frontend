import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white fixed w-full top-0 left-0 right-0">
      <img src="/mainlogo.png" alt="logo" className="w-50 h-10" />
      <div className="flex items-center space-x-4">
        <Link href="/user/login">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            로그인
          </div>
        </Link>
        <Link href="/user/register">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            회원가입
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
