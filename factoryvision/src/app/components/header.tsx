import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* <img src="/mainlogo.png" alt="visionfactory" className="w-70 h-10" /> */}

      <div className="flex items-center space-x-4  mr-10">
        <Link href="/user/login">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            로그인
          </div>
        </Link>
        <Link href="user/signup">
          <div className="text-white rounded-md px-4 py-2 text-sm bg-blue-500 w-32 text-center drop-shadow-lg">
            회원가입
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
