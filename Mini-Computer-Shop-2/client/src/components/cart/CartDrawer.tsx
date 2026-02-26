import { X, Trash2, Plus, Minus, ArrowRight, CreditCard } from "lucide-react";
import { useCart } from "../../store/useCart";
import { Link, useLocation } from "wouter";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getTotals } = useCart();
  const { subtotal } = getTotals();
  const [, setLocation] = useLocation();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-card border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h2 className="font-display font-bold text-xl">Váš košík</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/5 text-foreground/70 hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-foreground/50 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingCartIcon />
              </div>
              <p>Váš košík je zatím prázdný</p>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setLocation('/shop');
                }}
                className="text-primary hover:underline mt-2 font-medium"
              >
                Začít nakupovat
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 group">
                <div className="w-24 h-24 rounded-xl bg-background border border-white/5 flex items-center justify-center p-2 shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder pro produkt - v reálu by tu byl img */}
                    <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-medium text-sm leading-tight line-clamp-2">{item.product.name}</h3>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-foreground/40 hover:text-destructive transition-colors shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-background border border-white/10 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded text-foreground/70"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded text-foreground/70"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-mono font-bold text-primary">
                      {(item.product.price * item.quantity).toLocaleString('cs-CZ')} Kč
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-background/50 border-t border-white/5 backdrop-blur-md">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-foreground/70 text-sm">
                <span>Mezisoučet</span>
                <span>{subtotal.toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between text-foreground/70 text-sm">
                <span>Doprava</span>
                <span>ZDARMA</span>
              </div>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex justify-between font-display font-bold text-lg">
                <span>Celkem</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {subtotal.toLocaleString('cs-CZ')} Kč
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="w-full py-3 rounded-xl bg-[#000] border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 384 156" className="h-4 fill-white"><path d="M153.21 113.1c0 19.34-15.65 35-34.99 35-19.33 0-35-15.66-35-35s15.67-34.99 35-34.99c19.34 0 34.99 15.65 34.99 34.99zM238.16 35.1c0 19.34-15.65 35-34.99 35-19.33 0-35-15.66-35-35S183.83.11 203.17.11c19.34 0 34.99 15.65 34.99 34.99zm-49.88 43H218.1V145.4h-29.82V78.1zM292.05.1v145.3H262.1V.1h29.95zm62.13 78H384V145.4h-29.82zm0-43H384V64.9h-29.82zM48.83 50.14h30V145.4h-30zm0-49.9h30V30.1h-30z"/></svg>
              </button>
              <button className="w-full py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-medium">
                <CreditCard size={18} />
                Karta
              </button>
            </div>

            <button 
              onClick={() => {
                setIsOpen(false);
                // Here we would navigate to checkout flow
              }}
              className="w-full py-4 rounded-xl bg-primary text-background font-bold flex items-center justify-center gap-2 btn-hover"
            >
              Pokračovat do pokladny
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function ShoppingCartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );
}