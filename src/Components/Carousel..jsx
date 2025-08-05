// src/components/MySwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import your background images
import bg1 from "./../../src/assets/annie-spratt-vWFIbUrcK8s-unsplash.jpg";
import bg2 from "./../../src/assets/ira-pavlyukovich-Lb2KHDaxfqE-unsplash.jpg";
import bg3 from "./../../src/assets/daniil-silantev-F6Da4r2x5to-unsplash.jpg";

const MySwiper = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: bg1,
      title: "Bloom & Grow Fair",
      content:
        "Discover the latest in gardening trends, sustainable practices, and connect with fellow plant lovers.", // Add title here
    },
    {
      id: 2,
      backgroundImage: bg2,
      title: "Urban Green Oasis Workshop",
      content:
        "Learn practical techniques for creating thriving gardens in small spaces, perfect for city dwellers", // Add title here
    },
    {
      id: 3,
      backgroundImage: bg3,
      title: " The Great Bangladeshi Plant Swap",
      content:
        "Exchange cuttings, seeds, and gardening tips with your community to diversify your green collection.", // Add title here
    },
  ];

  return (
    <div className="swiper-container-wrapper h-[200px] my-10 mx-auto max-w-[1200px] w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        
        style={{ height: "100%", borderRadius: "10px", overflow: "hidden" }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column", // Changed to column to stack title and content
              justifyContent: "center",
              alignItems: "center",
              color: "",
              fontSize: "1em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              position: "relative", // Added for potential absolute positioning of elements
            }}
          >
            {/* Title */}
            <h2 style={{ marginBottom: "20px", fontSize: "1.7em" }}>
              {slide.title}
            </h2>
            {/* Content */}
            <div style={{ marginBottom: "20px" }}>{slide.content}</div>
            <button className="btn btn-success">View</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
