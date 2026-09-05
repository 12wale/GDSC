"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  facebook?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  { 
    name: 'Mayar Lotfy', 
    role: 'UI/UX Designer', 
    image: '/staff_develope/mayar.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Mostafa Mohamed', 
    role: 'Problem Solver & Code Reviewer', 
    image: '/staff_develope/mostafa.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Hend Elnashar', 
    role: 'UI/UX Designer', 
    image: '/staff_develope/hend.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Waleed Refaat', 
    role: 'MERN Stack Engineer', 
    image: '/staff_develope/waleed.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Mohamed Abdelnasser', 
    role: 'MERN Stack Engineer', 
    image: '/staff_develope/mo_nasser.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Mohamed Ramadan', 
    role: 'Flutter Developer', 
    image: '/staff_develope/mo_ramadan.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Omer Ahmed', 
    role: 'AI Engineer', 
    image: '/staff_develope/omar.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
  { 
    name: 'Mohamed Sayed', 
    role: 'Cyber Security Enthusiast', 
    image: '/staff_develope/mo_said.jpg',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  },
];

export function Team() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-gray-50/70 relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>★</span> Leadership & Core Team
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Meet Our Incredible<br />
              <span className="text-gray-900 border-b-4 border-yellow-400 pb-1 inline-block">Project Team</span>
            </h2>
          </div>

          {/* Custom Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <FaChevronLeft size={14} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Slide"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper Slider Wrapper with strictly constrained width & overflow handling */}
        <div className="w-full min-w-0 max-w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full !pb-14 team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group flex flex-col items-center bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100 shadow-inner">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient & Hover Social Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                      {/* Facebook Button */}
                      {member.facebook && (
                        <a 
                          href={member.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`${member.name} Facebook`}
                          className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                        >
                          <FaFacebook size={18} />
                        </a>
                      )}
                      {/* LinkedIn Button */}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`${member.name} LinkedIn`}
                          className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                        >
                          <FaLinkedin size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center w-full px-2 mt-auto">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-medium line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
