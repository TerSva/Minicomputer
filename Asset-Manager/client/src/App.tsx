import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { CartModal } from "./components/CartModal";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-[#0A0A0F] text-white selection:bg-[#00E5FF] selection:text-black font-sans relative overflow-x-hidden">
            <Navbar />
            <main className="flex-1 relative z-10">
              <Router />
            </main>
            <CartModal />
            
            {/* Ambient Background glow elements */}
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#7C4DFF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00E5FF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
          </div>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
