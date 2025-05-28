# 📅 PCR Booking Calendar Proxy

Un semplice server Node.js che funge da **proxy per calendari iCal** (Booking.com) e aggiunge un’etichetta personalizzata a ogni evento, per distinguerli facilmente quando vengono visualizzati su Google Calendar o altre app.

## 🔧 Funzionalità

- Proxy di cinque calendari Booking.com in formato `.ics`.
- Aggiunta automatica di una **label personalizzata** ai titoli degli eventi (`SUMMARY`).
- Compatibile con Google Calendar: puoi aggiungere i link generati come "URL di calendario da internet".
- Hosting compatibile con [Render](https://render.com), [Replit](https://replit.com), e simili.

## 🚀 Esempio di utilizzo

| Etichetta                      | Route                         | URL originale Booking.com                                 |
|-------------------------------|-------------------------------|------------------------------------------------------------|
| `[PCR-Camera 1 Booking]`       | `/bookingcamera1.ics`         | `https://ical.booking.com/v1/export?t=8277ef77-...`        |
| `[PCR-Camera 2 Booking]`       | `/bookingcamera2.ics`         | `https://ical.booking.com/v1/export?t=3f1be19f-...`        |
| `[PCR-Camera 3 Booking]`       | `/bookingcamera3.ics`         | `https://ical.booking.com/v1/export?t=670d63a4-...`        |
| `[PCR-Camera 4 Booking]`       | `/bookingcamera4.ics`         | `https://ical.booking.com/v1/export?t=851de9b5-...`        |
| `[PCR-Camera 5 Booking]`       | `/bookingcamera5.ics`         | `https://ical.booking.com/v1/export?t=a986491d-...`        |

Puoi copiare e incollare l’URL completo del tuo server con la route desiderata (es. `https://tuo-server.onrender.com/bookingcamera1.ics`) direttamente in Google Calendar sotto “Aggiungi calendario > Da URL”.

---

## 📂 Struttura del progetto

📁 root
├── index.js # Codice principale del server Express
├── package.json # Configurazione progetto e dipendenze
└── README.md # Questo file

---

## ⚙️ Come installare ed eseguire in locale

```bash
git clone https://github.com/tuo-username/calendar-proxy.git
cd calendar-proxy
npm install
npm start
