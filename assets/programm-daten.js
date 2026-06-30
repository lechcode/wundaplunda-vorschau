/* ============================================================================
   WUNDAPLUNDA · PROGRAMMHEFT — EINE QUELLE FÜR ALLES
   ----------------------------------------------------------------------------
   Das ist die EINZIGE Datei, die du pflegst. Aus ihr entstehen automatisch:
     · der digitale Tagesplaner (Web)
     · der Pro-Tag-Ausdruck für die Infowand (jetzt MIT Leitung!)
     · die Info-Seiten (Geländeplan, Essen & Trinken, gut zu wissen)
   Ändern, speichern, fertig — Web UND Ausdruck sind sofort synchron.

   EIN PROGRAMMPUNKT — Felder (alles außer tag/zeit/titel/wen ist optional):
     tag        "mo" "di" "mi" "do" "fr" "sa"
     zeit       "14:00 – 15:00"  oder  "ab 20:30"
     titel      Was passiert
     wer        Leitung / Wer        ← war im alten PDF NICHT zu sehen
     wo         Ort  (Wetter-Alternative mit " / " trennen: "Feuerstelle / Plundazelt")
     wen        ["erwachsene"] ["kinder_0_4"] ["kinder_ab_5"] ["alle"]  (mehrere erlaubt)
     anmeldung  "offen"  (ohne Anmeldung)  |  "begrenzt"  (Plätze begrenzt)
     optional   true   → wird als "Optional" markiert
     hinweis    kurzer Zusatz (Alter, Bändchen …)
     info       längerer Text / Beschreibung — erscheint, wenn man tippt
     status     "geaendert"  oder  "entfaellt"   ← für Wetter/Ausfall, in Sekunden

   ÄNDERUNG IN SEKUNDEN (Beispiel Wetter/Ausfall):
     · Etwas fällt aus?  →  status: "entfaellt"  ergänzen.
     · Neue Zeit/Ort?    →  zeit/wo ändern  +  status: "geaendert".
     Danach Tag neu ausdrucken — der Stempel ist schon drin.
   ========================================================================== */

