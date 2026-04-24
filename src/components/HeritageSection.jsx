const HeritageSection = () => {
    const pillars = [
      {
        symbol: "✦",
        title: "Heritage Weaves",
        content: "Every Zarivaram saree is sourced directly from Kanchipuram weavers who still use traditional korvai and kuttu techniques — methods at risk of disappearing."
      },
      {
        symbol: "❋",
        title: "Direct from Weavers",
        content: "No middlemen. Zarivaram works directly with weaving families, ensuring fair livelihood and the preservation of craft knowledge."
      },
      {
        symbol: "◈",
        title: "Slow Fashion",
        content: "Each saree is curated, not mass-produced. We carry only what we believe in — which means smaller collections and longer relationships."
      },
      {
        symbol: "∞",
        title: "The Heirloom Promise",
        content: "A Zarivaram saree is made to last generations. We offer a Digital Heirloom Registry — so every piece carries its story forward."
      }
    ];
  
    // Watermark logo URL
    const logoWatermarkUrl = "https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678196/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAxL3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF92aW50YWdlX2NvbGxhZ2VfYXJ0X29mX2dvbGRfZ2xpdHRlcl9kcl9hNTAwMTgyNi00MTZkLTRlMzktYmE4OS03OWJhYTE4YWY2ZDQtbTV1c2huYzEucG5n-rem_1_2_apadq5.png";
  
    return (
      <section id="about" className="relative py-20 lg:py-22 overflow-hidden">
        
        {/* Editorial Decorative Watermark (Logo as faint background) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.10] select-none pointer-events-none transform pt-60 ">
          <img 
            src={logoWatermarkUrl} 
            alt="" 
            className="h-auto w-[40vw] max-w-[1200px] object-contain" 
          />
        </div>
  
        <div className="mx-auto max-w-[1440px] px-[6%] lg:px-[5%] relative z-10">
          
          {/* Section Header - Refined Typography */}
          <div className="mb-14 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between border-b border-brand/10 pb-8 relative z-20">
            <div className="max-w-3xl">
              <span className="mb-4 block font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand/80 sm:mb-6">
                Heritage · Craft · Responsibility
              </span>
              <h2 className="font-['EB_Garamond'] text-4xl font-extralight leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
                Why the <span className="italic text-brand">weave</span> <br />
                matters as much as the saree
              </h2>
            </div>
          </div>
  
          {/* Pillars Layout - Horizontal on Desktop, Vertical with staggered spacing on Mobile */}
          <div className="grid grid-cols-2 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 relative z-20">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-start transition-all duration-500"
              >
                {/* Vertical decorative line for each card */}
                <div className="mb-8 h-[1px] w-12 bg-brand/30 transition-all duration-500 group-hover:w-full group-hover:bg-brand"></div>
                
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-serif text-2xl text-brand group-hover:rotate-45 transition-transform duration-500">
                    {pillar.symbol}
                  </span>
                  <span className="font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand/40">
                    Pillar 0{index + 1}
                  </span>
                </div>
  
                <h3 className="mb-6 font-['EB_Garamond'] text-3xl font-normal tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {pillar.title}
                </h3>
  
                <p className="font-['Montserrat'] text-[0.85rem] leading-[1.9] text-foreground/70 lg:pr-4">
                  {pillar.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeritageSection;