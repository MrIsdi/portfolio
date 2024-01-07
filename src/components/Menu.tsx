"use client"
import Link from "next/link";
import { useEffect } from "react"

export default function Menu(){
  useEffect(()=>{
    const menu = document.querySelectorAll<HTMLAnchorElement>(".menu")
    menu.forEach((a)=>{
      if(window.location.href == a.href){
        a.classList.add("text-[#393E46]")
      }else{
        a.classList.add("text-[#222831]")
      }
    })
  }, [])
  return(
      <div className="border border-[rgba(0,0,0,.25)] fixed md:w-fit w-full h-fit bg-[#eee] md:right-6 md:top-1/2 top-full md:-translate-y-1/2 -translate-y-full rounded-full flex md:flex-col justify-evenly items-center z-10 shadow-xl shadow-neutral-300/50">
        <Link className="hover:-translate-y-2 duration-300 menu" href={"/"}><i className={`m-3 bx bxs-home text-5xl hover:text-[#393E46]`}></i></Link>
        <Link className="hover:-translate-y-2 duration-300 menu" href={"/about"}><i className={`m-3 bx bxs-user text-5xl hover:text-[#393E46]`}></i></Link>
        <Link className="hover:-translate-y-2 duration-300 menu" href={"/resume"}><i className={`m-3 bx bxs-briefcase text-5xl hover:text-[#393E46]`}></i></Link>
        <Link className="hover:-translate-y-2 duration-300 menu" href={"/portfolio"}><i className={`m-3 bx bx-desktop text-5xl hover:text-[#393E46]`}></i></Link>
        <Link className="hover:-translate-y-2 duration-300 menu" href={"/contact"}><i className={`m-3 bx bxs-paper-plane text-5xl hover:text-[#393E46]`}></i></Link>
      </div>
  )
}

//<div className="fixed w-[80px] h-[350px] bg-[#eee] right-6 top-1/2 -translate-y-1/2 rounded-full flex flex-col justify-evenly items-center">