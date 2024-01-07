"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { certification } from '@prisma/client';

export default function SlideCertification({data}:{data: certification[]}){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <Slider {...settings}>
            {
                data.map((i, a)=>(
                    <div key={a}>
                        <div className='bg-[#eeeeee] rounded-2xl flex flex-col justify-center gap-2 p-4 mx-4 aspect-[3/1]'>
                            <div>
                                <p className="text-xs font-bold">Name</p>
                                <p className="text-sm normal">{i.name}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold">Organizers</p>
                                <p className="text-sm normal">{i.organizer}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold">Complete time</p>
                                <p className="text-sm normal">{i.completeTime}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
}