const WUNDA = {
  festival: {
    name: "Wundaplunda", jahr: 2025,
    untertitel: "Familien-Sommercamp im Ökodorf Sulzbrunn",
    ort: "Gemeinschaft Sulzbrunn · Allgäu",
    adresse: "Sulzbrunn 1–8, 87477 Sulzberg",
    hinweis_jahr: "Demo mit den echten Daten von 2025 — Vorlage für 2026",
    tage: [
      { key:"mo", wochentag:"Montag", datum:"04.08." },
      { key:"di", wochentag:"Dienstag", datum:"05.08." },
      { key:"mi", wochentag:"Mittwoch", datum:"06.08." },
      { key:"do", wochentag:"Donnerstag", datum:"07.08." },
      { key:"fr", wochentag:"Freitag", datum:"08.08." },
      { key:"sa", wochentag:"Samstag", datum:"09.08." },
    ]
  },

  zielgruppen: [
    { key:"erwachsene", label:"Erwachsene", icon:"feder" },
    { key:"kinder_0_4", label:"Kinder 0–4 J.", icon:"kaefer" },
    { key:"kinder_ab_5", label:"Kinder ab 5 J.", icon:"falter" },
    { key:"alle", label:"Alle", icon:"gruppe" },
  ],

  // --- ALLE PROGRAMMPUNKTE (eine Zeile = ein Punkt) ---
  programm: [
    // Montag
    { tag:"mo", zeit:"11:00 – 14:00", titel:"Ankommen", wer:"", wo:"", wen:["alle"] },
    { tag:"mo", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"14:00 – 15:00", titel:"Eröffnung", wer:"Wundaplunda Team", wo:"Senke Feuerstelle / Turnhalle", wen:["alle"], info:"Am Anreisetag starten wir gemeinsam – mit offenen Herzen und einem Lächeln. Hier erfährst du auch, was es mit der Clanzeit auf sich hat." },
    { tag:"mo", zeit:"14:00 – 16:30", titel:"Waffeln & Kaffee", wer:"Sulzbrunn Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mo", zeit:"15:00 – 16:30", titel:"Geländeführung", wer:"Beate & Gudrun", wo:"Treff Zirkuszelt", wen:["alle"], info:"Rundgang über das rund 15 Hektar große Gelände der Gemeinschaft Sulzbrunn – Geschichte, Orte und Orientierung für die ganze Woche." },
    { tag:"mo", zeit:"16:30 – 17:00", titel:"Kasperletheater", wer:"Amelie Zech, Akademie Rückenwind", wo:"Zirkuszelt", wen:["kinder_0_4"] },
    { tag:"mo", zeit:"16:30 – 18:00", titel:"Austausch in Gemeinschaft leben", wer:"Matthias Scharpenberg", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"mo", zeit:"17:00 – 17:45", titel:"Kinderkreis", wer:"Wundaplunda Team & Amelie Zech", wo:"Zirkuszelt", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"mo", zeit:"18:00 – 19:30", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"19:30 – 20:00", titel:"Klangmeditation", wer:"Anna Elisabeth", wo:"Pavillon", wen:["kinder_ab_5", "erwachsene"] },
    { tag:"mo", zeit:"ab 20:30", titel:"Musik am Lagerfeuer", wer:"Amelie Zech", wo:"Feuerstelle / Plundazelt", wen:["alle"], info:"Gemeinsames Singen und Geschichten am Feuer – der gemütliche Ausklang des ersten Abends." },
    // Dienstag
    { tag:"di", zeit:"07:30 – 08:15", titel:"Yoga", wer:"Amelie Zech, Akademie Rückenwind", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"di", zeit:"08:00 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur mit rotem Bändchen" },
    { tag:"di", zeit:"09:15 – 09:45", titel:"Gemeinsamer Morgenkreis", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"], info:"Täglicher gemeinsamer Start in den Tag: Musik, Programmänderungen, Austausch. Verbindet, inspiriert, informiert." },
    { tag:"di", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"Alle", wo:"Treff: Zirkuszelt", wen:["alle"], info:"Jeden zweiten Tag treffen wir uns in unseren Clans, um in Verbindung zu kommen, Spaß zu haben und uns auf die Clan Open Stage vorzubereiten – mit Überraschungsthema!" },
    { tag:"di", zeit:"10:30 – 12:00", titel:"Steine bemalen, Naturmobiles basteln", wer:"Barbara Burstall", wo:"Jurte", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"di", zeit:"10:30 – 12:00", titel:"Brot backen mit Sauerteig", wer:"Margaretha Zach", wo:"Wundazelt", wen:["alle"], optional:true },
    { tag:"di", zeit:"10:30 – 12:00", titel:"Austausch Kooperation statt Rebellion Bindungsspiele und ihre Bedeutung", wer:"Caro Fest, Kinderglück Allgäu", wo:"Pavillon", wen:["erwachsene"], optional:true },
    { tag:"di", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"14:00 – 15:30", titel:"Frauenkreis", wer:"Fabienne Mäutner", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"di", zeit:"14:30 – 15:30", titel:"Seifenblasen", wer:"Patrick Grotz", wo:"Treff Plundazelt", wen:["kinder_0_4"] },
    { tag:"di", zeit:"15:30 – 16:30", titel:"Slackline", wer:"Thomas Jung", wo:"Treff Plundazelt", wen:["kinder_ab_5"] },
    { tag:"di", zeit:"15:30 – 16:30", titel:"Kopfstand Handstand Workshop", wer:"Susanne Reinhard, Artistik Calimbaro", wo:"Turnhalle", wen:["kinder_ab_5"], optional:true },
    { tag:"di", zeit:"17:00 – 17:30", titel:"Jonglier & Akrobatikshow", wer:"Artistik Calimbaro & Duo Fiducia", wo:"Vor Seminarhaus / Turnhalle", wen:["kinder_ab_5"] },
    { tag:"di", zeit:"17:30 – 18:00", titel:"Klangmeditation", wer:"Anna Elisabeth Mayr", wo:"Pavillon", wen:["kinder_ab_5", "erwachsene"] },
    { tag:"di", zeit:"18:00 – 19:30", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"19:00 – 20:30", titel:"Männerkreis", wer:"Oliver Weickert", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"di", zeit:"19:30 – 20:00", titel:"Betthupferl Geschichte", wer:"Lisa Suitner", wo:"Zirkuszelt", wen:["kinder_0_4"] },
    { tag:"di", zeit:"ab 20:30", titel:"Rumbakana", wer:"", wo:"Zirkuszelt / Turnhalle", wen:["alle"] },
    // Mittwoch
    { tag:"mi", zeit:"07:30 – 08:15", titel:"Fit in den Tag / Achtsames Atmen", wer:"Matze Zech, Howtoathletic / Laurenz Verweyen", wo:"Treff Wundazelt / Pavillon", wen:["erwachsene"] },
    { tag:"mi", zeit:"08:00 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur mit rotem Bändchen" },
    { tag:"mi", zeit:"09:15 – 09:45", titel:"Gemeinsamer Morgenkreis", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"], info:"Täglicher gemeinsamer Start in den Tag: Musik, Programmänderungen, Austausch. Verbindet, inspiriert, informiert." },
    { tag:"mi", zeit:"10:00 – 11:00", titel:"Singen für Gross und Klein", wer:"Karin Jana Beck und Matthias Gerber", wo:"Plundazelt", wen:["alle"] },
    { tag:"mi", zeit:"10:00 – 12:00", titel:"Zwergengärtchen gestalten", wer:"Josephine Winestock", wo:"Jurte", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"mi", zeit:"10:00 – 12:00", titel:"Glutbrennen", wer:"Laurenz Verweyen", wo:"Pappelkinderplatz", wen:["alle"], info:"Mit Glut und Geduld Holz gestalten – ein achtsames Naturhandwerk für Groß und Klein an der Feuerstelle." },
    { tag:"mi", zeit:"11:00 – 12:30", titel:"Worldcafé Familienkultur", wer:"Rebecca Kirch", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"mi", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"14:00 – 15:00", titel:"Singen für Gross und Klein", wer:"Karin Jana Beck und Matthias Gerber", wo:"Plundazelt", wen:["erwachsene"] },
    { tag:"mi", zeit:"15:00 – 18:00", titel:"Naturtheater & Naturbasteln", wer:"Sandra Lienhard", wo:"Treff Wundazelt", wen:["kinder_ab_5"] },
    { tag:"mi", zeit:"15:00 – 18:00", titel:"Weidenflechten", wer:"Tina Thierfelder", wo:"Plundazelt", wen:["alle"] },
    { tag:"mi", zeit:"17:00 – 17:30", titel:"Wildkräuter sammeln & Stockbrot", wer:"Cäcilia Briem", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"18:00 – 19:30", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"19:30 – 21:00", titel:"Betthupferl Geschichte", wer:"Lisa Suitner", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"20:00 – 21:00", titel:"Singen für Gross und Klein", wer:"Karin Jana Beck und Matthias Gerber", wo:"Feuerstelle", wen:["alle"] },
    { tag:"mi", zeit:"ab 21:30", titel:"Feuershow", wer:"Artistik Calimbaro", wo:"Vor Seminarhaus", wen:["alle"] },
    // Donnerstag
    { tag:"do", zeit:"07:30 – 08:15", titel:"Yoga / Klangmeditation", wer:"Amelie Zech / Anna Elisabeth Mayr", wo:"Yogaraum / Pavillon", wen:["erwachsene"] },
    { tag:"do", zeit:"08:00 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur mit rotem Bändchen" },
    { tag:"do", zeit:"09:15 – 09:45", titel:"Gemeinsamer Morgenkreis", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"], info:"Täglicher gemeinsamer Start in den Tag: Musik, Programmänderungen, Austausch. Verbindet, inspiriert, informiert." },
    { tag:"do", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"Alle", wo:"Treff Zirkuszelt", wen:["alle"], info:"Jeden zweiten Tag treffen wir uns in unseren Clans, um in Verbindung zu kommen, Spaß zu haben und uns auf die Clan Open Stage vorzubereiten – mit Überraschungsthema!" },
    { tag:"do", zeit:"10:30 – 12:00", titel:"Modellieren mit Ton", wer:"Josephine Winestock", wo:"Jurte", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"do", zeit:"10:30 – 12:00", titel:"Circleways Film mit Austausch", wer:"Fabienne Mäutner", wo:"Pavillon", wen:["erwachsene"], optional:true },
    { tag:"do", zeit:"10:30 – 11:30", titel:"Eltern - Kind Akrobatik", wer:"Susanne Reinhard", wo:"Turnhalle", wen:["kinder_ab_5"], hinweis:"3-7 Jahre" },
    { tag:"do", zeit:"10:30 – 11:30", titel:"Kinderschutzrap", wer:"Amelie Zech", wo:"Plundazelt", wen:["kinder_ab_5"], optional:true },
    { tag:"do", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"14:30 – 16:30", titel:"Glutbrennen", wer:"Laurenz Verweyen", wo:"Pappelkinderplatz", wen:["alle"], info:"Mit Glut und Geduld Holz gestalten – ein achtsames Naturhandwerk für Groß und Klein an der Feuerstelle." },
    { tag:"do", zeit:"14:30 – 16:00", titel:"Singen für Gross & Klein", wer:"Karin Jana Beck und Matthias Gerber", wo:"Feuerstelle", wen:["alle"] },
    { tag:"do", zeit:"16:00 – 17:00", titel:"Hula Hoop", wer:"Natascha Herter und Jule Schneider, Glückswerk Akademie", wo:"Turnhalle", wen:["alle"] },
    { tag:"do", zeit:"17:15 – 18:00", titel:"Jamuk", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"18:00 – 19:30", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"ab 20:00", titel:"Baobab Vibes", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    // Freitag
    { tag:"fr", zeit:"07:30 – 08:15", titel:"Fit in den Tag / Achtsames Atmen", wer:"Matze Zech, Howtoathletic / Laurenz Verweyen", wo:"Treff Wundazelt / Pavillon", wen:["erwachsene"] },
    { tag:"fr", zeit:"08:00 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur mit rotem Bändchen" },
    { tag:"fr", zeit:"09:15 – 09:45", titel:"Gemeinsamer Morgenkreis", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"], info:"Täglicher gemeinsamer Start in den Tag: Musik, Programmänderungen, Austausch. Verbindet, inspiriert, informiert." },
    { tag:"fr", zeit:"09:45 – 10:30", titel:"Singen für Gross & Klein", wer:"Karin Jana Beck und Matthias Gerber", wo:"Feuerstelle", wen:["alle"] },
    { tag:"fr", zeit:"10:30 – 12:00", titel:"Papierblumen oder Fantasievolles aus Karton und Wolle basteln", wer:"Barbara Burstall", wo:"Jurte", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"fr", zeit:"10:30 – 11:30", titel:"Seifenblasen", wer:"Patrick Grotz", wo:"Treff Plundazelt", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"fr", zeit:"10:30 – 11:30", titel:"Immer diese Übergänge", wer:"Stefanie Kreuzer", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"fr", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"14:30 – 16:00", titel:"Tiere des Waldes - Spuren lesen und die Sprache der Vögel", wer:"Ralph Müller", wo:"Treff Wundazelt", wen:["alle"] },
    { tag:"fr", zeit:"14:30 – 16:00", titel:"Sulzbrunner Bienenbesuch", wer:"Josef Günther", wo:"Treff Plundazelt", wen:["alle"], optional:true },
    { tag:"fr", zeit:"16:00 – 16:30", titel:"Diabolo Jongliershow", wer:"Jakob Bauer", wo:"Vor Seminarhaus / Turnhalle", wen:["alle"] },
    { tag:"fr", zeit:"16:30 – 18:30", titel:"Vogelsprache - Sprache des Waldes und der Natur", wer:"Ralph Müller", wo:"Treff Wundazelt", wen:["alle"] },
    { tag:"fr", zeit:"16:30 – 18:00", titel:"Besuch der Sulzbrunner Schafe", wer:"Imke Winestock", wo:"Treff Zirkuszelt", wen:["alle"], optional:true },
    { tag:"fr", zeit:"18:00 – 19:30", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"ab 20:00", titel:"Singen für Gross und Klein am Lagerfeuer", wer:"Karin Jana Beck und Matthias Gerber", wo:"Feuerstelle", wen:["alle"] },
    // Samstag
    { tag:"sa", zeit:"07:30 – 08:15", titel:"Yoga", wer:"Amelie Zech", wo:"Pavillon", wen:["erwachsene"] },
    { tag:"sa", zeit:"08:00 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur mit rotem Bändchen" },
    { tag:"sa", zeit:"09:15 – 09:45", titel:"Gemeinsamer Morgenkreis", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"], info:"Täglicher gemeinsamer Start in den Tag: Musik, Programmänderungen, Austausch. Verbindet, inspiriert, informiert." },
    { tag:"sa", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"Alle", wo:"Treff Zirkuszelt", wen:["alle"], info:"Jeden zweiten Tag treffen wir uns in unseren Clans, um in Verbindung zu kommen, Spaß zu haben und uns auf die Clan Open Stage vorzubereiten – mit Überraschungsthema!" },
    { tag:"sa", zeit:"10:30 – 12:00", titel:"Waldkrone basteln", wer:"Josephine Winestock", wo:"Jurte", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"sa", zeit:"11:00 – 12:30", titel:"Waldspiele", wer:"Cäcilia Briem", wo:"Treff Plundazelt", wen:["kinder_ab_5", "kinder_0_4"] },
    { tag:"sa", zeit:"11:00 – 12:00", titel:"Waldnaturpacour (Sport)", wer:"Matthias Zech", wo:"Treff Wundazelt", wen:["kinder_ab_5", "erwachsene"], optional:true },
    { tag:"sa", zeit:"12:00 – 13:30", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"sa", zeit:"14:00 – 15:00", titel:"Clan Open Stage", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"15:00 – 16:00", titel:"Abschlusskreis", wer:"Wundaplunda Team", wo:"Plundazelt", wen:["alle"] },
    { tag:"sa", zeit:"16:00", titel:"Abreise", wer:"", wo:"", wen:["alle"], hinweis:"Wer mag ist gerne zum Abbau Samstag und Sonntag eingeladen und am Samstagabend ab 19 Uhr zum Pizzahelfendenfest" },
  ],

  verpflegung: {
    hinweis: "Alles Bio, vegetarisch/vegan – teils aus eigenem Anbau. Zahlung bar oder per PayPal (QR) an der Essensausgabe. Bitte Bargeld für die Woche mitbringen.",
    essenszeiten: [
      { mahlzeit:"Frühstück", zeit:"08:00–09:00", hinweis:"Nur mit gelbem Bändchen · Woche vorab buchen" },
      { mahlzeit:"Mittag", zeit:"12:00–14:00", hinweis:"Wer mag, ohne Anmeldung (Infoheft nennt 12:00–13:30)" },
      { mahlzeit:"Abend", zeit:"17:30–19:30", hinweis:"Wer mag, ohne Anmeldung (Infoheft nennt 18:00–19:30)" },
    ],
    preise_essen: [
      { gruppe:"Bio Pizza Ø 40 cm (immer mittags)", name:"Bio Pizza Spinata mit Feta & Oliven (Ø 40 cm, immer mittags)", preis:"14 €" },
      { gruppe:"Bio Pizza Ø 40 cm (immer mittags)", name:"Bio Pizza Spinata – ½ Pizza", preis:"8 €" },
      { gruppe:"Bio Pizza Ø 40 cm (immer mittags)", name:"Bio Pizza Margherita mit Tomaten (Ø 40 cm, immer mittags)", preis:"13 €" },
      { gruppe:"Bio Pizza Ø 40 cm (immer mittags)", name:"Bio Pizza Margherita – ½ Pizza", preis:"7 €" },
      { gruppe:"Wechselnde Tagesgerichte", name:"Tagesgericht (immer mittags und abends, siehe Tagesgerichtkarte)", preis:"10 €" },
      { gruppe:"Wechselnde Tagesgerichte", name:"Tagesgericht – Kinderportion", preis:"6 €" },
      { gruppe:"Wechselnde Tagesgerichte", name:"Tagesgericht mit Salat", preis:"14 €" },
      { gruppe:"Wechselnde Tagesgerichte", name:"Tagesgericht mit Salat und Dessert", preis:"17 €" },
      { gruppe:"Wechselnde Suppe (immer abends)", name:"Suppe / mit Baguette (wechselnde Suppe, immer abends)", preis:"6 €" },
      { gruppe:"Wechselnde Suppe (immer abends)", name:"Suppe mit Salat", preis:"10 €" },
      { gruppe:"Wechselnde Suppe (immer abends)", name:"Suppe mit Salat und Dessert", preis:"14 €" },
      { gruppe:"Pommes", name:"Pommes mit Mayo & Ketchup (immer mittags & abends)", preis:"5 €" },
      { gruppe:"Pommes", name:"Pommes mit Salat", preis:"9 €" },
      { gruppe:"Pommes", name:"Pommes mit Salat und Dessert", preis:"12 €" },
      { gruppe:"Salat", name:"Beilagensalat (immer mittags & abends)", preis:"4 €" },
      { gruppe:"Nachtisch", name:"Brownies oder Mango-Lassi (beides vegan und glutenfrei, Nachtisch immer mittags & abends)", preis:"3 €" },
    ],
    getraenke: [
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"Bier Härle/Lammsbräu hell 0,5 l (alkoholfrei)", preis:"3,50 €" },
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"dunkle Weiße 0,5 l", preis:"3,50 €" },
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"Bier Lammsbräu hell 0,33 l", preis:"3,00 €" },
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"dunkles Bier Lammsbräu 0,33 l", preis:"3,00 €" },
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"Naturradler Lammsbräu 0,33 l", preis:"3,00 €" },
      { gruppe:"Bio Bier in Flaschen (alles alkoholfrei)", name:"Dunkel & Zitrone Lammsbräu 0,33 l", preis:"3,00 €" },
      { gruppe:"Bio Schorlen/Limonaden in Flaschen (alles alkoholfrei)", name:"Limonade NOW (Grapefruit, Lemon, Orange, Cola) 0,33 l", preis:"2,50 €" },
      { gruppe:"Bio Schorlen/Limonaden in Flaschen (alles alkoholfrei)", name:"Seezüngle (Träuble, Kirsche, Rhabarber, Aronia) 0,33 l", preis:"2,50 €" },
      { gruppe:"Bio Schorlen/Limonaden in Flaschen (alles alkoholfrei)", name:"Apfelsaftschorle Bio Kristall 0,33 l", preis:"2,50 €" },
      { gruppe:"Bio Schorlen/Limonaden in Flaschen (alles alkoholfrei)", name:"Sprudelwasser 0,75 l", preis:"2,00 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Kaffee", preis:"2,50 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Cappuccino Kuh-/Hafermilch", preis:"3,00 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Cappuccino Kuh-/Hafermilch doppio", preis:"3,50 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Espresso", preis:"2,50 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Espresso doppio", preis:"3,00 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Espresso Afogato (+ 1 Kugel Eis)", preis:"3,50 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Tee (Schwarz, Grün, Pfefferminze, Almkräuter, Fenchel)", preis:"2,00 €" },
      { gruppe:"Fair Trade und Bio Kaffee (bring deine eigene Tasse)", name:"Heiße Schokolade", preis:"3,50 €" },
      { gruppe:"Bio Eis", name:"Becher Eis mit Milch (Vanille, Schokolade, Pistazie, Nuss)", preis:"3,00 €" },
      { gruppe:"Bio Eis", name:"Becher Eis vegan (Himbeere, Zitrone, Mango, Schoko)", preis:"3,00 €" },
      { gruppe:"Bio Eis", name:"Quetschtüte vegan (Himbeere)", preis:"2,00 €" },
      { gruppe:"Bio Eis", name:"Quetschtüte mit Milch (Orange)", preis:"2,00 €" },
      { gruppe:"Waffeln (Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und 14:30–17:00 Uhr)", name:"Waffeln mit Puderzucker", preis:"2,00 €" },
      { gruppe:"Waffeln (Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und 14:30–17:00 Uhr)", name:"Waffeln mit Apfelmus", preis:"2,50 €" },
      { gruppe:"Waffeln (Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und 14:30–17:00 Uhr)", name:"Stockbrot/Pizzateig", preis:"1,00 €" },
    ],
    tagesgerichte: [
      { tag:"Montag 29.07.", mittag:"Thai Curry mit Reis", abend:"Erbsen-Kokossuppe mit Baguette · Chili mit Takkos & Baguette (wahlweise glutenfrei, wahlweise Schmand)" },
      { tag:"Dienstag 30.07.", mittag:"Tofu BBQ-Soße, Ofenkartoffeln", abend:"Tomatensuppe (wahlweise mit Schmand & Baguette, Linseneintopf)" },
      { tag:"Mittwoch 31.07.", mittag:"Jägerin mit Reis oder Spätzle", abend:"Linsen-Paprika-Karottensuppe · Spätzle mit Soße" },
      { tag:"Donnerstag 01.08.", mittag:"Aloo Gobi, Reis", abend:"Gemüseeintopf mit Baguette" },
      { tag:"Freitag 02.08.", mittag:"Ratatouille mit Reis oder Nudeln (Bratensoße/Tomatensoße)", abend:"Ofengemüse (Kartoffeln/Karotten), vegane Mayo oder Quark" },
      { tag:"Samstag 03.08.", mittag:"Spaghetti mit Linsenbolognese", abend:"Bratlinge & Reis mit süß-sauer Paprikasauce" },
      { tag:"Sonntag 04.08.", mittag:"Risotto mit Fenchel, Spinat, Zucchini, Erbsen (wahlweise Käse)", abend:"" },
    ],
    laedle: "Laura's Lädle Sulzbrunn ist Mittwoch und Freitag jeweils 10:00 – 11:00 Uhr geöffnet. Angebot u.a.: Bio Gemüse und Obst, Müsli, Hafermilch, Milch, Eier, Pasta, Käse, Butter. (Hinweis: Im Infoheft wird zusätzlich ein „Hoflädle“ am Dienstag und Donnerstag 13:30–14:30 Uhr genannt – beides sind getrennte Verkaufsstände/Zeiten.)",
    snacks: "Snacks und Gebäck gibt es jeden Tag am Kiosk im Seminarhaus. Dienstag und Samstag Kuchenverkauf durch den Verein NATÜRLICH.MITEINANDER. Waffeln: mit Puderzucker 2,00 €, mit Apfelmus 2,50 €, Stockbrot/Pizzateig 1,00 €. Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und Mo–So 14:30–17:00 Uhr."
  },

  gelaende: {
    bereiche: [
      { name:"Kasse & Hoflädle", hinweis:"Anlaufstelle zur Anmeldung; hier gibt es das Wundaplunda-Bändchen. Mit Waschplatz. Auf der rechten Geländeseite (Richtung B309)." },
      { name:"Parkplatz für Autos", hinweis:"300 m rechts. Hauptparkplatz für Gäste-Autos." },
      { name:"Parken Mitwirkende", hinweis:"Max. 3 Std." },
      { name:"Be- und Entladen Zelte", hinweis:"Rosa markierte Fläche, max. 15 min. Danach Auto auf den Parkplatz fahren." },
      { name:"Camping Busse", hinweis:"Grün markierte Stellfläche für Wohnmobile & Busse (oben links). Einweisung vor Ort." },
      { name:"Camping Zelte", hinweis:"Orange/sandfarbene Zeltwiese." },
      { name:"Wundazelt", hinweis:"Großes Programm-/Veranstaltungszelt." },
      { name:"Plundazelt", hinweis:"Zelt mit Feuerstelle (Lagerfeuer/Stockbrot)." },
      { name:"Zirkuszelt", hinweis:"Lounge Area mit Kaffeebar, Bar, Waffeln, Eis; Infoboard mit Ersthelfer-Nummer; Lost & Found-Kiste; Erste-Hilfe-Set; Musik/Programm." },
      { name:"Küchen-Pavillon", hinweis:"Überdachte Selbstversorger-Küche mit Gaskochern, Kühlschränken, Feuerstelle, Spülstation/Spülbecken und Waschbecken; Gefrierfach für Kühlakkus." },
      { name:"Kinderjurte", hinweis:"Bereich für Kinder; mit Erste-Hilfe-Set." },
      { name:"Seminarhaus & Yogaraum", hinweis:"Be- und Entladen Zimmer über Lieferanteneingang (orange Fläche), max. 15 min. Barrierefreie Toilette (EG), Wickeltisch (EG), Waschmöglichkeit (UG), Duschen (2. UG), Turnhalle als Unterschlupf bei Sturm/Gewitter, Kiosk; Erste-Hilfe-Set. Mit Info-Punkt." },
      { name:"Pavillon", hinweis:"Weiterer überdachter Bereich beim Seminarhaus." },
      { name:"WC / Komposttoiletten", hinweis:"8 Komposttoiletten über das Gelände verteilt (mehrere WC-Markierungen); überwiegend für Feststoff, mit Hand-/Oberflächendesinfektion und Wasser/Seife." },
      { name:"Pipiplatz / Pipiecken", hinweis:"Ausgewiesene Pipi-Ecken für das kleine Geschäft, um die Komposttoiletten zu entlasten (mehrere Standorte)." },
      { name:"Wasser- & Müllstation", hinweis:"Wasserzapfstelle und Müllstation für Papier, Plastik u.a." },
      { name:"Raucherbereich", hinweis:"Ausgewiesene Raucherstelle (Zigaretten-Symbol). Nur hier rauchen – Stummel mitnehmen." },
      { name:"Solar-/Ladestation", hinweis:"Kleine Solarstation mit USB-Anschlüssen zum Laden (Lade-/Handy-Symbol)." },
      { name:"Solarduschwagen", hinweis:"Autarke Duschen; nur ökologische Seife & Shampoo (wird bereitgestellt)." },
      { name:"Spielbereich / Sandkasten", hinweis:"Sandkasten und Spielfläche für Kinder (Sandspielzeug mitbringen)." },
      { name:"Richtung Sulzberg / B309", hinweis:"Orientierung: Pfeil nach Sulzberg (unten links); die Bundesstraße B309 trennt die Geländeseiten." },
    ],
    privat: ["Bauwägen privat (BewohnerInnen-/Bauwagenplatz)", "Garten privat", "Kreisbeet privat", "Parkplatz privat für Bewohner*innen", "Dorf privat (Dorfplatz)"]
  },

  kontakt: {
    mail: "gaeste@seminarhaus-sulzbrunn.de",
    notruf: "Feuerwehr/Rettung 112 · Polizei 110",
    klinik: "Krankenhaus Kempten, Robert-Weixler-Str. 50, Tel. 0831 530-0"
  }
};
if (typeof module !== "undefined") module.exports = WUNDA;
