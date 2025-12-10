# Acoperiș la Gata - Acoperișuri Timișoara

Website profesional pentru servicii de montaj și reparații acoperișuri în Timișoara și împrejurimi.

## 🚀 Tehnologii

- **Next.js 16** - Framework React pentru producție
- **React 19** - Biblioteca UI
- **TypeScript** - Tipuri statice pentru JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componente UI accesibile
- **Vercel Analytics** - Analiză performanță

## 📋 Cerințe

- Node.js 18+ 
- npm, yarn sau pnpm

## 🛠️ Instalare

1. Clonează repository-ul:
```bash
git clone <repository-url>
cd untitled-chat
```

2. Instalează dependențele:
```bash
npm install
```

3. Rulează serverul de dezvoltare:
```bash
npm run dev
```

4. Deschide [http://localhost:3000](http://localhost:3000) în browser.

## 📜 Scripturi Disponibile

- `npm run dev` - Pornește serverul de dezvoltare
- `npm run build` - Construiește aplicația pentru producție
- `npm run start` - Pornește serverul de producție
- `npm run lint` - Rulează ESLint pentru verificare cod

## 📦 Gestionare Pachete

Proiectul suportă npm, yarn sau pnpm. Dacă folosești un alt package manager decât npm, șterge lockfile-ul pentru npm și folosește-l pe cel corespunzător.

## 🔄 GitHub Setup

### Inițializare Repository

1. Inițializează Git (dacă nu este deja inițializat):
```bash
git init
```

2. Adaugă toate fișierele:
```bash
git add .
```

3. Creează primul commit:
```bash
git commit -m "Initial commit"
```

4. Creează un repository nou pe GitHub și conectează-l:
```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

### GitHub Actions

Proiectul include un workflow CI/CD (`.github/workflows/ci.yml`) care rulează automat:
- Linting la fiecare push
- Build verificare la fiecare pull request

## 🚢 Deployment pe Vercel

Proiectul este configurat pentru deployment automat pe Vercel:

### Metoda 1: Conectare GitHub (Recomandat)

1. Conectează repository-ul GitHub cu Vercel:
   - Mergi la [Vercel Dashboard](https://vercel.com/dashboard)
   - Click pe "Add New Project"
   - Selectează repository-ul GitHub
   - Vercel va detecta automat configurația Next.js

2. Deployment-ul se va face automat la fiecare push pe branch-ul principal

### Metoda 2: Vercel CLI

1. Instalează Vercel CLI:
```bash
npm install -g vercel
```

2. Login și deploy:
```bash
vercel login
vercel
```

3. Pentru production:
```bash
vercel --prod
```

### Configurație Vercel

- **Framework**: Next.js (detectat automat)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (implicit)
- **Install Command**: `npm install`
- **Node Version**: 20.x (recomandat)

## 📁 Structura Proiectului

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Pagina principală
│   └── [routes]/          # Rutele aplicației
├── components/            # Componente React
│   ├── home/             # Componente pentru homepage
│   ├── layout/           # Componente layout (Header, Footer)
│   ├── services/         # Componente pentru servicii
│   └── ui/               # Componente UI reutilizabile
├── lib/                  # Utilitare și funcții helper
├── public/               # Fișiere statice
└── styles/               # Stiluri globale
```

## 🔧 Configurare

### Variabile de Mediu

Creează un fișier `.env.local` pentru variabile de mediu locale:

```env
# Adaugă variabile de mediu aici dacă sunt necesare
```

## 📝 Licență

Proiect privat - Acoperiș la Gata

## 👥 Contact

- **Telefon**: +40759614930
- **Email**: 231321@gmail.com
- **Website**: https://acoperislagata.ro

