# Entscheidungslog

Dieses Log haelt technische und organisatorische Entscheidungen fest. Statuswerte: Vorgeschlagen, Entschieden, Verworfen, Ersetzt.

## D-001: Static-first Architektur

- Status: Vorgeschlagen
- Kontext: Die Seite ist primaer content-orientiert und benoetigt initial keine Datenbank.
- Entscheidungsvorschlag: Statische oder statisch gerenderte Webseite mit einfacher Inhaltsstruktur.
- Konsequenz: Niedrige Betriebskosten, einfache Wartung, gute Performance. Kein CMS und keine generische Erweiterungsarchitektur.

## D-006: Simplicity-first statt CMS

- Status: Entschieden
- Kontext: Die Webseite ist fuer eine einzelne Hochzeit mit ueberschaubarem Content gedacht.
- Entscheidung: Es wird kein CMS, Headless-CMS oder Enterprise-Setup eingeplant.
- Konsequenz: Inhalte werden so abgelegt, dass sie leicht angepasst werden koennen, aber ohne unnoetige Plattformschicht.

## D-007: Pragmatismus als Hauptregel

- Status: Entschieden
- Kontext: Das Projekt ist privat, klein und klar umrissen.
- Entscheidung: Codex soll nicht zu viel hineininterpretieren und primaer die konkret angefragten Dinge pragmatisch umsetzen.
- Konsequenz: Rechtliche, Datenschutz- oder Bildthemen werden nicht proaktiv ausgebaut, sondern nur knapp erwaehnt, wenn sie fuer eine konkrete Entscheidung wirklich relevant sind.

## D-008: GitHub Flow

- Status: Entschieden
- Kontext: Das Projekt wird in einem GitHub-Repository entwickelt.
- Entscheidung: `main` bleibt stabil. Neue Arbeit laeuft in `feature/*` Branches und wird per Pull Request nach `main` gebracht.
- Konsequenz: Cloudflare Pages kann Feature Branches/PRs als Preview deployen und `main` als Produktionsstand verwenden.

## D-009: GitHub Repository

- Status: Entschieden
- Kontext: Das Repository wurde fuer die Entwicklung bereitgestellt.
- Entscheidung: `https://github.com/SMORITZ1/martini-website.git` ist das GitHub-Remote.
- Konsequenz: Lokaler Remote `origin` zeigt auf dieses Repository; Entwicklung laeuft nach GitHub Flow.

## D-002: Hosting-Auswahl

- Status: Vorgeschlagen
- Kontext: Die Seite soll dauerhaft ueber QR-Code erreichbar sein.
- Entscheidungsvorschlag: Cloudflare Pages Free mit Git-Integration fuer Hosting; Netlify Free als einfache Alternative.
- Begruendung: Fuer ca. 100 sporadische Gaeste reicht statisches Free-Hosting aus. Ein klassisches Webhosting-Paket ist nicht noetig. Git-Integration liefert automatische Deployments und Review-Links.
- Entscheidung benoetigt: GitHub/GitLab-Repository und Cloudflare-Pages-Projektanbindung.

## D-003: Domain

- Status: Entschieden
- Kontext: Der QR-Code sollte auf eine stabile Domain oder Weiterleitungs-URL zeigen.
- Entscheidung: `martini-era.de` wurde bei IONOS registriert.
- Konsequenz: Domain bleibt bei IONOS registriert; DNS soll fuer Cloudflare Pages eingerichtet werden.

## D-004: Oeffentlichkeit und Zugriff

- Status: Offen
- Kontext: Die Seite soll ueber QR-Code erreichbar sein.
- Optionen: Oeffentlich, schwer erratbare URL, Passwortschutz, private Preview bis kurz vor Versand.
- Entscheidung benoetigt: Gewuenschter Komfort fuer Gaeste.

## D-005: Externe Karten

- Status: Vorgeschlagen
- Kontext: Gaeste brauchen eine Route zum Ort.
- Entscheidungsvorschlag: Zunaechst Google Maps als normaler Link statt eingebetteter Karte.
- Konsequenz: Einfach, robust und datenschutzfreundlicher als ein Embed. Einbettung kann spaeter bewusst entschieden werden.

## D-010: Designrichtung Vorschlag 1

- Status: Vorgeschlagen
- Kontext: Nach mehreren visuellen Iterationen gefaellt eine Mischung aus klassischer Einladung und moderner Glasoptik besser als ein hartes, kartenlastiges Layout.
- Entscheidungsvorschlag: Vorschlag 1 wird als primaere Richtung umgesetzt: rechte vertikale Glas-Timeline, grosser editorialer Hero, Portraitzeichnung ohne harten Rahmen, Countdown als schwebende Glas-Karte und einzelne Eckdaten-Pills.
- Konsequenz: Die Seite wirkt moderner und naeher am Martini-Motto, bleibt aber durch reduzierte Hintergrundmuster ruhiger als das reine Mockup.

## D-011: Countdown-Detailstil

