import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const event = defineCollection({
  loader: file("src/content/event.yaml"),
  schema: z.object({
    date: z.string(),
    displayDate: z.string(),
    longDate: z.string(),
    countdownTarget: z.string(),
    countdownLabel: z.string(),
    ceremony: z.object({
      city: z.string(),
      address: z.string(),
      arrival: z.string(),
      start: z.string(),
      mapUrl: z.url(),
    }),
    celebration: z.object({
      name: z.string(),
      city: z.string(),
      address: z.string(),
      start: z.string(),
      mapUrl: z.url(),
    }),
  }),
});

const site = defineCollection({
  loader: file("src/content/site.yaml"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.string(),
  }),
});

const hero = defineCollection({
  loader: file("src/content/hero.yaml"),
  schema: z.object({
    eyebrow: z.string(),
    subline: z.string(),
    title: z.string(),
    intro: z.string(),
    calendarButton: z.string(),
    calendarAriaLabel: z.string(),
    quickLinksLabel: z.string(),
    visualAriaLabel: z.string(),
    countdownText: z.string(),
    countdownAriaLabel: z.string(),
    countdownUnits: z.object({
      days: z.string(),
      hours: z.string(),
      minutes: z.string(),
      seconds: z.string(),
    }),
    factsAriaLabel: z.string(),
    portraitAlt: z.string(),
    ledger: z.object({
      location: z.array(z.string()),
      dresscode: z.array(z.string()),
      closing: z.array(z.string()),
    }),
  }),
});

const navigation = defineCollection({
  loader: file("src/content/navigation.yaml"),
  schema: z.object({
    ariaLabel: z.string(),
    items: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        ariaLabel: z.string(),
      }),
    ),
  }),
});

const easterEgg = defineCollection({
  loader: file("src/content/easter-egg.yaml"),
  schema: z.object({
    triggerAriaLabel: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    hint: z.string(),
    galleryAriaLabel: z.string(),
    closeLabel: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      }),
    ),
  }),
});

const sectionVisibility = defineCollection({
  loader: file("src/config/sections.yaml"),
  schema: z.object({
    sections: z.object({
      start: z.boolean(),
      "wann-und-wo": z.boolean(),
      ablauf: z.boolean(),
      "anreise-und-unterkunft": z.boolean(),
      dresscode: z.boolean(),
      faq: z.boolean(),
    }),
  }),
});

const locations = defineCollection({
  loader: file("src/content/locations.yaml"),
  schema: z.object({
    kicker: z.string(),
    title: z.string(),
    intro: z.string(),
    noteLabel: z.string(),
    note: z.string(),
    ceremonyLabel: z.string(),
    celebrationLabel: z.string(),
    orientationText: z.string(),
    ceremonyRouteLabel: z.string(),
    celebrationRouteLabel: z.string(),
    galleryLabel: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      }),
    ),
    mapTitle: z.string(),
    mapUrl: z.url(),
  }),
});

const schedule = defineCollection({
  loader: file("src/content/schedule.yaml"),
  schema: z.object({
    kicker: z.string(),
    title: z.string(),
    intro: z.string(),
    ariaLabel: z.string(),
    items: z.array(
      z.object({
        datetime: z.string().optional(),
        time: z.string(),
        title: z.string(),
        description: z.string(),
        place: z.enum(["ceremony", "celebration"]).optional(),
      }),
    ),
  }),
});

const travel = defineCollection({
  loader: file("src/content/travel.yaml"),
  schema: z.object({
    kicker: z.string(),
    title: z.string(),
    intro: z.string(),
    cards: z.array(z.object({ label: z.string(), text: z.string() })),
  }),
});

const dresscode = defineCollection({
  loader: file("src/content/dresscode.yaml"),
  schema: z.object({
    kicker: z.string(),
    title: z.string(),
    intro: z.string(),
    editorialLine: z.string(),
    cuesLabel: z.string(),
    cues: z.array(
      z.object({
        eyebrow: z.string(),
        title: z.string(),
        text: z.string(),
        featured: z.boolean().optional(),
      }),
    ),
    summaryLabel: z.string(),
    summary: z.string(),
    colorsLabel: z.string(),
    colors: z.string(),
    excludedColors: z.array(
      z.object({ name: z.string(), className: z.enum(["is-white", "is-red"]) }),
    ),
  }),
});

const faq = defineCollection({
  loader: file("src/content/faq.yaml"),
  schema: z.object({
    kicker: z.string(),
    title: z.string(),
    intro: z.string(),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

export const collections = {
  site,
  event,
  hero,
  navigation,
  easterEgg,
  sectionVisibility,
  locations,
  schedule,
  travel,
  dresscode,
  faq,
};
