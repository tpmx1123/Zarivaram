const PRIMARY_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/v1775814753/_DSC4372_1_cy6epq.jpg'
const HOVER_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/v1775814753/_DSC4372_1_cy6epq.jpg'
const HOVER_IMAGE_Laggam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816009/8B_1_oydhw5.png'
const HOVER_IMAGE_Balagam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/GRID_1_actr9k.png'
const HOVER_IMAGE_Chilakamma =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/_DSC4935_1_x1o35v.png'
const HOVER_IMAGE_Anantham =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816002/Grid_16_svnycf.png'

const PRIMARY_IMAGE_Laggam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816009/8B_1_oydhw5.png'
const PRIMARY_IMAGE_Balagam =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/GRID_1_actr9k.png'
const PRIMARY_IMAGE_Chilakamma =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816005/_DSC4935_1_x1o35v.png'
const PRIMARY_IMAGE_Anantham =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775816002/Grid_16_svnycf.png'

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

const CollectionsSection = () => {
  return (
    <section id="collections" className="bg-background py-12 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[5%]">
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

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-8 xl:gap-6">
          {collections.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand/10 bg-background shadow-[0_8px_32px_rgba(47,38,19,0.07)] transition-all duration-500 max-lg:active:scale-[0.99] lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-[#f4f1ea]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-[1.08]"
                  loading="lazy"
                />

                <img
                  src={item.hoverImage}
                  alt={`${item.title} details`}
                  className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-all duration-700 ease-in-out lg:block lg:group-hover:opacity-100 lg:group-hover:scale-[1.08]"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 lg:group-hover:bg-black/5" />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-6 pt-4 sm:px-4 sm:pb-5 sm:pt-3 lg:px-0 lg:pb-0 lg:pt-2">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-['EB_Garamond'] text-xs italic text-brand/40">{item.id}</span>
                  <div className="h-px flex-1 bg-brand/10 transition-colors lg:group-hover:bg-brand/40" />
                </div>

                <h3 className="mb-2 font-['EB_Garamond'] text-[1.35rem] font-normal leading-tight tracking-wide text-foreground sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-3 font-['EB_Garamond'] text-sm italic text-brand/70 sm:mb-4">
                  {item.subtitle}
                </p>

                <p className="font-['Montserrat'] text-[0.85rem] leading-[1.65] text-foreground/60 line-clamp-5 transition-colors sm:text-[0.8rem] sm:leading-[1.6] lg:line-clamp-3 lg:group-hover:text-foreground/90">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsSection
