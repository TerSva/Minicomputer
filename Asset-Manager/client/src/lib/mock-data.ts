export interface Product {
  id: string;
  name: string;
  category: 'Mini PC' | 'Konzole' | 'Příslušenství';
  price: number;
  image: string;
  shortSpecs: string;
  description: string;
  specs: Record<string, string>;
  isNew?: boolean;
  featured?: boolean;
  rating: number;
  reviews: number;
}

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Minisforum UM780 XTX",
    category: "Mini PC",
    price: 18990,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "Ryzen 7 7840HS | 32GB RAM",
    description: "Extrémně výkonné Mini PC pro náročné úkoly, hraní her i střih videa. S novou generací procesorů Ryzen a možností připojení externí grafické karty přes Oculink.",
    specs: {
      "Procesor": "AMD Ryzen 7 7840HS",
      "Grafika": "Radeon 780M",
      "RAM": "32GB DDR5 5600MHz",
      "Úložiště": "1TB PCIe 4.0 SSD",
      "Porty": "2x USB4, 1x Oculink, 4x USB-A"
    },
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "p2",
    name: "Intel NUC 13 Pro",
    category: "Mini PC",
    price: 15490,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "i7-1360P | 16GB RAM",
    description: "Spolehlivý pracant pro vaši kancelář nebo domácnost. Kompaktní design a výkon procesorů Intel 13. generace.",
    specs: {
      "Procesor": "Intel Core i7-1360P",
      "Grafika": "Intel Iris Xe",
      "RAM": "16GB DDR4",
      "Úložiště": "512GB NVMe SSD"
    },
    rating: 4.6,
    reviews: 89
  },
  {
    id: "p3",
    name: "Steam Deck OLED",
    category: "Konzole",
    price: 14490,
    image: "https://images.unsplash.com/photo-1704257121703-a128af5d3765?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "512GB | OLED Displej",
    description: "Nejlepší handheld konzole na trhu nyní s nádherným OLED displejem a delší výdrží baterie.",
    specs: {
      "Procesor": "6nm AMD APU",
      "Displej": "7.4\" HDR OLED, 90Hz",
      "Úložiště": "512GB NVMe",
      "Baterie": "50Whr"
    },
    isNew: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: "p4",
    name: "ASUS ROG NUC",
    category: "Mini PC",
    price: 54990,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "i9-14900KF | RTX 4070",
    description: "Nekompromisní herní výkon v těle menším než krabice od bot.",
    specs: {
      "Procesor": "Intel Core i9-14900KF",
      "Grafika": "NVIDIA GeForce RTX 4070",
      "RAM": "32GB DDR5",
      "Úložiště": "2TB Gen4 SSD"
    },
    rating: 4.7,
    reviews: 15
  },
  {
    id: "p5",
    name: "Logitech MX Keys Mini",
    category: "Příslušenství",
    price: 2490,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "Bluetooth | Podsvícená",
    description: "Minimalistická klávesnice pro tvůrce obsahu.",
    specs: {
      "Konektivita": "Bluetooth Low Energy",
      "Výdrž": "až 5 měsíců",
      "Hmotnost": "506g"
    },
    rating: 4.8,
    reviews: 420
  },
  {
    id: "p6",
    name: "Mac mini M2",
    category: "Mini PC",
    price: 17490,
    image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=800",
    shortSpecs: "M2 | 8GB RAM | 256GB",
    description: "Více síly pro cokoliv děláš. Nový M2 čip přináší revoluci ve výkonu Mini PC.",
    specs: {
      "Procesor": "Apple M2 (8 jader)",
      "Grafika": "10jádrová GPU",
      "RAM": "8GB jednotná paměť",
      "Úložiště": "256GB SSD"
    },
    rating: 4.9,
    reviews: 512
  }
];

export const faqData = [
  {
    q: "Jak dlouho trvá doprava?",
    a: "Všechny objednávky odesíláme do 24 hodin. Standardní doručení je 1-2 pracovní dny."
  },
  {
    q: "Poskytujete záruku i pro IČO?",
    a: "Ano, na všechny naše Mini PC a konzole poskytujeme standardní záruku 24 měsíců i při nákupu na firmu (IČO). Na vybrané modely dokonce 36 měsíců."
  },
  {
    q: "Je možné Mini PC později upgradovat?",
    a: "Většina našich Mini PC (vyjma produktů Apple) umožňuje snadný upgrade RAM i úložiště (SSD). U každého produktu najdete tuto informaci v parametrech."
  }
];