// ResponsiveSliderComponent.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";

export default function ResponsiveSliderComponent() {
  const items = [
    {
      id: 0,
      image: "/public/react.png",
      title: "دوره جامع React js صفر تا صد",
    },
    {
      id: 1,
      image: "/public/net.png",
      title: "دوره جامع .net core صفر تا صد",
    },
    {
      id: 2,
      image: "/public/html.png",
      title: "دوره جامع HTML 5 صفر تا صد",
    },
    {
      id: 3,
      image: "/public/python.png",
      title: "دوره جامع Python صفر تا صد",
    },
    {
      id: 4,
      image: "/public/react.png",
      title: "دوره جامع React js صفر تا صد",
    },
    {
      id: 5,
      image: "/public/net.png",
      title: "دوره جامع .net core صفر تا صد",
    },
    {
      id: 6,
      image: "/public/html.png",
      title: "دوره جامع HTML 5 صفر تا صد",
    },
    {
      id: 7,
      image: "/public/python.png",
      title: "دوره جامع Python صفر تا صد",
    },
  ];

  return (
    <div className="w-4/5 relative flex items-center m-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-3xl shadow-md w-[270px] h-[300px] p-3 flex flex-col gap-2 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[55%] object-cover rounded-3xl"
              />
              <p className="text-start font-medium">{item.title}</p>
              <div className="bg-gray-200 flex flex-row justify-between items-center h-8 w-[90%] rounded-2xl p-2">
                <div className="flex flex-row gap-1 font-serif">
                  <img
                    className="w-4 h-4"
                    src="/public/note-2.png"
                    alt="note icon"
                  />
                  <p className="font-serif text-xs">203 درس</p>
                </div>
                <div className="flex flex-row gap-1">
                  <img
                    className="w-4 h-4"
                    src="/public/clock.png"
                    alt="clock icon"
                  />
                  <p className="font-serif text-xs">14 ساعت</p>
                </div>
                <div className="flex flex-row gap-1">
                  <img
                    className="w-4 h-4"
                    src="/public/calendar-2.png"
                    alt="calendar icon"
                  />
                  <p className="font-serif text-xs">آذر 1402</p>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-2 items-center">
                <div className="flex flex-row gap-1">
                  <p>مدرس : </p>
                  <p className="font-serif">دکتر بحرالعلوم</p>
                </div>
                <div className="font-serif">
                  <p>256 دانش آموز</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next w-10 h-10 bg-blue-500 border-2 border-sky-50 text-white flex items-center justify-center rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"></div>
      <div className="swiper-button-prev w-10 h-10 bg-blue-500 border-2 border-sky-50 text-white flex items-center justify-center rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"></div>
    </div>
  );
}
