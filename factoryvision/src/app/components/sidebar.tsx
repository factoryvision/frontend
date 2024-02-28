const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full tm-50 bg-white text-black w-50 flex flex-col justify-between">
      <div className="p-5">
        <img src="/mainlogo.png" alt="logo" className="w-50 h-10" />

        <button className="flex items-center p-5 my-8 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600">
          <img src="/home.png" alt="logo" className="w-7 h-7" />
          <span className="text-lg w-full text-center text-gray-400	">홈</span>
        </button>
        <button className="flex items-center p-5 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600 text-lg">
          <img src="/user.png" alt="logo" className="w-7 h-7" />
          <span className="text-lg w-full text-center text-gray-400	">
            마이페이지
          </span>
        </button>
        <button className="flex items-center p-5 my-8 w-full h-10 rounded-lg hover:bg-[#2D60FF] focus:outline-none focus:bg-gray-600">
          <img src="/board.png" alt="logo" className="w-7 h-7" />
          <span className="text-lg w-full text-center text-gray-400	">
            게시판
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
