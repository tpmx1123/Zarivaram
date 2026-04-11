const MayabazarSection = () => {
    const events = [
      {
        date: "April 2026 · Hyderabad",
        title: "Mayabazar — Spring Edition",
        tag: "POP-UP SHOW",
        desc: "The seasonal showcase of new arrivals across all five collections. Meet the weavers. Touch the silk. Take your time.",
      },
      {
        date: "April 2026 · Boutique",
        title: "Weaver's Weekend",
        tag: "HERITAGE · CRAFT",
        desc: "Two Kanchipuram master weavers in residence at Zarivaram. Watch a live demonstration. Understand what your saree carries.",
      },
      {
        date: "May 2026 · Hyderabad",
        title: "Bride's Private Viewing",
        tag: "BY APPOINTMENT",
        desc: "A curated, closed viewing for brides and their families. Three hours, the right sarees, one-on-one with Abhilasha.",
      },
      {
        date: "Ongoing",
        title: "Draping Workshops",
        tag: "WORKSHOP",
        desc: "Learn to drape for comfort, not just for show. Abhilasha's original workshops — now held monthly at the boutique.",
      }
    ];
  
    return (
      <section id="mayabazar" className="relative bg-[#fffdf9] py-24 lg:py-32 overflow-hidden">
        
        {/* 1. Large Editorial Watermark */}
        <div className="absolute top-20 left-[-5%] hidden origin-left -rotate-90 font-['EB_Garamond'] text-[12rem] italic text-brand/5 lg:block select-none pointer-events-none">
          Mayabazar
        </div>
  
        <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[10%] relative z-10">
          
          {/* 2. Section Header - Asymmetric Alignment */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="mb-6 block font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.5em] text-brand/60">
                Monthly Events & Gatherings
              </span>
              <h2 className="font-['EB_Garamond'] text-5xl font-extralight leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
                Mayabazar — <br />
                <span className="italic text-brand">the pop-up show</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-md font-['Montserrat'] text-[0.85rem] leading-[1.8] text-foreground/60">
                Every month, Zarivaram opens its doors wide. We invite you to experience 
                sarees not just as garments, but as conversations between weavers and wearers.
              </p>
            </div>
          </div>
  
          {/* 3. Interactive Event Grid - Hairline Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-brand/20">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`group relative p-8 lg:p-14 transition-all duration-700 hover:bg-brand/[0.02] 
                  ${index % 2 === 0 ? 'md:border-r border-b border-brand/10' : 'border-b border-brand/10'}`}
              >
                {/* Event Metadata */}
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand/60">
                    {event.date}
                  </span>
                  <span className="border border-brand/20 px-3 py-1 font-['Montserrat'] text-[0.5rem] font-bold uppercase tracking-widest text-brand/80 rounded-full group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {event.tag}
                  </span>
                </div>
  
                {/* Event Content */}
                <div className="relative">
                  <h3 className="mb-6 font-['EB_Garamond'] text-3xl lg:text-4xl font-normal text-foreground group-hover:text-brand transition-colors duration-500">
                    {event.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[0.85rem] leading-[1.8] text-foreground/60 max-w-sm">
                    {event.desc}
                  </p>
                </div>
  
                {/* Action Link - Subtle Reveal */}
                <div className="mt-12 flex items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand">
                    Register Interest
                  </span>
                  <div className="h-px w-12 bg-brand/40"></div>
                </div>
  
                {/* Background ID Watermark */}
                <div className="absolute bottom-6 right-8 font-['EB_Garamond'] text-6xl italic text-brand/[0.03] select-none pointer-events-none group-hover:text-brand/[0.08] transition-all">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
  
          {/* 4. Bottom Context Banner */}
          <div className="mt-20 flex flex-col items-center text-center lg:mt-32">
            <div className="h-px w-24 bg-brand/30 mb-8"></div>
            <p className="font-['EB_Garamond'] text-xl italic text-foreground/40 max-w-lg">
              &quot;A gathering for those who value the thread as much as the weave.&quot;
            </p>
            <div className="mt-10 font-serif text-brand opacity-40">✦</div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MayabazarSection;