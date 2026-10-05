# Infrastruktur

## Empfehlung fuer den Start

Fuer die aktuelle Anforderung ist eine statische oder statisch gerenderte Webseite die passendste Basis. Sie ist guenstig, schnell, robust und braucht keine Datenbank. Die technische Basis soll klein bleiben und nur die Anpassungen erleichtern, die fuer diese Hochzeit realistisch gebraucht werden.

Konkrete Infrastruktur-Empfehlung fuer den aktuellen Use Case: Cloudflare Pages Free mit Git-Integration fuer das Hosting und eine separat gekaufte eigene Domain. Erwartete laufende Kosten: Hosting 0 EUR, Domain je nach Anbieter und Endung typischerweise wenige Euro bis niedriger zweistelliger Betrag pro Jahr. Vor dem Kauf immer den Verlaengerungspreis pruefen, nicht nur den Aktionspreis im ersten Jahr.

Entschiedener technischer Aufbau:

- Astro mit statischer Ausgabe und TypeScript.
- Sichtbare Seitenbereiche als eigenstaendige Astro-Komponenten.
- Inhalte als validierte YAML-Dateien ausserhalb der Komponenten.
- Gemeinsame Veranstaltungsdaten werden zentral gehalten und per Props an Komponenten uebergeben.
- Kein CMS und keine Content-Plattform.
- CSS Custom Properties oder Design Tokens fuer spaetere Designintegration.
- Deployment ueber Git-Integration: Push erzeugt automatisch ein Deployment.

## Hosting-Optionen

### Option A: Cloudflare-nahe Auslieferung

Geeignet, wenn wir eine sehr schnelle, guenstige und robuste statische Seite mit einfacher Deployment-Pipeline und spaeterer Custom Domain wollen. Cloudflare Pages nennt im Free-Plan unter anderem 500 Builds pro Monat, 100 Custom Domains pro Projekt sowie unbegrenzte statische Requests und Bandbreite.

Vorteile:

- Sehr passend fuer statische Seiten.
- Custom Domains und SSL sind gut unterstuetzt.
- Kosten koennen fuer dieses Projekt sehr niedrig bleiben.
- Git-Integration erlaubt automatische Deployments bei jedem Push.
- Preview Deployments erlauben Review-Links ohne Produktions-Deployment.
- Gute spaetere Erweiterbarkeit Richtung Worker, falls doch servernahe Logik noetig wird.
- Fuer ca. 100 sporadische Gaeste deutlich ausreichend.

Nachteile:

- Domain und DNS muessen sauber eingerichtet werden.
- GitHub- oder GitLab-Repository sollte angebunden werden.
- Git-Integration und Direct Upload sind unterschiedliche Wege; wir sollten Git-Integration von Anfang an waehlen.

### Option B: Netlify

Netlify ist fuer statische Seiten ebenfalls sehr geeignet. Der offizielle Preisstand nennt einen Free-Plan sowie bezahlte Plaene ab Personal/Pro. Netlify ist komfortabel fuer Git-basierte Deployments und einfache Formulare, wobei Formulare fuer dieses Projekt nur relevant waeren, wenn sie explizit gewuenscht sind.

Vorteile:

- Einfacher Git-Workflow.
- Gute Vorschau- und Deployment-Erfahrung.
- Viele statische Website-Projekte passen gut.

Nachteile:

- Formular- oder Zusatzfeatures koennen spaeter Plattformdetails erzeugen.
- Kostenmodell und Limits sollten vor finaler Wahl erneut geprueft werden.

### Option C: GitHub Pages

GitHub Pages ist die minimalste kostenlose Variante fuer statische Webseiten und unterstuetzt Custom Domains. Fuer GitHub Free ist Pages laut GitHub in oeffentlichen Repositories verfuegbar. Das ist technisch guenstig, aber fuer eine Hochzeitsseite nur dann ideal, wenn ein oeffentliches Repository okay ist.

Vorteile:

- Hosting kostenlos.
- Sehr einfache statische Auslieferung.
- Custom Domain moeglich.

Nachteile:

