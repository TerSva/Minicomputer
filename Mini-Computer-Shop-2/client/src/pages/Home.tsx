import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Truck, ShieldCheck, Clock, CreditCard, Zap, Battery, Box, ArrowRight, Star } from "lucide-react";
import { mockProducts } from "../lib/mock-data";
import { useCart } from "../store/useCart";
import heroImg from "../assets/images/hero-pc.png";
import product1Img from "../assets/images/product-1.png";

export default function Home() {
  const { addItem } = useCart();
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-background z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 z-0" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] opacity-40 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            Malý počítač.<br/>
            <span className="text-gradient">Velký výkon.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10"
          >
            Prémiové mini počítače pro profesionály, hráče a tvůrce. Nekompromisní hardware v těle zlomku velikosti.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop">
              <a className="px-8 py-4 rounded-xl bg-primary text-background font-bold text-lg hover:scale-105 transition-transform shadow-glow">
                Prozkoumat
              </a>
            </Link>
            <Link href="/shop">
              <a className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 font-bold text-lg hover:scale-105 transition-all">
                Nakoupit
              </a>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-16 md:mt-24 w-full max-w-4xl relative"
          >
            <img src={heroImg} alt="Premium Mini PC" className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(0,229,255,0.3)]" />
            
            {/* Hover specs */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-1/4 -left-4 md:left-10 bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg"
            >
              <div className="font-mono text-xs text-primary">CPU</div>
              <div className="font-bold text-sm">AMD Ryzen 9</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-1/4 -right-4 md:right-10 bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg"
            >
              <div className="font-mono text-xs text-accent">RAM</div>
              <div className="font-bold text-sm">32GB DDR5</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-white/5 bg-secondary/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Truck, title: "Doprava zdarma", desc: "Nad 5000 Kč" },
              { icon: ShieldCheck, title: "Garance vrácení", desc: "Do 30 dnů" },
              { icon: Clock, title: "Podpora 24/7", desc: "Odborný tým" },
              { icon: CreditCard, title: "Bezpečná platba", desc: "Šifrováno" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <item.icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                <h3 className="font-display font-medium text-sm md:text-base">{item.title}</h3>
                <p className="text-xs text-foreground/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROČ MINI PC */}
      <section className="py-24 md:py-32 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
                <img src={product1Img} alt="Mini PC Detail" className="w-full h-full object-contain relative z-10 hover:rotate-[-5deg] hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Budoucnost je <span className="text-gradient">kompaktní</span></h2>
                <p className="text-foreground/70 text-lg">Proč ustupovat velkým a hlučným krabicím, když můžete mít stejný výkon v elegantním balení?</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Zap, title: "Nekompromisní výkon", desc: "Nejnovější procesory od AMD a Intelu zvládnou i ty nejnáročnější úkoly." },
                  { icon: Box, title: "Minimalistický design", desc: "Zapadne do každého interiéru. Žádné zbytečné kabely a vizuální smog." },
                  { icon: Battery, title: "Energetická efektivita", desc: "Až o 70% nižší spotřeba energie oproti klasickým desktopům." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <feature.icon className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl mb-1">{feature.title}</h3>
                      <p className="text-foreground/60">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (Horizontal Scroll) */}
      <section className="py-24 bg-card/30 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Vybrané kousky</h2>
            <p className="text-foreground/60">To nejlepší z naší nabídky</p>
          </div>
          <Link href="/shop">
            <a className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium group transition-colors">
              Zobrazit vše
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>

        {/* Custom scroll container without hiding scrollbar entirely, just styled or auto */}
        <div className="flex overflow-x-auto pb-12 pt-4 px-4 container mx-auto snap-x snap-mandatory hide-scrollbar gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[380px] snap-center shrink-0 bg-card rounded-2xl border border-white/10 overflow-hidden card-hover group flex flex-col"
            >
              <Link href={`/product/${product.id}`}>
                <a className="block relative aspect-video bg-secondary/50 p-6 flex-1">
                  {product.badges.length > 0 && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      {product.badges.map(b => (
                        <span key={b} className="text-xs font-bold px-2 py-1 rounded bg-primary text-background">
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Image wrapper */}
                  <div className="w-full h-full relative z-0 flex items-center justify-center">
                    <img 
                      src={product.id === 'm1-titan' ? product1Img : `https://picsum.photos/seed/${product.id}/400/400`} 
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-screen group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111118'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239494A8' font-family='sans-serif' font-size='16'%3EProdukt%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                </a>
              </Link>
              
              <div className="p-6 relative z-20 flex flex-col gap-4">
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{product.name}</h3>
                  <div className="font-mono text-xs text-foreground/50 whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.specs.cpu} • {product.specs.ram} • {product.specs.storage}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs text-foreground/40 line-through">
                        {product.originalPrice.toLocaleString('cs-CZ')} Kč
                      </span>
                    )}
                    <span className="font-bold text-xl text-primary">
                      {product.price.toLocaleString('cs-CZ')} Kč
                    </span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-colors group/btn overflow-hidden"
                  >
                    <Box size={18} className="group-hover/btn:hidden" />
                    <span className="hidden group-hover/btn:block text-xs font-bold">Koupit</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SOCIAL PROOF (Bento) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Co říkají naši zákazníci</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">Tisíce spokojených uživatelů už objevilo kouzlo kompaktního výkonu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Big item */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-1 bg-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between card-hover"
            >
              <div className="flex gap-1 text-primary mb-4">
                <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "Přechod z obřího desktopu na Titan M1 byla nejlepší volba. Mám více místa na stole a renderování videa je ještě rychlejší. Naprostá pecka!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-tech flex items-center justify-center font-bold">MT</div>
                <div>
                  <div className="font-bold">Martin T.</div>
                  <div className="text-xs text-foreground/50">Video Editor</div>
                </div>
              </div>
            </motion.div>

            {/* Small item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between card-hover"
            >
               <div className="flex gap-1 text-primary mb-4">
                <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
              </div>
              <p className="text-foreground/80 mb-6">
                "Konečně neslyším vysavač když hraju. Je to neskutečně tiché."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">PK</div>
                <div>
                  <div className="font-bold text-sm">Petr K.</div>
                </div>
              </div>
            </motion.div>

            {/* Small item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between card-hover"
            >
               <div className="flex gap-1 text-primary mb-4">
                <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
              </div>
              <p className="text-foreground/80 mb-6">
                "Design perfektně ladí k mým Apple zařízením."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">LN</div>
                <div>
                  <div className="font-bold text-sm">Lucie N.</div>
                </div>
              </div>
            </motion.div>
            
            {/* Small item 3 */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between card-hover"
            >
               <div className="flex gap-1 text-primary mb-4">
                <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
              </div>
              <p className="text-foreground/80 mb-6">
                "Koupeno pro dceru na školu. Nadmíru spokojenost."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">JR</div>
                <div>
                  <div className="font-bold text-sm">Jan R.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-tech opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Buďte u zdroje.</h2>
            <p className="text-foreground/70 mb-8">Získejte přístup k exkluzivním slevám a novinkám dříve než ostatní.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Váš e-mail" 
                className="flex-1 bg-background/50 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-background font-bold rounded-xl px-8 py-4 hover:scale-105 transition-transform"
              >
                Odebírat
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}