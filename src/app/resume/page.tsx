import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import SlideCertification from '@/components/SlideCertification'
import { PrismaClient } from '@prisma/client';
import SlideExperience from '@/components/SlideExperience'

const prisma = new PrismaClient()

export const metadata: Metadata = {
    title: 'MRIsdi - Resume',
    description: 'Portfolio',
}

async function getCertification(){
    const res = await fetch("https://mrisdi.vercel.app/api/Certification",{
        cache: "no-store"
    })
    // const res = await fetch("http://localhost:3000/api/Portfolio",{
    //     cache: "no-store"
    // })
    return res.json()
}

async function getExperience(){
    const res = await fetch("https://mrisdi.vercel.app/api/Experience",{
        cache: "no-store"
    })
    // const res = await fetch("http://localhost:3000/api/Portfolio",{
    //     cache: "no-store"
    // })
    return res.json()
}

export default async function resume(){
    const certication = await getCertification()
    const experience = await getExperience()
    return(
        <>
            <Sidebar />
            <main className="flex md:h-screen md:w-[calc(100%-270px)] relative md:left-[250px] font-['Poppins'] bg-[rgba(57,62,70,0.5)] md:ml-5 md:rounded-l-3xl">
                <div className="basis-full">
                    <Header text='RESUME' />
                    <div className='md:ps-10 md:px-0 px-4 md:w-full w-screen mb-20'>
                        <p className='text-3xl font-bold text-[#eeeeee] mb-3'>CERTIFICATION</p>
                        <div className="md:w-[70vw] w-[85vw]">
                            <SlideCertification data={certication} />
                        </div>
                        <p className='text-3xl font-bold text-[#eeeeee] my-3'>EXPERIENCE</p>
                        <div className='md:w-[70vw] w-[85vw]'>
                            <SlideExperience data={experience} />
                        </div>
                    </div>
                </div>
                <Menu />
            </main>
        </>
    )
}

