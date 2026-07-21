/**
 * JSON-LD structured data (schema.org), one node per business/page concept.
 * All nodes for a page are combined into a single @graph and rendered as one
 * <script type="application/ld+json"> by components/Layout.tsx.
 *
 * Fields set to `undefined` are intentional placeholders — JSON.stringify
 * drops them, so nothing invalid gets published until you fill them in.
 */

import { business, images, strings, PUBLIC_HOSTNAME } from "./site-content";

// ---------------------------------------------------------------------------
// Organization — the brand/entity itself.
// ---------------------------------------------------------------------------
export const organizationSchema = {
    "@type": "Organization",
    "@id": `${PUBLIC_HOSTNAME}/#organization`,
    name: business.name,
    url: PUBLIC_HOSTNAME || undefined,
    logo: `${PUBLIC_HOSTNAME}${images.headerLogo.url}`,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    taxID: business.kennitala,
    sameAs: [
        "https://www.facebook.com/p/Stíflu-og-myndavélaþjónustan-ehf-100083037016954/",
        // "https://www.instagram.com/...", // TODO: add if/when you have one
    ],
};

// ---------------------------------------------------------------------------
// LocalBusiness — the physical/service-area business, for local search &
// the Google Business Profile knowledge panel.
// ---------------------------------------------------------------------------
const ALL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const localBusinessSchema = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${PUBLIC_HOSTNAME}/#localbusiness`,
    name: business.name,
    image: `${PUBLIC_HOSTNAME}${images.ogImage.url}`,
    url: PUBLIC_HOSTNAME || undefined,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jófríðarstaðavegur 6",
        addressLocality: "Hafnarfjörður", // matches postcode 220 — "areaServed" below covers the broader capital region
        postalCode: "220",
        addressCountry: "IS",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 64.06267490983745,
        longitude: -21.95440983824652,
    },
    areaServed: business.serviceArea,
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ALL_DAYS,
            opens: "00:00",
            closes: "23:59",
        },
    ],
};

// ---------------------------------------------------------------------------
// HowTo — mapped from the "Process" section (Þrjú skref, ein heimsókn) so it
// can't drift from the visible copy. Add totalTime / estimatedCost / per-step
// images as you like.
// ---------------------------------------------------------------------------
export const howToSchema = {
    "@type": "HowTo",
    "@id": `${PUBLIC_HOSTNAME}/#howto`,
    name: strings.process.heading,
    step: strings.process.steps.map((step) => ({
        "@type": "HowToStep",
        position: Number(step.number),
        name: step.title,
        text: step.description,
        // image: undefined, // TODO: add a step image URL if you have one
    })),
    totalTime: "PT1H",
    estimatedCost: undefined as Record<string, unknown> | undefined, // TODO: "$$" isn't valid here (that's a priceRange tier, not an amount) — give a real ISK figure, e.g. { "@type": "MonetaryAmount", currency: "ISK", value: "..." }
};

// ---------------------------------------------------------------------------
// FAQPage — mapped from strings.faq.items (rendered visibly by
// components/FAQ.tsx) so the markup always matches what's on the page, per
// Google's structured data guidelines.
// ---------------------------------------------------------------------------
export const faqSchema = {
    "@type": "FAQPage",
    "@id": `${PUBLIC_HOSTNAME}/#faq`,
    mainEntity: strings.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

// ---------------------------------------------------------------------------
// Per-page bundle of schema nodes, combined into one @graph by Layout.tsx.
// Add a new key here when a new page/route is added (mirrors pagesMeta).
// ---------------------------------------------------------------------------
export const schemasByPage = {
    home: [
        organizationSchema,
        localBusinessSchema,
        howToSchema,
        faqSchema,
    ],
};

export function buildJsonLd(schemas: object[]) {
    return {
        "@context": "https://schema.org",
        "@graph": schemas,
    };
}
