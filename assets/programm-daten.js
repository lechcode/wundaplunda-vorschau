/* ============================================================================
   WUNDAPLUNDA · PROGRAMMHEFT — EINE QUELLE FÜR ALLES
   ----------------------------------------------------------------------------
   Das ist die EINZIGE Datei, die du pflegst. Aus ihr entstehen automatisch:
     · der digitale Tagesplaner (Web)
     · der Pro-Tag-Ausdruck für die Infowand (mit Leitung!)
     · die Info-Seiten (Geländeplan, Essen & Trinken, gut zu wissen)
   Ändern, speichern, fertig — Web UND Ausdruck sind sofort synchron.

   Stand: Zeitplan Wundaplunda 2026 (Mo 03.08. – Sa 08.08.2026).

   EIN PROGRAMMPUNKT — Felder (alles außer tag/zeit/titel/wen ist optional):
     tag        "mo" "di" "mi" "do" "fr" "sa"
     zeit       "14:00 – 15:00"  oder  "ab 20:30"  oder  "Ganztags"
     titel      Was passiert
     wer        Leitung / Wer
     wo         Ort  (Wetter-Alternative mit " / " trennen: "Feuerstelle / Plundazelt")
     wen        ["erwachsene"] ["kinder_0_4"] ["kinder_ab_5"] ["alle"]  (mehrere erlaubt)
     anmeldung  "offen"  (ohne Anmeldung)  |  "begrenzt"  (Plätze begrenzt)
     optional   true   → als "optional" beschrieben
     hinweis    kurzer Zusatz (Alter, Bändchen, Ort-Notiz …)
     mitbringen was Teilnehmende mitbringen sollen (z. B. "eigenes Schnitzmesser")
     info       längerer Text / Beschreibung — erscheint beim Aufklappen
     status     "geaendert"  oder  "entfaellt"

   KATALOG 2026 (unten): Leitung, Foto & Beschreibung je Angebot, nach TITEL
   den Tagesplan-Kacheln zugeordnet. Kommt derselbe Titel mehrfach vor (z. B.
   Morgenkreis an mehreren Tagen), erben alle Kacheln automatisch Foto & Text.
   ========================================================================== */

