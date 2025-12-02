# Wellness Retreat Kenya - Federica Milanta

Landing page per il Wellness Retreat in Kenya con Federica Milanta.

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+ installato
- npm o yarn

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura del Progetto

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Stili globali + Tailwind
│   │   ├── layout.tsx       # Layout principale
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── ui/              # Componenti UI riutilizzabili
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Section.tsx
│       │   ├── Badge.tsx
│       │   ├── Countdown.tsx
│       │   └── index.ts
│       ├── sections/        # Sezioni della landing page
│       │   ├── Hero.tsx
│       │   ├── Intro.tsx
│       │   ├── Target.tsx
│       │   ├── Features.tsx
│       │   ├── Program.tsx
│       │   ├── Gallery.tsx
│       │   ├── About.tsx
│       │   ├── Testimonials.tsx
│       │   ├── Info.tsx
│       │   ├── FAQ.tsx
│       │   ├── Urgency.tsx
│       │   ├── ContactForm.tsx
│       │   ├── Footer.tsx
│       │   └── index.ts
│       └── Navigation.tsx   # Navigazione sticky
├── tailwind.config.ts       # Configurazione Tailwind
├── next.config.js           # Configurazione Next.js
└── package.json
```

## 🎨 Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animazioni**: Framer Motion 11
- **Icone**: Heroicons
- **TypeScript**: Per type safety
- **Fonts**: Montserrat + Inter (Google Fonts)

## 🎯 Sezioni della Landing Page

1. **Hero** - Above the fold con headline e CTA
2. **Intro** - Proposta di valore
3. **Target** - A chi è rivolto
4. **Features** - Cosa include
5. **Program** - Programma giorno per giorno
6. **Gallery** - Galleria immagini
7. **About** - Chi è Federica
8. **Testimonials** - Recensioni clienti
9. **Info** - Dettagli pratici e prezzi
10. **FAQ** - Domande frequenti
11. **Urgency** - Countdown e scarcity
12. **Contact Form** - Form di contatto
13. **Footer** - Contatti e link

## 🎨 Personalizzazione

### Colori
I colori sono definiti in `tailwind.config.ts`:
- **Sunset** (Primary): `#FF6B35` - Arancio tramonto
- **Ocean** (Secondary): `#06D6A0` - Turchese oceano
- **Nature** (Accent): `#118AB2` - Verde natura
- **Sand** (Neutral): `#F7F7F2` - Beige sabbia
- **Dark**: `#2C3E50` - Grigio scuro

### Immagini
Le immagini sono caricate da Unsplash. Per sostituirle con immagini proprie:
1. Aggiungi le immagini nella cartella `public/images/`
2. Aggiorna i path nei componenti

### Form di Contatto
Il form attualmente simula l'invio. Per collegarlo a un backend:
1. Modifica `src/components/sections/ContactForm.tsx`
2. Implementa la logica di invio API nel `handleSubmit`

## 📱 Responsive Design

La landing page è completamente responsive:
- **Mobile**: Layout verticale, menu hamburger
- **Tablet**: Layout a 2 colonne dove appropriato
- **Desktop**: Layout completo con hover effects

## ♿ Accessibilità

- Skip link per navigazione da tastiera
- ARIA labels su elementi interattivi
- Contrasto colori adeguato
- Focus states visibili
- Alt text su immagini

## 🚀 Deploy

### Vercel (Consigliato)
```bash
npm install -g vercel
vercel
```

### Build Statico
```bash
npm run build
npm run start
```

## 📝 Note

- Le date del retreat sono: 25 Febbraio - 7 Marzo 2025
- Il countdown punta al 15 Gennaio 2025 (deadline prenotazioni)
- Prezzo: 1.599€ a persona
- Max partecipanti: 12

---

Made with ❤️ per Federica Milanta


