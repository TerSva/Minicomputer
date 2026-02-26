import { useParams, Link } from "wouter";
import { mockProducts } from "../lib/mock-data";
import { BentoGrid, BentoCard } from "../components/BentoCard";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Star, Truck, Shield, Check, Plus, Minus, Cpu, MemoryStick, HardDrive, Monitor } from "lucide-react";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("popis");
  
  const product = mockProducts.find(p => p.id === id);

  useEffect(() => {
    gsap.fromTo('.detail-bento',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
    );
  }, [id]);

  if (!product) {
    return <div className="p-12 text-center text-zinc-400">Produkt nenalezen</div>;
  }

  const handleAdd = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div className="pb-12 pt-6">
      <div className="max-w-[1440px] mx-auto px-6 mb-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#00E5FF] transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět do obchodu
        </Link>
      </div>

      <BentoGrid>
        {/* ROW 1 */}
        {/* Image Gallery */}
        <BentoCard colSpan={8} rowSpan={2} noPadding className="detail-bento bg-[#0A0A0F] group">
          <div className="relative w-full h-full min-h-[400px]">
            <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent opacity-60" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-full">
                {product.category.toUpperCase()}
              </span>
            </div>
          </div>
        </BentoCard>

        {/* Purchase Box */}
        <BentoCard colSpan={4} className="detail-bento flex flex-col">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#00E5FF] text-[#00E5FF]' : 'text-zinc-600'}`} />
            ))}
            <span className="text-xs text-zinc-400 ml-2">({product.reviews} hodnocení)</span>
          </div>
          
          <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
          <p className="text-[#00E5FF] font-mono text-sm mb-6">{product.shortSpecs}</p>
          
          <div className="text-4xl font-heading font-bold mb-6">{product.price.toLocaleString('cs-CZ')} Kč</div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-[#0A0A0F] rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-white/5 text-white transition-colors"><Minus className="w-4 h-4"/></button>
              <span className="w-10 text-center font-mono font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-white/5 text-white transition-colors"><Plus className="w-4 h-4"/></button>
            </div>
            <button 
              onClick={handleAdd}
              className="flex-1 py-3 bg-[#00E5FF] text-black font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
            >
              Do košíku
            </button>
          </div>
          
          <div className="space-y-3 mt-auto pt-6 border-t border-white/5 text-sm">
            <div className="flex items-center gap-3 text-emerald-400 font-medium">
              <Check className="w-5 h-5" /> Skladem, připraveno k odeslání
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Truck className="w-5 h-5" /> Doprava zdarma nad 3 999 Kč
            </div>
          </div>
        </BentoCard>

        {/* ROW 2: Specs Mini Cards */}
        <BentoCard colSpan={4} className="detail-bento grid grid-cols-2 gap-4 bg-[#1A1A24]/50">
          <div className="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <Cpu className="w-5 h-5 text-[#00E5FF] mb-2" />
            <div className="text-xs text-zinc-500 mb-1">Procesor</div>
            <div className="font-bold text-sm truncate">{product.specs["Procesor"]}</div>
          </div>
          <div className="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <MemoryStick className="w-5 h-5 text-[#7C4DFF] mb-2" />
            <div className="text-xs text-zinc-500 mb-1">RAM</div>
            <div className="font-bold text-sm truncate">{product.specs["RAM"] || "Integrovaná"}</div>
          </div>
          <div className="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <HardDrive className="w-5 h-5 text-[#FF3366] mb-2" />
            <div className="text-xs text-zinc-500 mb-1">Úložiště</div>
            <div className="font-bold text-sm truncate">{product.specs["Úložiště"] || "Volitelné"}</div>
          </div>
          <div className="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <Monitor className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="text-xs text-zinc-500 mb-1">Grafika</div>
            <div className="font-bold text-sm truncate">{product.specs["Grafika"] || "Integrovaná"}</div>
          </div>
        </BentoCard>

        {/* ROW 3: Full width description */}
        <BentoCard colSpan={12} className="detail-bento">
          <div className="flex gap-6 border-b border-white/10 mb-6">
            <button 
              onClick={() => setActiveTab('popis')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'popis' ? 'border-[#00E5FF] text-[#00E5FF]' : 'border-transparent text-zinc-400 hover:text-white'}`}
            >
              Popis produktu
            </button>
            <button 
              onClick={() => setActiveTab('parametry')}
              className={`pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'parametry' ? 'border-[#00E5FF] text-[#00E5FF]' : 'border-transparent text-zinc-400 hover:text-white'}`}
            >
              Kompletní parametry
            </button>
          </div>
          
          <div className="min-h-[200px]">
            {activeTab === 'popis' && (
              <div className="text-zinc-300 leading-relaxed max-w-4xl">
                <h3 className="text-xl font-heading font-bold text-white mb-4">O produktu</h3>
                <p>{product.description}</p>
                <p className="mt-4">Toto zařízení je navrženo s důrazem na maximální efektivitu a minimální rozměry. Perfektní volba pro ty, kteří vyžadují nekompromisní výkon v kompaktním balení, ať už na práci, kreativní tvorbu nebo zábavu.</p>
              </div>
            )}
            {activeTab === 'parametry' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-zinc-400">{key}</span>
                    <span className="font-medium text-right ml-4">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
