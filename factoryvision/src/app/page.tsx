// 메인페이지

import Sidebar from "./components/sidebar";
import Link from "next/link";
import Header from "@/app/components/header";

export default function Main() {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
    </div>
  );
}
