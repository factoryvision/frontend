//마이페이지
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

const myPageMain = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg px-10 p-5 md:container md:mx-auto]">
          {/*  */}
          <div className="text-blue-700 border-b-4 text-sm px-4 pb-4 w-30 border-blue-700 text-center">
            마이페이지
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default myPageMain;
