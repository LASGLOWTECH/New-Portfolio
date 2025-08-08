"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Profile from "./tools";

const Services = () => {
  return (
    <div className="mt-10 px-4 md:px-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Profile.map((profile, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-start w-full min-h-[400px] py-6 px-4 rounded-2xl shadow-2xl bg-gradient-to-tl from-darkestBlue via-greyBlack to-darkestBlue">
              <profile.icon.iconTitle className="text-amber1 hover:scale-150 transition-transform duration-300 p-4 text-7xl shadow-amber2 shadow-md bg-darkestBlue rounded-full" />
              <h3 className="text-lg font-medium py-6 text-center text-lightBlue">
                {profile.title}
              </h3>
              <p className="text-ash2 text-base text-center font-light">
                {profile.info}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
