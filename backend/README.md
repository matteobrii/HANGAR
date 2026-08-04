# HANGAR Backend

Prima milestone del backend REST per HANGAR.

## Avvio locale

```bash
cd backend
cp .env.example .env
npm install
npm start
```

Verifica:

```text
http://localhost:4000/api/health
```

La risposta attesa contiene `ok: true`.

## Sviluppo

Con Node.js 18+ è possibile usare:

```bash
npm run dev
```

Il frontend GitHub Pages sarà configurato in una milestone separata. Il backend non viene eseguito da GitHub Pages: dovrà essere pubblicato su un servizio compatibile con Node.js.
