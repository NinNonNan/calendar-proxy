const express = require("express");
const fetch = require("node-fetch");
const app = express();

const calendars = [
  {
    label: "[PCR-Camera 1 Booking]",
    url: "https://ical.booking.com/v1/export?t=8277ef77-b1bf-4efe-bdca-52f45d11b058",
    route: "/bookingcamera1.ics"
  },
  {
    label: "[PCR-Camera 2 Booking]",
    url: "https://ical.booking.com/v1/export?t=3f1be19f-564c-4a2f-9762-b40889274eef",
    route: "/bookingcamera2.ics"
  },
  {
    label: "[PCR-Camera 3 Booking]",
    url: "https://ical.booking.com/v1/export?t=670d63a4-ab87-4ed5-9522-d1ffd074cc68",
    route: "/bookingcamera3.ics"
  },
  {
    label: "[PCR-Camera 4 Booking]",
    url: "https://ical.booking.com/v1/export?t=851de9b5-ebd5-4386-b993-396c84b1e278",
    route: "/bookingcamera4.ics"
  },
  {
    label: "[PCR-Camera 5 Booking]",
    url: "https://ical.booking.com/v1/export?t=a986491d-4522-47a6-bd2d-b0612103795e",
    route: "/bookingcamera5.ics"
  }
];

// Funzione che aggiunge un'etichetta ai titoli degli eventi
function tagCalendar(icalText, label) {
  return icalText.replace(/SUMMARY:(.*)/g, (_, match) => `SUMMARY:${label} ${match}`);
}

// Crea le route per ogni calendario
calendars.forEach(cal => {
  app.get(cal.route, async (req, res) => {
    try {
      const response = await fetch(cal.url);
      const text = await response.text();
      const tagged = tagCalendar(text, cal.label);
      res.set("Content-Type", "text/calendar");
      res.send(tagged);
    } catch (err) {
      res.status(500).send("Errore nel recupero del calendario");
    }
  });
});

app.get("/", (req, res) => {
  res.send("Calendari iCal personalizzati attivi.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server avviato su porta", port);
});
