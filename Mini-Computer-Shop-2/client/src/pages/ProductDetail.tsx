import { useParams } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Check, Shield, Truck, Cpu, MemoryStick, HardDrive, Monitor, ChevronRight } from "lucide-react";
import { mockProducts } from "../lib/mock-data";
import { useCart } from "../store/useCart";
import product1Img from "../assets/images/product-1.png";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when scrolled past the main buy button
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) return <div className="pt-32 text-center">Produkt nenalezen</div>;

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-foreground/50 mb-8 gap-2">
          <a href="/" className="hover:text-primary transition-colors">Domů</a>
          <ChevronRight size={14} />
          <a href="/shop" className="hover:text-primary transition-colors">E-shop</a>
          <ChevronRight size={14} />
          <span className="text-foreground truncate">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Gallery (Left) */}
          <div className="lg:w-1/2">
            <div className="sticky top-28">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl bg-secondary/30 border border-white/5 flex items-center justify-center p-8 mb-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
                <img 
                  src={product.id === 'm1-titan' ? product1Img : `https://picsum.photos/seed/${product.id}/600/600`}
                  alt={product.name}
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                />
              </motion.div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <button key={i} className="aspect-square rounded-xl bg-secondary/50 border border-white/5 hover:border-primary transition-colors p-2">
                    <img 
                      src={product.id === 'm1-titan' ? product1Img : `https://picsum.photos/seed/${product.id}${i}/200/200`}
                      alt="Thumbnail" 
                      className="w-full h-full object-contain mix-blend-screen"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info (Right) */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {product.badges.length > 0 && (
              <div className="flex gap-2 mb-4">
                {product.badges.map(b => (
                  <span key={b} className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {b}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-primary">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>
              <span className="text-foreground/50 text-sm">{product.reviewsCount} hodnocení</span>
              <span className="text-foreground/20">•</span>
              <span className="text-green-400 text-sm flex items-center gap-1 font-medium">
                <Check size={16} /> Skladem
              </span>
            </div>

            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              {product.shortDesc}
            </p>

            <div className="flex items-end gap-4 mb-10 pb-10 border-b border-white/10">
              <div>
                {product.originalPrice && (
                  <div className="text-lg text-foreground/40 line-through mb-1">
                    {product.originalPrice.toLocaleString('cs-CZ')} Kč
                  </div>
                )}
                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-foreground/70">
                  {product.price.toLocaleString('cs-CZ')} Kč
                </div>
              </div>
              <div className="text-foreground/50 text-sm mb-2">vč. DPH</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => addItem(product)}
                className="flex-1 py-5 rounded-xl bg-primary text-background font-bold text-lg flex items-center justify-center gap-3 btn-hover shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <ShoppingCart size={22} />
                Přidat do košíku
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <Truck className="text-primary" size={20} />
                <span>Doprava zdarma<br/>zítra u vás</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <Shield className="text-primary" size={20} />
                <span>Záruka 36 měsíců<br/>pro firmy i koncové</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Bento Grid */}
        <div className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-8">Klíčové vlastnosti</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.specs.cpu && (
              <div className="bg-card p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu size={20} />
                </div>
                <div className="text-xs text-foreground/50 font-mono uppercase">Procesor</div>
                <div className="font-medium text-sm md:text-base">{product.specs.cpu}</div>
              </div>
            )}
            {product.specs.ram && (
              <div className="bg-card p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <MemoryStick size={20} />
                </div>
                <div className="text-xs text-foreground/50 font-mono uppercase">Operační paměť</div>
                <div className="font-medium text-sm md:text-base">{product.specs.ram}</div>
              </div>
            )}
            {product.specs.storage && (
              <div className="bg-card p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <HardDrive size={20} />
                </div>
                <div className="text-xs text-foreground/50 font-mono uppercase">Úložiště</div>
                <div className="font-medium text-sm md:text-base">{product.specs.storage}</div>
              </div>
            )}
            {(product.specs.gpu || product.specs.screen) && (
              <div className="bg-card p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Monitor size={20} />
                </div>
                <div className="text-xs text-foreground/50 font-mono uppercase">{product.specs.gpu ? 'Grafika' : 'Displej'}</div>
                <div className="font-medium text-sm md:text-base">{product.specs.gpu || product.specs.screen}</div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs section */}
        <div>
          <div className="flex border-b border-white/10 mb-8 overflow-x-auto hide-scrollbar">
            {[
              { id: 'desc', label: 'Kompletní popis' },
              { id: 'specs', label: 'Technické parametry' },
              { id: 'reviews', label: 'Recenze' },
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeTab === tab.id ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'desc' && (
                  <div className="prose prose-invert max-w-3xl">
                    <p className="text-lg leading-relaxed text-foreground/80">{product.description}</p>
                    <p className="mt-4 text-foreground/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                )}
                
                {activeTab === 'specs' && (
                  <div className="max-w-3xl rounded-xl border border-white/10 overflow-hidden">
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <div key={key} className={`flex p-4 ${i % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                        <div className="w-1/3 font-mono text-sm text-foreground/60 uppercase">{key}</div>
                        <div className="w-2/3 font-medium">{value}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="max-w-3xl text-center py-12 border border-white/10 rounded-xl border-dashed">
                    <div className="text-4xl font-display font-bold mb-2">{product.rating} / 5</div>
                    <div className="flex justify-center text-primary mb-2">
                      <Star fill="currentColor" size={24} />
                      <Star fill="currentColor" size={24} />
                      <Star fill="currentColor" size={24} />
                      <Star fill="currentColor" size={24} />
                      <Star fill="currentColor" size={24} />
                    </div>
                    <p className="text-foreground/50">Založeno na {product.reviewsCount} hodnoceních</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Sticky Buy Bar (Mobile/Scroll) */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-white/10 p-4 z-40 hidden md:block"
          >
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={product.id === 'm1-titan' ? product1Img : `https://picsum.photos/seed/${product.id}/100/100`} className="w-12 h-12 rounded object-contain bg-white/5" alt={product.name} />
                <div>
                  <h3 className="font-bold text-sm">{product.name}</h3>
                  <div className="text-primary font-bold">{product.price.toLocaleString('cs-CZ')} Kč</div>
                </div>
              </div>
              <button 
                onClick={() => addItem(product)}
                className="px-8 py-3 rounded-xl bg-primary text-background font-bold btn-hover"
              >
                Přidat do košíku
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}