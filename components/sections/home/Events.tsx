"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EventItem {
  src: string;
  subtitle: string;
  title: string;
  type: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}

export function Events() {
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const eventsData: EventItem[] = [
    {
      src: '/ourEvents1.png',
      subtitle: 'Our Scope',
      title: 'GDSC SCOPE GAME',
      type: 'Flagship Event',
      badgeBg: 'bg-red-500/90',
      badgeText: 'text-white',
      description: 'The ultimate technical challenge and gamified problem-solving event designed to ignite innovation among developers.'
    },
    {
      src: '/ourEvents2.png',
      subtitle: 'Skilled Team',
      title: 'Our Heroes',
      type: 'Community',
      badgeBg: 'bg-blue-500/90',
      badgeText: 'text-white',
      description: 'Celebrating the core team and tech leads who dedicate their passion to mentor and guide our student community.'
    },
    {
      src: '/ourEvents3.png',
      subtitle: 'Community Build',
      title: 'Build Networking',
      type: 'Social',
      badgeBg: 'bg-amber-500/90',
      badgeText: 'text-white',
      description: 'Connecting aspiring developers, designers, and innovators to build lifelong connections and impactful projects.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-end mb-12 relative"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>★</span> Featured Activities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Our Biggest Events
            </h2>
            <p className="text-gray-500 text-base max-w-xl">
              Join our flagship events and workshops to learn, connect, and build amazing projects with fellow developers.
            </p>
          </div>
          <button className="hidden md:flex bg-green-50 text-green-600 hover:bg-green-100 px-6 py-2.5 rounded-full font-medium transition-colors text-sm shadow-sm hover:shadow">
            See All Events →
          </button>
          
          {/* Decorative Scribble */}
          <div className="absolute -right-8 -top-8 text-gray-200 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 90c20-40 60-10 80-60 M30 90c20-40 60-10 80-60 M50 90c20-40 60-10 80-60" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Expandable Accordion Layout for 3 Events */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-5 h-[700px] md:h-[480px] lg:h-[520px] w-full"
        >
          {eventsData.map((e, index) => {
            const isExpanded = activeEvent === index;

            return (
              <div
                key={e.title}
                onMouseEnter={() => setActiveEvent(index)}
                onClick={() => setActiveEvent(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 ease-in-out group ${
                  isExpanded
                    ? 'md:flex-[3] flex-1'
                    : 'md:flex-1 flex-[0.5]'
                }`}
              >
                {/* Event Image */}
                <Image 
                  src={e.src} 
                  alt={e.title} 
                  fill 
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient Dark Gradient Overlays */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                    isExpanded 
                      ? 'from-black/90 via-black/40 to-transparent opacity-90' 
                      : 'from-black/85 via-black/50 to-black/30 opacity-95 group-hover:opacity-80'
                  }`}
                />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm ${e.badgeBg} ${e.badgeText}`}>
                    {e.type}
                  </span>
                </div>

                {/* Content Area */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 pointer-events-none">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-1">
                    {e.subtitle}
                  </p>
                  <h3 className={`font-bold transition-all duration-300 ${
                    isExpanded ? 'text-2xl lg:text-3xl mb-2' : 'text-xl md:text-lg lg:text-xl line-clamp-1'
                  }`}>
                    {e.title}
                  </h3>

                  {/* Expanded Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-200 text-sm line-clamp-2 max-w-lg leading-relaxed">
                      {e.description}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-white underline underline-offset-4">
                      Explore Event Details →
                    </div>
                  </div>
                </div>

                {/* Subtle border highlight */}
                <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-colors duration-300 ${
                  isExpanded ? 'border-2 border-white/30' : 'border border-white/10'
                }`} />
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
