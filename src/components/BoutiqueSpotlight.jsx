import React from 'react';

const BoutiqueSpotlight = () => {
  const productImg = "https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775811759/_DSC5190_copy_1_mrdxrh.png";

  return (
    <section className=" py-12 lg:py-22 border-t border-brand/10">
      <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[10%]">
        
        {/* 1. Section Header - Always on top */}
        <div className="mb-16 text-center">
          <span className="mb-4 block font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand/80 sm:mb-6">
            From the Boutique
          </span>
          <h2 className="font-['EB_Garamond'] text-4xl font-extralight leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
            The Kanakadhara <br />
            <span className="text-brand italic">Kanchipuram Silk</span>
          </h2>
        </div>

        {/* 2. Main Content Wrapper */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* PRODUCT IMAGE - Mobile: Order 1 (after title) | Desktop: Order 1 */}
          <div className="relative order-1 mb-12 lg:mb-0">
            {/* Decorative Offset Border */}
            <div className="absolute -top-3 -left-3 h-full w-full border border-brand/40 rounded-lg"></div>
            
            {/* Image Container with specific Zarivaram styling */}
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-[20px_20px_0px_rgba(194,151,52,0.03)] bg-[#F4F1EA]">
              <img 
                src={productImg} 
                alt="Kanakadhara Silk Saree" 
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              
              
            </div>
          </div>

          {/* TEXT CONTENT - Mobile: Order 2 | Desktop: Order 2 */}
          <div className="order-2 flex flex-col space-y-2  ">
            
            {/* Table-style Specs */}
            <div className="divide-y divide-brand/10 font-['Montserrat']">
  {[
    { label: "Collection", value: "Gouramma Collection" },
    { label: "Palette", value: "Crimson · Gold · Ivory" },
    { label: "For", value: "Mother of the Bride" },
    { label: "Weave", value: "Pure Mulberry Silk" },
    { label: "Craft time", value: "18 days · 2 weavers" }
  ].map((spec, index) => (
    /* Changed justify-between to a grid layout */
    <div key={index} className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] py-4 group cursor-default gap-20 lg:gap-35">
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brand/80 group-hover:text-brand transition-colors">
        {spec.label}
      </span>
      {/* value is now naturally left-aligned next to the label */}
      <span className="text-[0.75rem] font-medium text-foreground/80 lg:text-[0.85rem] text-left">
        {spec.value}
      </span>
    </div>
  ))}
</div>

            {/* Devotional Quote */}
            <div className="relative">
              <span className="absolute -left-4 top-0 text-3xl text-brand/10 font-serif italic">“</span>
              <p className="font-['EB_Garamond'] text-lg lg:text-xl leading-relaxed text-foreground/90  pl-2">
                &quot;Held by 12 families this season — each a different name, the same devotion.&quot;
              </p>
            </div>

            {/* ACTION BUTTONS - 2 Columns on Mobile */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-6 ">
              <button className="bg-brand px-4 py-4 lg:px-10 lg:py-5 font-['Montserrat'] text-[0.6rem] lg:text-[0.7rem] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white transition-all hover:bg-foreground rounded-lg shadow-lg shadow-brand/10">
                Acquire <span className="hidden sm:inline">Piece</span>
              </button>
              
              <button className="flex items-center justify-center gap-2 border border-brand/30 px-4 py-4 lg:px-10 lg:py-5 font-['Montserrat'] text-[0.6rem] lg:text-[0.7rem] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-brand transition-all hover:bg-brand/5 rounded-lg">
                <span className="hidden sm:inline">WhatsApp</span> Consultant
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueSpotlight;