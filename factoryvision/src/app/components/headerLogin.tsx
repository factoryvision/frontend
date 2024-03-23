import Link from "next/link";
import { useEffect, useState } from "react";


const HeaderLogin = () => {    

    interface UserInfo {
        name: string;
        email: string;
        nickname: string;
        phone: string;    
        userId: string;
        }
    
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: "",
        email: "",
        nickname: "",
        phone: "",
        userId: "",
    });    
      
    
      // 토큰을 이용하여 사용자의 아이디를 얻는 API 호출
      useEffect(() => {
        const fetchUserId = async () => {
          try {
            const response = await fetch("http://localhost:8080/factoryvision/tokenInfo", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("access-token")}`        
              },
            });
            if (response.ok) {
              const userId = await response.text(); // 사용자 아이디만 받아옴
              fetchUserInfo(userId); // 사용자 아이디를 이용하여 사용자 정보를 가져오는 함수 호출
            } else {
              console.error("사용자 아이디를 가져오는데 실패했습니다.",response);          
                        
            }
          } catch (error) {
            console.error("사용자 아이디를 가져오는데 에러가 발생했습니다:", error);
          }
        };
    
        fetchUserId(); // useEffect가 호출되면 사용자 아이디를 가져오는 함수 호출
      }, []);
    
      // 사용자 아이디를 이용하여 사용자 정보를 가져오는 API 호출
      const fetchUserInfo = async (user_Id: string) => {
        try {
          const response = await fetch(`http://localhost:8080/factoryvision/userInfo/${user_Id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `${localStorage.getItem("access-token")}`        
            },
          });
          if (response.ok) {
            const data = await response.json();
            console.log("사용자 정보",data)
            setUserInfo(data); // 받아온 사용자 정보를 상태에 저장
          } else {
            console.error("사용자 정보를 가져오는데 실패했습니다.");
            // 사용자 정보를 가져오지 못한 경우 로그인 페이지로 이동 또는 오류 처리
            // router.push("/login");
          }
        } catch (error) {
          console.error("사용자 정보를 가져오는데 에러가 발생했습니다:", error);
        }
      };
    



    return (
      <div className="flex justify-between items-center p-4 bg-white fixed w-full top-0 left-0 right-0">
        <img src="/mainlogo.png" alt="logo" className="w-50 h-10" />
        <div className="flex items-center space-x-4">
            환영합니다. {userInfo.nickname} 님
        </div>
      </div>
    );
  };
  
  export default HeaderLogin;