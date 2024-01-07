"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import { useEffect } from "react"

export default function Sidebar(){
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
        <>
        <div className="fixed bg-[#eeeeee] rounded-r-3xl md:block hidden w-[250px] top-0 bottom-0 z-10">
            <div className='w-full aspect-square bg-[#393E46] grid place-items-center rounded-tr-3xl'>
                <Link href={"/"} className="hover:scale-110 duration-300 image">
                    <Image src={logo} alt='icon' width={100} height={100} />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 mt-10'>
                <Link href={"/"} className='hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-slate-950/50 w-[200px] text-center rounded-full py-3 text-2xl font-bold menu'>HOME</Link>
                <Link href={"/about"} className='hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-slate-950/50 w-[200px] text-center rounded-full py-3 text-2xl font-bold menu'>ABOUT ME</Link>
                <Link href={"/resume"} className='hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-slate-950/50 w-[200px] text-center rounded-full py-3 text-2xl font-bold menu'>RESUME</Link>
                <Link href={"/portfolio"} className='hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-slate-950/50 w-[200px] text-center rounded-full py-3 text-2xl font-bold menu'>PORTFOLIO</Link>
                <Link href={"/contact"} className='hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-slate-950/50 w-[200px] text-center rounded-full py-3 text-2xl font-bold menu'>CONTACT</Link>
            </div>
        </div>
        </>
    )
}