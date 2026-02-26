import { useState } from "react";
import { useCart } from "../context/CartContext";
import { BentoGrid, BentoCard } from "../components/BentoCard";
import { Link, useLocation } from "wouter";
import { CheckCircle2, CreditCard, Truck, User } from "lucide-react";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    setTimeout(() => {
      setLocation('/');
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <BentoCard colSpan={6} className="text-center py-16 flex flex-col items-center max-w-xl">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4">Objednávka přijata!</h1>
          <p className="text-zinc-400 mb-8">Děkujeme za váš nákup. Na zadaný email jsme vám zaslali potvrzení s detaily objednávky.</p>
          <Link href="/">
            <a className="px-6 py-3 bg-[#00E5FF] text-black font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              Zpět na hlavní stranu
            </a>
          </Link>
        </BentoCard>
      </div>
    );
  }

  if (items.length === 0 && step === 1) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Košík je prázdný</h1>
        <Link href="/shop" className="text-[#00E5FF] hover:underline font-bold">Zpět do obchodu</Link>
      </div>
    );
  }

  return (
    <div className="pb-12 pt-6 max-w-[1440px] mx-auto px-4 md:px-6">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-8 max-w-2xl mx-auto">
        <div className={`flex flex-col items-center transition-colors duration-500 ${step >= 1 ? 'text-[#00E5FF]' : 'text-zinc-500'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 border-2 transition-colors duration-500 ${step >= 1 ? 'border-[#00E5FF] bg-[#00E5FF]/10 shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'border-zinc-700 bg-transparent'}`}>1</div>
          <span className="text-xs font-bold uppercase tracking-wider">ÚDAJE</span>
        </div>
        <div className={`flex-1 h-px mx-4 transition-colors duration-500 ${step >= 2 ? 'bg-[#00E5FF]' : 'bg-zinc-800'}`} />
        <div className={`flex flex-col items-center transition-colors duration-500 ${step >= 2 ? 'text-[#00E5FF]' : 'text-zinc-500'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 border-2 transition-colors duration-500 ${step >= 2 ? 'border-[#00E5FF] bg-[#00E5FF]/10 shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'border-zinc-700 bg-transparent'}`}>2</div>
          <span className="text-xs font-bold uppercase tracking-wider">PLATBA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Form Area */}
        <div className="lg:col-span-8">
          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handleComplete}>
            <BentoGrid className="!p-0 !max-w-full">
              
              {step === 1 && (
                <>
                  <BentoCard colSpan={12} className="mb-4">
                    <h2 className="flex items-center gap-2 text-xl font-bold mb-6 border-b border-white/10 pb-4">
                      <User className="text-[#00E5FF]" /> Osobní údaje
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">Jméno</label>
                        <input required type="text" className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF]" />
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">Příjmení</label>
                        <input required type="text" className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF]" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-zinc-400 mb-1">Email</label>
                        <input required type="email" className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF]" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs text-zinc-400 mb-1">Telefon</label>
                        <input required type="tel" className="w-full bg-[#0A0A0F] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF]" />
                      </div>
                    </div>
                  </BentoCard>

                  <BentoCard colSpan={12}>
                    <h2 className="flex items-center gap-2 text-xl font-bold mb-6 border-b border-white/10 pb-4">
                      <Truck className="text-[#7C4DFF]" /> Doprava
                    </h2>
                    <div className="space-y-3">
                      <label className="flex items-center gap-4 p-4 border border-[#00E5FF] bg-[#00E5FF]/5 rounded-xl cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                        <input type="radio" name="shipping" defaultChecked className="text-[#00E5FF]" />
                        <div className="flex-1">
                          <div className="font-bold text-white">Kurýr PPL</div>
                          <div className="text-sm text-zinc-400">Doručení do 24 hodin</div>
                        </div>
                        <div className="font-bold">Zdarma</div>
                      </label>
                      <label className="flex items-center gap-4 p-4 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                        <input type="radio" name="shipping" className="text-[#00E5FF]" />
                        <div className="flex-1">
                          <div className="font-bold text-white">Zásilkovna</div>
                          <div className="text-sm text-zinc-400">Výdejní místa</div>
                        </div>
                        <div className="font-bold">Zdarma</div>
                      </label>
                    </div>
                  </BentoCard>
                </>
              )}

              {step === 2 && (
                <BentoCard colSpan={12}>
                  <h2 className="flex items-center gap-2 text-xl font-bold mb-6 border-b border-white/10 pb-4">
                    <CreditCard className="text-[#00E5FF]" /> Způsob platby
                  </h2>
                  <div className="space-y-3 mb-6">
                    <label className="flex items-center gap-4 p-4 border border-[#00E5FF] bg-[#00E5FF]/5 rounded-xl cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                      <input type="radio" name="payment" defaultChecked className="text-[#00E5FF]" />
                      <div className="flex-1">
                        <div className="font-bold text-white">Online kartou</div>
                        <div className="text-sm text-zinc-400">Okamžitá platba přes GoPay</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                      <input type="radio" name="payment" className="text-[#00E5FF]" />
                      <div className="flex-1">
                        <div className="font-bold text-white">Bankovní převod</div>
                        <div className="text-sm text-zinc-400">Zpracování 1-2 dny</div>
                      </div>
                    </label>
                  </div>
                  
                  {/* Mock CC Form */}
                  <div className="p-6 bg-[#0A0A0F] rounded-xl border border-white/5 space-y-4 shadow-inner">
                     <div>
                        <label className="block text-xs text-zinc-400 mb-1">Číslo karty</label>
                        <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF] font-mono tracking-widest" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">Platnost</label>
                          <input required type="text" placeholder="MM/YY" className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF] font-mono" />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-400 mb-1">CVC</label>
                          <input required type="text" placeholder="123" className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00E5FF] font-mono" />
                        </div>
                      </div>
                  </div>
                </BentoCard>
              )}

              <div className="col-span-12 mt-4 flex gap-4">
                {step === 2 && (
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 transition-colors flex-1 max-w-[200px] border border-white/10">
                    Zpět
                  </button>
                )}
                <button type="submit" className="flex-1 py-4 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
                  {step === 1 ? 'Pokračovat k platbě' : 'Dokončit objednávku'}
                </button>
              </div>
            </BentoGrid>
          </form>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-4">
          <BentoGrid className="!p-0 !max-w-full sticky top-24">
            <BentoCard colSpan={12} className="bg-[#1A1A24]/80 backdrop-blur">
              <h3 className="font-bold text-lg mb-4">Shrnutí</h3>
              <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-[#0A0A0F] border border-white/5" />
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="font-bold text-sm leading-tight text-white/90">{item.name}</div>
                      <div className="text-xs text-zinc-500 mt-1">{item.quantity} ks</div>
                      <div className="text-[#00E5FF] font-mono text-sm font-bold mt-1">{(item.price * item.quantity).toLocaleString('cs-CZ')} Kč</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Mezisoučet</span>
                  <span>{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Doprava</span>
                  <span className="text-[#00E5FF]">Zdarma</span>
                </div>
                <div className="flex justify-between items-end pt-4 mt-2 border-t border-white/5">
                  <span className="font-bold text-zinc-300">Celkem k úhradě</span>
                  <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF]">{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>

      </div>
    </div>
  );
}
