"use client";
import React from "react";
import Image from "next/image";

export default function CreatorProfile() {
  return (
    <div className="creator-profile-container">
      {/* Banner */}
      <div className="creator-banner relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden mb-6">
        <Image 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop" 
          alt="Channel Banner" 
          fill
          style={{ objectFit: 'cover' }}
          className="banner-img"
        />
      </div>

      {/* Profile Info */}
      <div className="creator-info-section flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-8">
        <div className="creator-avatar relative w-32 h-32 rounded-full overflow-hidden border-4 border-black -mt-16 md:-mt-12 z-10">
          <Image 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" 
            alt="Profile Avatar"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="creator-details flex-1 text-center md:text-left mt-2 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Praiz | Multidisciplinary Designer</h1>
          <p className="text-gray-400 mb-2">
            <span className="font-medium text-white mr-2">@praiz</span> 
            • 100+ Projects • Based in London
          </p>
          <p className="text-sm text-gray-400 max-w-xl mb-4">
            Showcasing the intersection of cinematography, graphic design, and modern web experiences. Building the future of visual storytelling.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
            <button className="bg-white/10 text-white font-semibold py-2 px-6 rounded-full hover:bg-white/20 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="creator-tabs flex gap-6 px-4 md:px-8 mt-10 border-b border-white/20 overflow-x-auto no-scrollbar">
        <button className="text-white font-medium pb-3 border-b-2 border-white flex-shrink-0">Home</button>
        <button className="text-gray-400 hover:text-white font-medium pb-3 transition-colors flex-shrink-0">Graphic Design</button>
        <button className="text-gray-400 hover:text-white font-medium pb-3 transition-colors flex-shrink-0">Cinematography</button>
        <button className="text-gray-400 hover:text-white font-medium pb-3 transition-colors flex-shrink-0">Video Editing</button>
        <button className="text-gray-400 hover:text-white font-medium pb-3 transition-colors flex-shrink-0">Motion Graphics</button>
        <button className="text-gray-400 hover:text-white font-medium pb-3 transition-colors flex-shrink-0">About</button>
      </div>
    </div>
  );
}
