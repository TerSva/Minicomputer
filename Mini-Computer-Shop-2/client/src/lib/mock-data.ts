export type ProductCategory = 'Mini PC' | 'Konzole' | 'Příslušenství';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  shortDesc: string;
  description: string;
  specs: {
    cpu?: string;
    ram?: string;
    storage?: string;
    gpu?: string;
    ports?: string;
    [key: string]: string | undefined;
  };
  image: string;
  gallery: string[];
  badges: string[];
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "m1-titan",
    name: "Titan Core M1",
    category: "Mini PC",
    price: 14990,
    shortDesc: "Ultimátní výkon v kompaktním těle",
    description: "Titan Core M1 přináší revoluci v desktopovém počítání. S procesorem AMD Ryzen 9 a 32 GB DDR5 RAM zvládne i ty nejnáročnější úkoly, od střihu 4K videa po moderní hraní. To vše v elegantním celohliníkovém šasi o objemu pouhého 0.8 litru.",
    specs: {
      cpu: "AMD Ryzen 9 7940HS",
      ram: "32 GB DDR5 5600MHz",
      storage: "1 TB M.2 NVMe PCIe 4.0",
      gpu: "Radeon 780M",
      ports: "2x USB4, 4x USB-A, 2x HDMI 2.1, 2.5G LAN"
    },
    image: "product-1",
    gallery: ["product-1", "product-1-side", "product-1-back"],
    badges: ["NOVINKA", "DOPRAVA ZDARMA"],
    rating: 4.9,
    reviewsCount: 24,
    inStock: true
  },
  {
    id: "stealth-nuc",
    name: "Stealth NUC 13",
    category: "Mini PC",
    price: 12490,
    originalPrice: 13990,
    shortDesc: "Tichý společník pro produktivitu",
    description: "Intel Core i7 13. generace v dokonale tichém balení. Stealth NUC je navržen pro maximální efektivitu v kanceláři i doma. Vyniká bezprecedentní konektivitou a podporou až čtyř 4K monitorů.",
    specs: {
      cpu: "Intel Core i7-13700H",
      ram: "16 GB DDR4 3200MHz",
      storage: "512 GB M.2 NVMe",
      gpu: "Intel Iris Xe",
      ports: "2x Thunderbolt 4, 3x USB 3.2, 2x HDMI"
    },
    image: "product-2",
    gallery: ["product-2"],
    badges: ["SLEVA -10%"],
    rating: 4.7,
    reviewsCount: 56,
    inStock: true
  },
  {
    id: "edge-nano",
    name: "NanoByte Edge",
    category: "Mini PC",
    price: 11990,
    shortDesc: "Kompaktní gaming a kreativita",
    description: "Skvělý poměr cena/výkon. NanoByte Edge je ideální pro e-sport tituly a kreativní práci na cestách.",
    specs: {
      cpu: "AMD Ryzen 7 7735HS",
      ram: "32 GB DDR5",
      storage: "1 TB M.2",
      gpu: "Radeon 680M"
    },
    image: "product-3",
    gallery: ["product-3"],
    badges: [],
    rating: 4.8,
    reviewsCount: 12,
    inStock: true
  },
  {
    id: "office-hub",
    name: "Office Hub Lite",
    category: "Mini PC",
    price: 6990,
    shortDesc: "Základní kámen vaší kanceláře",
    description: "Dostupný mini počítač pro každodenní kancelářskou práci, prohlížení webu a multimédia. Nulová hlučnost a minimální spotřeba energie.",
    specs: {
      cpu: "Intel N100",
      ram: "16 GB DDR4",
      storage: "512 GB SSD"
    },
    image: "product-4",
    gallery: ["product-4"],
    badges: ["NEJPRODÁVANĚJŠÍ"],
    rating: 4.5,
    reviewsCount: 128,
    inStock: true
  },
  {
    id: "gamedeck-x",
    name: "GameDeck X",
    category: "Konzole",
    price: 16990,
    shortDesc: "AAA hry kdekoli s sebou",
    description: "Handheld konzole nové generace. Hrajte svou PC knihovnu kdekoli na nádherném 7 palcovém OLED displeji s obnovovací frekvencí 120Hz.",
    specs: {
      cpu: "AMD Z1 Extreme",
      ram: "16 GB LPDDR5x",
      storage: "512 GB NVMe",
      screen: "7\" OLED 120Hz"
    },
    image: "product-5",
    gallery: ["product-5"],
    badges: ["PREMIUM"],
    rating: 4.9,
    reviewsCount: 45,
    inStock: false
  },
  {
    id: "retro-pro",
    name: "RetroBox Pro",
    category: "Konzole",
    price: 3490,
    shortDesc: "Nostalgie v moderním kabátu",
    description: "Zahrajte si tisíce klasických her z dob 8-bitových a 16-bitových konzolí. Připraveno k hraní hned po vybalení s dvěma bezdrátovými ovladači.",
    specs: {
      cpu: "ARM Cortex-A53",
      ram: "2 GB RAM",
      storage: "64 GB MicroSD"
    },
    image: "product-6",
    gallery: ["product-6"],
    badges: [],
    rating: 4.6,
    reviewsCount: 89,
    inStock: true
  },
  {
    id: "mech-k1",
    name: "Mechanical K1",
    category: "Příslušenství",
    price: 1990,
    shortDesc: "Kompaktní 75% mechanická klávesnice",
    description: "Bezdrátová mechanická klávesnice s hot-swappable spínači a RGB podsvícením. Perfektní doplněk k vašemu mini PC.",
    specs: {
      switches: "Gateron Red",
      layout: "75% US",
      connectivity: "Bluetooth, 2.4GHz, USB-C"
    },
    image: "product-7",
    gallery: ["product-7"],
    badges: [],
    rating: 4.8,
    reviewsCount: 34,
    inStock: true
  },
  {
    id: "prec-m2",
    name: "Precision M2",
    category: "Příslušenství",
    price: 1290,
    shortDesc: "Ergonomická bezdrátová myš",
    description: "Prémiová myš pro celodenní práci s přesným senzorem a možností připojení až ke 3 zařízením současně.",
    specs: {
      dpi: "4000 DPI",
      buttons: "6 programovatelných",
      battery: "Až 70 dní"
    },
    image: "product-8",
    gallery: ["product-8"],
    badges: [],
    rating: 4.7,
    reviewsCount: 41,
    inStock: true
  }
];