import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import img from "@/assets/bg.png"
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export const metadata: Metadata = {
    title: 'MRIsdi - Portfolio',
    description: 'Portfolio',
}

const prisma = new PrismaClient()

export default async function portfolio(){
    const data = await prisma.portfolio.findMany()
    return(
        <>
            <Sidebar />
            <main className="flex md:w-[calc(100%-270px)] relative md:left-[250px] font-['Poppins'] bg-[rgba(57,62,70,0.5)] md:ml-5 md:rounded-l-3xl">
                <div className="basis-full">
                    <Header text='PORTFOLIO' />
                    <section className='md:px-10 px-4 md:w-full w-screen grid md:grid-cols-4 grid-cols-2 gap-4 mb-16'>
                        {
                            data.map((a,i)=>(
                                <a href={`${a["link"]}`} key={i} className='relative hover:scale-110 duration-500 ease-in-out transition-all bg-[#eeeeee] rounded-2xl'>
                                    <Image src={img} alt='Kode' className='rounded-t-2xl mb-4' />
                                    {
                                        a["tech"]?.split(",").map((a,i)=>(
                                            <span key={i} className='text-sm font-light bg-[#393E46] mx-1 text-[#eee] py-1 px-2 rounded-md'>{a}</span>
                                        ))
                                    }
                                    <p className='font-bold text-[#222831] my-4 mx-1'>{a["name"]}</p>
                                </a>
                            ))
                        }
                    </section>
                </div>
                <Menu />
            </main>
        </>
    )
}