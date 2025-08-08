"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Data from "./portfolio";
import Bitems from "./bitems";
import Card from "./card";
import { motion, AnimatePresence } from "framer-motion";

const Pdata = () => {
  const [item, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (selectedCategory) => {
    const newItem = Data.filter((val) => val.category === selectedCategory);
    setItems(newItem);
  };

  return (
    <div className="w-full bg-dark py-10 px-4">
      {/* Filter Buttons */}
      <Bitems filterItem={filterItem} setItems={setItems} menuItems={menuItems} />

      {/* Portfolio Slideshow */}
      <div className="mt-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <AnimatePresence>
            {item.map((val, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card data={val} />
                </motion.div>
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>
      </div>
    </div>
  );
};

export default Pdata;
