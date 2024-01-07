import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'MRIsdi - Contact',
    description: 'Portfolio',
}

export default function contact(){
    return(
        <>
            <Sidebar />
            <main className="flex md:h-screen md:w-[calc(100%-270px)] relative md:left-[250px] font-['Poppins'] bg-[rgba(57,62,70,0.5)] md:ml-5 md:rounded-l-3xl">
                <div className="basis-full">
                    <Header text='CONTACT' />
                    <section className='md:ps-10 md:px-0 px-4 mb-16'>
                        <p className="text-xl text-[#eeeeee]">
                            Would like to cooperate, please contact at:
                        </p>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:w-3/4 mt-4'>
                            <a href='mailto:isdiridho@gmail.com' className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                    <path d="M10.2305 131.25H34.0811V73.3213L0 47.7305V121.02C0 126.691 4.59082 131.25 10.2305 131.25Z" fill="#4285F4"/>
                                    <path d="M115.919 131.25H139.77C145.409 131.25 150 126.659 150 121.02V47.7305L115.919 73.2891V131.25Z" fill="#34A853"/>
                                    <path d="M115.919 28.9805V73.2891L150 47.7305V34.0811C150 21.4512 135.571 14.2207 125.461 21.8116L115.919 28.9805Z" fill="#FBBC04"/>
                                    <path d="M34.0811 73.3213V28.9805L75 59.6719L115.919 28.9805V73.3213L75 103.98L34.0811 73.3213Z" fill="#EA4335"/>
                                    <path d="M0 34.1104V47.7598L34.0811 73.3184V28.9805L24.5391 21.8409C14.4287 14.25 0 21.4805 0 34.1104Z" fill="#C5221F"/>
                                </svg>
                                <p className="text-lg text-[#eeeeee]">isdiridho@gmail.com</p>
                            </a>
                            <a href='https://www.instagram.com/10.mrisdi.11/' target='_blank' className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                    <g clip-path="url(#clip0_743_517)">
                                        <path d="M105.314 0H44.6858C20.046 0 0 20.046 0 44.6858V105.314C0 129.954 20.046 150 44.6858 150H105.314C129.954 150 150 129.954 150 105.314V44.6858C150 20.046 129.954 0 105.314 0ZM134.91 105.314C134.91 121.659 121.659 134.91 105.314 134.91H44.6858C28.3406 134.91 15.09 121.659 15.09 105.314V44.6858C15.09 28.3404 28.3406 15.09 44.6858 15.09H105.314C121.659 15.09 134.91 28.3404 134.91 44.6858V105.314Z" fill="url(#paint0_linear_743_517)"/>
                                        <path d="M74.9999 36.2046C53.6081 36.2046 36.2046 53.6081 36.2046 74.9997C36.2046 96.3912 53.6081 113.795 74.9999 113.795C96.3917 113.795 113.795 96.3914 113.795 74.9997C113.795 53.6079 96.3917 36.2046 74.9999 36.2046ZM74.9999 98.7053C61.9077 98.7053 51.2946 88.0921 51.2946 74.9999C51.2946 61.9077 61.908 51.2946 74.9999 51.2946C88.0921 51.2946 98.7053 61.9077 98.7053 74.9999C98.7053 88.0919 88.0919 98.7053 74.9999 98.7053Z" fill="url(#paint1_linear_743_517)"/>
                                        <path d="M113.87 45.792C119.005 45.792 123.167 41.63 123.167 36.4959C123.167 31.3617 119.005 27.1997 113.87 27.1997C108.736 27.1997 104.574 31.3617 104.574 36.4959C104.574 41.63 108.736 45.792 113.87 45.792Z" fill="url(#paint2_linear_743_517)"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_743_517" x1="75" y1="149.563" x2="75" y2="1.16508" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E09B3D"/>
                                        <stop offset="0.3" stop-color="#C74C4D"/>
                                        <stop offset="0.6" stop-color="#C21975"/>
                                        <stop offset="1" stop-color="#7024C4"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_743_517" x1="74.9999" y1="149.563" x2="74.9999" y2="1.16501" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E09B3D"/>
                                        <stop offset="0.3" stop-color="#C74C4D"/>
                                        <stop offset="0.6" stop-color="#C21975"/>
                                        <stop offset="1" stop-color="#7024C4"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_743_517" x1="113.87" y1="149.563" x2="113.87" y2="1.16502" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E09B3D"/>
                                        <stop offset="0.3" stop-color="#C74C4D"/>
                                        <stop offset="0.6" stop-color="#C21975"/>
                                        <stop offset="1" stop-color="#7024C4"/>
                                        </linearGradient>
                                        <clipPath id="clip0_743_517">
                                        <rect width="150" height="150" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-lg text-[#eeeeee]">10.mrisdi.11</p>
                            </a>
                            <a href='https://www.linkedin.com/in/mrisdi/' target='_blank' className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                    <g clip-path="url(#clip0_743_537)">
                                        <path d="M136.431 0H13.5687C6.075 0 0 6.075 0 13.5687V136.431C0 143.925 6.075 150 13.5687 150H136.431C143.925 150 150 143.925 150 136.431V13.5687C150 6.075 143.925 0 136.431 0ZM46.4164 129.52C46.4164 131.701 44.6486 133.469 42.4677 133.469H25.659C23.4781 133.469 21.7103 131.701 21.7103 129.52V59.0588C21.7103 56.8779 23.4781 55.1101 25.659 55.1101H42.4677C44.6486 55.1101 46.4164 56.8779 46.4164 59.0588V129.52ZM34.0634 48.4681C25.2444 48.4681 18.095 41.3187 18.095 32.4997C18.095 23.6808 25.2444 16.5314 34.0634 16.5314C42.8823 16.5314 50.0317 23.6808 50.0317 32.4997C50.0317 41.3187 42.8827 48.4681 34.0634 48.4681ZM134.258 129.838C134.258 131.843 132.632 133.469 130.627 133.469H112.59C110.585 133.469 108.96 131.843 108.96 129.838V96.7877C108.96 91.8573 110.406 75.1826 96.075 75.1826C84.9589 75.1826 82.7042 86.5959 82.2514 91.7179V129.838C82.2514 131.843 80.6262 133.469 78.6208 133.469H61.176C59.1711 133.469 57.5454 131.843 57.5454 129.838V58.7407C57.5454 56.7357 59.1711 55.1101 61.176 55.1101H78.6208C80.6258 55.1101 82.2514 56.7357 82.2514 58.7407V64.888C86.3733 58.7022 92.4989 53.9277 105.541 53.9277C134.423 53.9277 134.258 80.9105 134.258 95.7361V129.838Z" fill="#0077B7"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_743_537">
                                        <rect width="150" height="150" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-lg text-[#eeeeee]">linkedin.com/in/mrisdi/</p>
                            </a>
                        </div>
                    </section>
                </div>
                <Menu />
            </main>
        </>
    )
}