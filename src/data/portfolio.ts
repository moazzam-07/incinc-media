export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  fullImage: string;
}

export const portfolio: PortfolioProject[] = [
  {
    id: "nandeep",
    title: "Nandeep Machine Tools",
    description: "45+ year legacy machinery and tools supplier.",
    url: "https://www.nandeepmachinetools.com",
    thumbnail: "/assets/portfolio/thumbnails/Nandeep_Machine_Tools.png",
    fullImage: "/assets/portfolio/Nandeep Full Page.jpg",
  },
  {
    id: "new-era",
    title: "New Era",
    description: "Dentistry, trichology and skin cosmetology hospital.",
    url: "https://neweradch.com",
    thumbnail: "/assets/portfolio/thumbnails/New_Era_Website.png",
    fullImage: "/assets/portfolio/New Era - Dent.png",
  },
  {
    id: "mynex",
    title: "Mynex Technology",
    description: "IT, consultancy, and digital marketing agency.",
    url: "https://mynextechnology.com",
    thumbnail: "/assets/portfolio/thumbnails/Mynex_Technology_Website.png",
    fullImage: "/assets/portfolio/Mynex Technology.jpg",
  },
  {
    id: "alkahf",
    title: "Al Kahf Group",
    description: "UAE-based global import/export and medical disposable supplier.",
    url: "https://alkahfgroup.com",
    thumbnail: "/assets/portfolio/thumbnails/Alkahfgroup.png",
    fullImage: "/assets/portfolio/Al Kahf Full Page.jpeg",
  },
  {
    id: "hasmukhlal",
    title: "Hasmukhlal & Sons",
    description: "80+ year heritage traditional jewellery manufacturer since 1900.",
    url: "https://hasmukhlalandsons.com",
    thumbnail: "/assets/portfolio/thumbnails/Hasmukh Thumb.jpeg",
    fullImage: "/assets/portfolio/Hasmukh-Sons Full web.png",
  },
  {
    id: "silverstar",
    title: "Silver Star",
    description: "50+ year traditional silver jewellery manufacturer.",
    url: "https://silverstaronline.in",
    thumbnail: "/assets/portfolio/thumbnails/Silverstar Thumb.jpeg",
    fullImage: "/assets/portfolio/Silver-Star Full Page.jpeg",
  },
  {
    id: "saabmall",
    title: "Saab Mall",
    description: "Fresh fruits, vegetables, and grocery e-commerce application.",
    url: "https://saabmall.incincmedia.com",
    thumbnail: "/assets/portfolio/thumbnails/Saab Mall Thumb.jpeg",
    fullImage: "/assets/portfolio/Saab-Mall Full.png",
  },
  {
    id: "murtaza",
    title: "Murtaza Retiwala",
    description: "Award-winning vocalist and performer portfolio.",
    url: "https://murtazaretiwala.com",
    thumbnail: "/assets/portfolio/thumbnails/Murtaza Thumb.jpeg",
    fullImage: "/assets/portfolio/Murtaza-Retiwala Full.png",
  },
  {
    id: "vision-fitness",
    title: "Vision Fitness",
    description: "Established 1998, bespoke gym and fitness community.",
    url: "https://visionfitness.co.in",
    thumbnail: "/assets/portfolio/thumbnails/Vision Fitness Thumb.jpeg",
    fullImage: "/assets/portfolio/Vision-Fitness Full.png",
  },
];
