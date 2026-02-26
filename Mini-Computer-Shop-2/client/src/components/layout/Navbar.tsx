import { Link } from "wouter";
import { ShoppingCart, Menu, X, Monitor, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../../store/useCart";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, getTotals } = useCart();
  const { itemsCount } = getTotals();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="md:hidden p-2 -ml-2 text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              
              <Link href="/">
                <a className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold shadow-glow group-hover:scale-105 transition-transform">
                    <Monitor size={18} />
                  </div>
                  <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                    MiniComputer<span className="text-primary">.cz</span>
                  </span>
                </a>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Domů</a></Link>
              <Link href="/shop"><a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">E-shop</a></Link>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">O nás</a>
              <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Kontakt</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 text-foreground/80 hover:text-primary transition-colors hidden sm:block">
                <Search size={20} />
              </button>
              
              <button 
                onClick={toggleCart}
                className="relative p-2 text-foreground/80 hover:text-primary transition-colors group"
              >
                <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                {itemsCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-background text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1 animate-in zoom-in">
                    {itemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold">
                  <Monitor size={18} />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  MiniComputer<span className="text-primary">.cz</span>
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-card rounded-full text-foreground/80 hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-2xl font-display font-medium">
              <Link href="/"><a onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Domů</a></Link>
              <Link href="/shop"><a onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">E-shop</a></Link>
              <a href="#" className="hover:text-primary transition-colors">O nás</a>
              <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
            </nav>
            
            <div className="mt-auto pb-8">
              <div className="p-6 rounded-2xl bg-gradient-tech text-center">
                <h3 className="font-display font-bold mb-2">Potřebujete poradit?</h3>
                <p className="text-sm text-foreground/60 mb-4">Naši specialisté jsou tu pro vás 24/7</p>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/10">
                  Kontaktovat podporu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}