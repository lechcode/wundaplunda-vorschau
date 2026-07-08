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
    stand: "08.07.2026, 13:41 Uhr",
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
    { tag:"mo", zeit:"11:00 – 14:00", titel:"Anreise & Ankommen", wer:"", wo:"", wen:["alle"] },
    { tag:"mo", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"13:30 – 16:00", titel:"Waffeln / Kaffee", wer:"", wo:"Bar", wen:["alle"] },
    { tag:"mo", zeit:"14:00", titel:"Eröffnung", wer:"Wundaplunda Team", wo:"Feuerstelle", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Geländeführung", wer:"", wo:"Treffpunkt Zirkuszelt", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Bienenführung", wer:"Josef", wo:"Kinderjurte", wen:["alle"] },
    { tag:"mo", zeit:"14:30 – 16:00", titel:"Seifenblasen", wer:"Patrick", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mo", zeit:"16:30 – 17:30", titel:"Impro Show Kids", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mo", zeit:"17:30 – 18:00", titel:"Kinderkreis mit Clown Malab", wer:"Clown Malab, Wundaplunda Team, Amelie", wo:"Zirkuszelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mo", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mo", zeit:"19:30 – 20:30", titel:"Jodruf Sulzbrunn", wer:"", wo:"Wundazelt", wen:["alle"] },
    { tag:"mo", zeit:"ab 20:30", titel:"Lagerfeuerabend", wer:"", wo:"Feuerstelle", wen:["alle"] },
    { tag:"mo", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Dienstag
    { tag:"di", zeit:"07:30 – 08:15", titel:"Yoga", wer:"", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"di", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"di", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"ab 10:30", titel:"Pois basteln", wer:"Barbara & Patty", wo:"Kinderjurte", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"10:30 – 12:30", titel:"Wir entdecken den Wald", wer:"Kristina Wolf", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"10:30 – 12:30", titel:"Knotenkunde & Tarpaufbau", wer:"", wo:"Wundazelt", wen:["erwachsene"] },
    { tag:"di", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"14:00 – 16:00", titel:"Kuchen Pappelkinder & Hoflädle", wer:"", wo:"Dorfplatz", wen:["alle"], hinweis:"Kaffee & Kuchen (NATÜRLICH.MITEINANDER) + Hoflädle + kleiner Markt: Kinderschminken (Pappelkinder), Töpfern (Ayshe), Weiden (Tina), Schmuck (Fabienne), Karten (Lena), Kerzen (Birgit), Honig (Josef)" },
    { tag:"di", zeit:"14:15 – 15:00", titel:"Singen – Jodruf Sulzbrunn", wer:"", wo:"Dorfplatz", wen:["alle"] },
    { tag:"di", zeit:"15:00 – 16:00", titel:"Poi-Workshop", wer:"Susanne & Patty", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"16:00 – 18:00", titel:"Frauenkreis", wer:"Fabienne", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"di", zeit:"16:30 – 17:30", titel:"Kinderband 'Die leicht verschwitzten Zwerge'", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"di", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"di", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"di", zeit:"19:00 – 20:30", titel:"Männerkreis", wer:"Oliver", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"di", zeit:"20:00", titel:"Trommeln auf dem Dorfplatz", wer:"", wo:"Dorfplatz", wen:["alle"] },
    { tag:"di", zeit:"ab 21:00", titel:"Feuershow & Akrobatik mit Trommelbegleitung", wer:"", wo:"Dorfplatz", wen:["alle"] },
    // Mittwoch
    { tag:"mi", zeit:"07:30 – 08:15", titel:"Yoga am Morgen", wer:"Anna Elisabeth", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"mi", zeit:"07:30 – 08:15", titel:"Morgen-Workout – Kraftvoll in den Tag", wer:"Matthias Zech", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"mi", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"mi", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Schlangen & Zauberei filzen mit Fee", wer:"Fee", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Slackline Workshop", wer:"Daniel", wo:"Treffpunkt Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"10:30 – 12:30", titel:"Wahrnehmungs- / Sinnesübungen in der Natur", wer:"", wo:"Treffpunkt Kinderjurte", wen:["erwachsene"] },
    { tag:"mi", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"14:00 – 16:00", titel:"Bogenbau", wer:"Laurenz", wo:"Wundazelt", wen:["alle"] },
    { tag:"mi", zeit:"14:00 – 16:00", titel:"Baumklettern", wer:"Stefan", wo:"Treffpunkt Zirkuszelt", wen:["kinder_ab_5"] },
    { tag:"mi", zeit:"15:00 – 16:00", titel:"Eltern-Kind-Akrobatik", wer:"Susanne", wo:"Turnhalle", wen:["kinder_0_4"] },
    { tag:"mi", zeit:"15:00 – 16:00", titel:"Clownspiele", wer:"Florian", wo:"Yogaraum", wen:["kinder_ab_5"], anmeldung:"begrenzt" },
    { tag:"mi", zeit:"16:00 – 17:30", titel:"Schmuckworkshop", wer:"Gabriele", wo:"Kinderjurte", wen:["erwachsene"], anmeldung:"begrenzt" },
    { tag:"mi", zeit:"16:30 – 17:30", titel:"Hirnhopsen für Alle", wer:"Florian", wo:"Turnhalle", wen:["alle"] },
    { tag:"mi", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"mi", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"mi", zeit:"19:30 – 20:30", titel:"Tribubu", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"mi", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Donnerstag
    { tag:"do", zeit:"07:30 – 08:15", titel:"Yoga", wer:"", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"do", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"do", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"09:45 – 10:30", titel:"Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"ab 10:30", titel:"Weiden-Zauberstäbe", wer:"Tina", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"do", zeit:"10:30 – 12:30", titel:"5 Minuten Feuer & Wilde Küche", wer:"", wo:"Kinderjurte", wen:["alle"] },
    { tag:"do", zeit:"10:30 – 12:30", titel:"Vortrag LAVI – erleb es", wer:"", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"14:00 – 16:00", titel:"Kuchen Pappelkinder & Hoflädle", wer:"", wo:"Dorfplatz", wen:["alle"] },
    { tag:"do", zeit:"15:00 – 16:00", titel:"Singen – Jodruf Sulzbrunn", wer:"Rolf & Margaretha", wo:"Dorfplatz", wen:["alle"] },
    { tag:"do", zeit:"15:30 – 17:30", titel:"Frauenkreis", wer:"Fabienne", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"15:30 – 17:30", titel:"Schnitzen (Schnitzführerschein)", wer:"Andreas", wo:"Wundazelt", wen:["kinder_ab_5"] },
    { tag:"do", zeit:"15:30 – 17:30", titel:"Contact Kids", wer:"", wo:"", wen:["kinder_0_4"] },
    { tag:"do", zeit:"17:30 – 18:00", titel:"Lisa liest Geschichte", wer:"Lisa", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"do", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"do", zeit:"19:30 – 20:30", titel:"Singen – Jodruf Sulzbrunn", wer:"Rolf & Margaretha", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"do", zeit:"19:00 – 20:30", titel:"Männerkreis", wer:"Oliver", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"do", zeit:"ab 20:30", titel:"Lagerfeuerabend", wer:"", wo:"Feuerstelle", wen:["kinder_ab_5","erwachsene"], hinweis:"Instrumente mitbringen" },
    { tag:"do", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Freitag
    { tag:"fr", zeit:"07:30 – 08:15", titel:"Yoga am Morgen", wer:"Anna Elisabeth", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"fr", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"fr", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Baumpilze & Pilzpapier", wer:"", wo:"Wundazelt", wen:["alle"] },
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Ton brennen", wer:"", wo:"Feuerstelle", wen:["kinder_ab_5"] },
    { tag:"fr", zeit:"10:30 – 12:30", titel:"Vortrag LAVI – erleb es", wer:"", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"fr", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Bogenbau", wer:"Laurenz", wo:"Wundazelt", wen:["alle"] },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Baumklettern", wer:"Stefan", wo:"Treffpunkt Zirkuszelt", wen:["kinder_ab_5"] },
    { tag:"fr", zeit:"14:00 – 16:00", titel:"Baumpilze & Naturkosmetik", wer:"", wo:"Kinderjurte", wen:["erwachsene"] },
    { tag:"fr", zeit:"15:00 – 16:00", titel:"Contact Kids", wer:"", wo:"Yogaraum", wen:["kinder_0_4"] },
    { tag:"fr", zeit:"15:00 – 16:00", titel:"Seifenblasen", wer:"Patrick", wo:"Feuerstelle", wen:["kinder_0_4","kinder_ab_5"] },
    { tag:"fr", zeit:"16:00 – 18:00", titel:"Open Space", wer:"", wo:"", wen:["alle"], hinweis:"Alle, die etwas anbieten möchten · u. a. bietet Amelie Jodeln an" },
    { tag:"fr", zeit:"17:30 – 18:00", titel:"Das schrecklichste Monster der Welt", wer:"Amelie", wo:"Wundazelt", wen:["kinder_0_4","kinder_ab_5"], web:"akademie-rueckenwind.de", insta:"@akademie_rueckenwind" },
    { tag:"fr", zeit:"17:45 – 19:15", titel:"Abendessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"fr", zeit:"19:30 – 20:30", titel:"Funkenflug Band", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"fr", zeit:"Ganztags", titel:"Waldrallye · Spielewagen · Flying Fox", wer:"", wo:"", wen:["alle"] },
    // Samstag
    { tag:"sa", zeit:"07:30 – 08:15", titel:"Yoga", wer:"", wo:"Zirkuszelt", wen:["erwachsene"] },
    { tag:"sa", zeit:"07:45 – 09:00", titel:"Frühstück", wer:"", wo:"Seminarhaus", wen:["alle"], hinweis:"Nur vorgebucht" },
    { tag:"sa", zeit:"09:20 – 09:40", titel:"Morgenkreis mit dem Wundaplunda Team", wer:"Wundaplunda Team", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"09:45 – 10:30", titel:"Probe Clanzeit", wer:"", wo:"Treff Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"10:30 – 11:00", titel:"Kids Singen, Tanzen, Bewegen", wer:"Amelie", wo:"Zirkuszelt", wen:["kinder_0_4"] },
    { tag:"sa", zeit:"10:30 – 12:30", titel:"Schnitzen (Schnitzführerschein)", wer:"Andreas", wo:"Wundazelt", wen:["kinder_ab_5"] },
    { tag:"sa", zeit:"10:30 – 12:00", titel:"Wetterkunde", wer:"Laurenz", wo:"Yogaraum", wen:["erwachsene"] },
    { tag:"sa", zeit:"12:15 – 13:45", titel:"Mittagessen", wer:"", wo:"Seminarhaus", wen:["alle"], anmeldung:"offen" },
    { tag:"sa", zeit:"14:00 – 14:30", titel:"Clown Malab Show", wer:"Clown Malab", wo:"Zirkuszelt", wen:["alle"], web:"artistik-calimbaro.de", insta:"@artistik_calimbaro" },
    { tag:"sa", zeit:"14:30 – 15:00", titel:"Clan Show", wer:"", wo:"Zirkuszelt", wen:["alle"] },
    { tag:"sa", zeit:"15:00 – 16:00", titel:"Gemeinsame Abschlusszeremonie", wer:"", wo:"Feuerstelle", wen:["alle"] },
    { tag:"sa", zeit:"16:00", titel:"Abreise / Ende des Camps", wer:"", wo:"", wen:["alle"] },
    // Montag
    { tag:"mo", zeit:"10:00-11:00", titel:"Test", wer:"Testeer", wo:"Test Zelt", wen:["erwachsene","alle"], info:"dsvsfdgsgdfg", web:"https://wairua-spirit.de/", insta:"https://www.instagram.com/wundaplunda/", foto:"test-mrc0bz3i.jpg" },
  ],

  katalog: {
    "Geländeführung": {
      wer: "Oliver, Carmen & Fabienne (Gemeinschaft Sulzbrunn)",
      foto: "gelaendefuehrung.png",
      beschreibung: "Bei der Tour über das rund 15,5 Hektar große Gelände zeigen euch Sulzbrunn-Bewohner:innen Wald, Wiesen und die zehn Gebäude des kleinen Dorfs – inklusive der Geschichte rund um die Sulzbrunner Jodquelle (Kurbetrieb seit 1852).",
    },
    Seifenblasen: {
      foto: "riesenseifenblasen.png",
      beschreibung: "Hier machen wir die größten Blasen aller Zeiten! Sie steigen hoch in den Himmel und schimmern in allen Farben. Komm vorbei und probier es aus – wer schafft die größte Blase?",
    },
    "Impro Show Kids": {
      wer: "EingangAusgang Impro-Theater",
      foto: "improtheater.png",
      beschreibung: "Kommt mit auf eine fantastische Heldenreise! Beim Improvisations-Theater bestimmt ihr, das Publikum, was passiert – eure Ideen verwandeln sich live auf der Bühne in eine einzigartige Geschichte. Keine Vorstellung ist wie die andere.",
    },
    "Kinderkreis mit Clown Malab": {
      foto: "kinderkreis.png",
      beschreibung: "Während die Großen ihren Frauen- und Männerkreis haben, schaffen wir für die Kinder einen eigenen Raum zum Ankommen: Wir finden heraus, worauf ihr euch am meisten freut, und lernen erste neue Freund:innen kennen. Dieses Jahr mit Überraschungsgast mit roter Nase – Clown Malab!",
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
      beschreibung: "Wenn die Nacht hereinbricht, versammeln wir uns am knisternden Feuer. Mitgebrachte Instrumente – Trommel, Gitarre, Rassel – sind herzlich willkommen. Gemeinsam singen, musizieren und erzählen wir Geschichten unter dem Sternenhimmel.",
    },
    "Waldrallye · Spielewagen · Flying Fox": {
      foto: "waldrallye.jpg",
      beschreibung: "Ganztägige Entdecker-Angebote: Auf der Waldrallye zieht ihr mit Entdeckerrucksäcken (Hase, Eule, Fuchs …) los und löst spannende Aufgaben in der Natur. Dazu der Spielewagen des Kreisjugendrings mit vielen Fahrzeugen und Spielen – und die Flying Fox für ein kleines Abenteuer mit Schwung.",
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
      wer: "Barbara & Patty",
      foto: "poi.png",
      web: "barbaraburstall.com",
      insta: "@patyk.liebe",
      beschreibung: "Wir basteln Pois aus Upcycling-Materialien. Die an Schnüren geschwungenen Bälle aus der Māori-Kultur Neuseelands machen Spaß und fördern Beweglichkeit, Koordination und Kraft. Nachmittags gibt es den passenden Workshop dazu.",
    },
    "Poi-Workshop": {
      wer: "Susanne & Patty",
      foto: "poi.png",
      insta: "@patyk.liebe",
      beschreibung: "Passend zu den selbstgebastelten Pois schwingen wir die an Schnüren geführten Bälle und üben Beweglichkeit, Koordination und Kraft – Spiel und Bewegung aus der Māori-Kultur Neuseelands.",
    },
    "Wir entdecken den Wald": {
      wer: "Kristina Wolf (Pilzfreunde Altusried e.V.)",
      foto: "walderlebnis.png",
      insta: "@mykorrhina",
      beschreibung: "Bei dieser familiengerechten Waldexkursion erleben Kinder und Erwachsene den Wald mit allen Sinnen. Spielerisch entdecken wir, welche Baumarten heimisch sind und warum der Wald für Mensch, Tier und Klima so wichtig ist – mit Lupen, Waldbingo und Entdeckerkarten.",
    },
    "Knotenkunde & Tarpaufbau": {
      wer: "Laurenz (Wildnispädagoge)",
      foto: "knoten.png",
      beschreibung: "Wie entsteht aus einer Plane und ein paar Seilen ein wetterfester Unterschlupf? Wir lernen die Grundlagen des Tarpbaus und der Knotenkunde, üben verschiedene Knoten und bauen unterschiedliche Tarp-Konstruktionen auf. Praktisches Wissen für Outdoor und Bushcraft.",
    },
    "Kuchen Pappelkinder & Hoflädle": {
      foto: "markt.png",
      web: "natuerlich-miteinander.net",
      beschreibung: "Kaffee, Kuchen und ein kleiner, feiner Wundaplunda-Markt mit liebevoll ausgewähltem Kunsthandwerk aus Sulzbrunn: Honig, Bienenwachskerzen, Weidenkörbe, Getöpfertes, Schmuck und mehr. Mit Kinderschminken und Kuchen der Pappelkinder (Verein Füreinander Miteinander e.V.).",
    },
    Frauenkreis: {
      wer: "Fabienne (Gemeinschaft Sulzbrunn)",
      foto: "frauenkreis.png",
      beschreibung: "Wir legen bewusst die vielen Alltagsrollen ab – Mutter, Partnerin, Tochter – und kommen zur Essenz des Frauseins. Durch Körperübungen, Austausch, Singen und Energiearbeit verbinden wir uns miteinander und mit uns selbst. Ein Raum für dich – komm so, wie du bist.",
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
      wer: "Laurenz (Wildnispädagoge)",
      foto: "bogenbau.png",
      web: "wild-und-weiter.de",
      mitbringen: "eigenes Schnitzmesser",
      beschreibung: "Wie entsteht aus einem Stück Holz ein Bogen? Mit Schnitzmesser und Geduld gestalten wir kleine funktionsfähige Bögen und entdecken, wie Form, Spannung und Funktion vom Holz abhängen.",
    },
    Baumklettern: {
      wer: "Stefan (Baumkletterer & Erlebnispädagoge)",
      foto: "baumklettern.png",
      web: "new-institut.com/ueber-uns/team/stefan-lipp",
      beschreibung: "Hoch hinaus, Äste unter den Händen und die Welt von oben sehen: Baumklettern ist Abenteuer pur. Jedes Kind, das möchte, darf sicher und begleitet von Stefan in die Baumwipfel.",
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
      beschreibung: "Aus frischen Weidenruten gestalten wir wunderschöne Weidenzauberstäbe oder dekorative Weidenfische. Für Groß und Klein, ganz ohne Vorkenntnisse – kreative Kunst aus der Natur.",
    },
    "5 Minuten Feuer & Wilde Küche": {
      wer: "Lena (Wildnispädagogin)",
      foto: "feuermachen.png",
      beschreibung: "Groß und Klein lernen verschiedene Techniken des Feuermachens mit Magnesiumstab und Feuerstein. Wir entzünden ein Feuer, erfahren Wissenswertes über Zunder und bereiten anschließend eine einfache Leckerei über der Glut zu.",
    },
    "Vortrag LAVI – erleb es": {
      wer: "Anouk & Regina (erLEBes Familie)",
      foto: "lavi.png",
      web: "lavi-schule.de/Wer-wir-sind",
      beschreibung: "erLEBes Familie öffnet Räume für Eltern und Familien: Wie wirkt meine innere Welt auf meine Beziehungen? Wie gestalte ich Verbindung im Familienalltag bewusst? Ein Impuls rund um Kommunikation, Bedürfnisse und das WIR in der Familie.",
    },
    "Schnitzen (Schnitzführerschein)": {
      wer: "Andreas Eckl (Natur-, Umwelt- & Erlebnispädagoge)",
      foto: "schnitzen.png",
      mitbringen: "Schnitzmesser (kann vor Ort ausgeliehen werden), wetterfeste Kleidung, geschlossene Schuhe, lange Hose",
      hinweis: "Kinder ab 8 Jahren, jüngere nur mit Begleitperson · max. 16 Kinder",
      web: "naturnase.de/referenten.html",
      beschreibung: "Im Outdoor-Schnitzkurs lernt ihr den sicheren Umgang mit dem Taschen- oder Kinderschnitzmesser und schnitzt eigene kleine Kreationen aus Frischholz. Zum Abschluss gibt's den „Messerführer:innenschein“.",
    },
    "Contact Kids": {
      wer: "Natalie Zeitler",
      foto: "contakids.jpg",
      beschreibung: "„ContaKids“ ist eine spielerische Bewegungsmethode für Eltern und Kinder (2–5 Jahre). Durch Bewegung, Berührung und gemeinsames Spiel entsteht eine neue Form körperlicher Kommunikation – Kinder stärken Motorik und Selbstvertrauen, Eltern das Vertrauen in sich und ihr Kind.",
    },
    "Baumpilze & Pilzpapier": {
      wer: "Larissa & Corinna (ausgebildete Pilzcoaches)",
      foto: "pilzpapier.png",
      beschreibung: "Faszination Baumpilze: Wir lernen, was Baumpilze sind, wie man sie erkennt und welche Rolle sie im Wald spielen – und schöpfen dann gemeinsam Papier aus Pilzen, wahlweise mit getrockneten Blüten und Samen. Ein Workshop für die ganze Familie.",
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
      beschreibung: "Musikalischer Mitmach-Workshop für Kinder von 3 bis 6 Jahren: Wir singen kindgerechte Lieder und erwecken sie mit Bewegungen, Gesten und kleinen Rollenspielen zum Leben. Freude, Fantasie und gemeinsames Erleben stehen im Mittelpunkt.",
    },
    Wetterkunde: {
      wer: "Laurenz (Wildnis- & Erlebnispädagoge)",
      foto: "wetterkunde.png",
      beschreibung: "Grundkurs Wetterkunde – Natur lesen lernen: Wolkenbilder, Windveränderungen und typische Wetterlagen werden verständlich erklärt. Ein sicherer Einstieg, um zu verstehen, was Wolken, Wind und Atmosphäre über kommendes Wetter verraten.",
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
  },

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
      { tag:"Montag 03.08.", mittag:"Thai Curry mit Reis", abend:"Erbsen-Kokossuppe mit Baguette · Chili mit Takkos & Baguette (wahlweise glutenfrei, wahlweise Schmand)" },
      { tag:"Dienstag 04.08.", mittag:"Tofu BBQ-Soße, Ofenkartoffeln", abend:"Tomatensuppe (wahlweise mit Schmand & Baguette, Linseneintopf)" },
      { tag:"Mittwoch 05.08.", mittag:"Jägerin mit Reis oder Spätzle", abend:"Linsen-Paprika-Karottensuppe · Spätzle mit Soße" },
      { tag:"Donnerstag 06.08.", mittag:"Aloo Gobi, Reis", abend:"Gemüseeintopf mit Baguette" },
      { tag:"Freitag 07.08.", mittag:"Ratatouille mit Reis oder Nudeln (Bratensoße/Tomatensoße)", abend:"Ofengemüse (Kartoffeln/Karotten), vegane Mayo oder Quark" },
      { tag:"Samstag 08.08.", mittag:"Spaghetti mit Linsenbolognese", abend:"Bratlinge & Reis mit süß-sauer Paprikasauce" },
    ],
    laedle: "Laura's Lädle Sulzbrunn ist Mittwoch und Freitag jeweils 10:00 – 11:00 Uhr geöffnet. Angebot u.a.: Bio Gemüse und Obst, Müsli, Hafermilch, Milch, Eier, Pasta, Käse, Butter. (Hinweis: Im Infoheft wird zusätzlich ein „Hoflädle“ am Dienstag und Donnerstag 13:30–14:30 Uhr genannt – beides sind getrennte Verkaufsstände/Zeiten.)",
    snacks: "Snacks und Gebäck gibt es jeden Tag am Kiosk im Seminarhaus. Dienstag und Samstag Kuchenverkauf durch den Verein NATÜRLICH.MITEINANDER. Waffeln: mit Puderzucker 2,00 €, mit Apfelmus 2,50 €, Stockbrot/Pizzateig 1,00 €. Öffnungszeiten Waffeln & Kaffeebar: Mo–So 08:00–10:30 Uhr und Mo–So 14:30–17:00 Uhr.",
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
