import React from 'react'
import Navbar from '../Components/Navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Track = () => {
    const tracks = [
        { title: "Artificial Intelligence", image: "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" },
        { title: "Cybersecurity", image: "https://www.oxfordinstitute.in/img/data-science-course.jpg" },
        { title: "Data Science", image: "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" },
        { title: "Cloud Computing", image: "https://www.oxfordinstitute.in/img/data-science-course.jpg" },
        { title: "IoT & Smart Systems", image: "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" },
    ];

    return (
        <>
            <Navbar />
            <div className="max-h-full  flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl mx-auto py-10">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Explore Our Tracks
                    </h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        navigation
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {tracks.map((track, index) => (
                            <SwiperSlide key={index} className="p-4">
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img src={track.image} alt={track.title} className="w-full h-48 object-cover" />
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-800">{track.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Track