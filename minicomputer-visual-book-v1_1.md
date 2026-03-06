# Minicomputer.cz — Visual Design Book v1.1

> Visual Design System — v1.1 (WCAG + CRO)  
> Kompletní designový systém pro moderní e-shop s mini počítači. Zaměřeno na konverze, přehlednost a technologický feel.

| Typ projektu | Segment | Trh | Redesign |
|---|---|---|---|
| E-shop | Mini PC | CZ | 2025 |

---

## Obsah

1. [Strategie & Cílová skupina](#01--strategie--cílová-skupina)
2. [Barevný systém](#02--barevný-systém)
3. [Typografie](#03--typografie)
4. [Spacing & Border Radius](#04--spacing--border-radius)
5. [Komponenty](#05--komponenty)
6. [Produktové karty](#06--produktové-karty)
7. [Wireframe & Layout](#07--wireframe--layout)
8. [Mapa stránek](#08--mapa-stránek)
9. [Motion & Interakce](#09--motion--interakce)
10. [Implementace](#10--implementace)

---

## 01 — Strategie & Cílová skupina

### Pro koho a proč designujeme

Minicomputer.cz prodává kompaktní mini PC (GESEURO a další), herní konzole a příslušenství. Cílíme na tech-savvy zákazníky v Česku, kteří hledají výkonná a kompaktní řešení za rozumnou cenu.

> **📊 Analýza současného stavu — Co je potřeba změnit**
>
> Aktuální web používá generickou WooCommerce gaming šablonu s Lorem Ipsum texty, nekonsistentní navigací (mix CZ/EN), chybějícími produktovými fotkami a nulovou brand identity. Redesign musí přinést profesionalitu, důvěru a konverzní optimalizaci — protože u e-shopu rozhodují mikrosekundy.

### Cílové persony

#### 🧑‍💻 Tech Enthusiast
**25–40 let • IT / Developer**

Hledá kompaktní pracovní stanici nebo HTPC. Rozumí specifikacím, chce detail. Porovnává na Heurece, Alze.

Potřeby: `Detailní specifikace` `Porovnání modelů` `Recenze`

#### 🎮 Casual Gamer
**18–35 let • Student / Zaměstnanec**

Chce levnější alternativu ke klasickému PC na hraní. Zajímá ho poměr cena/výkon a co rozběhne.

Potřeby: `Herní výkon` `Cena/výkon` `Jednoduchost`

#### 🏢 Small Business
**30–55 let • Majitel / IT správce**

Potřebuje tiché, kompaktní PC do kanceláře nebo na display. Cení spolehlivost, záruku, fakturaci.

Potřeby: `Firemní fakturace` `Záruka` `Bulk objednávky`

### Designové principy

> **🎯 Čím se řídíme**

1. **Konverze nad vším** — Každý pixel vede k nákupu. CTA tlačítka, trust signály, jasná cesta.
2. **Tech-forward estetika** — Tmavý režim, ostré hrany, neonové akcenty. Produkty jsou tech, design to musí reflektovat.
3. **Transparentnost** — Jasné ceny, specifikace, dostupnost, doprava. Žádné překvapení.
4. **Mobilní priorita** — 70%+ traffic je z mobilu. Každý komponent musí fungovat touch-first.

---

## 02 — Barevný systém

### Barvy, které prodávají technologii

Tmavá paleta evokuje prémiový tech feel. Cyan accent vytváří energii a jasně odlišuje interaktivní elementy. Fialový sekundární akcent přidává hloubku a modernost.

### Základní pozadí

| Název | Hex |
|---|---|
| Primary BG | `#0A0A0F` |
| Secondary BG | `#111118` |
| Tertiary BG | `#18181F` |
| Card BG | `#1A1A24` |
| Elevated BG | `#202030` |

### Akcentní barvy

| Název | Hodnota |
|---|---|
| Electric Cyan | `#00E5FF` |
| Deep Purple | `#7C4DFF` |
| Gradient Accent | `#00E5FF → #7C4DFF` (135°) |
| Cyan Soft | `rgba(0,229,255, 0.12)` |

### Stavové barvy

| Název | Hex | Použití |
|---|---|---|
| Success | `#00E676` | Skladem, potvrzení |
| Warning | `#FFD600` | Upozornění, hot badge |
| Error / Sale | `#FF5252` | Chyba, sleva |
| Info | `#448AFF` | Informace |

### Text & Borders

| Název | Hodnota |
|---|---|
| Text Primary | `#F0F0F5` |
| Text Secondary | `#9494A8` |
| Text Tertiary | `#7A7A90` |
| Border Default | `rgba(255,255,255, 0.15)` |
| Border Accent | `rgba(0,229,255, 0.30)` |
| Border Subtle | `rgba(255,255,255, 0.08)` |

---

## 03 — Typografie

### Tři fonty, tři role

- **Space Grotesk** — nadpisy, geometrický, moderní, technický
- **DM Sans** — body text, čistý, čitelný, přátelský
- **JetBrains Mono** — technická data, specifikace, ceny, kódy

### Typografická škála

| Role | Font | Váha | Velikost | Tracking |
|---|---|---|---|---|
| Display / H1 | Space Grotesk | 700 | 48–72px | -0.03em |
| H2 — Section Title | Space Grotesk | 600 | 32px | -0.02em |
| H3 — Card Title | Space Grotesk | 600 | 18px | — |
| Body Text | DM Sans | 400 | 16px | — |
| Mono — Specs & Prices | JetBrains Mono | 500 | 14px | — |
| Small / Labels | JetBrains Mono | 500 | 11px | 0.15em uppercase |

### Příklady použití

```
Display:   Kompaktní výkon bez kompromisů
H2:        Nejprodávanější mini počítače
H3:        GESEURO WizBox G — AMD Ryzen 7 7735HS
Body:      Minicomputer.cz nabízí výběr kompaktních počítačů...
Mono:      AMD Ryzen 7 7735HS • 16GB DDR5 • 512GB NVMe • 2 900 Kč
Labels:    SKLADEM • DOPRAVA ZDARMA • ZÁRUKA 24 MĚSÍCŮ
```

---

## 04 — Spacing & Border Radius

### 8px grid systém

| Token | Hodnota |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |
| 4xl | 96px |

### Border Radius

| Token | Hodnota | Použití |
|---|---|---|
| sm | 6px | Malé prvky, tagy |
| md | 10px | Tlačítka, inputy |
| lg | 16px | Karty, panely |
| xl | 24px | Velké modaly, bannery |
| full | 9999px | Pill badges, avatary |

---

## 05 — Komponenty

### UI Kit — klíčové stavební bloky

Každý komponent je navržen pro maximální konverzi a přehlednost. Hover stavy, glow efekty a micro-interakce posilují prémiový tech pocit.

### Tlačítka

| Varianta | Styl | Použití |
|---|---|---|
| `btn-primary` | Cyan fill, glow shadow | Hlavní CTA — „Přidat do košíku" |
| `btn-gradient` | Cyan→Purple gradient | Sekce CTA — „Prozkoumat nabídku" |
| `btn-secondary` | Card BG, subtle border | Sekundární akce — „Porovnat" |
| `btn-ghost` | Transparent, cyan border | Terciální akce — „Více info" |

**Velikosti:** `btn-sm` (8/16px padding) · default (12/24px) · `btn-lg` (16/32px)

**Hover chování:** `translateY(-1px)` + zvýšený box-shadow glow

### Formulářové prvky

- **Input field:** Card BG, border `rgba(255,255,255,0.15)`, border-radius md
- **Focus stav:** Cyan border + `box-shadow: 0 0 0 3px rgba(0,229,255,0.12)`
- **Placeholder:** Text Tertiary `#7A7A90`
- **Min. touch target:** 44px (WCAG)

### Produktové badge

| Badge | Barva | Text |
|---|---|---|
| Novinka | `#00E5FF` (cyan) | NOVINKA |
| Sleva | `#FF5252` (error) | -30% |
| Bestseller | `#FFD600` (warning) | BESTSELLER |
| Skladem | `#00E676` (success) | SKLADEM |

### Trust signály

| Ikona | Nadpis | Popis |
|---|---|---|
| 🚚 | Doprava zdarma | Nad 3 999 Kč |
| ↩️ | 14 dní na vrácení | Bez udání důvodu |
| 🛡️ | Záruka 24 měsíců | Plná záruční podpora |
| 💳 | Bezpečná platba | Kartou, PayPal, převodem |

---

## 06 — Produktové karty

### Srdce e-shopu

Produktová karta musí okamžitě sdělit: co to je, kolik to stojí a jak to koupím. Hover efekt s glow zvyšuje interaktivitu. Spec labels v mono fontu pro technický detail.

### Anatomie produktové karty

```
┌─────────────────────────────────┐
│ [BADGE]                         │
│                                 │
│         [Obrázek produktu]      │
│         (220px výška)           │
│                                 │
├─────────────────────────────────┤
│ KATEGORIE          (mono, cyan) │
│ Název produktu      (Space Grotesk 600) │
│ AMD Ryzen 7 • 16GB • 512GB NVMe │
│                                 │
│ 2 900 Kč    [🛒 Do košíku]     │
└─────────────────────────────────┘
```

**Hover efekt:** `border-color: cyan` + `box-shadow glow` + `translateY(-4px)`  
**Přechod:** `0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Ukázkové produkty

#### 💻 GESEURO WizBox G — NOVINKA
- Kategorie: Mini PC
- Specs: AMD Ryzen 7 7735HS • 16GB DDR5 • 512GB NVMe
- Cena: **2 900 Kč**

#### 🖥️ GESEURO NonBox G — -30%
- Kategorie: Mini PC
- Specs: AMD Ryzen 5 8645HS • 8GB DDR5 • 256GB NVMe
- Cena: **2 030 Kč** ~~2 900 Kč~~

#### ⌨️ Wireless Combo Kit — BESTSELLER
- Kategorie: Příslušenství
- Specs: Klávesnice + myš • Bluetooth 5.0 • USB-C
- Cena: **890 Kč**

> **🔍 Konverzní detaily produktové karty — Proč takhle**
>
> **Hover glow** — cyan border glow navádí oko a vytváří pocit interaktivity.  
> **Mono font na specs** — technické údaje vypadají profesionálně a důvěryhodně.  
> **Plnohodnotné CTA „Do košíku"** — textové tlačítko s ikonkou košíku, min. 44px touch target (WCAG), solidní cyan pozadí = maximální viditelnost hlavní akce.  
> **Badge systém** — okamžitá segmentace: novinka, sleva, bestseller.  
> **Gradient overlay na obrázku** — plynulý přechod do card body, žádná tvrdá hrana.

---

## 07 — Wireframe & Layout

### Struktura stránek

Homepage wireframe ukazuje tok od hero banneru přes trust signály k produktové mřížce. Každá sekce má jasný účel v konverzním funnelu.

### Homepage wireframe (desktop)

```
┌─────────────────────────────────────────────┐
│ [LOGO]         [Nav links...]    [🔍] [👤]  │  ← Sticky header
├─────────────────────────────────────────────┤
│                                             │
│  [Heading text block]      [Product Hero]  │  ← Hero area
│  [Sub text]                                 │
│  [CTA Button] [Secondary btn]              │
│                                             │
├─────────────────────────────────────────────┤
│  [✓ Trust] [✓ Trust] [✓ Trust] [✓ Trust]  │  ← Trust bar (4 sloupce)
├─────────────────────────────────────────────┤
│  [Section label]                            │
│  [Section title]                            │
│                                             │
│  [Produkt] [Produkt] [Produkt] [Produkt]   │  ← Produktová mřížka (4 sloupce)
└─────────────────────────────────────────────┘
```

### Responzivní strategie

> **📱 Mobilní chování**

**Desktop** — 4-sloupcová produktová mřížka, sticky header s cart preview, sidebar filtry.  
**Tablet** — 2-sloupcová mřížka, filtry v bottom sheet, collapsible nav.  
**Mobile** — 1-sloupcová mřížka s horizontálním scrollem pro „doporučené", sticky bottom bar s košíkem, hamburger menu s full-screen overlay.

---

## 08 — Mapa stránek

### Struktura webu

Logická hierarchie stránek optimalizovaná pro UX i SEO.

### Hlavní navigace

| Stránka | Obsah |
|---|---|
| 🏠 Domů | Hero, trust, doporučené produkty, novinky |
| 🛒 Obchod | Kategorie: Mini PC, Konzole, Příslušenství + filtry |
| 📄 Produkt Detail | Galerie, specs tabulka, recenze, related products |
| 💳 Košík & Checkout | Shrnutí, doprava, platba — single-page flow |

### Sekundární stránky

| Stránka | Obsah |
|---|---|
| ℹ️ O nás | Příběh značky, hodnoty, proč minicomputer |
| 📞 Kontakt | Formulář, mapa, telefon, e-mail |
| ❓ FAQ | Accordion s nejčastějšími dotazy |
| 👤 Můj účet | Objednávky, adresy, sledování zásilky |

---

## 09 — Motion & Interakce

### Pohyb, který prodává

Animace nejsou dekorace — jsou nástroj UX. Každý pohyb má účel: navigovat, informovat, potěšit.

### Hover Glow
Produktové karty dostávají cyan border-glow při hoveru. Subtle `translateY(-4px)` pro pocit „zvednutí".

```css
transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Page Load
Staggered fade-up animace pro sekce při scrollu. Každá sekce se odkryje s 100ms zpožděním.

```css
/* IntersectionObserver + animation-delay */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Cart Feedback
Při přidání do košíku — icon bounce + count badge animace. Okamžitý feedback bez page reload.

```css
scale(1.2) → scale(1)  •  300ms ease
```

---

## 10 — Implementace

### Technické poznámky

Doporučení pro implementaci designového systému v praxi.

### 🔧 Tech Stack doporučení

- **Framework:** Next.js / Nuxt.js nebo headless WooCommerce
- **Styling:** Tailwind CSS s custom config na design tokeny
- **Animace:** Framer Motion / GSAP
- **Platforma:** Stávající WooCommerce lze přestylovat custom tématem

### ⚡ Performance cíle

| Metrika | Cíl |
|---|---|
| LCP | < 2.5s (optimalizované obrázky, lazy load) |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse | 90+ na mobilu |

### 🌐 SEO & Lokalizace

Plně v češtině. Strukturovaná data pro produkty (Schema.org Product). Open Graph pro sdílení. Kanonické URL, hreflang pokud přibude EN verze.

### ♿ Přístupnost

- WCAG 2.1 AA minimum
- Kontrastní poměr 4.5:1+ pro text
- Focus stavy na všech interaktivních prvcích
- Keyboard navigace v celém checkout flow

---

## CSS Design Tokeny (reference)

```css
:root {
  /* Pozadí */
  --bg-primary:    #0A0A0F;
  --bg-secondary:  #111118;
  --bg-tertiary:   #18181F;
  --bg-card:       #1A1A24;
  --bg-elevated:   #202030;

  /* Akcenty */
  --accent-primary:   #00E5FF;
  --accent-secondary: #7C4DFF;
  --accent-gradient:  linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);

  /* Status */
  --success: #00E676;
  --warning: #FFD600;
  --error:   #FF5252;
  --info:    #448AFF;

  /* Text */
  --text-primary:   #F0F0F5;
  --text-secondary: #9494A8;
  --text-tertiary:  #7A7A90;

  /* Fonty */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Spacing (8px grid) */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border Radius */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;
}
```

---

*Minicomputer.cz — Visual Design Book v1.1*  
*Vytvořeno jako základ pro redesign e-shopu • Únor 2025 • WCAG + CRO update*  
*Připraveno k implementaci — barvy, typo, komponenty a layout principy*