- Status: Entschieden
- Kontext: Der Countdown und die weiteren Inhaltsboxen sollen naeher an die Liquid-Glass-Referenz ruecken; unterhalb der Countdown-Zahlen soll kein erklaerender Text stehen.
- Entscheidung: Countdown, Eckdaten, Inhaltskarten, Timeline-Boxen, FAQ, Kartenlinks und Map-Container erhalten gemeinsame Glas-Layer; unter den Countdown-Zahlen steht nur eine dekorative Blatt-Herz-Zeile.
- Konsequenz: Der Hero und die Detailbereiche wirken einheitlicher; der Glasstil kann spaeter zentral ueber CSS-Tokens weiter angepasst werden.

## D-012: Reduzierte Kartenwirkung

- Status: Entschieden
- Kontext: Die Seite wirkte durch viele grosse Glasrahmen, starke Schatten und kapselartige Navigation zu stark wie eine Praesentationsfolie.
- Entscheidung: Farben, Logos und Bildmotive bleiben erhalten; Hero und Inhaltsbereiche werden ueber leichtere Linien, weniger Schatten, kleinere Radien und ruhigere Listen-/Editorial-Strukturen gefuehrt. Der Countdown behaelt als gezielter Akzent den Liquid-Glass-Stil.
- Konsequenz: Die Seite wirkt weniger kartenlastig und bleibt trotzdem in der bisherigen Martini-Era-Designrichtung anpassbar.

## D-013: Kalenderblocker als statische Datei

- Status: Entschieden
- Kontext: Gaeste sollen den Hochzeitstermin direkt aus dem Hero heraus in ihren Kalender uebernehmen koennen.
- Entscheidung: Der Hero-Button laedt eine statische `.ics`-Datei herunter. Der Termin startet am 17.07.2027 um 13:30 Uhr und blockiert bis 02:00 Uhr am Folgetag.
- Konsequenz: Keine externe Kalenderintegration und kein Formular sind noetig; die Uhrzeiten koennen spaeter direkt in der ICS-Datei angepasst werden.

## D-014: Austauschbare Abschnitts-Silhouetten

- Status: Entschieden
- Kontext: Die Paar-Silhouette aus dem Hero soll auf den weiteren Seiten auftauchen, spaeter aber je Abschnitt durch eigene Motive ersetzt werden koennen.
- Entscheidung: Inhaltsabschnitte erhalten einen dekorativen Silhouetten-Layer. Das Motiv wird per CSS-Variable gesetzt und aktuell auf die transparente Hero-Zeichnung gemappt.
- Konsequenz: Die Seiten wirken gestalterisch verbundener, ohne Inhalt und Bildauswahl hart zu koppeln. Neue Silhouetten koennen spaeter abschnittsweise ueber CSS ersetzt werden.

## D-016: Papeterie-Hintergrund als SVG-Asset

- Status: Entschieden
- Kontext: Der Hintergrund soll der aktuellen Designvorlage naeherkommen: warmes Papier, olivgruene Aquarellflaechen, feine Goldlinien und dezente botanische Akzente.
- Entscheidung: Der Hintergrund bleibt ein austauschbares SVG-Asset statt eines schweren Bitmaps. CSS-Variablen steuern Groesse und Position fuer Desktop und Mobile.
- Konsequenz: Die Optik ist naeher an der Vorlage, bleibt klein, skalierbar und kann spaeter ohne Layoutmigration gegen ein finales Bitmap oder eine neue Illustration ersetzt werden.

## D-015: Dresscode im hellen Editorial-Stil

- Status: Entschieden
- Kontext: Der Dresscode-Abschnitt wirkte als dunkle gruene Sonderseite nicht mehr wie der Rest der aktuellen Designrichtung.
- Entscheidung: Der Abschnitt wird wieder im hellen Creme-/Olive-/Gold-Stil gefuehrt. Die Skala von "zu leger" bis "festlich" wird durch drei lineare Orientierungspunkte ersetzt.
- Konsequenz: Der Abschnitt bleibt naeher an den anderen Inhaltsseiten und erklaert die gewuenschte Kleidung ohne Slider- oder Leistenoptik.

## D-017: Astro-Komponenten und externe Inhalte

- Status: Entschieden
- Kontext: Die bisherige Seite lag in einer grossen HTML-Datei. Inhaltsaenderungen und strukturelle Anpassungen konnten dadurch unbeabsichtigt andere Bereiche beeinflussen. Die meisten Gaeste werden die Seite mobil aufrufen.
- Entscheidung: Die Seite wird mit Astro und TypeScript statisch erzeugt. Jeder sichtbare Bereich ist eine eigene Astro-Komponente. Redaktionelle Texte liegen in validierten YAML-Dateien; gemeinsame Fakten wie Datum, Uhrzeiten und Orte werden zentral gehalten und per Props uebergeben. JavaScript bleibt auf Countdown, Navigation und Lazy Loading begrenzt.
- Konsequenz: Inhalte koennen ohne Eingriff in das Markup angepasst werden, Komponenten lassen sich getrennt weiterentwickeln und die mobile Seite laedt nur wenig clientseitiges JavaScript. Cloudflare Pages baut mit `pnpm build` in den Ausgabeordner `dist`.
