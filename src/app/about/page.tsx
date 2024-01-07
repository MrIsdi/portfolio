import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import Image from 'next/image'
import gambar1 from "@/assets/web.png"
import gambar2 from "@/assets/ml.png"
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'MRIsdi - About',
    description: 'Portfolio',
}

export default function about(){
    return(
        <>
            <Sidebar />
            <main className="flex h-screen md:w-[calc(100%-270px)] relative md:left-[250px] font-['Poppins'] bg-[rgba(57,62,70,0.5)] md:ml-5 md:rounded-l-3xl">
                <div className="basis-full">
                    <Header text='ABOUT ME' />
                    <section>
                        <p className='text-[#eeeeee] text-base text-center mb-6 w-fit m-auto px-4' id='identity'>{`I'm`} <span className='font-bold'>Muhammad Ridho Isdi</span>, Frontend Web Developer / Machine Learning Developer</p>
                        <p className='text-[#eeeeee] md:text-base text-sm md:w-[660px] w-full break-words text-justify m-auto font-normal mb-6 md:px-0 px-4'>
                            Front end website development has been my passion from 2020 until now. From learning Responsive Web Design (RWD), Framework, JSON/API Integration and Animation. Machine learning development has been my passion from 2022 until now. From learning Supervised Learning, Unsupervised Learning, and Deep Learning such as Object Detection from images/videos and audio classification.
                        </p>
                        <div className='md:w-[660px] flex m-auto items-stretch md:gap-8 gap-4 flex-row md:px-0 px-4'>
                            <div className="basis-1/2 shadow-xl">
                                <Image src={gambar1} alt="Frontend" width={424} height={326} />
                            </div>
                            <div className="basis-1/2 shadow-xl">
                                <Image src={gambar2} alt="Machine Learning" width={424} height={326} />
                            </div>
                        </div>
                    </section>
                </div>
                <Menu />
            </main>
        </>
    )
}