import React from 'react';

const StorySection = () => {
  const storyImage = "https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775800395/Abilasha_Reddy_11_m6bkld.png";

  return (
    <section id="story" className="relative bg-[#fffdf9] py-12 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[8%] relative z-10">
        
        {/* Main Flex/Grid Container */}
        {/* Mobile: flex-col | Desktop: grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 items-start">
          
          {/* LEFT CONTENT BLOCK */}
          <div className="flex flex-col w-full">
            {/* 1. Subtitle (Mobile Order 1) */}
            <div className="mb-5 flex items-center gap-4 order-1">
              
              <span className="font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.3em] text-brand">
                Founder & Curator
              </span>
            </div>

            {/* 2. Main Title (Mobile Order 2) */}
            <h2 className="font-['Montserrat'] text-[1.2rem] font-bold uppercase tracking-[0.2em] text-brand/70 mb-8 order-2">
              The Story Behind Zarivaram
            </h2>

            {/* 3. IMAGE BLOCK (Mobile Order 3 - Slots here on mobile, moves to right column on desktop) */}
            <div className="relative mb-12 order-3 lg:hidden flex justify-center">
               <div className="relative w-full max-w-[420px]">
                  {/* Watermark anchored to image - Mobile View */}
                  <div className="absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 origin-left rotate-90 font-['EB_Garamond'] text-[2.5rem] sm:text-[3.5rem] italic text-[#C29734] whitespace-nowrap z-0">
                    Abhilasha
                  </div>
                  
                  {/* Image Frames */}
                  <div className="absolute top-[-15px] right-[-15px] h-16 w-16 border-t border-r border-brand/20"></div>
                  <div className="absolute bottom-[-15px] left-[-15px] h-16 w-16 border-b border-l border-brand/20"></div>
                  
                  <div className="relative h-full w-full overflow-hidden bg-[#F4F1EA] shadow-[20px_20px_0px_rgba(194,151,52,0.03)] rounded-lg z-10">
                    <img
                      src={storyImage}
                      alt="Abhilasha Reddy"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
               </div>
            </div>

            {/* 4. Quote Anchor (Mobile Order 4) */}
            <blockquote className="relative mb-8 border-l-2 border-brand/20 pl-8 md:pl-16 order-4">
              <span className="absolute left-[-10px] top-[-25px] font-serif text-[6rem] md:text-[8rem] text-brand/10 z-0 select-none">“</span>
              <p className="relative z-10 font-['EB_Garamond'] text-2xl md:text-3xl font-extralight leading-snug text-foreground italic lg:leading-[1.1]">
                &quot;I did not start with a store. I started with a workshop and a belief that every woman deserves a saree that truly fits her moment.&quot;
              </p>
            </blockquote>

            {/* 5. Body Text (Mobile Order 5) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-['Montserrat'] text-[0.92rem] leading-[1.8] text-foreground/80 lg:max-w-4xl order-5">
              <p>
                Abhilasha has been in the world of sarees long before Zarivaram came to be. 
                She hosted weave workshops, collaborated with weavers across Kanchipuram, 
                and spent years learning the difference between a saree that is beautiful 
                and one that is right.
              </p>
              <div className="flex flex-col gap-6">
                <p>
                  Today, Zarivaram is that learning made tangible — a boutique in Hyderabad 
                  where every saree is hand-curated and every recommendation is personal.
                </p>
                <p className="font-['EB_Garamond'] italic text-brand underline decoration-brand/30 underline-offset-4 cursor-pointer hover:text-foreground transition-colors">
                  Continue following the journey on Diaries of Abhilasha →
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK (Desktop Only) */}
          <div className="hidden lg:flex relative justify-end w-full">
            <div className="relative aspect-[3/4] w-full max-w-[420px]">
              
              {/* Responsive Watermark - Anchored beside image in Desktop */}
              <div className="absolute mt-15 -right-10 translate-x-full -translate-y-1/2 origin-left rotate-90 font-['EB_Garamond'] text-[6rem] xl:text-[6.5rem] italic text-[#C29734]  whitespace-nowrap z-0">
                Abhilasha
              </div>

              {/* Decorative frame elements */}
              <div className="absolute top-[-20px] right-[-20px] h-20 w-20 border-t border-r border-brand/20"></div>
              <div className="absolute bottom-[-20px] left-[-20px] h-20 w-20 border-b border-l border-brand/20"></div>
              
              <div className="relative h-full w-full overflow-hidden bg-[#F4F1EA] shadow-[30px_30px_0px_rgba(194,151,52,0.03)] rounded-lg z-10">
                <img
                  src={storyImage}
                  alt="Abhilasha Reddy"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              {/* Instagram link context */}
              <div className="absolute -bottom-10 right-0">
                <a 
                  href="https://www.instagram.com/diariesofabhilasha/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.3em] text-brand transition-opacity hover:opacity-80"
                >
                  @diariesofabhilasha
                  <span className="h-[1px] w-8 bg-brand"></span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;