import React, { useState } from 'react';

const entries = [
  {
    id: '01',
    ornament: '❋',
    meta: 'Culture · Ritual',
    title: 'Why we still make pickles in the summer — and what that has to do with silk',
    excerpt: 'Generational memory lives in the body before it lives in the mind. The rhythmic slicing of mangoes, the precise layering of spices, and the patience required for sunlight to do its work—it is the same discipline we see at the loom. Summer isn’t just a season; it’s a preservation of heritage.',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    ornament: '♦',
    meta: 'Telugu Heritage',
    title: 'The evolution of the Telugu Pelli — what we kept, what we lost',
    excerpt: 'From three-day ceremonies to morning functions—a personal reflection on the changing landscape of Telugu weddings. While the timelines have shrunk, the emotional weight of the Kanchipattu remains the same. It is the one constant in an evolving tradition.',
    image: 'https://images.unsplash.com/photo-1610030469668-935142764ee0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    ornament: '✿',
    meta: 'Styling · Comfort',
    title: 'How to drape for comfort, not just for show',
    excerpt: 'The saree should move with you. It shouldn’t be a cage. Here is how our weavers think about drape—focusing on the fall of the pallu and the weight of the pleats to ensure grace without compromise.',
    image: 'https://images.unsplash.com/photo-1610030469911-d6100127989d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '04',
    ornament: '❖',
    meta: 'Craft · Kanchipuram',
    title: 'A morning with a Kanchipuram weaver family',
    excerpt: 'I arrived at 6am. The loom was already moving. The sound is a heartbeat. In this small room, miles from the city, the most complex silk geometries are born. Seeing the hands behind the thread changes how you wear the saree.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
  },
];

const DiariesOfAbhilasha = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const closeModal = () => setSelectedStory(null);

  return (
    <section id="diaries" className="relative overflow-hidden bg-[#14120f] py-24 text-[#f4efe6]">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-[-5%] hidden origin-left -rotate-90 font-['EB_Garamond'] text-[10rem] italic text-brand/5 lg:block select-none pointer-events-none">
        Diaries
      </div>

      <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[10%]">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand/80">@diariesofabhilasha</span>
          <h2 className="mt-4 font-['EB_Garamond'] text-4xl font-light text-[#faf6ef] lg:text-6xl">
            Diaries of <span className="italic text-brand">Abhilasha</span>
          </h2>
        </div>

        {/* Grid Feed */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {entries.map((item) => (
            <article 
              key={item.id} 
              className="group relative flex flex-col bg-[#1c1914] border border-white/5 transition-all duration-500 hover:border-brand/30"
            >
              {/* Reduced Image Height (16:9 Ratio) */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt="" 
                  className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-['EB_Garamond'] text-xl text-brand italic">{item.ornament}</span>
                  <span className="font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-widest text-brand/60">{item.meta}</span>
                </div>

                {/* Full Title (No Line Clamp) */}
                <h3 className="mb-4 font-['EB_Garamond'] text-xl font-normal leading-tight text-[#faf6ef] transition-colors group-hover:text-brand">
                  {item.title}
                </h3>

                <p className="mb-8 font-['Montserrat'] text-[0.8rem] leading-[1.7] text-white/40 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* View Story at the Bottom */}
                <div className="mt-auto  border-t border-white/5">
                  <button 
                    onClick={() => setSelectedStory(item)}
                    className="flex items-center gap-3 font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-widest text-brand group-hover:text-white transition-all"
                  >
                    <span>View Story</span>
                    <span className="h-px w-6 bg-brand transition-all group-hover:w-10 group-hover:bg-white" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 flex flex-col items-center">
          <a href="https://www.instagram.com/diariesofabhilasha/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 border border-brand/30 px-12 py-5 font-['Montserrat'] text-[0.7rem] font-bold uppercase tracking-[0.3em] text-brand transition-all hover:bg-brand hover:text-black">
            <span>Read more on Instagram</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* --- STORY MODAL --- */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md animate-in fade-in duration-500"></div>

          <div 
            className="relative w-full max-w-3xl bg-[#1c1914] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="aspect-video w-full overflow-hidden">
                <img src={selectedStory.image} alt="" className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-14">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-['EB_Garamond'] text-2xl text-brand italic">{selectedStory.ornament}</span>
                  <div className="h-px w-12 bg-brand/30"></div>
                  <span className="font-['Montserrat'] text-[0.7rem] font-bold uppercase tracking-[0.4em] text-brand/60">{selectedStory.meta}</span>
                </div>

                <h3 className="mb-8 font-['EB_Garamond'] text-3xl md:text-5xl font-light text-[#faf6ef] leading-tight">
                  {selectedStory.title}
                </h3>

                <p className="font-['Montserrat'] text-[1rem] md:text-[1.1rem] leading-[2] text-white/70">
                  {selectedStory.excerpt}
                </p>

                <div className="mt-16 flex justify-center pt-8 border-t border-white/5">
                   <p className="font-['EB_Garamond'] text-sm italic text-brand/30">From the Archives of Zarivaram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiariesOfAbhilasha;  