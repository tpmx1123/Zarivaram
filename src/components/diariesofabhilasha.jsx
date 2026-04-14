import React, { useState } from 'react';

const entries = [
  {
    id: '01',
    ornament: '❋',
    meta: 'Culture · Ritual',
    title: 'Why we still make pickles in the summer — and what that has to do with silk',
    excerpt: 'Generational memory lives in the body before it lives in the mind...',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    ornament: '♦',
    meta: 'Telugu Heritage',
    title: 'The evolution of the Telugu Pelli — what we kept, what we lost',
    excerpt: 'From three-day ceremonies to morning functions...',
    image: 'https://images.unsplash.com/photo-1610030469668-935142764ee0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    ornament: '✿',
    meta: 'Styling · Comfort',
    title: 'How to drape for comfort, not just for show',
    excerpt: 'The saree should move with you...',
    image: 'https://images.unsplash.com/photo-1610030469911-d6100127989d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '04',
    ornament: '❖',
    meta: 'Craft · Kanchipuram',
    title: 'A morning with a Kanchipuram weaver family',
    excerpt: 'I arrived at 6am. The loom was already moving...',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
  },
];

const DiariesOfAbhilasha = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const closeModal = () => setSelectedStory(null);

  return (
    <section id="diaries" className="relative overflow-hidden bg-[#14120f] py-14 text-[#f4efe6]">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-[-5%] hidden origin-left -rotate-90 font-['EB_Garamond'] text-[10rem] italic text-brand/5 lg:block pointer-events-none">
        Diaries
      </div>

      <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[2%]">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-brand/80">
            @diariesofabhilasha
          </span>
          <h2 className="mt-4 text-4xl lg:text-6xl">
            Diaries of <span className="italic text-brand">Abhilasha</span>
          </h2>
        </div>

        {/* 🔥 Layout */}
        <div className="flex gap-12 items-start">

          {/* LEFT SIDE (Cards) */}
          <div className="flex-1 max-w-[1100px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {entries.map((item) => (
                <article 
                  key={item.id} 
                  className="group flex flex-col bg-[#1c1914] border border-white/5 hover:border-brand/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt="" 
                      className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-xl text-brand italic">{item.ornament}</span>
                      <span className="text-[0.55rem] uppercase tracking-widest text-brand/60">{item.meta}</span>
                    </div>

                    <h3 className="mb-4 text-lg text-[#faf6ef] group-hover:text-brand">
                      {item.title}
                    </h3>

                    <p className="mb-6 text-[0.8rem] text-white/40 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <button 
                      onClick={() => setSelectedStory(item)}
                      className="mt-auto text-[0.6rem] uppercase tracking-widest text-brand hover:text-white"
                    >
                      View Story →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex items-end justify-end w-[280px] xl:w-[300px]">
            <img
              src="https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1776160139/Screenshot_2026-01-05_152619_1_1_nenrin.png"
              alt="decor"
              className="w-full object-contain opacity-90"
            />
          </div>

        </div>

        {/* Instagram CTA */}
        <div className="mt-10 flex justify-center">
          <a 
            href="https://www.instagram.com/diariesofabhilasha/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-brand/30 px-12 py-5 text-[0.7rem] uppercase tracking-[0.3em] text-brand hover:bg-brand hover:text-black transition"
          >
            Read more on Instagram →
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="bg-[#1c1914] max-w-3xl w-full">
            <img src={selectedStory.image} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl mb-4">{selectedStory.title}</h3>
              <p className="text-white/70">{selectedStory.excerpt}</p>
              <button onClick={closeModal} className="mt-6 text-brand">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiariesOfAbhilasha;