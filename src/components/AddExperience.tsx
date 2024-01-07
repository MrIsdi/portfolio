"use client"
import axios from "axios";
import type { Metadata } from "next"
import Link from "next/link"
import React, { useState } from "react"

const metadata: Metadata = {
    description: "Portfolio",
    title: "MRIsdi - Experience"
}

export default function AddExperience(){
    const [name, setName] = useState("")
    const [place, setPlace] = useState("")
    const [completeTime, setCompleteTime] = useState("")
    const [summary, setSummary] = useState("")
    const handleSubmit = async (e: React.SyntheticEvent) =>{
        e.preventDefault()
        const body = { 
            "name": name, 
            "place": place,
            "completeTime": completeTime,
            "summary": summary
        }
        await axios.post("http://localhost:3000/api/Experience", body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((er)=>{
            console.log(er)
        })
    }

    return (
        <>
            <main className="bg-[rgba(57,62,70,0.5)] grid h-screen place-items-center">
                <section className="w-1/3 h-fit bg-[#393E46] shadow-lg shadow-neutral-500/50 rounded-3xl">
                    <h1 className="text-[#eee] text-3xl text-center mt-8">Add of Experience</h1>
                    <form method="post" className="py-4 px-8 mb-8" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Name</p>
                            <input type="text" id="name" name="addName" className="flex h-10 ps-4 rounded-lg" 
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the name of the experience</span>
                        </label>
                        <label htmlFor="Place" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Place</p>
                            <input type="text" id="Place" name="addPlace" className="flex h-10 ps-4 rounded-lg"
                                value={place}
                                onChange={(e)=>{
                                    setPlace(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the organizer of the experience</span>
                        </label>
                        <label htmlFor="Complete time" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Complete time</p>
                            <input type="text" id="Complete time" name="addCompleteTime" className="flex h-10 ps-4 rounded-lg"
                                value={completeTime}
                                onChange={(e)=>{
                                    setCompleteTime(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the complete time of the experience</span>
                        </label>
                        <label htmlFor="Summary" className="flex flex-col mb-4">
                            <p className="text-base text-[#eee]">Summary</p>
                            <textarea id="Summary" name="addSummary" className="flex h-20 ps-4 rounded-lg"
                                value={summary}
                                onChange={(e)=>{
                                    setSummary(e.target.value)
                                }} />
                            <span className="text-xs text-[rgba(238,238,238,.5)]">Input the Summary of the experience</span>
                        </label>
                        <div className="flex justify-between">
                            <Link href={'/resume'} type="button" className="bg-blue-500 hover:bg-[#eee] hover:text-blue-500 duration-300 py-2 px-4 rounded-xl text-[#eee]">Back Home</Link>
                            <button type="submit" className="bg-green-500 hover:bg-[#eee] hover:text-green-500 duration-300 py-2 px-4 rounded-xl text-[#eee]">Add Experience</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}