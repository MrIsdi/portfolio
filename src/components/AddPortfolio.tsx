"use client"
import axios from "axios";
import type { Metadata } from "next"
import Link from "next/link"
import { useRouter } from "next/navigation";
import React, { useState } from "react"

const metadata: Metadata = {
    description: "Portfolio",
    title: "MRIsdi - Portfolio"
}

export default function AddPortfolio(){
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [tech, setTech] = useState("")
    const router = useRouter()
    const handleSubmit = async (e: React.SyntheticEvent) =>{
        e.preventDefault()
        const body = { 
            "name": name, 
            "link": link,
            "tech":tech
        }
        // await axios.post("https://mrisdi.vercel.app/api/Portfolio", body)
        await axios.post("http://localhost:3000/api/Portfolio", body)
        .then((res)=>{
            console.log(res.data)
            router.push("/portfolio")
        })
        .catch((er)=>{
            console.log(er)
        })
    }

    return (
        <>
            <main className="bg-[rgba(57,62,70,0.5)] grid h-screen place-items-center">
                <section className="w-1/3 h-fit bg-[#393E46] shadow-lg shadow-neutral-500/50 rounded-3xl">
                    <h1 className="text-[#eee] text-3xl text-center mt-8">Add of Portfolio</h1>
                    <form method="post" className="py-4 px-8 mb-8" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Name</p>
                            <input type="text" id="name" name="addName" className="flex h-10 ps-4 rounded-lg" 
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the name of the Portfolio</span>
                        </label>
                        <label htmlFor="Link" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Link</p>
                            <input type="text" id="Link" name="addLink" className="flex h-10 ps-4 rounded-lg"
                                value={link}
                                onChange={(e)=>{
                                    setLink(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the link of the Portfolio</span>
                        </label>
                        <label htmlFor="Tech" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Tech</p>
                            <textarea id="Tech" name="addTech" className="flex h-20 ps-4 rounded-lg"
                                value={tech}
                                onChange={(e)=>{
                                    setTech(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the tech of the Portfolio</span>
                        </label>
                        <div className="flex justify-between">
                            <Link href={'/portfolio'} type="button" className="bg-blue-500 hover:bg-[#eee] hover:text-blue-500 duration-300 py-2 px-4 rounded-xl text-[#eee]">Back Home</Link>
                            <button type="submit" className="bg-green-500 hover:bg-[#eee] hover:text-green-500 duration-300 py-2 px-4 rounded-xl text-[#eee]">Add Portfolio</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}