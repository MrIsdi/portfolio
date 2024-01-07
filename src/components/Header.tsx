"use client"

type props = {
    text: string
}

export default function Header({text}: props){
    return(
        <>
        <header className='mt-16 mb-8'>
            <h1 className='text-6xl text-[#eeeeee] tracking-[4.8px] font-bold text-center'>{text}</h1>
        </header>
        </>
    )
}