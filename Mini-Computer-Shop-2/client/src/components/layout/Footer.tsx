import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          <div className="space-y-6">
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold shadow-glow">
                  <Monitor size={18} />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  MiniComputer<span className="text-primary">.cz</span>
                </span>
              </a>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Váš specialista na prémiové mini PC, konzole a příslušenství. Malé rozměry, nekompromisní výkon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Obchod</h3>
            <ul className="space-y-4">
              <li><Link href="/shop"><a className="text-foreground/60 hover:text-primary transition-colors text-sm">Všechny produkty</a></Link></li>
              <li><Link href="/shop"><a className="text-foreground/60 hover:text-primary transition-colors text-sm">Mini PC</a></Link></li>
              <li><Link href="/shop"><a className="text-foreground/60 hover:text-primary transition-colors text-sm">Herní Konzole</a></Link></li>
              <li><Link href="/shop"><a className="text-foreground/60 hover:text-primary transition-colors text-sm">Příslušenství</a></Link></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Slevy a akce</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Podpora</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Sledování objednávky</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Doprava a platba</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Reklamace a vrácení</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/60 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Tech Street 42, 110 00 Praha 1<br/>Česká republika</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+420 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>podpora@minicomputer.cz</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} MiniComputer.cz. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/40 hover:text-foreground">Obchodní podmínky</a>
            <a href="#" className="text-foreground/40 hover:text-foreground">Ochrana soukromí</a>
            <a href="#" className="text-foreground/40 hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}