- Bei GitHub Free typischerweise oeffentliches Repository.
- Weniger komfortable Preview-/Deployment-Funktionen als Cloudflare Pages oder Netlify.

### Option D: Vercel

Vercel ist stark fuer React/Next.js-Projekte. Der offizielle Preisstand nennt einen kostenlosen Hobby-Plan und Pro ab 20 USD pro Monat. Fuer eine kleine Hochzeitsseite ist Vercel technisch moeglich, aber wahrscheinlich mehr Plattform als noetig, falls keine komplexe App entsteht.

Vorteile:

- Sehr guter Developer Workflow.
- Gute Preview-Deployments.
- Stark, wenn Next.js spaeter bewusst gewaehlt wird.

Nachteile:

- Fuer eine reine Inhaltsseite nicht zwingend noetig.
- Kosten und Nutzungsbedingungen fuer persoenliche vs. team-/kommerziell genutzte Projekte pruefen.

## Domain-Strategie

Moegliche Varianten:

- Eigene Domain, z. B. `name-name.de`.
- Subdomain einer bestehenden Domain, z. B. `hochzeit.example.de`.
- Plattform-URL fuer interne Tests und spaeter Custom Domain.

Empfohlener Ablauf:

1. 3 bis 5 Domainkandidaten sammeln.
2. Verfuegbarkeit und Preis beim Registrar pruefen.
3. Verlaengerungspreis pruefen.
4. Domain kaufen und DNS-Verwaltung festlegen.
5. Hosting-Ziel verbinden und HTTPS pruefen.
6. QR-Code erst nach finalem stabilen URL-Test erzeugen.

Fuer dieses Projekt sollte nur eine Domain gekauft werden, kein klassisches Webhosting-Paket. Wichtig sind:

- Domain-Endung, z. B. `.de`, `.com` oder eine persoenliche Alternative.
- Jahrespreis ab Jahr 2.
- DNS-Verwaltung oder einfache Moeglichkeit, die Domain zu Cloudflare/Netlify zu verbinden.
- Keine unnoetigen Zusatzpakete wie Homepage-Baukasten, WordPress-Hosting oder Mailpakete, solange nicht explizit gebraucht.

## Pragmatische Hinweise

Diese Themen sind nicht der Fokus des Projekts. Sie werden nur aufgegriffen, wenn eine konkrete Funktion oder Veroeffentlichungsentscheidung es noetig macht.

Pragmatische Leitplanken:

- Keine Analyse-Tools und keine Marketing-Cookies im Startumfang.
- Google Maps zunaechst als normaler Link statt eingebetteter Karte.
- Impressum, Datenschutzerklaerung oder Passwortschutz nur dann vertiefen, wenn es fuer den Go-live wirklich entschieden werden muss.

## Deployment-Prozess

Vorschlag fuer die spaetere Entwicklung:

1. Lokale Entwicklung mit Dev-Server.
2. Kleine Komponenten-Reviews im Browser.
3. Build lokal pruefen.
4. Git-Commit und Push.
5. Automatisches Preview-Deployment pruefen.
6. Merge auf `main` fuer Produktion.
7. Custom Domain anbinden.
8. QR-Code nur auf die finale Domain oder stabile Weiterleitungs-URL.

## Noch zu entscheiden

- Oeffentlichkeit: komplett oeffentlich, schwer erratbare URL oder Passwortschutz.
- Ob spaeter interaktive Features mit Datenspeicherung hinzukommen.

## Quellen, Stand 2026-07-05

- Cloudflare Workers Pricing: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare Pages Custom Domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare Pages Git Integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages Preview Deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare Pages Direct Upload: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Cloudflare Pages Produkt-/Pricing-Angaben: https://pages.cloudflare.com/
- Cloudflare Registrar: https://www.cloudflare.com/products/registrar/
- GitHub Pages Custom Domains: https://docs.github.com/articles/setting-up-a-custom-domain-with-pages
- Netlify Pricing: https://www.netlify.com/pricing/
- Vercel Pricing: https://vercel.com/pricing
- Paragraph 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