const WUNDA = {
  festival: {
    name: "Wundaplunda",
    jahr: 2026,
    untertitel: "Familien-Sommercamp im Ökodorf Sulzbrunn",
    ort: "Gemeinschaft Sulzbrunn · Allgäu",
    adresse: "Sulzbrunn 1–8, 87477 Sulzberg",
    hinweis_jahr: "Stand Juli 2026 – Änderungen möglich",
    stand: "15.07.2026, 08:14 Uhr",
    tage: [
      { key:"mo", wochentag:"Montag", datum:"03.08." },
      { key:"di", wochentag:"Dienstag", datum:"04.08." },
      { key:"mi", wochentag:"Mittwoch", datum:"05.08." },
      { key:"do", wochentag:"Donnerstag", datum:"06.08." },
      { key:"fr", wochentag:"Freitag", datum:"07.08." },
      { key:"sa", wochentag:"Samstag", datum:"08.08." },
    ],
  },

  zielgruppen: [
    { key:"erwachsene", label:"Erwachsene", icon:"feder" },
    { key:"kinder_0_4", label:"Kinder bis 6 J.", icon:"kaefer" },
    { key:"kinder_ab_5", label:"Kinder ab 6 J.", icon:"falter" },
    { key:"alle", label:"Alle", icon:"gruppe" },
  ],

  // --- ALLE PROGRAMMPUNKTE (eine Zeile = ein Punkt) ---
  programm: [
    // Montag
    { tag:"mo", zeit:"11:00 – 14:00", titel:"Anreise & Ankommen", wo:"", wen:["alle"] },
    { tag:"mo", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"13:30 – 16:00", titel:"Waffeln / Kaffee", wer:"", wo:"Bar", wen:["alle"] },
    { tag:"mo", zeit:"14:00", titel:"Eröffnung", wo:"Feuerstelle", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Geländeführung", wo:"Treffpunkt Zirkuszelt", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Bienenlehrgang für Groß und Klein", wo:"Kinderjurte", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Seifenblasen", wer:"Patrick", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mo", zeit:"16:30 – 17:30", titel:"EingangAusgang Impro-Theater", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mo", zeit:"17:30 – 18:00", titel:"Kinderkreis mit Clown Malab", wo:"Zirkuszelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mo", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"19:30 – 20:30", titel:"Jodruf Sulzbrunn", wer:"", wo:"Wundazelt", wen:["alle"] },
    { tag:"mo", zeit:"ab 20:30", titel:"Lagerfeuerabend", wo:"Feuerstelle", wen:["alle"] },
    { tag:"mo", zeit:"Ganztags", titel:"Spielewagen · Flying Fox", wo:"", wen:["alle"] },
    // Dienstag
    { tag:"di", zeit:"07:30 – 08:15", titel:"Yoga am Morgen", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"di", zeit:"07:45 – 09:00", titel:"Frühstück", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"di", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"10:30 - 11:30", titel:"Pois basteln", wo:"Kinderjurte", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"10:30 – 12:30", titel:"Wir entdecken den Wald", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"10:30 – 12:30", titel:"Knotenkunde & Tarpaufbau", wo:"Wundazelt", wen:["erwachsene"] },
    { tag:"di", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"14:00 – 16:00", titel:"Kaffee & Kuchen & Hoflädle", wo:"Dorfplatz", wen:["alle"], hinweis:"Kaffee & Kuchen (Verein Füreinander Miteinander e.V.) + Hoflädle" },
    { tag:"di", zeit:"14:15 – 15:00", titel:"Singen – Jodruf Sulzbrunn", wer:"", wo:"Dorfplatz", wen:["alle"] },
    { tag:"di", zeit:"15:00 – 16:00", titel:"Poi-Workshop", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"16:00 – 18:00", titel:"Frauenkreis", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"di", zeit:"16:30 – 17:30", titel:"Kinderband \"Leicht Verschwitzt Und Zwergig\"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"19:00 – 20:30", titel:"Männerkreis", wer:"Oliver", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"di", zeit:"20:00", titel:"Allikée Trommelgruppe", wo:"Dorfplatz", wen:["alle"] },
    { tag:"di", zeit:"ab 21:00", titel:"Feuershow & Akrobatik mit Trommelbegleitung", wo:"Dorfplatz", wen:["alle"] },
    // Mittwoch
    { tag:"mi", zeit:"07:30 – 08:15", titel:"Klang & Qigong – Entspannt in den Tag starten", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"mi", zeit:"07:30 – 08:15", titel:"Morgen-Workout – Kraftvoll in den Tag", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"mi", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"mi", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    // Freitag
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Schlangen & Zauberei filzen", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    // Mittwoch
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Slackline Workshop", wo:"Treffpunkt Zirkuszelt", wen:["kinder_ab_5"] },
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Wahrnehmungs- / Sinnesübungen in der Natur", wer:"", wo:"Treffpunkt Kinderjurte", wen:["erwachsene"] },
    { tag:"mi", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"14:00 – 16:00", titel:"Bogenbau", wo:"Wundazelt", wen:["alle"] },
    { tag:"mi", zeit:"14:00 – 16:00", titel:"Baumklettern", wo:"Treffpunkt Zirkuszelt", wen:["kinder_ab_5"] },
    { tag:"mi", zeit:"15:00 – 16:00", titel:"Eltern-Kind-Akrobatik", wer:"Susanne", wo:"Turnhalle", wen:["kinder_0_4"] },
    { tag:"mi", zeit:"15:00 – 16:00", titel:"Clownspiele", wo:"Yogaraum", wen:["kinder_ab_5"], anmeldung:"begrenzt" },
    { tag:"mi", zeit:"16:00 – 17:30", titel:"Schmuckworkshop", wo:"Kinderjurte", wen:["erwachsene"], anmeldung:"begrenzt" },
    { tag:"mi", zeit:"16:30 – 17:30", titel:"Hirnhopsen für Alle", wer:"Florian", wo:"Turnhalle", wen:["alle"] },
    { tag:"mi", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mi", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"19:30 – 20:30", titel:"Tribubu - World Music Band", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Donnerstag
    { tag:"do", zeit:"07:30 – 08:15", titel:"Yoga am Morgen", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"do", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"do", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"ab 10:30", titel:"Weiden-Zauberstäbe", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"do", zeit:"10:30 – 12:30", titel:"5 Minuten Feuer & Wilde Küche", wo:"Kinderjurte", wen:["alle"] },
    { tag:"do", zeit:"10:30 – 12:30", titel:"Mein ICH - mein SelbstWert - mein Wert in der Familie", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"14:00 – 16:00", titel:"Kuchen Pappelkinder & Hoflädle", wer:"", wo:"Dorfplatz", wen:["alle"] },
    { tag:"do", zeit:"15:00 – 16:00", titel:"Singen – Jodruf Sulzbrunn", wer:"Rolf & Margaretha", wo:"Dorfplatz", wen:["alle"] },
    { tag:"do", zeit:"15:30 – 17:30", titel:"Frauenkreis", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"15:30 – 17:30", titel:"Kleine Schnitzereien auch für Große", wo:"Wundazelt", wen:["erwachsene","kinder_ab_5"], anmeldung:"begrenzt" },
    { tag:"do", zeit:"15:30 – 17:30", titel:"ContaKids - Bewegung, Spiel & Verbindung", wo:"", wen:["kinder_0_4"] },
    { tag:"do", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"do", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"19:30 – 20:30", titel:"Singen – Jodruf Sulzbrunn", wer:"Rolf & Margaretha", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"19:00 – 20:30", titel:"Männerkreis", wer:"Oliver", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"ab 20:30", titel:"Lagerfeuerabend", wer:"", wo:"Feuerstelle", wen:["kinder_ab_5","erwachsene"], hinweis:"Instrumente mitbringen" },
    { tag:"do", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Freitag
    { tag:"fr", zeit:"07:30 – 08:15", titel:"Klang & Qigong – Entspannt in den Tag starten", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"fr", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"fr", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Faszination Baumpilze & Pilzpapier", wo:"Wundazelt", wen:["alle"] },
    // Mittwoch
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Ton brennen & Lehmgeister", wo:"Feuerstelle", wen:["kinder_0_4","kinder_ab_5"] },
    // Freitag
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Vom ICH zum WIR – Beziehung in Familie leben", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"fr", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Bogenbau", wer:"Laurenz", wo:"Wundazelt", wen:["alle"] },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Baumklettern", wer:"Stefan", wo:"Treffpunkt Zirkuszelt", wen:["kinder_ab_5"] },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Faszination Baumpilze & Naturkosmetik", wo:"Kinderjurte", wen:["erwachsene"] },
    { tag:"fr", zeit:"15:00 – 16:00", titel:"ContaKids -Bewegung, Spiel & Verbindung", wo:"Yogaraum", wen:["kinder_0_4"] },
    // Donnerstag
    { tag:"do", zeit:"10:30 – 11:30", titel:"Seifenblasen", wo:"Dorfplatz", wen:["kinder_0_4","kinder_ab_5"] },
    // Freitag
    { tag:"fr", zeit:"16:00 – 18:00", titel:"Open Space - Gestalte das Programm mit!", wo:"", wen:["alle"], hinweis:"Alle, die etwas anbieten möchten · u. a. bietet Amelie Jodeln an" },
    { tag:"fr", zeit:"17:30 – 18:00", titel:"Vorlese- & Mitmachgeschichte: Das schrecklichste Monster der Welt", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"fr", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"19:30 – 20:30", titel:"Funkenflug Band - Folk, Swing, Pop", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"fr", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Samstag
    { tag:"sa", zeit:"07:30 – 08:15", titel:"Yoga am Morgen", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"sa", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"sa", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"09:45 – 10:30", titel:"Probe Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"10:30 – 11:30", titel:"Kids Singen, Tanzen, Bewegen", wo:"Zirkuszelt", wen:["kinder_0_4"] },
    { tag:"sa", zeit:"10:30 – 12:30", titel:"Kleine Schnitzereien auch für Große", wo:"Wundazelt", wen:["erwachsene","kinder_ab_5"] },
    { tag:"sa", zeit:"10:30 – 12:00", titel:"Wetterkunde", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"sa", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"sa", zeit:"14:00 – 14:30", titel:"Clown Malab Show", wer:"Clown Malab", wo:"Zirkuszelt", wen:["alle"], web:"artistik-calimbaro.de", insta:"@artistik_calimbaro" },
    { tag:"sa", zeit:"14:30 – 15:00", titel:"Clan Show", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"15:00 – 16:00", titel:"Gemeinsame Abschlusszeremonie", wo:"Feuerstelle", wen:["alle"] },
    { tag:"sa", zeit:"16:00", titel:"Abreise / Ende des Camps", wer:"", wo:"", wen:["alle"] },
    // Dienstag
    { tag:"di", zeit:"14:00 - 16:00", titel:"Sulzbrunner Markt", wo:"Dorfplatz", wen:["alle"] },
    { tag:"di", zeit:"08:00-11:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"di", zeit:"16:00 - 18:00 Uhr", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"di", zeit:"19:30  - 21:00", titel:"Unser Seminarhaus Kiosk hat geöffnet!", wo:"", wen:["alle"] },
    { tag:"di", zeit:"ganztags", titel:"Waldrallye - Spielewagen - Flying Fox", wo:"", wen:["alle"] },
    // Samstag
    { tag:"sa", zeit:"Ganztags", titel:"Waldrallye - Spielewagen - Flying Fox", wo:"", wen:["alle"] },
    // Mittwoch
    { tag:"mi", zeit:"08:00 - 11:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"mi", zeit:"19:00 - 21:30", titel:"Unsere Bar hat geöffnet!", wo:"", wen:["alle"] },
    { tag:"mi", zeit:"14:00 - 17:00", titel:"Unsere Bar hat geöffnet!", wo:"", wen:["alle"] },
    // Donnerstag
    { tag:"do", zeit:"08:00 - 11:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"do", zeit:"16:00 -18:00", titel:"Unsere Bar hat geöffnet!", wo:"", wen:["alle"] },
    // Freitag
    { tag:"fr", zeit:"08:00 - 11:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"fr", zeit:"14:00 - 17:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
    { tag:"fr", zeit:"19:00 - 22:00", titel:"Unsere Bar hat geöffnet!", wo:"", wen:["alle"] },
    // Samstag
    { tag:"sa", zeit:"08:00-11:00", titel:"Unsere Bar hat geöffnet!", wo:"Bar", wen:["alle"] },
  ],

  katalog: {
    "Geländeführung": {
      wer: "2 Menschen aus der Gemeinschaft",
      foto: "gelaendefuehrung.png",
      beschreibung: "Bei der Tour über das rund 15,5 Hektar große Gelände zeigen euch Sulzbrunn-Bewohner:innen Wald, Wiesen und die zehn Gebäude des kleinen Dorfs – inklusive der Geschichte rund um die Sulzbrunner Jodquelle (Kurbetrieb seit 1852). Mittlerweile leben 50 Erwachsene und 20 Kinder zusammen an diesem besonderen Ort, teilen Ressourcen und üben sich in einer sehr verbundenen Nachbarschaft.",
      web: "https://sulzbrunn.org/gemeinschaft/",
    },
    Seifenblasen: {
      foto: "riesenseifenblasen.png",
      beschreibung: "Hier machen wir die größten Blasen aller Zeiten! Sie steigen hoch in den Himmel und schimmern in allen Farben. Komm vorbei und probier es aus – wer schafft die größte Blase?",
      wer: "Patrick",
    },
    "Impro Show Kids": {
      wer: "EingangAusgang Impro-Theater",
      foto: "improtheater.png",
      beschreibung: "Kommt mit auf eine fantastische Heldenreise! Beim Improvisations-Theater bestimmt ihr, das Publikum, was passiert – eure Ideen verwandeln sich live auf der Bühne in eine einzigartige Geschichte. Keine Vorstellung ist wie die andere.",
    },
    "Kinderkreis mit Clown Malab": {
      foto: "kinderkreis.png",
      beschreibung: "Während die Großen ihren Frauen- und Männerkreis haben, schaffen wir für die Kinder einen eigenen Raum zum Ankommen: Wir finden heraus, worauf ihr euch am meisten freut, und lernen erste neue Freund:innen kennen. Dieses Jahr mit Überraschungsgast mit roter Nase – Clown Malab!",
      wer: "Clown Malab, Carmen vom Wundaplunda Team, Amelie",
    },
    "Jodruf Sulzbrunn": {
      wer: "Rolf & Margaretha (Gemeinschaft Sulzbrunn)",
      foto: "jodruf.jpg",
      beschreibung: "Rolf und Margaretha laden zum gemeinsamen Singen: mit Akkordeon, Gitarren, Schlagwerk und ihren Stimmen erklingen Lieder aus aller Welt. Ob Singen, Zuhören oder Tanzen – alle sind willkommen.",
    },
    "Singen – Jodruf Sulzbrunn": {
      wer: "Rolf & Margaretha (Gemeinschaft Sulzbrunn)",
      foto: "jodruf.jpg",
      beschreibung: "Gemeinsames Singen mit Rolf und Margaretha: Lieder aus aller Welt mit Akkordeon, Gitarren und Schlagwerk, die Lust machen mitzuschwingen. Ob Singen, Zuhören oder Tanzen – jede:r ist willkommen.",
    },
    "Trommeln auf dem Dorfplatz": {
      wer: "Alex & Trommelgruppe (Allikée)",
      foto: "allikee.png",
      web: "kakilambe.de",
      beschreibung: "„Allikée“ heißt so viel wie „Auf geht's!“ – westafrikanische Trommelmusik, gewürzt mit europäischen und lateinamerikanischen Einflüssen. Mal traditionell, mal modern, immer mit Freude und Groove.",
    },
    Lagerfeuerabend: {
      foto: "lagerfeuerabende.png",
      beschreibung: "Wenn die Nacht hereinbricht, versammeln wir uns am knisternden Feuer. Mitgebrachte Instrumente sind herzlich willkommen. \nWIr freuen uns über Mitgestaltung! Wenn du spielen/singen magst fühl dich herzlich eingeladen. Du kannst auch gerne vorher auf uns zu kommen!",
    },
    "Waldrallye · Spielewagen · Flying Fox": {
      foto: "waldrallye.jpg",
      beschreibung: "Ganztägige Entdecker-Angebote: Auf der Waldrallye zieht ihr mit Entdeckerrucksäcken (Hase, Eule, Fuchs …) los und löst spannende Aufgaben in der Natur. \nDazu der Spielewagen des Kreisjugendrings mit vielen Fahrzeugen und Spielen – und die Flying Fox für ein kleines Abenteuer mit Schwung.\n\nRucksackverleih\nDie Rucksäcke können zu folgenden Zeiten gegen 10 € Pfand an der Bar ausgeliehen werden:\n\n08:00 – 10:00 Uhr \n10:00 – 12:00 Uhr \n14:00 – 16:00 Uhr \n16:00 – 18:00 Uhr \n\nBitte holt die Rucksäcke zu Beginn des jeweiligen Zeitfensters an der Bar ab und bringt sie spätestens zum Ende des Zeitfensters wieder zurück, damit sie den nächsten Ausleihenden zur Verfügung stehen.",
    },
    Yoga: {
      wer: "Amelie Zech (Stimmtherapeutin & Yogalehrerin)",
      foto: "yoga.png",
      web: "akademie-rueckenwind.de",
      insta: "@akademie_rueckenwind",
      beschreibung: "Beim Yoga am Morgen mobilisieren wir den ganzen Körper, entspannen und lassen die Gedanken los – kraftvoll und entspannt in den Wundaplunda-Tag mit Amelie Zech.",
    },
    "Morgenkreis mit dem Wundaplunda Team": {
      wer: "Wundaplunda Team",
      foto: "morgenkreis.png",
      beschreibung: "Der Lagerruf holt die Letzten aus den Federn und bringt uns alle zusammen. Jeden Morgen begrüßen wir den neuen Tag, besprechen, was uns erwartet, und singen die ersten Lieder.",
    },
    Clanzeit: {
      foto: "clanzeit.png",
      beschreibung: "Findet euren Clan für die Woche! In kleiner Gemeinschaft verbringt ihr Zeit miteinander, tauscht euch aus und kommt in Verbindung – mit ein paar überraschenden Impulsen vom Team. So entsteht Vertrautheit und ganz viel Miteinander.",
    },
    "Probe Clanzeit": {
      foto: "clanzeit.png",
      beschreibung: "Generalprobe für die Clan-Show: Zeit, in eurem Clan die letzten Ideen zu proben und euch gemeinsam auf den großen Auftritt am Nachmittag vorzubereiten.",
    },
    "Pois basteln": {
      wer: "Barbara & Paty",
      foto: "poi.png",
      web: "barbaraburstall.com",
      insta: "@patyk.liebe",
      beschreibung: "Wir basteln Pois aus Upcycling-Materialien. Die an Schnüren geschwungenen Bälle aus der Māori-Kultur Neuseelands machen Spaß und fördern Beweglichkeit, Koordination und Kraft. Nachmittags gibt es den passenden Workshop dazu.\n\nPaty spielt seit vielen Jahren hobbymässig Poi in allen möglichen Variante.  Barbara & Paty sind  allround kreative Köpfeund haben sehr viel Spaß mit Kindern zu basteln und Neues zu zeigen.",
    },
    "Poi-Workshop": {
      wer: "Susanne & Paty",
      foto: "poi.png",
      insta: "@patyk.liebe",
      beschreibung: "Passend zu den selbstgebastelten Pois schwingen wir die an Schnüren geführten Bälle und üben Beweglichkeit, Koordination und Kraft – Spiel und Bewegung aus der Māori-Kultur Neuseelands.",
    },
    "Wir entdecken den Wald": {
      wer: "Kristina",
      foto: "walderlebnis.png",
      insta: "@mykorrhina",
      beschreibung: "Bei dieser familiengerechten Waldexkursion erleben Kinder und Erwachsene den Wald mit allen Sinnen. Spielerisch entdecken wir, welche Baumarten heimisch sind und warum der Wald für Mensch, Tier und Klima so wichtig ist – mit Lupen, Waldbingo und Entdeckerkarten.\nKristina Wolf ist Vorstand der Pilzfreunde Altusried e.V.",
    },
    "Knotenkunde & Tarpaufbau": {
      wer: "Laurenz (Wildnispädagoge)",
      foto: "knoten.png",
      beschreibung: "Wie entsteht aus einer Plane und ein paar Seilen ein wetterfester Unterschlupf? Wir lernen die Grundlagen des Tarpbaus und der Knotenkunde, üben verschiedene Knoten und bauen unterschiedliche Tarp-Konstruktionen auf. Praktisches Wissen für Outdoor und Bushcraft.\n\nHallo, mein Name ist Laurenz Verweyen. \nDie vier Elemente sind ein roter Faden in meinem Leben. Ob in den Bergen, auf dem Wasser, in der Luft oder am Feuer – als Wildnispädagoge und leidenschaftlicher Natursportler durfte ich jedem von ihnen auf besondere Weise begegnen. Diese Erfahrungen haben meinen Blick auf die Natur geprägt und wecken immer wieder die Freude, draußen zu lernen, zu staunen und Wissen weiterzugeben. Ich freue mich darauf, euch auf dem Festival zu begegnen!",
    },
    "Kuchen Pappelkinder & Hoflädle": {
      foto: "markt.png",
      web: "natuerlich-miteinander.net",
      beschreibung: "Kaffee, Kuchen und ein kleiner, feiner Wundaplunda-Markt mit liebevoll ausgewähltem Kunsthandwerk aus Sulzbrunn: Honig, Bienenwachskerzen, Weidenkörbe, Getöpfertes, Schmuck und mehr. Mit Kinderschminken und Kuchen der Pappelkinder (Verein Füreinander Miteinander e.V.).",
    },
    Frauenkreis: {
      wer: "Fabienne (Gemeinschaft Sulzbrunn)",
      foto: "frauenkreis.png",
      beschreibung: "Erster Kreis:\nFrau und Natur – Zyklisches Sein, Verbundenheit und innere Jahreszeiten\nDie Natur lebt in Rhythmen. Sie kennt Zeiten des Wachsens und Blühens ebenso wie Zeiten des Rückzugs und der Regeneration. Auch wir Frauen bewegen uns durch innere Jahreszeiten – Phasen der Fülle, der Wandlung, des Loslassens und des Neubeginns. Oft vergessen wir im Alltag, wie natürlich und kraftvoll dieses zyklische Sein ist.\nIn diesem Frauenkreis erforschen wir die Verbindung zwischen der Natur und unserer eigenen inneren Landschaft. Durch achtsame Körperübungen, Reflexion, Austausch sowie kleine Rituale lassen wir uns von den Qualitäten der Jahreszeiten inspirieren und lauschen den Rhythmen, die in uns wirken.\nGemeinsam schaffen wir einen Raum, um langsamer zu werden, zu spüren und uns mit dem zu verbinden, was gerade lebendig ist. Eine Einladung, der eigenen Natur näherzukommen und die Schönheit des Wandels neu zu entdecken.\n \nZweiter Kreis:\nWeibliche Lebendigkeit – Sinnlichkeit, Präsenz und Lebensenergie\nIn jeder Frau lebt eine natürliche Quelle von Lebendigkeit, Sinnlichkeit und schöpferischer Kraft. Manchmal fließt sie frei, manchmal gerät sie im Trubel des Alltags in den Hintergrund. Dieser Frauenkreis lädt dazu ein, wieder mehr in Kontakt mit dem eigenen Körper, den Sinnen und der eigenen Lebensenergie zu kommen.\nDurch Embodiment, Atem, Bewegung sowie Begegnungs- und Wahrnehmungsübungen erforschen wir, was uns lebendig macht und wie wir uns selbst tiefer begegnen können. Inspiriert von tantrischen Grundprinzipien wie Präsenz, Bewusstheit und Verkörperung richten wir unsere Aufmerksamkeit auf das unmittelbare Erleben – auf das, was im Moment spürbar ist.\nEin Raum für authentische Begegnung mit dir selbst und anderen und die Freude daran, ganz im eigenen Körper anzukommen. Eine Einladung, der eigenen Lebendigkeit mit Offenheit, Neugier und Wertschätzung zu begegnen.\n\nIch bin Fabienne.\nEine naturverbundene Abenteurerin, die das Kind in sich noch nicht vergessen hat. Neben dem Kind in mir finden meine Wurzeln immer mehr ihren Weg und schenken mir Ruhe in meinem Leben, um daraus wundervolle Schätze entstehen lassen zu können.\nMein Wunsch ist es, Menschen auf ihrem natürlichen Weg zu begleiten und zu inspirieren und sie dort abzuholen, wo sie in ihrem Leben stehen. Ich möchte gemeinsam Schritte gehen – eingebunden in eine Gemeinschaft, die uns Menschen und die Natur gleichermaßen umfasst. In den von mir gestalteten Räumen begegnen wir uns selbst, dem anderen, der Natur und erfahren uns als Ganzes in einem lebendigen Beziehungsgeflecht mit dem Leben.  \nSo gestaltet sich auch mein Sein im Naturkindergarten und der Wildnispädagogik - ursprünglich, verbunden und bindungsorientiert. Ich liebe es am Feuer zusammen zu kommen, zu singen und in ehrlicher und authentischer Begegnung zu sein. Neben und innerhalb der Naturarbeit weitet sich mein Wirken in Räume die geprägt sind von Beziehung, Sinnlichkeit, Tanz und  wahrhaftiger Kommunikation.",
    },
    "Kinderband 'Die leicht verschwitzten Zwerge'": {
      foto: "zwergig.png",
      insta: "@leichtverschwitztundzwergig",
      beschreibung: "Mitreißende Musik, strahlende Kinderaugen und ganz viel gute Laune: Das Rockquartett „Leicht Verschwitzt Und Zwergig“ spielt tanzbare (Kinder-)Lieder für alle – egal ob mit Maxi-Cosi, Retro-Rennrad oder neuer Hüfte.",
    },
    "Lisa liest Geschichte": {
      wer: "Lisa Suitner",
      foto: "abendgeschichten.png",
      web: "lisasuitner.wpcomstaging.com",
      insta: "@lisa.suitner",
      beschreibung: "Schnapp dir dein Kuscheltier, mach's dir gemütlich und lass den Tag mit einem Lächeln ausklingen. Lisa – Clownin, Musikerin und Geschichtenerzählerin aus Vorarlberg – bringt ihre liebsten Geschichten samt Humor und Musik mit.",
    },
    "Männerkreis": {
      wer: "Oliver (Gemeinschaft Sulzbrunn)",
      foto: "maennerkreis.png",
      beschreibung: "Im geschützten Raum tauschen wir uns über Themen aus, die uns als Mann der heutigen Zeit bewegen oder herausfordern. Wild, sanft und authentisch – ein Raum, in dem wir uns hören, begegnen und berühren.",
    },
    "Feuershow & Akrobatik mit Trommelbegleitung": {
      wer: "Artistik Calimbaro",
      foto: "feuer-akrobatikshow.jpg",
      web: "artistik-calimbaro.de",
      insta: "@artistik_calimbaro",
      beschreibung: "Artistik Calimbaro ist seit 2019 fester Bestandteil des Wundaplunda. Freut euch auf die bezaubernde Feuer-Akrobatikshow von Florian & Susanne – Leidenschaft, Energie und pure Magie in der Nacht, begleitet von der Trommelgruppe.",
    },
    "Schlangen & Zauberei filzen mit Fee": {
      wer: "Fee",
      foto: "filzen.jpg",
      insta: "@fees_musikgaertchen",
      beschreibung: "Im Nassfilz-Workshop entstehen bunte Filzkugeln mit funkelndem Muggelstein im Inneren und eine charmante Filzschlange – zwei Projekte zum Mitnehmen. Keine Vorkenntnisse nötig, alle Materialien werden gestellt.",
    },
    "Wahrnehmungs- / Sinnesübungen in der Natur": {
      wer: "Lena (Wildnispädagogin)",
      foto: "wahrnehmung.png",
      web: "wild-und-weiter.de",
      beschreibung: "Wie können bewusste Wahrnehmung und intuitive Zugänge unser Erleben in der Natur vertiefen? Durch Übungen und Spiele aus der Wildnispädagogik schärfen wir die Sinne, stärken die Aufmerksamkeit für feine Signale und erleben unsere Intuition. Nur für Erwachsene.",
    },
    Bogenbau: {
      wer: "Laurenz & Lena",
      foto: "bogenbau.png",
      web: "wild-und-weiter.de",
      mitbringen: "eigenes Schnitzmesser",
      beschreibung: "Wie entsteht aus einem Stück Holz ein Bogen? Mit Schnitzmesser und Geduld gestalten wir kleine funktionsfähige Bögen und entdecken, wie Form, Spannung und Funktion vom Holz abhängen.\n\nHallo, mein Name ist Laurenz Verweyen. \nDie vier Elemente sind ein roter Faden in meinem Leben. Ob in den Bergen, auf dem Wasser, in der Luft oder am Feuer – als Wildnispädagoge und leidenschaftlicher Natursportler durfte ich jedem von ihnen auf besondere Weise begegnen. Diese Erfahrungen haben meinen Blick auf die Natur geprägt und wecken immer wieder die Freude, draußen zu lernen, zu staunen und Wissen weiterzugeben. Ich freue mich darauf, euch auf dem Festival zu begegnen!\n\nLena: \nLena Maucher, Jahrgang 1986, langjährige Wildnispädagogin, lebt mit ihrer Familien im Allgäu. Ich liebe besonders das Draußen-unterwegs-sein und staune leidenschaftlich gerne über die Weisheit der Natur. Mich fasziniert das alte Wissen über das Leben in und mit der Wildnis sowie die Frage, wie wir innerhalb unserer modernen Welt wieder eine tiefere Verbindung zu unserer natürlichen Umwelt finden können.\nMehr infos unter: www.wild-und-weiter.de",
    },
    Baumklettern: {
      wer: "Stefan (Baumkletterer & Erlebnispädagoge)",
      foto: "baumklettern.png",
      web: "https://stefanlipp.netlify.app/",
      beschreibung: "Hoch hinaus, Äste unter den Händen und die Welt von oben sehen: Baumklettern ist Abenteuer pur. Jedes Kind, das möchte, darf sicher und begleitet von Stefan in die Baumwipfel.\n\nStefan Lipp - Lern Raum Gestaltung\n\nStefan kreiert gerne Räume, sowohl physisch als Bauwerk, als auch zum \nLernen und Erleben. Als Zimmermann und Sohn einer Sägewerksfamilie ist \ner mit dem Element Holz sehr verbunden. Und wenn er nicht gerade Holz \nbearbeitet, klettert er gerne Bäume hinauf. Das lässt ihn lebendig \nfühlen und weckt tief wurzelnde Kräfte. Dieses Erlebnis ermöglicht er \nauch gerne anderen Menschen, indem er sie beim Baumklettern begleitet.",
    },
    "Eltern-Kind-Akrobatik": {
      wer: "Susanne (Artistik Calimbaro)",
      foto: "eltern-kind-akrobatik.png",
      beschreibung: "Gemeinsam lachen, balancieren und Vertrauen stärken: In spielerischen Übungen lernen Groß und Klein einfache akrobatische Elemente – ob fliegende Kinder oder tragende Eltern. Keine Vorkenntnisse nötig, für Kinder von 3–6 Jahren.",
    },
    Clownspiele: {
      wer: "Florian (Artistik Calimbaro, ausgebildeter Clown)",
      foto: "clownspiele.png",
      web: "artistik-calimbaro.de",
      insta: "@artistik_calimbaro",
      beschreibung: "Lachen, spielen und gemeinsam kreativ sein! Mit lustigen Clownspielen entdecken Kinder ab 6 Jahren spielerisch Ausdruck, Fantasie und Bewegung – und stärken nebenbei Selbstvertrauen und Teamgeist. Begrenzte Plätze, bitte pünktlich kommen.",
    },
    "Hirnhopsen für Alle": {
      wer: "Florian (Artistik Calimbaro)",
      foto: "hirnhopsen.png",
      web: "artistik-calimbaro.de",
      insta: "@artistik_calimbaro",
      beschreibung: "Jede:r bekommt zwei Bälle: Durch rhythmische Koordinationsübungen werden beide Gehirnhälften aktiviert – Konzentration, Reaktion und Motorik spielerisch gefördert, mit viel Spaß und Bewegung.",
    },
    Tribubu: {
      foto: "tribubu.png",
      web: "tribubu.com",
      insta: "@tribubumusic",
      beschreibung: "Weltmusik in einer fesselnden Rumba-Afro-Folk-Fusion. Mit Mitgliedern aus Spanien, England und der Elfenbeinküste verbindet TRIBUBU seit 2018 Kulturen und Talente über Sprachgrenzen hinweg – ein unverwechselbarer, mitreißender Sound.",
    },
    "Weiden-Zauberstäbe": {
      wer: "Tina (Naturgestalterin & Weidenflechterin)",
      foto: "weiden.png",
      beschreibung: "Aus frischen Weidenruten gestalten wir wunderschöne Weidenzauberstäbe oder dekorative Weidenfische. Für Groß und Klein, ganz ohne Vorkenntnisse – kreative Kunst aus der Natur.\n\nTina ist ausgebildete Weidenflechterin aus dem Allgäu!",
    },
    "5 Minuten Feuer & Wilde Küche": {
      wer: "Lena (Wildnispädagogin)",
      foto: "feuermachen.png",
      beschreibung: "In diesem Familienworkshop lernen Groß und Klein verschiedene Techniken des Feuermachens mit Magnesiumstab und Feuerstein kennen. Gemeinsam entzünden wir ein Lagerfeuer, erfahren Wissenswertes über geegneten Zunder und Brennmaterialien und erleben, wie aus einem Funken eine Kochstelle entsteht. Anschließend bereitn wir eine einfache Leckerei über dem Feuer zu und genießen die besondere Atmosphäre der Feuerküche in der Natur.\n\nLena Maucher, Jahrgang 1986, langjährige Wildnispädagogin, lebt mit ihrer Familien im Allgäu. Ich liebe besonders das Draußen-unterwegs-sein und staune leidenschaftlich gerne über die Weisheit der Natur. Mich fasziniert das alte Wissen über das Leben in und mit der Wildnis sowie die Frage, wie wir innerhalb unserer modernen Welt wieder eine tiefere Verbindung zu unserer natürlichen Umwelt finden können.",
      web: "www.wild-und-weiter.de",
    },
    "Vortrag LAVI – erleb es": {
      wer: "Anouk & Regina (erLEBes Familie)",
      foto: "lavi.png",
      web: "lavi-schule.de/Wer-wir-sind",
      beschreibung: "Bewusst wachsen als Familie - vom ICH zum WIR\n\nDeine innere Haltung und deine Werte prägen dein Sein und dein Handeln – und damit das Miteinander in deiner Familie.\nWas du in dir veränderst, wirkt nach außen und kann euer Familienleben nachhaltig wandeln.\n\nWir geben 2 Workshops auf dem Wundaplunda und laden ein, beide in Kombination zu besuchen und auch unabhängig voneinander.\n\nDie Workshops bieten Raum für Entwicklung und persönliches Wachstum – für dich als Mensch und damit für deine Beziehungen in der Familie. Es geht darum in die Themenfelder hinein zu spüren, sie zu bewegen und zu erLEBen.\n\nDie Workshop- Begleiterinnen sind Anouk und Regina – die Initiatorinnen von erLEBes Familie.\nGemeinsam öffnen wir Räume für Eltern und Familien, die sich entwickeln und ihr Bewusstsein erweitern wollen, um ihr Familienleben authentischer, klarer und friedvoller\ngestalten zu können.\n\nerLEBes Workshop 2: Vom ICH zum WIR – Beziehung in Familie leben\nWie wirkt meine innere Welt auf meine Beziehungen in der Familie?\nWie kann ich Verbindung im Alltag bewusst gestalten?\nIn diesem Teil geht es um unsere Begegnungen im Familienalltag und darum, wie ich das\nWIR in meiner Familie lebe. Wir bewegen im Gespräch und auf spielerische Weise die\nThemen Persönliche Sprache, Kommunikation und Bedürfnisse im Familiensystem.",
    },
    "Schnitzen (Schnitzführerschein)": {
      wer: "Andreas",
      foto: "schnitzen.png",
      mitbringen: "Schnitzmesser (kann vor Ort ausgeliehen werden), wetterfeste Kleidung, geschlossene Schuhe, lange Hose",
      hinweis: "Kinder ab 8 Jahren, jüngere nur mit Begleitperson · max. 16 Kinder",
      web: "naturnase.de/referenten.html",
      beschreibung: "Kleine Schnitzereien auch für Große\n\nKurs für Kinder ab 8 Jahren, jüngere bitte mit Begleitperson\nIn diesem Outdoor-Schnitzkurs lernt ihr den sicheren Umgang und Techniken mit dem eigenen Taschenmesser oder Kinderschnitzmesser.\nIhr schnitzt phantasievolle eigene Kreationen, kleine Perlen und andere Ideen aus Frischholz.\n \nVorkenntnisse sind nicht nötig, die Kinder erlernen den richtigen Umgang mit dem Messer.\nZum Abschluss erhaltet Ihr einen „Messerführer*innenschein“\n \nBitte mitbringen: \nSchnitzmesser können vor Ort ausgeliehen werden, eigene Taschenmesser oder (Kinder-)Schnitzmesser dürfen gerne mitgebracht werden\nWetterfeste Kleidung, die auch schmutzig werden darf, geschlossene Schuhe und lange Hose\n \nMax. 16 Kinder.\n \nAndreas Eckl\nJahrgang 1965\nNatur- & Umwelt- & Erlebnispädagoge\n„Hab Geduld, alle Dinge sind schwierig, bevor sie einfach werden.“",
    },
    "Contact Kids": {
      wer: "Natalie Zeitler",
      foto: "contakids.jpg",
      beschreibung: "„ContaKids“ ist eine spielerische Bewegungsmethode für Eltern und Kinder (2–5 Jahre). Durch Bewegung, Berührung und gemeinsames Spiel entsteht eine neue Form körperlicher Kommunikation – Kinder stärken Motorik und Selbstvertrauen, Eltern das Vertrauen in sich und ihr Kind.",
    },
    "Baumpilze & Pilzpapier": {
      wer: "Larissa & Corinna (ausgebildete Pilzcoaches)",
      foto: "pilzpapier.png",
      beschreibung: "Faszination Baumpilze: Wir lernen, was Baumpilze sind, wie man sie erkennt und welche Rolle sie im Wald spielen – und schöpfen dann gemeinsam Papier aus Pilzen, wahlweise mit getrockneten Blüten und Samen. Ein Workshop für die ganze Familie.\n\nWir sind Larissa und Corinna, ausgebildete PilzCoaches aus dem Allgäu – und wir glauben, dass Pilze viel mehr können, als nur auf dem Teller zu landen. In diesem Workshop zeigen wir euch zwei faszinierende Baumpilze von einer ganz anderen Seite",
    },
    "Ton brennen": {
      wer: "Amelie & Matthias",
      foto: "ton-brennen.png",
      beschreibung: "Kinder ab 6 Jahren gestalten gemeinsam mit einem Elternteil eigene kleine Objekte aus Ton. Anschließend brennen wir die Werke im Feuer und beobachten, wie der Ton fest und zum Werkstück wird.",
    },
    "Baumpilze & Naturkosmetik": {
      wer: "Larissa & Corinna (ausgebildete Pilzcoaches)",
      foto: "deo-salbe.png",
      beschreibung: "Baumpilze – das stille Wunder des Waldes: Wir lernen sie kennen, verstehen ihre Rolle im Wald und nutzen die Kraft des Zunderschwamms, um gemeinsam eine Salbe und ein Deo herzustellen. Natur pur zum Mitnehmen.",
    },
    "Funkenflug Band": {
      foto: "funkenflug.png",
      web: "funkenflugmusik.de",
      insta: "@funkenflugmusik",
      beschreibung: "Die Münchner Band Funkenflug bringt mit ihrem Album „Durch die Blume“ das Gefühl eines ewigen Sommerabends auf die Bühne – eine lebendige Mischung aus Folk, Swing und Pop mit Gitarre, Geige, Kontrabass und mehrstimmigem Gesang.",
    },
    "Kids Singen, Tanzen, Bewegen": {
      wer: "Amelie (Stimmtherapeutin)",
      foto: "singen-bewegen.png",
      web: "akademie-rueckenwind.de",
      insta: "@akademie_rueckenwind",
      beschreibung: "Musikalischer Mitmach-Workshop für Kinder von 3 bis 6 Jahren: Wir singen kindgerechte Lieder und erwecken sie mit Bewegungen, Gesten und kleinen Rollenspielen zum Leben. Freude, Fantasie und gemeinsames Erleben stehen im Mittelpunkt.\n\n Amelie Zech\nAmelie ist Yogalehrerin und verfügt über mehrere Ausbildungen im Bereich der Stimmtherapie. Mit ihrer Akademie Rückenwind begleitet sie Menschen auf ihrem Weg zu einer freien, kraftvollen Stimme. Ihr Angebot umfasst sowohl Kinder- als auch Erwachsenenkurse sowie individuelle Begleitung. Weitere Informationen unter: www.akademie-rueckenwind.de",
    },
    Wetterkunde: {
      wer: "Laurenz (Wildnis- & Erlebnispädagoge)",
      foto: "wetterkunde.png",
      beschreibung: "Grundkurs Wetterkunde – Natur lesen lernen\nWetter ist ständig in Bewegung – sichtbar, spürbar und voller Hinweise, die die Natur selbst gibt. In diesem Grundkurs werden die Grundlagen der Wetterkunde vermittelt und der Blick geschärft für das, was Wolken, Wind und Atmosphäre über kommende Entwicklungen verraten.\nIm Mittelpunkt steht das Lesen erster Wetterzeichen: Wolkenbilder, Windveränderungen und typische Wetterlagen werden verständlich erklärt und praktisch eingeordnet.\nZiel ist ein sicherer Einstieg in das Verständnis von Wetter – für mehr Klarheit, Orientierung und Vertrauen draußen in der Natur\n\nHallo, mein Name ist Laurenz Verweyen. \nDie vier Elemente sind ein roter Faden in meinem Leben. Ob in den Bergen, auf dem Wasser, in der Luft oder am Feuer – als Wildnispädagoge und leidenschaftlicher Natursportler durfte ich jedem von ihnen auf besondere Weise begegnen. Diese Erfahrungen haben meinen Blick auf die Natur geprägt und wecken immer wieder die Freude, draußen zu lernen, zu staunen und Wissen weiterzugeben. Ich freue mich darauf, euch auf dem Festival zu begegnen!",
    },
    "Clown Malab Show": {
      wer: "Clown Malab",
      foto: "clownsshow.png",
      beschreibung: "Señor Malab betritt die Bühne und lässt mit clownesker Artistik Keulen und Bälle durch die Luft tanzen. Nicht alles bleibt in der Luft – aber garantiert wird viel gelacht. Ein magisches Erlebnis für die ganze Familie.",
    },
    "Clan Show": {
      foto: "clan-open-stage.png",
      beschreibung: "Bühne frei für die Clans! In bunter, unterstützender Atmosphäre zeigen die Clans, was in ihnen steckt – lustig, kreativ, wild oder überraschend. Es geht nicht um Perfektion, sondern um Freude, Mut und gemeinsames Erleben.",
    },
    "Bienenlehrgang für Groß und Klein": {
      wer: "Josef",
      beschreibung: "Josef lebt und arbeitet in der Gemeinschaft Sulzbrunn. Mit seinen Bienenvölkern produziert er den Sulzbrunner Honig und gibt spannende Einblicke in die faszinierende Welt der Bienen.\n\nIn diesem Workshop erfahrt ihr, wie ein Bienenvolk lebt, wie Honig entsteht und warum Bienen für unsere Natur unverzichtbar sind. Gemeinsam werfen wir einen Blick hinter die Kulissen der Imkerei und entdecken Wissenswertes rund um das Leben im Bienenstock.\n\nBringt eure Fragen mit – ob klein oder groß! Alles, was ihr schon immer über Bienen, Honig und die Arbeit eines Imkers wissen wolltet, ist willkommen.\n\nWir freuen uns auf einen lebendigen Austausch und viele spannende Entdeckungen rund um die Bienen der Gemeinschaft Sulzbrunn.",
      foto: "bienenlehrgang-fuer-gross-und-klein-mrjddv42.jpg",
    },
    "Anreise & Ankommen": {
      beschreibung: "Willkommen zum Wundaplunda! Schaut doch gerne unter ALLE INFOS A-Z. Hier findet ihr alle wichtigen Infos zur Anreise und eurem Ankommen. Wir wünschen dir eine gute Fahrt und freuen uns riesig, dass du mit dabei bist!",
      web: "www.wundaplunda.de",
      insta: "@wundaplunda",
    },
    "Eröffnung": {
      wer: "Wundaplunda Team",
      foto: "eroeffnung-mrjd0hzc.jpg",
      beschreibung: "Wir freuen uns riesig, gemeinsam mit euch in diese wunda-schöne Woche zu starten!\n\nWir sind Fabienne, Carmen und Oliver – das Wundaplunda-Team und laden euch ein, den Alltag hinter euch zu lassen und ganz hier bei uns anzukommen.\nEs wäre toll, wenn möglichst alle dabei sind, denn dieser gemeinsame Auftakt ist für uns ein ganz besonderer Moment. Wir freuen uns auf euch!",
    },
    "EingangAusgang Impro-Theater": {
      wer: "EingangAusgang Impro-Theater",
      beschreibung: "Kommt mit auf eine fantastische Heldenreise! Beim Improvisations-Theater bestimmt ihr, das Publikum, was passiert – eure Ideen verwandeln sich live auf der Bühne in eine einzigartige Geschichte. Keine Vorstellung ist wie die andere.",
      foto: "improtheater.png",
    },
    "Frühstück": {
      beschreibung: "Nur wenn du Frühstück für die ganze Woche gebucht hast.",
    },
    "Sulzbrunner Markt": {
      wer: "Handwerk & Kunst",
      beschreibung: "Auf dem Sulzbrunner Markt findet ihr viele schöne, handgemachte Schätze: kunstvolle Weidenflechterei, Getöpfertes, Kunst, Schmuck, Kerzen aus Sulzbrunn und Kinderschminken für die Kleinen.\n\nAlle Produkte sind mit viel Liebe und Sorgfalt hergestellt und sorgfältig ausgewählt. Wir freuen uns, wenn ihr die Menschen unterstützt, die mit Herzblut und handwerklichem Können hinter ihren Produkten stehen. Viel Freude beim Stöbern und Entdecken!",
      foto: "sulzbrunner-markt-mrjdr9ov.jpg",
    },
    "Die Bar hat geöffnet!": {
      beschreibung: "An unserer Bar erwarten euch lecker Kaffee aus der Siebträgermaschine, frische Waffeln,  kühle, alkoholfreie Getränke und Eis. Alles bio! \nBringt gerne eure eigene Tasse für den Kaffee mit. Falls ihr keine dabeihabt, könnt ihr euch in der Draußenküche eine Leihtasse ausleihen. \nBitte stellt die Leihtassen nach dem Spülen wieder dort ab, damit sie für die Nächsten bereitstehen.\n\nWir verkaufen nachmittags zusätzlich Stockbrot sowie Calzone-Teig zum Selbermachen über dem Lagerfeuer oder auf unserer Murrikka Pfanne.\n\nBitte bringt außerdem Bargeld mit, wir haben keine Kartenzahlung an der Bar.\nKommt vorbei und lasst es euch schmecken!",
    },
    "Waffeln/Kaffee/Eis": {
      beschreibung: "An unserer Bar erwarten euch lecker Kaffee aus der Siebträgermaschine, frische Waffeln,  kühle, alkoholfreie Getränke und Eis. Alles bio! \nBringt gerne eure eigene Tasse für den Kaffee mit. Falls ihr keine dabeihabt, könnt ihr euch in der Draußenküche eine Leihtasse ausleihen. \nBitte stellt die Leihtassen nach dem Spülen wieder dort ab, damit sie für die Nächsten bereitstehen.\n\nWir verkaufen nachmittags zusätzlich Stockbrot sowie Calzone-Teig zum Selbermachen über dem Lagerfeuer oder auf unserer Murrikka Pfanne.\n\nBitte bringt außerdem Bargeld mit, wir haben keine Kartenzahlung an der Bar.\nKommt vorbei und lasst es euch schmecken!",
    },
    "Waffeln/Kaffee/Eis/Getränke/Stockbrotteig": {
      beschreibung: "An unserer Bar erwarten euch lecker Kaffee aus der Siebträgermaschine, frische Waffeln,  kühle, alkoholfreie Getränke und Eis. Alles bio! \nBringt gerne eure eigene Tasse für den Kaffee mit. Falls ihr keine dabeihabt, könnt ihr euch in der Draußenküche eine Leihtasse ausleihen. \nBitte stellt die Leihtassen nach dem Spülen wieder dort ab, damit sie für die Nächsten bereitstehen.\n\nWir verkaufen nachmittags zusätzlich Stockbrot sowie Calzone-Teig zum Selbermachen über dem Lagerfeuer oder auf unserer Murrikka Pfanne.\n\nBitte bringt außerdem Bargeld mit, wir haben keine Kartenzahlung an der Bar.\nKommt vorbei und lasst es euch schmecken!",
    },
    "Unsere Bar hat geöffnet!": {
      beschreibung: "Bringt gerne eure eigene Tasse für den Kaffee mit. Falls ihr keine dabeihabt, könnt ihr euch in der Draußenküche eine Leihtasse ausleihen. \nBitte stellt die Leihtassen nach dem Spülen wieder dort ab, damit sie für die Nächsten bereitstehen.\n\nWir verkaufen nachmittags zusätzlich Stockbrot sowie Calzone-Teig zum Selbermachen über dem Lagerfeuer oder auf unserer Murrikka Pfanne.\n\nBitte bringt außerdem Bargeld mit, wir haben keine Kartenzahlung an der Bar.\nKommt vorbei und lasst es euch schmecken!",
    },
    "Unser Seminarhaus Kiosk hat geöffnet!": {
      beschreibung: "Brauchst du noch ein kühles Getränk vor Allikée und der Feuershow? Dann schau bei uns vorbei!",
    },
    "Allikée Trommelgruppe": {
      wer: "Alex (Trommelstudio Kakilambe)",
      beschreibung: "„Allikée“ heißt so viel wie „Auf geht's!“ – westafrikanische Trommelmusik, gewürzt mit europäischen und lateinamerikanischen Einflüssen. Mal traditionell, mal modern, immer mit Freude und Groove.",
      foto: "allikee.png",
      web: "kakilambe.de",
    },
    "Artistik Calimbaro: Feuershow & Akrobatik mit Trommelbegleitung": {
      wer: "Artistik Calimbaro",
      beschreibung: "Artistik Calimbaro ist seit 2019 fester Bestandteil des Wundaplunda. Freut euch auf die bezaubernde Feuer-Akrobatikshow von Florian & Susanne – Leidenschaft, Energie und pure Magie in der Nacht, begleitet von der Trommelgruppe.",
      foto: "feuer-akrobatikshow.jpg",
      web: "artistik-calimbaro.de",
      insta: "@artistik_calimbaro",
    },
    "Yoga am Morgen": {
      wer: "Amelie (Stimmtherapeutin & Yogalehrerin)",
      beschreibung: "Beim Yoga am Morgen mobilisieren wir den ganzen Körper, entspannen und lassen die Gedanken los – kraftvoll und entspannt in den Wundaplunda-Tag mit Amelie Zech.\n\n Amelie Zech\nAmelie ist Yogalehrerin und verfügt über mehrere Ausbildungen im Bereich der Stimmtherapie. Mit ihrer Akademie Rückenwind begleitet sie Menschen auf ihrem Weg zu einer freien, kraftvollen Stimme. Ihr Angebot umfasst sowohl Kinder- als auch Erwachsenenkurse sowie individuelle Begleitung. Weitere Informationen unter: www.akademie-rueckenwind.de",
      foto: "yoga.png",
      web: "akademie-rueckenwind.de",
      insta: "@akademie_rueckenwind",
    },
    "Klang & Qigong – Entspannt in den Tag starten": {
      wer: "Anna-Elisabeth (Yogalehrerin)",
      beschreibung: "Beginne den Tag mit einer wohltuenden Kombination aus sanften Qigong-Übungen und entspannenden Klängen. Durch achtsame Bewegung, bewusstes Atmen und die harmonischen Schwingungen der Instrumente kannst du zur Ruhe kommen, neue Energie tanken und gestärkt in den Tag starten. Es sind keine Vorkenntnisse erforderlich – alle sind herzlich willkommen.",
      web: "akademie-rueckenwind.de",
      insta: "@akademie_rueckenwind",
    },
    "Schlangen & Zauberei filzen": {
      wer: "Fee",
      beschreibung: "Im Nassfilz-Workshop entstehen bunte Filzkugeln mit funkelndem Muggelstein im Inneren und eine charmante Filzschlange – zwei Projekte zum Mitnehmen. Keine Vorkenntnisse nötig, alle Materialien werden gestellt.",
      foto: "filzen.jpg",
      insta: "@fees_musikgaertchen",
    },
    "Ton brennen & Lehmgeister": {
      wer: "Amelie & Matthias",
      beschreibung: "Kinder ab 6 Jahren gestalten gemeinsam mit einem Elternteil eigene kleine Objekte aus Ton. Anschließend brennen wir die Werke im Feuer und beobachten, wie der Ton fest und zum Werkstück wird.\nmit Amelie & Matze",
      foto: "ton-brennen.png",
    },
    "Waldrallye - Spielewagen - Flying Fox": {
      beschreibung: "Ganztägige Entdecker-Angebote: Auf der Waldrallye zieht ihr mit Entdeckerrucksäcken (Hase, Eule, Fuchs …) los und löst spannende Aufgaben in der Natur. \nDazu der Spielewagen des Kreisjugendrings mit vielen Fahrzeugen und Spielen – und die Flying Fox für ein kleines Abenteuer mit Schwung.\n\nRucksackverleih\nDie Rucksäcke können zu folgenden Zeiten gegen 10 € Pfand an der Bar ausgeliehen werden:\n\n08:00 – 10:00 Uhr \n10:00 – 12:00 Uhr \n\nSamstags nur bis mittags! \n\nBitte holt die Rucksäcke zu Beginn des jeweiligen Zeitfensters an der Bar ab und bringt sie spätestens zum Ende des Zeitfensters wieder zurück, damit sie den nächsten Ausleihenden zur Verfügung stehen.",
    },
    "Spielewagen · Flying Fox": {
      beschreibung: "Juchuh wir lieben diese Fahrzeuge. Der Spielewagen des Kreisjugendrings mit vielen Fahrzeugen und Spielen steht wieder zur Verfügung– und die Flying Fox für ein kleines Abenteuer mit Schwung.",
      foto: "waldrallye.jpg",
    },
    "Kaffee & Kuchen & Hoflädle": {
      beschreibung: "Kaffee, Kuchen und ein kleiner, feiner Wundaplunda-Markt mit liebevoll ausgewähltem Kunsthandwerk aus Sulzbrunn: Honig, Bienenwachskerzen, Weidenkörbe, Getöpfertes, Schmuck und mehr. Mit Kinderschminken und Kuchen des Vereins Füreinander Miteinander e.V., die die ganzjährige Spielgruppe Pappelkinder in der Sulzbrunner Kinderjurte ins Leben gerufen haben. Die Kuchenspenden fließen direkt in dieses Projekt!",
      foto: "markt.png",
      web: "natuerlich-miteinander.net",
    },
    "Kinderband \"Leicht Verschwitzt Und Zwergig\"": {
      beschreibung: "Mitreißende Musik, strahlende Kinderaugen und ganz viel gute Laune: Das Rockquartett „Leicht Verschwitzt Und Zwergig“ spielt tanzbare (Kinder-)Lieder für alle – egal ob mit Maxi-Cosi, Retro-Rennrad oder neuer Hüfte.",
      foto: "zwergig.png",
      insta: "@leichtverschwitztundzwergig",
    },
    "Tribubu - World Music Band": {
      beschreibung: "Weltmusik in einer fesselnden Rumba-Afro-Folk-Fusion. Mit Mitgliedern aus Spanien, England und der Elfenbeinküste verbindet TRIBUBU seit 2018 Kulturen und Talente über Sprachgrenzen hinweg – ein unverwechselbarer, mitreißender Sound.",
      foto: "tribubu.png",
      web: "tribubu.com",
      insta: "@tribubumusic",
    },
    "Vorlese- & Mitmachgeschichte: Das schrecklichste Monster der Welt": {
      wer: "Amelie",
      beschreibung: "Das schrecklichste Monster der Welt\n\nKreative Vorlese- und Mitmachstunde nach dem Bilderbuch von Hans-Christian Schmidt und Andreas Német\n\nDas schrecklichste Monster der Welt versucht mit Grimassen, wilden Verkleidungen und der Hilfe anderer Monster, allen Kindern Angst einzujagen. Doch die Kinder lassen sich nicht so leicht erschrecken. Gemeinsam begleiten wir das Monster durch seine verrückten Versuche und werden selbst zu mutigen Heldinnen und Helden der Geschichte. Am Ende zeigt sich: Manchmal sind die Dinge, vor denen wir uns fürchten, gar nicht so schrecklich, wie sie aussehen. Das Besondere an diesem Bilderbuch ist, dass die Kinder aktiv Teil der Handlung werden und das Monster schließlich selbst in die Flucht schlagen.",
      web: "akademie-rueckenwind.de",
      insta: "@akademie_rueckenwind",
    },
    "Open Space - Gestalte das Programm mit!": {
      beschreibung: "Open Space – Gestalte das Programm mit!\n\nEin Open Space ist ein offenes Format, bei dem alle Teilnehmenden die Möglichkeit haben, selbst ein Thema, einen Workshop, eine Diskussionsrunde oder eine andere Aktivität anzubieten. So entsteht ein abwechslungsreiches Programm, das von den Ideen und Interessen der Gruppe lebt.\n\nWenn du etwas anbieten möchtest, trage dich bitte bis Donnerstagabend, 18:00 Uhr, in die Liste an der Bar ein - wir hängen diese aus! Gib dabei möglichst kurz an, was du anbieten möchtest.\n\nAnschließend schauen wir uns alle eingegangenen Angebote an, planen sie ein und veröffentlichen sie im Programm.\n\nWir freuen uns auf eure Ideen und eure Beiträge!",
      foto: "open-space-gestalte-das-programm-mit-mrjgf96w.jpg",
    },
    "Funkenflug Band - Folk, Swing, Pop": {
      beschreibung: "Die Münchner Band Funkenflug bringt mit ihrem Album „Durch die Blume“ das Gefühl eines ewigen Sommerabends auf die Bühne – eine lebendige Mischung aus Folk, Swing und Pop mit Gitarre, Geige, Kontrabass und mehrstimmigem Gesang.",
      foto: "funkenflug.png",
      web: "funkenflugmusik.de",
      insta: "@funkenflugmusik",
    },
    "Gemeinsame Abschlusszeremonie": {
      beschreibung: "Zum Abschluss unserer gemeinsamen Woche laden wir euch herzlich zur Abschlusszeremonie ein.\n\nHier möchten wir gemeinsam auf die vergangenen Tage zurückblicken, besondere Momente miteinander teilen und das Erlebte in einem schönen Rahmen ausklingen lassen. Es ist eine Gelegenheit, Danke zu sagen, Eindrücke mitzunehmen und unseren gemeinsamen Abschluss bewusst zu feiern.\n\nWir freuen uns, wenn möglichst viele von euch dabei sind und wir das Wochenende gemeinsam abrunden.",
    },
    "Morgen-Workout – Kraftvoll in den Tag": {
      wer: "Matthias Zech",
      beschreibung: "Morgen-Workout – Kraftvoll in den Tag\nFür Erwachsene\nRaus aus dem Schlafmodus, rein in die Bewegung! Dieses Morgen-Workout bringt Puls, Muskeln und Motivation auf Touren. Mit einer abwechslungsreichen Mischung aus Ausdauer-, Kraft- und Koordinationsübungen starten wir aktiv und energiegeladen in den Tag.\nGemeinsam schwitzen, den Kreislauf ankurbeln und die eigene Stärke spüren – ganz ohne Leistungsdruck, aber mit Power. Der perfekte Start für alle, die wach werden wollen, bevor der Kaffee wirkt.\nDas Workout ist für unterschiedliche Fitnesslevel geeignet, da jede*r das eigene Tempo bestimmen kann.\nBitte bequeme Kleidung und etwas zu trinken mitbringen.\nFür Erwachsene.\n\nMatthias Zech\nMatthias ist Fachtrainer für Ausdauersport und selbst ambitionierter Sportler. Nebenberuflich begleitet er Athletinnen und Athleten auf dem Weg zu ihren sportlichen Zielen – vom ersten Wettkampf bis hin zur Triathlon-Langdistanz. Weitere Informationen unter: www.howtoathletic.de",
    },
    "Slackline Workshop": {
      wer: "Daniel",
      beschreibung: "Ich slackline seit fast 20 Jahre und liebe es, Menschen jeden Alters für das Balancieren zu begeistern. Für mich geht es dabei nicht nur um Sport, sondern auch um spielerische Bewegung, Konzentration und das Vertrauen in den eigenen Körper. In meinem Workshop steht Spaß an erster Stelle. Egal ob jemand zum ersten Mal auf der Line steht oder schon ein bisschen Erfahrung mitbringt. Ich freue mich darauf, gemeinsam mit Kindern und Eltern die Freude am Gleichgewicht zu entdeckem.",
    },
    Schmuckworkshop: {
      wer: "Gabriele",
      beschreibung: "Mein Name ist Gabriele Nikol und ich wohne im schönen oberfränkischen Forchheim. Seit einiger Zeit habe ich eine große Leidenschaft entdeckt: \ndas Herstellen von Halsketten, Armbändern und Ringen – ganz ohne formale  Ausbildung, als Autodidaktin. Dabei liebe ich es, mit den \nunterschiedlichsten Materialien zu experimentieren. Ob Perlen, \nEdelsteine, Baumperlen, Schmuckdraht oder außergewöhnliche Fundstücke, jede Kreation erzählt ihre eigene kleine Geschichte.\n\nDas Gestalten dieser Schmuckstücke bereitet mir nicht nur Freude, \nsondern erfüllt mich auch mit Stolz, wenn ich sehe, wie aus einfachen  Materialien etwas Einzigartiges entsteht. Beim Wundaplunda-Sommererlebnis möchte ich diese Begeisterung gerne weitergeben. Es ist mir ein \nHerzenswunsch, meine Erfahrungen und Techniken mit anderen zu teilen und gemeinsam kreativ zu sein.\n\nLasst uns zusammen in die faszinierende Welt des Schmuckdesigns eintauchen und unvergessliche Momente beim Wundaplunda erleben!",
    },
    "Mein ICH - mein SelbstWert - mein Wert in der Familie": {
      wer: "Anouk & Regina (erLEBes Familie)",
      beschreibung: "Bewusst wachsen als Familie - vom ICH zum WIR\n\nDeine innere Haltung und deine Werte prägen dein Sein und dein Handeln – und damit das Miteinander in deiner Familie.\nWas du in dir veränderst, wirkt nach außen und kann euer Familienleben nachhaltig wandeln.\n\nWir geben 2 Workshops auf dem Wundaplunda und laden ein, beide in Kombination zu besuchen und auch unabhängig voneinander.\nDie Workshops bieten Raum für Entwicklung und persönliches Wachstum – für dich als Mensch und damit für deine Beziehungen in der Familie. Es geht darum in die Themenfelder hinein zu spüren, sie zu bewegen und zu erLEBen.\n\nDie Workshop- Begleiterinnen sind\nAnouk und Regina – die Initiatorinnen von erLEBes Familie.\nGemeinsam öffnen wir Räume für Eltern und Familien, die sich entwickeln und ihr Bewusstsein erweitern wollen, um ihr Familienleben authentischer, klarer und friedvoller\ngestalten zu können.\n\nerLEBes Workshop 1: Mein ICH - mein SelbstWert - mein Wert in der Familie\nWie sieht meine innere Welt aus? Wie bewusst bin ich mir meiner Selbst und meinen\nAnteilen, meinen lichten und meinen dunklen Seiten?\nWas bedeutet für mich Selbstwert und was ist der kleine, sehr feine Unterschied zum\nSelbstvertrauen?\nWelche Gedanken & Gefühle begleiten mich zu diesem Thema?\nWie kann ich hier mein Bewusstsein erweitern & positiv auf mein Familienleben wirken?\nWir öffnen gemeinsam den Raum nach Innen - um ein tieferes Verständnis für uns selbst\nund unseren Wert als Mensch & Elternteil zu entwickeln\nerLEBes Workshop 2: Vom ICH zum WIR – Beziehung in Familie leben\nWie wirkt meine innere Welt auf meine Beziehungen in der Familie?\nWie kann ich Verbindung im Alltag bewusst gestalten?\nIn diesem Teil geht es um unsere Begegnungen im Familienalltag und darum, wie ich das\nWIR in meiner Familie lebe. Wir bewegen im Gespräch und auf spielerische Weise die\nThemen Persönliche Sprache, Kommunikation und Bedürfnisse im Familiensystem.",
      foto: "lavi.png",
      web: "lavi-schule.de/Wer-wir-sind",
    },
    "Vom ICH zum WIR – Beziehung in Familie leben": {
      wer: "Anouk & Regina (erLEBes Familie)",
      beschreibung: "Bewusst wachsen als Familie - vom ICH zum WIR\n\nDeine innere Haltung und deine Werte prägen dein Sein und dein Handeln – und damit das Miteinander in deiner Familie.\nWas du in dir veränderst, wirkt nach außen und kann euer Familienleben nachhaltig wandeln.\n\nWir geben 2 Workshops auf dem Wundaplunda und laden ein, beide in Kombination zu besuchen und auch unabhängig voneinander.\n\nDie Workshops bieten Raum für Entwicklung und persönliches Wachstum – für dich als Mensch und damit für deine Beziehungen in der Familie. Es geht darum in die Themenfelder hinein zu spüren, sie zu bewegen und zu erLEBen.\n\nDie Workshop- Begleiterinnen sind Anouk und Regina – die Initiatorinnen von erLEBes Familie.\nGemeinsam öffnen wir Räume für Eltern und Familien, die sich entwickeln und ihr Bewusstsein erweitern wollen, um ihr Familienleben authentischer, klarer und friedvoller\ngestalten zu können.\n\nerLEBes Workshop 2: Vom ICH zum WIR – Beziehung in Familie leben\nWie wirkt meine innere Welt auf meine Beziehungen in der Familie?\nWie kann ich Verbindung im Alltag bewusst gestalten?\nIn diesem Teil geht es um unsere Begegnungen im Familienalltag und darum, wie ich das\nWIR in meiner Familie lebe. Wir bewegen im Gespräch und auf spielerische Weise die\nThemen Persönliche Sprache, Kommunikation und Bedürfnisse im Familiensystem.",
      foto: "lavi.png",
      web: "lavi-schule.de/Wer-wir-sind",
    },
    "Faszination Baumpilze & Naturkosmetik": {
      wer: "Larissa & Corinna (ausgebildete Pilzcoaches)",
      beschreibung: "Entdeckt mit uns die Welt der Baumpilze! Wir starten gemeinsam mit einer Einführung: Was sind Baumpilze? Wie erkenne ich sie? Welche Rolle spielen sie im Wald - und was steckt alles in ihnen? \n\nWir nutzen die Wirkung des Zunderschwamms und stellen gemeinsam eine Salbe und ein Deo her. \n\nWir sind Larissa und Corinna, ausgebildete PilzCoaches aus dem Allgäu – und wir glauben, dass Pilze viel mehr können, als nur auf dem Teller zu landen. In diesem Workshop zeigen wir euch zwei faszinierende Baumpilze von einer ganz anderen Seite",
      foto: "deo-salbe.png",
    },
    "Faszination Baumpilze & Pilzpapier": {
      wer: "Larissa & Corinna (ausgebildete Pilzcoaches)",
      beschreibung: "Entdeckt mit uns die Welt der Baumpilze! Wir starten gemeinsam mit einer Einführung: Was sind Baumpilze? Wie erkenne ich sie? Welche Rolle spielen sie im Wald - und was steckt alles in ihnen? \nIm zweiten Teil wird`s praktisch: Wir schöpfen Papier aus Pilzen mit oder ohne getrockneten Blüten und Samen - wir lassen unserer Kreativität freien Lauf. \n\nWir sind Larissa und Corinna, ausgebildete PilzCoaches aus dem Allgäu – und wir glauben, dass Pilze viel mehr können, als nur auf dem Teller zu landen. In diesem Workshop zeigen wir euch zwei faszinierende Baumpilze von einer ganz anderen Seite",
      foto: "pilzpapier.png",
    },
    ContaKids: {
      wer: "Natalie",
      beschreibung: "Ich bin Natalie, Mutter eines vierjährigen Sohnes aus München. Nach der Babyzeit habe ich durch Contact Improvisation wieder Freude an Bewegung und einen neuen Zugang zu meinem Körper gefunden. Daraus entstand der Wunsch, den\nspielerischen körperlichen Austausch auch im Miteinander mit meinem Kind zu vertiefen – so bin ich zur ContaKids Ausbildung gekommen.\n\nIn meinem Workshop lade ich Eltern und Kinder ein, sich über Bewegung neu zu begegnen. Wir rollen, tragen, balancieren und forschen gemeinsam – mal wild, mal achtsam.\n Es entsteht ein Raum für Vertrauen, Nähe und Leichtigkeit jenseits\nvon Worten. Im Mittelpunkt steht nicht das „richtig machen“, sondern das gemeinsame Erleben und die Freude an Kontakt und Bewegung.",
      foto: "contakids.jpg",
    },
    "ContaKids - Bewegung, Spiel & Verbindung": {
      wer: "Natalie",
      beschreibung: "Ich bin Natalie, Mutter eines vierjährigen Sohnes aus München. Nach der Babyzeit habe ich durch Contact Improvisation wieder Freude an Bewegung und einen neuen Zugang zu meinem Körper gefunden. Daraus entstand der Wunsch, den\nspielerischen körperlichen Austausch auch im Miteinander mit meinem Kind zu vertiefen – so bin ich zur ContaKids Ausbildung gekommen.\n\nIn meinem Workshop lade ich Eltern und Kinder ein, sich über Bewegung neu zu begegnen. Wir rollen, tragen, balancieren und forschen gemeinsam – mal wild, mal achtsam.\n Es entsteht ein Raum für Vertrauen, Nähe und Leichtigkeit jenseits\nvon Worten. Im Mittelpunkt steht nicht das „richtig machen“, sondern das gemeinsame Erleben und die Freude an Kontakt und Bewegung.",
      foto: "contakids.jpg",
    },
    "ContaKids -Bewegung, Spiel & Verbindung": {
      wer: "Natalie Zeitler",
      beschreibung: "Ich bin Natalie, Mutter eines vierjährigen Sohnes aus München. Nach der Babyzeit habe ich durch Contact Improvisation wieder Freude an Bewegung und einen neuen Zugang zu meinem Körper gefunden. Daraus entstand der Wunsch, den spielerischen körperlichen Austausch auch im Miteinander mit meinem Kind zu\nvertiefen – so bin ich zur ContaKids Ausbildung gekommen.\n\nIn meinem Workshop lade ich Eltern und Kinder ein, sich über Bewegung neu zu begegnen. Wir rollen, tragen, balancieren und forschen gemeinsam – mal wild, mal achtsam. Es entsteht ein Raum für Vertrauen, Nähe und Leichtigkeit jenseits\nvon Worten. Im Mittelpunkt steht nicht das „richtig machen“, sondern das gemeinsame Erleben und die Freude an Kontakt und Bewegung.",
      foto: "contakids.jpg",
    },
    "Kleine Schnitzereien auch für Große": {
      wer: "Andreas",
      beschreibung: "Kleine Schnitzereien auch für Große\n\nKurs für Kinder ab 8 Jahren, jüngere bitte mit Begleitperson\nIn diesem Outdoor-Schnitzkurs lernt ihr den sicheren Umgang und Techniken mit dem eigenen Taschenmesser oder Kinderschnitzmesser.\nIhr schnitzt phantasievolle eigene Kreationen, kleine Perlen und andere Ideen aus Frischholz.\n \nVorkenntnisse sind nicht nötig, die Kinder erlernen den richtigen Umgang mit dem Messer.\nZum Abschluss erhaltet Ihr einen „Messerführer*innenschein“\n \nBitte mitbringen: \nSchnitzmesser können vor Ort ausgeliehen werden, eigene Taschenmesser oder (Kinder-)Schnitzmesser dürfen gerne mitgebracht werden\nWetterfeste Kleidung, die auch schmutzig werden darf, geschlossene Schuhe und lange Hose\n \nMax. 16 Kinder.\n \nAndreas Eckl\nJahrgang 1965\nNatur- & Umwelt- & Erlebnispädagoge\n„Hab Geduld, alle Dinge sind schwierig, bevor sie einfach werden.“",
      foto: "schnitzen.png",
      web: "naturnase.de/referenten.html",
    },
  },

  verpflegung: {
    hinweis: "Alles Bio, vegetarisch/vegan – teils aus eigenem Anbau. Zahlung bar oder per PayPal (QR) an der Essensausgabe. Bitte Bargeld für die Woche mitbringen.",
    essenszeiten: [
      { mahlzeit:"Frühstück", zeit:"07:45–09:00", hinweis:"Nur mit gültigem Bändchen · Woche vorab buchen" },
      { mahlzeit:"Mittag", zeit:"12:15–13:45", hinweis:"Wer mag, ohne Anmeldung (Infoheft nennt 12:00–13:30)" },
      { mahlzeit:"Abend", zeit:"17:45–19:15", hinweis:"Wer mag, ohne Anmeldung (Infoheft nennt 18:00–19:30)" },
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
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Espresso/Americano, einfach", preis:"2,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Espresso/Americano, doppelt", preis:"3,00 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Cappuccino, einfach", preis:"3,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Cappuccino, doppelt", preis:"5,00 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Latte Macchiato, 1 Shot", preis:"4,00 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Latte Macchiato, 2 Shot", preis:"4,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Kakao / Heiße Schokolade", preis:"4,00 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Tee (verschiedene Sorten)", preis:"2,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Wasser 1 l", preis:"2,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Limo Now 0,33 l / Seezüngle 0,33 l / Apfelsaftschorle 0,5 l", preis:"3,00 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Alkoholfreies Bier 0,5 l (Härle Freies Gold)", preis:"3,50 €" },
      { gruppe:"Kiosk/Bar · Stand 15.10.2025 · alles in Bio-Qualität", name:"Alkoholfreies Bier 0,33 l (Lammsbräu Naturradler, Dunkel Zitrone, Dunkel)", preis:"3,00 €" },
      { gruppe:"Sonstiges", name:"Eis (verschiedene Sorten)", preis:"3,50 €" },
      { gruppe:"Sonstiges", name:"Waffeln mit Apfelmus", preis:"3,00 €" },
      { gruppe:"Sonstiges", name:"Waffeln mit Puderzucker", preis:"2,50 €" },
      { gruppe:"Sonstiges", name:"Stockbrot-/Calzone-Teig", preis:"1,50 €" },
    ],
    tagesgerichte: [
      { tag:"Montag 03.08.", mittag:"Thai Curry mit Reis", abend:"Erbsen-Kokossuppe mit Baguette · Chili mit Takkos & Baguette (wahlweise glutenfrei, wahlweise Schmand)" },
      { tag:"Dienstag 04.08.", mittag:"Tofu BBQ-Soße, Ofenkartoffeln", abend:"Tomatensuppe (wahlweise mit Schmand & Baguette, Linseneintopf)" },
      { tag:"Mittwoch 05.08.", mittag:"Jägerin mit Reis oder Spätzle", abend:"Linsen-Paprika-Karottensuppe · Spätzle mit Soße" },
      { tag:"Donnerstag 06.08.", mittag:"Aloo Gobi, Reis", abend:"Gemüseeintopf mit Baguette" },
      { tag:"Freitag 07.08.", mittag:"Ratatouille mit Reis oder Nudeln (Bratensoße/Tomatensoße)", abend:"Ofengemüse (Kartoffeln/Karotten), vegane Mayo oder Quark" },
      { tag:"Samstag 08.08.", mittag:"Spaghetti mit Linsenbolognese", abend:"Bratlinge & Reis mit süß-sauer Paprikasauce" },
    ],
    laedle: "Laura's Lädle Sulzbrunn ist Mittwoch und Freitag jeweils 10:00 – 11:00 Uhr geöffnet. Angebot u.a.: Bio Gemüse und Obst, Müsli, Hafermilch, Milch, Eier, Pasta, Käse, Butter. (Hinweis: Im Infoheft wird zusätzlich ein „Hoflädle“ am Dienstag und Donnerstag 13:30–14:30 Uhr genannt – beides sind getrennte Verkaufsstände/Zeiten.)",
    snacks: "Snacks und Gebäck gibt es jeden Tag am Kiosk im Seminarhaus. Dienstag und Samstag Kuchenverkauf durch den Verein NATÜRLICH.MITEINANDER. Waffeln: mit Apfelmus 3,00 €, mit Puderzucker 2,50 €, Stockbrot-/Calzone-Teig 1,50 €. Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und Mo–So 14:30–17:00 Uhr.",
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
    privat: ["Bauwägen privat (BewohnerInnen-/Bauwagenplatz)", "Garten privat", "Kreisbeet privat", "Parkplatz privat für Bewohner*innen", "Dorf privat (Dorfplatz)"],
  },

  kontakt: {
    mail: "gaeste@seminarhaus-sulzbrunn.de",
    notruf: "Feuerwehr/Rettung 112 · Polizei 110",
    klinik: "Krankenhaus Kempten, Robert-Weixler-Str. 50, Tel. 0831 530-0",
  },
};
if (typeof module !== "undefined") module.exports = WUNDA;
