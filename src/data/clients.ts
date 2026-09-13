export interface ClientLogo {
  id: string;
  name: string;
  image: string;
}

// Background-removed transparent logos (from public/assets/clients-transparent/)
export const clientLogos: ClientLogo[] = [
  { id: "hdfc", name: "HDFC Parivartan", image: "/assets/clients-transparent/HDFC Parivartan.png" },
  { id: "kotak", name: "Kotak", image: "/assets/clients-transparent/Kotak.png" },
  { id: "radisson", name: "Radisson", image: "/assets/clients-transparent/Radisson.png" },
  { id: "iijs", name: "IIJS", image: "/assets/clients-transparent/iijs.png" },
  { id: "rr-kabel", name: "RR Kabel", image: "/assets/clients-transparent/RR Kabel.png" },
  { id: "reward-port", name: "Reward Port", image: "/assets/clients-transparent/Reward Port.png" },
  { id: "star-anise", name: "Star Anise", image: "/assets/clients-transparent/Star Anise.png" },
  { id: "gurukripa", name: "Gurukripa", image: "/assets/clients-transparent/Gurukripa.png" },
  { id: "alkahf", name: "Al Kahf General Trading", image: "/assets/clients-transparent/Al Kahf General Trading LLC.png" },
  { id: "98studios", name: "98 Studios", image: "/assets/clients-transparent/98 Studios.png" },
  { id: "aestheq", name: "Aestheq Studios", image: "/assets/clients-transparent/Aestheq Studios.png" },
  { id: "cleaxon", name: "Cleaxon", image: "/assets/clients-transparent/Cleaxon.png" },
  { id: "cci", name: "CCI Group", image: "/assets/clients-transparent/CCI Group.png" },
  { id: "device-love", name: "Device Love", image: "/assets/clients-transparent/Device Love.png" },
  { id: "elite", name: "Elite Enterprise", image: "/assets/clients-transparent/Elite Enterprise.png" },
  { id: "ers", name: "ERS Design", image: "/assets/clients-transparent/ERS Design.png" },
  { id: "fitness-freaks", name: "Fitness Freaks", image: "/assets/clients-transparent/Fitness Freaks.png" },
  { id: "g-boutique", name: "G - Boutique", image: "/assets/clients-transparent/G - Boutique.png" },
  { id: "gizmo", name: "Gizmo", image: "/assets/clients-transparent/Gizmo.png" },
  { id: "yudo", name: "YUDO", image: "/assets/clients-transparent/YUDO.png" },
  { id: "dexterity", name: "Dexterity Adtech IND", image: "/assets/clients-transparent/Dexterity Adtech IND.png" },
  { id: "ankam", name: "Ankam Play", image: "/assets/clients-transparent/Ankam Play.png" },
  { id: "azoz", name: "Azoz Operable Wall", image: "/assets/clients-transparent/Azoz Operable Wall.png" },
  { id: "agneyastra", name: "Agneyastra Foundation", image: "/assets/clients-transparent/Agneyastra Foundation.png" },
  { id: "fitt-n-trim", name: "FITT N TRIM GYM", image: "/assets/clients-transparent/FITT N TRIM GYM.png" },
  { id: "amone", name: "Amone Clothing", image: "/assets/clients-transparent/Amone Clothing.png" },
  { id: "amrit", name: "Amrit Furnitures", image: "/assets/clients-transparent/Amrit Furnitures.png" },
  { id: "balaji", name: "Balaji Symphony", image: "/assets/clients-transparent/Balaji Symphony.png" },
  { id: "febble", name: "Febble Digital Solutions", image: "/assets/clients-transparent/Febble Digital Solutions LLP.png" },
  { id: "nandeep", name: "Nandeep Machine Tools", image: "/assets/clients-transparent/Nandeep Machine Tools.png" },
  { id: "new-era", name: "New Era", image: "/assets/clients-transparent/New Era.png" },
  { id: "radical", name: "Radical Minds", image: "/assets/clients-transparent/Radical Minds.png" },
  { id: "saab-mall", name: "Saab Mall", image: "/assets/clients-transparent/Saab Mall.png" },
  { id: "star-club", name: "Star Club Rewards", image: "/assets/clients-transparent/Star Club Rewards.png" },
  { id: "vision-fitness", name: "Vision Fitness", image: "/assets/clients-transparent/Vision Fitness.png" },
  { id: "zero-broker", name: "Zero Broker", image: "/assets/clients-transparent/Zero Broker.png" },
];

export const marqueeClients = clientLogos.map((c) => c.name);
export const totalClientsCount = 89;
