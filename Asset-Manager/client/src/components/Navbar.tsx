import { Link, useLocation } from "wouter";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Menu, Home, Grid, User } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-heading font-bold text-white tracking-tighter hover:text-[#00E5FF] transition-colors">
              MINICOMPUTER<span className="text-[#00E5FF]">.CZ</span>
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className={`text-sm font-medium transition-colors ${location === '/' ? 'text-[#00E5FF]' : 'text-zinc-400 hover:text-white'}`}>Domů</a>
            </Link>
            <Link href="/shop">
              <a className={`text-sm font-medium transition-colors ${location === '/shop' ? 'text-[#00E5FF]' : 'text-zinc-400 hover:text-white'}`}>Obchod</a>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-[#00E5FF] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#7C4DFF] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(124,77,255,0.5)]">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A24]/95 backdrop-blur-lg border-t border-white/10 px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <a className={`flex flex-col items-center gap-1 transition-colors ${location === '/' ? 'text-[#00E5FF]' : 'text-zinc-400'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Domů</span>
          </a>
        </Link>
        <Link href="/shop">
          <a className={`flex flex-col items-center gap-1 transition-colors ${location === '/shop' ? 'text-[#00E5FF]' : 'text-zinc-400'}`}>
            <Grid className="w-5 h-5" />
            <span className="text-[10px] font-medium">Obchod</span>
          </a>
        </Link>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-zinc-400 relative transition-colors hover:text-[#00E5FF]"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-[10px] font-medium">Košík</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#7C4DFF] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Účet</span>
        </button>
      </div>
    </>
  );
}
