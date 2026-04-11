import React, { useState, useRef } from 'react';
const PRIMARY_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889876/_DSC4361_wpyqbd.jpg'
const HOVER_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889876/_DSC4361_wpyqbd.jpg'
const HOVER_IMAGE_Laggam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816009/8B_1_oydhw5.png'
const HOVER_IMAGE_Balagam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889254/DSC04686_riko6a.jpg'
const HOVER_IMAGE_Chilakamma =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/_DSC4935_1_x1o35v.png'
const HOVER_IMAGE_Anantham =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889876/_DSC4543_usj70y.jpg'

const PRIMARY_IMAGE_Laggam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816009/8B_1_oydhw5.png'
  
const PRIMARY_IMAGE_Balagam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889254/DSC04686_riko6a.jpg'
const PRIMARY_IMAGE_Chilakamma =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/_DSC4935_1_x1o35v.png'
const PRIMARY_IMAGE_Anantham =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889876/_DSC4543_usj70y.jpg'

const collections = [
  {
    id: '01',
    title: 'Gouramma',
    subtitle: 'The Anchor',
    desc: 'Gouramma is our tribute to the woman whose presence steadies the day. The mother. The elder. The matriarch. Her silk is not for spectacle, but for significance. Woven in gold. Held in grace.',
    image: PRIMARY_IMAGE,
    hoverImage: HOVER_IMAGE,
  },
  {
    id: '02',
    title: 'Laggam',
    subtitle: 'The Glow',
    desc: 'In curating this collection, we sought to move away from the noise of “bridal monotony” to find a gold that glows from within. A silk that does not simply sit on the skin, but feels like a whispered blessing—heavy with heritage, yet light with the promise of a new beginning.',
    image: PRIMARY_IMAGE_Laggam,
    hoverImage: HOVER_IMAGE_Laggam,
  },
  {
    id: '03',
    title: 'Balagam',
    subtitle: 'The Gathering',
    desc: 'In curating this collection, we sought to move away from the noise of the mundane. We envisioned sarees that are as spirited as the women wearing them—pieces that allow for movement, for grace, and for the beautiful chaos of a wedding home.',
    image: PRIMARY_IMAGE_Balagam,
    hoverImage: HOVER_IMAGE_Balagam,
  },
  {
    id: '04',
    title: 'Chilakamma',
    subtitle: 'The Playful',
    desc: 'In shaping the Chilakamma collection, we imagined the women who arrive not with responsibilities, but with memories. The ones who have walked beside the bride through years of shared stories, and now stand beside her on the day she steps into a new chapter.',
    image: PRIMARY_IMAGE_Chilakamma,
    hoverImage: HOVER_IMAGE_Chilakamma,
  },
  {
    id: '05',
    title: 'Anantham',
    subtitle: 'The Eternal',
    desc: 'Anantham is our quiet archive — a collection inspired by the weaves that our grandmothers once wore, the Kanchipattu silks that carried memory from one celebration to the next.',
    image: PRIMARY_IMAGE_Anantham,
    hoverImage: HOVER_IMAGE_Anantham,
  },
]

const ZoomImage = ({ src, alt }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-3/4 overflow-hidden bg-[#f4f1ea] cursor-crosshair"
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Base Image */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-opacity duration-300"
        loading="lazy"
      />

      {/* Zoom Overlay (Amazon Style) */}
      {showZoom && (
        <div 
          className="absolute inset-0 z-30 pointer-events-none border-2 border-brand/20"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            backgroundSize: '250%', // Magnification level
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Subtle branding hint when not zooming */}
      {!showZoom && (
        <div className="absolute bottom-4 right-4 text-[0.5rem] uppercase tracking-widest text-brand/40 lg:block hidden">
          Hover to inspect weave
        </div>
      )}
    </div>
  );
};

const CollectionsSection = () => {
  return (
    <section id="collections" className="bg-background py-12 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[5%]">
        {/* Header Section */}
        <div className="mb-4 flex flex-col items-start justify-between gap-8 border-b border-brand/10 pb-10 sm:mb-14 sm:gap-10 sm:pb-12 lg:mb-2 lg:flex-row lg:items-end lg:gap-10 lg:pb-16">
          <div className="relative max-w-2xl">
            <div className="absolute -left-6 top-0 hidden h-full w-px bg-brand/20 lg:block" />
            <span className="mb-4 block font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand/80 sm:mb-6">
              The Five Collections
            </span>
            <h2 className="font-['EB_Garamond'] text-4xl font-extralight leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
              Sarees for every <br />
              <span className="text-brand">woman, every moment</span>
            </h2>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-8 xl:gap-6">
          {collections.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden lg:overflow-visible transition-all duration-500"
            >
              {/* Image with Custom Zoom Component */}
              <ZoomImage src={item.image} alt={item.title} />

              <div className="flex flex-1 flex-col px-5 pb-6 pt-4 sm:px-4 sm:pb-5 sm:pt-3 lg:px-0 lg:pb-0 lg:pt-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-['EB_Garamond'] text-xs italic text-brand/40">{item.id}</span>
                  <div className="h-px flex-1 bg-brand/10 transition-colors lg:group-hover:bg-brand/40" />
                </div>

                <h3 className="mb-2 font-['EB_Garamond'] text-[1.35rem] font-normal leading-tight tracking-wide text-foreground sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-3 font-['EB_Garamond'] text-sm italic text-brand/70">
                  {item.subtitle}
                </p>

                <p className="font-['Montserrat'] text-[0.8rem] leading-[1.6] text-foreground/60 line-clamp-3 transition-colors lg:group-hover:text-foreground/90">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;