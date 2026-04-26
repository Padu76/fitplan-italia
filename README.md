# FitPlan Italia

Un SaaS completo per personal trainer e centri fitness italiani che genera piani di allenamento e nutrizione personalizzati utilizzando l'intelligenza artificiale.

## Funzionalità Implementate

### 🏠 Landing Page
- Hero section con CTA prominente
- Sezione funzionalità con cards interattive
- Piani di prezzo chiari e trasparenti
- FAQ per rispondere alle domande comuni
- Design responsive con tema scuro

### 🔐 Autenticazione
- **Login**: Form di accesso con mock authentication
- **Signup**: Registrazione con selezione tipo account
- Session management tramite localStorage

### 📊 Dashboard Completa
- **Overview**: Statistiche generali e azioni rapide
- **Piani Workout**: Generatore AI per piani di allenamento personalizzati
- **Database Alimenti**: Oltre 5000 alimenti italiani con valori nutrizionali
- **Tracking Progressi**: Monitoraggio dettagliato clienti con grafici
- **Impostazioni**: Gestione profilo e preferenze

### 🎨 Design System
- Tema scuro moderno (bg-gray-950/900)
- Palette blu/viola per accenti
- Componenti riutilizzabili
- Layout responsive mobile-first
- Sidebar navigation per dashboard

## Come Avviare il Progetto

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000
```

## Struttura del Progetto

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Stili globali
│   ├── login/page.tsx             # Pagina login
│   ├── signup/page.tsx            # Pagina registrazione
│   └── dashboard/
│       ├── layout.tsx             # Layout dashboard
│       ├── page.tsx               # Dashboard home
│       ├── piani-workout/page.tsx # Generatore piani
│       ├── database-alimenti/page.tsx # Database nutrizionale
│       ├── tracking-progressi/page.tsx # Progress tracking
│       └── impostazioni/page.tsx   # Impostazioni utente
└── components/
    ├── Header.tsx                  # Header landing
    ├── Footer.tsx                  # Footer
    ├── Sidebar.tsx                 # Sidebar dashboard
    └── StatCard.tsx               # Card statistiche
```

## Tecnologie Utilizzate

- **Next.js 14** con App Router
- **TypeScript** per type safety
- **Tailwind CSS** per styling
- **Mock Data** per simulare backend
- **LocalStorage** per session management

## Note Tecniche

- Tutte le route sono navigabili senza 404
- Mock authentication funzionante
- Design completamente responsivo
- Dati di esempio realistici per tutte le funzionalità
- Nessuna dipendenza esterna oltre quelle base

## Prossimi Sviluppi

- Integrazione Supabase per database reale
- Implementazione OpenAI API per generazione piani
- Sistema di pagamenti Stripe
- App mobile React Native
- Analytics avanzati e reporting