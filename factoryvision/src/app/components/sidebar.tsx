import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white w-72 h-lvh flex flex-col justify-start">
      <div className="p-5 h-10" />
      {/* <div className="w-200 h-10"></div> */}
      {/* <img src="/mainlogo.png" alt="logo" className=" h-10" /> */}
      <Link href="/">
        <button className="flex items-center p-5 my-8 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600">
          <img src="/home.png" alt="logo" className="w-7 h-7" />
          <span className="text-lg w-full text-center text-gray-400	">홈</span>
        </button>
      </Link>
      <Link href="/mypage/mypageMain">
        <button className="flex items-center p-5 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600 text-lg">
          <img src="/user.png" alt="logo" className="w-7 h-7" />
          <span className="text-lg w-full text-center text-gray-400	">
            마이페이지
          </span>
        </button>
      </Link>
      <Link href="/board/boardList">
        <button className="flex items-center p-5 my-8 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600">
          <img src="/board.png" alt="logo" className="w-7 h-7" />

          <span className="text-lg w-full text-center text-gray-400	">
            게시판
          </span>
        </button>
      </Link>
    </div>
    // </div>
  );
};

export default Sidebar;
