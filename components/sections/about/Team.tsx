"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { teamMembers } from '@/content/team';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Team() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeMember, setActiveMember] = useState<number | null>(null);

  const pauseAutoplay = () => {
    swiperRef.current?.autoplay.stop();
  };

  const resumeAutoplay = () => {
    swiperRef.current?.autoplay.start();
  };

  return (
    <section
      className="relative w-screen self-center overflow-hidden py-24"
      id="team"
      style={{
        background:
          'linear-gradient(110deg, rgba(194, 29, 30, 0.1) 10%, #FFFAF9 52%, rgba(250, 187, 4, 0.1) 90%)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header with Navigation Controls */}
        <div className="relative mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div
            className="pointer-events-none absolute left-[58%] top-[-8px] h-[42px] w-[40px] rotate-[10deg] bg-[#FEBF00] sm:left-[350px] sm:h-[52px] sm:w-[48px]"
            style={{
              maskImage: "url('/about/illustrations/vector.svg')",
              WebkitMaskImage: "url('/about/illustrations/vector.svg')",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
            aria-hidden="true"
          />
          <Image
            src="/home/events/events-right.svg"
            alt=""
            width={76.45626068115234}
            height={121.69682312011719}
            className="pointer-events-none absolute right-0 top-[-28px] h-[82px] w-[52px] opacity-80 sm:top-[-80px] sm:h-[121.69682312011719px] sm:w-[76.45626068115234px]"
            aria-hidden="true"
          />
          <div className="relative z-[1]">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-[46px]">
              Meet Our Top<br />Incredible {" "}
              <span className="text-gray-900 border-b-4 border-yellow-400 pb-1 inline-block">Project Team</span>
            </h2>
          </div>

          {/* Custom Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#20B15A] bg-white text-[#20B15A] shadow-[0_2px_8px_rgba(32,177,90,0.12)] transition-all duration-150 hover:bg-[#C7F1D3] hover:shadow-[0_4px_12px_rgba(32,177,90,0.22)] active:scale-95 sm:h-11 sm:w-11"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#20B15A] bg-white text-[#20B15A] shadow-[0_2px_8px_rgba(32,177,90,0.12)] transition-all duration-150 hover:bg-[#C7F1D3] hover:shadow-[0_4px_12px_rgba(32,177,90,0.22)] active:scale-95 sm:h-11 sm:w-11"
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
            speed={350}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="w-full !pb-14 team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="group mx-auto flex h-[325px] w-full max-w-[307px] cursor-pointer flex-col overflow-hidden rounded-[18px] border border-[#E6E6E6] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]"
                  role="button"
                  tabIndex={0}
                  aria-label={`Show social links for ${member.name}`}
                  onClick={() => setActiveMember((current) => (current === index ? null : index))}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveMember((current) => (current === index ? null : index));
                    }
                  }}
                  onPointerEnter={pauseAutoplay}
                  onPointerLeave={resumeAutoplay}
                  onPointerDown={pauseAutoplay}
                  onPointerUp={resumeAutoplay}
                >
                  <div className="relative h-[240px] w-full shrink-0 overflow-hidden bg-[#D9D9D9]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-[center_top]"
                    />

                    <div className={`absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 transition-opacity duration-300 ${
                      activeMember === index
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100'
                    }`}>
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Facebook`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/90 bg-black/10 text-white shadow-md backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#4285F4] active:scale-95"
                        >
                          <FaFacebook size={13} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/90 bg-black/10 text-white shadow-md backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#0A66C2] active:scale-95"
                        >
                          <FaLinkedin size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col justify-center px-4 py-3 text-left">
                    <h3 className="line-clamp-1 text-base font-bold text-[#111111] transition-colors group-hover:text-[#20B15A]">
                      {member.name}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-[10px] font-medium uppercase tracking-wide text-[#555555]">
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
