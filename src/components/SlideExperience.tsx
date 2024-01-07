"use client"
import Slider from "react-slick"
import { experience } from '@prisma/client';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

export default function SlideExperience({data}:{data: experience[]}){
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
        <>
            <Slider {...settings}>
                {
                    data.map((a,i)=>(
                        <div key={i}>
                            <div className="bg-[#eeeeee] rounded-2xl p-4 mx-4">
                                <div className="flex justify-between">
                                    <p className="text-sm font-bold">{a["name"]} | {a["place"]}</p>
                                    <p className="text-sm font-bold">{ a["completeTime"] }</p>
                                </div>
                                <div className="mt-4">
                                    <ul className="pl-4">
                                        {
                                            a["summary"]?.split(",").map((a, i)=>(
                                                <li key={i} className="list-disc text-sm font-light">{a}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}