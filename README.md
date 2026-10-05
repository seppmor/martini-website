# Martini Era – Hochzeitswebsite

Statisch generierte, mobile-first Hochzeitswebsite auf Basis von Astro und TypeScript.

## Lokale Entwicklung

```bash
pnpm install
pnpm dev
```

Der Produktions-Build wird mit `pnpm build` erzeugt und liegt anschließend in `dist/`.

## Inhalte bearbeiten

Die redaktionellen Inhalte liegen getrennt von den Komponenten in `src/content/*.yaml`:

- `event.yaml`: gemeinsame Fakten wie Datum, Uhrzeiten, Orte und Routen
- `site.yaml`: Titel, Beschreibung und Metadaten der Website
- `hero.yaml`: Startbereich und Countdown-Texte
- `locations.yaml`: Orte, Galerie und Kartenbereich
- `schedule.yaml`: Tagesablauf
- `travel.yaml`: Anreise und Unterkunft
- `dresscode.yaml`: Dresscode
- `faq.yaml`: Fragen und Antworten
- `navigation.yaml`: Abschnittsnavigation

Beim Build werden diese Dateien gegen die Schemata in `src/content.config.ts` geprüft. Sichtbare Bereiche liegen als eigenständige Komponenten unter `src/components/`.

## Deployment

Cloudflare Pages verwendet:

- Build-Befehl: `pnpm build`
- Ausgabeordner: `dist`
- Produktionsbranch: `main`

## Projektunterlagen

- [Zusammenarbeit](docs/00-zusammenarbeit.md)
- [Anforderungen](docs/01-anforderungen.md)
- [Infrastruktur](docs/02-infrastruktur.md)
- [Design und Bildkonzept](docs/03-design-und-bildkonzept.md)
- [Roadmap](docs/04-roadmap.md)
- [Entscheidungslog](docs/05-entscheidungslog.md)
- [Offene Fragen](docs/06-offene-fragen.md)
- [Low-Cost-Hosting-Fahrplan](docs/07-low-cost-hosting-fahrplan.md)
- [GitHub Flow](docs/08-github-flow.md)
- [Content-Brief](docs/09-content-brief.md)
