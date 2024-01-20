/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductGallery = (images: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleThumbsSwiper = (swiper: any) => {
    setThumbsSwiper(swiper);
  };
  console.log(images, "SDfsdf");
  return (
    <>
      <Swiper
        style={{}}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.images?.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <img src={item?.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={handleThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-5 mySwiper"
      >
        {images?.images?.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <img src={item?.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
