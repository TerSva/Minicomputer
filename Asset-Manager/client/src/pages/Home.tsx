import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { BentoGrid, BentoCard } from "../components/BentoCard";
import { mockProducts, faqData } from "../lib/mock-data";
import { useCart } from "../context/CartContext";
import { Monitor, Gamepad2, Headphones, ArrowRight, Star, Plus } from "lucide-react";
import gsap from "gsap";
import { useCountUp } from "../hooks/use-count-up";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  
  const customers = useCountUp(2500);
  const warranty = useCountUp(3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-item', 
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: "power3.out",
          delay: 0.1
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const featuredProduct = mockProducts[0];
  const compactProducts = mockProducts.slice(1, 4);

  return (
    <div ref={containerRef} className="pb-12 pt-6">
      <BentoGrid>
        {/* ROW 1 */}
        <BentoCard colSpan={8} rowSpan={2} className="group overflow-hidden bg-gradient-to-br from-[#1A1A24] to-[#0A0A0F]">
          <div className="absolute inset-0 bg-[#00E5FF] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00E5FF] blur-[120px] rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
          
          <div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
            <div className="flex-1 flex flex-col justify-center items-start">
              <span className="px-3 py-1 bg-white/10 text-[#00E5FF] text-xs font-bold rounded-full mb-4 font-mono tracking-wider">
                FLAGSHIP MODEL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-[1.1]">
                Budoucnost <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF]">na dlani.</span>
              </h1>
              <p className="text-zinc-400 mb-8 text-sm md:text-base max-w-md">
                {featuredProduct.description}
              </p>
              <div className="flex items-center gap-6 mt-auto">
                <div>
                  <div className="text-sm text-zinc-500 line-through">21 990 Kč</div>
                  <div className="text-3xl font-heading font-bold text-white">{featuredProduct.price.toLocaleString('cs-CZ')} Kč</div>
                </div>
                <button 
                  onClick={() => addToCart(featuredProduct)}
                  className="px-6 py-3 bg-[#00E5FF] text-black font-bold rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                >
                  Koupit nyní
                </button>
              </div>
            </div>
            <div className="flex-1 relative hidden md:block">
              <img 
                src={featuredProduct.image} 
                alt="Featured Mini PC" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl border border-white/5 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </BentoCard>

        <BentoCard colSpan={4} className="flex flex-col justify-center items-center text-center gap-6 py-12">
          <div>
            <div className="text-4xl font-heading font-bold text-[#00E5FF] mb-1">{customers}+</div>
            <div className="text-sm font-medium text-zinc-400">Spokojených zákazníků</div>
          </div>
          <div className="w-12 h-[1px] bg-white/10" />
          <div>
            <div className="text-4xl font-heading font-bold text-[#7C4DFF] mb-1">24h</div>
            <div className="text-sm font-medium text-zinc-400">Expedice objednávek</div>
          </div>
          <div className="w-12 h-[1px] bg-white/10" />
          <div>
            <div className="text-4xl font-heading font-bold text-white mb-1">{warranty} roky</div>
            <div className="text-sm font-medium text-zinc-400">Záruka v ceně</div>
          </div>
        </BentoCard>

        {/* ROW 2: Quick Actions */}
        <BentoCard colSpan={3} smallRadius className="group cursor-pointer p-0">
          <Link href="/shop" className="flex items-center gap-4 w-full h-full p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#00E5FF]/20 group-hover:text-[#00E5FF] transition-colors">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">Mini PC</div>
              <div className="text-xs text-zinc-500 font-mono">12 PRODUKTŮ</div>
            </div>
          </Link>
        </BentoCard>

        <BentoCard colSpan={3} smallRadius className="group cursor-pointer p-0">
          <Link href="/shop" className="flex items-center gap-4 w-full h-full p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#7C4DFF]/20 group-hover:text-[#7C4DFF] transition-colors">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">Konzole</div>
              <div className="text-xs text-zinc-500 font-mono">5 PRODUKTŮ</div>
            </div>
          </Link>
        </BentoCard>

        <BentoCard colSpan={3} smallRadius className="group cursor-pointer p-0">
          <Link href="/shop" className="flex items-center gap-4 w-full h-full p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#FF3366]/20 group-hover:text-[#FF3366] transition-colors">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-lg">Příslušenství</div>
              <div className="text-xs text-zinc-500 font-mono">24 PRODUKTŮ</div>
            </div>
          </Link>
        </BentoCard>

        <BentoCard colSpan={3} smallRadius noPadding className="bg-gradient-to-r from-[#00E5FF]/20 to-[#7C4DFF]/20 border-none cursor-pointer group">
          <div className="h-full w-full flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="text-center relative z-10">
              <div className="font-bold text-white mb-1">Doprava zdarma</div>
              <div className="text-xs font-mono text-[#00E5FF]">NAD 3 999 Kč</div>
            </div>
          </div>
        </BentoCard>

        {/* ROW 3: Products */}
        {compactProducts.map((product) => (
          <BentoCard key={product.id} colSpan={4} noPadding className="flex flex-col group">
            <Link href={`/product/${product.id}`} className="block relative h-48 overflow-hidden bg-[#0A0A0F]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 px-2 py-1 bg-[#00E5FF] text-black text-[10px] font-bold rounded">
                  NOVINKA
                </span>
              )}
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs text-zinc-500 font-mono mb-2">{product.shortSpecs}</div>
              <Link href={`/product/${product.id}`}>
                <a className="font-bold text-lg leading-tight mb-4 hover:text-[#00E5FF] transition-colors">{product.name}</a>
              </Link>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-heading font-bold text-xl">{product.price.toLocaleString('cs-CZ')} Kč</span>
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </BentoCard>
        ))}

        {/* ROW 4: Mixed */}
        <BentoCard colSpan={6} hoverable={false} className="bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')] bg-cover bg-center relative min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end h-full">
            <span className="text-[#00E5FF] font-bold font-mono text-sm mb-2">PRŮVODCE VÝBĚREM</span>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">Office vs Gaming<br/>Jak vybrat Mini PC?</h3>
            <button className="flex items-center gap-2 text-white font-medium hover:text-[#00E5FF] transition-colors w-max">
              Číst článek <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </BentoCard>

        <BentoCard colSpan={6} className="flex flex-col justify-center">
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#00E5FF] text-[#00E5FF]" />)}
          </div>
          <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
            "Neuvěřitelné, kolik výkonu se vejde do tak malé krabičky. Odeslání proběhlo bleskově a s podporou jsem nadmíru spokojen."
          </blockquote>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#00E5FF] p-[2px]">
              <div className="w-full h-full bg-[#1A1A24] rounded-full flex items-center justify-center font-bold text-sm">JN</div>
            </div>
            <div>
              <div className="font-bold">Jan Novák</div>
              <div className="text-xs text-[#00E5FF] font-medium flex items-center gap-1">
                ✓ Ověřený nákup
              </div>
            </div>
          </div>
        </BentoCard>

        {/* ROW 5 */}
        <BentoCard colSpan={4}>
          <h3 className="font-bold mb-4">Nejčastější dotazy</h3>
          <div className="space-y-4">
            {faqData.slice(0, 2).map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="font-medium text-sm text-white mb-1">{faq.q}</div>
                <div className="text-xs text-zinc-400 line-clamp-2">{faq.a}</div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard colSpan={8} className="bg-[#7C4DFF]/10 flex flex-col md:flex-row items-center justify-center gap-8 border-[#7C4DFF]/30">
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Získejte 5% slevu na první nákup</h3>
            <p className="text-zinc-400 text-sm">Přihlaste se k odběru novinek a občasných slev. Žádný spam.</p>
          </div>
          <div className="flex-1 w-full flex gap-2">
            <input 
              type="email" 
              placeholder="vas@email.cz" 
              className="flex-1 bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C4DFF] transition-colors"
            />
            <button className="bg-[#7C4DFF] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-colors">
              Odebírat
            </button>
          </div>
        </BentoCard>

      </BentoGrid>
    </div>
  );
}
