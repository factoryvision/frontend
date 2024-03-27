"use client";
import React, { useState } from "react";
import { useRef } from "react";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import Link from "next/link";

const Video = () => { 

  

  
  
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 rounded-lg py-20  bg-[#F5F7FA]">            
          
          <div className="rid flex-col py-20 place-content-between">  

            <div className="flex flex-col justify-center items-center px-10 ">
                <video controls width="70%" height="auto">
                    <source src="/videos/result/video_result.mp4" type="video/mp4" />                    
                    Your browser does not support the video tag.
                </video>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Video;