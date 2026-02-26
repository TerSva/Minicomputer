import { motion } from "framer-motion";
import { 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Monitor, 
  Wifi, 
  Bluetooth, 
  Thermometer, 
  Usb,
  Power
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroPc from "@/assets/images/hero-pc.png";
import portsPc from "@/assets/images/ports-pc.png";
import lifestylePc from "@/assets/images/lifestyle-pc.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight text-gray-900">
            GESEURO
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#overview" className="hover:text-black transition-colors">Přehled</a>
            <a href="#features" className="hover:text-black transition-colors">Funkce</a>
            <a href="#specs" className="hover:text-black transition-colors">Specifikace</a>
          </nav>
          <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all" data-testid="button-buy-header">
            Koupit nyní
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section id="overview" className="relative overflow-hidden pt-12 lg:pt-20 pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-3xl z-10 relative"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider mb-6">
                  NOVINKA V NABÍDCE
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-gray-900 leading-tight">
                  PicoBox Home. <br/>
                  <span className="text-gradient-blue">Malý tělem, velký výkonem.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
                  Výkonný, tichý a energeticky úsporný minipočítač pro domácí i kancelářské použití. Vybaven procesorem Intel N200 a integrovaným LCD displejem.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-gray-900 text-white hover:bg-gray-800 shadow-xl shadow-gray-900/10" data-testid="button-buy-hero">
                    Předobjednat
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-gray-200" data-testid="button-specs-hero">
                    Zobrazit specifikace
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-5xl mt-16 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 bottom-0 h-32 mt-auto"></div>
                <img 
                  src={heroPc} 
                  alt="GESEURO PicoBox Home" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Specs Bento Grid */}
        <section className="py-20 bg-gray-50" id="features">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vše, co potřebujete. V krabičce do dlaně.</h2>
              <p className="text-gray-500">Ideální pro studenty, kancelářskou práci a domácí multimediální centrum. Neuvěřitelný výkon zabalený v pouzdře o rozměrech 124 x 128 x 41mm s hmotností jen 380g.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* CPU Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 col-span-1 md:col-span-2 lg:col-span-2 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Intel Alder Lake N200</h3>
                <p className="text-gray-500 mb-6">4 jádra, 4 vlákna, frekvence až 3.70 GHz. Rychlý a spolehlivý chod pro všechny vaše denní úkoly bez zadrhávání.</p>
                <div className="bg-gray-50 rounded-2xl p-4 inline-flex items-center gap-3">
                  <div className="text-sm font-semibold">TDP: Pouhých 6W</div>
                </div>
              </div>

              {/* Memory Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <MemoryStick size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">16GB RAM</h3>
                <p className="text-gray-500">Rychlá SO-DIMM DDR4 paměť pro bezproblémový multitasking.</p>
              </div>

              {/* Storage Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <HardDrive size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">1TB SSD</h3>
                <p className="text-gray-500">Dual Channel M.2 SATA + NVMe pro bleskové načítání Windows 11 Pro a aplikací.</p>
              </div>

              {/* Connectivity Card */}
              <div className="bg-white p-0 rounded-3xl shadow-sm border border-gray-100 col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <Monitor size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Duální 4K displeje</h3>
                  <p className="text-gray-500 mb-6">Dva HDMI výstupy pro přímé připojení dvou monitorů ve vysokém rozlišení 4K. Připojte dotykový monitor a ovládejte počítač rovnou z obrazovky.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium"><Wifi size={16} className="text-gray-400"/> WiFi 6.0</div>
                    <div className="flex items-center gap-2 text-sm font-medium"><Bluetooth size={16} className="text-gray-400"/> BT 5.2</div>
                  </div>
                </div>
                <div className="md:w-2/5 h-64 md:h-auto bg-gray-100">
                  <img src={portsPc} alt="Konektivita" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Feature - LCD */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-6">
                  <Thermometer size={16} /> Personalizovaný displej
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Mějte vše pod kontrolou. <br/>Přehledně a ihned.</h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  GESEURO PicoBox Home má vestavěný personalizovaný LCD displej. Zobrazuje klíčové informace v reálném čase.
                </p>
                <ul className="space-y-4">
                  {[
                    "Provozní stav a výkon",
                    "Aktuální datum a čas",
                    "Teplota komponent",
                    "Spotřeba energie",
                    "Náhledy fotografií a obrázků"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-[3rem] transform rotate-3 opacity-10"></div>
                <img src={lifestylePc} alt="Lifestyle ukázka" className="relative rounded-[2.5rem] shadow-2xl z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Full Specifications */}
        <section id="specs" className="py-24 bg-gray-900 text-white rounded-[3rem] mx-4 lg:mx-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 blur-[120px] rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technické specifikace</h2>
              <p className="text-gray-400">Detailní pohled na hardware PicoBox Home.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Procesor</div>
                <div className="text-xl font-medium">Intel Alder Lake N200 (4 jádra, 4 vlákna, 3.70GHz)</div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Operační paměť</div>
                <div className="text-xl font-medium">16G RAM (SO-DIMM DDR4)</div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Úložiště</div>
                <div className="text-xl font-medium">1TB SSD (Dual Channel M.2 SATA + NVMe)</div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Operační systém</div>
                <div className="text-xl font-medium">Windows 11 Pro</div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Rozměry a hmotnost</div>
                <div className="text-xl font-medium">124 x 128 x 41mm • 380g</div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="text-gray-400 text-sm mb-1">Napájení</div>
                <div className="text-xl font-medium">Adaptér 230VAC / 12V 4A</div>
              </div>
            </div>

            <div className="mt-16 bg-gray-800/50 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Usb className="text-blue-400"/> Porty a rozhraní</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">2x USB 3.0</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">2x USB 2.0</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">2x HDMI (4K)</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">2x LAN RJ45</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">1x Audio 3.5mm Jack</span>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-400"><strong>Obsah balení:</strong> 1 x Mini PC Intel N200, 1x HDMI kabel, 1 x síťový adaptér</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Připraveni zrychlit vaši práci?</h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              GESEURO PicoBox Home je ideální volbou pro kanceláře, školy, úřady i domácnosti.
            </p>
            <Button size="lg" className="rounded-full px-12 text-lg h-16 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20" data-testid="button-buy-footer">
              Objednat nyní pro váš domov
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display font-bold text-xl text-gray-400">GESEURO</div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GESEURO, s.r.o. Karafiátová 23, 32600 Plzeň, Czech Republic. Všechna práva vyhrazena.
          </div>
          <div className="text-gray-400 text-sm">
            info@minicomputer.cz
          </div>
        </div>
      </footer>
    </div>
  );
}
