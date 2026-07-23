/**
 * JSON-LD structured data (schema.org), one node per business/page concept.
 * All nodes for a page are combined into a single @graph and rendered as one
 * <script type="application/ld+json"> by components/Layout.tsx.
 *
 * Fields set to `undefined` are intentional placeholders — JSON.stringify
 * drops them, so nothing invalid gets published until you fill them in.
 */

import { business, images, strings, socialLinks, pagesMeta, PUBLIC_HOSTNAME } from "./site-content";

// Shared NAP (Name / Address / Phone) — reused by both Organization and
// LocalBusiness so the two nodes can never drift apart.
const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
};

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
    address: postalAddress,
    taxID: business.kennitala,
    sameAs: socialLinks.map((s) => s.url),
};

// ---------------------------------------------------------------------------
// WebSite — identifies the site itself. No SearchAction: the site has no
// on-site search, and declaring one without a real search box would be
// misleading structured data.
// ---------------------------------------------------------------------------
export const websiteSchema = {
    "@type": "WebSite",
    "@id": `${PUBLIC_HOSTNAME}/#website`,
    url: PUBLIC_HOSTNAME || undefined,
    name: business.name,
    inLanguage: "is",
    publisher: { "@id": `${PUBLIC_HOSTNAME}/#organization` },
};

// ---------------------------------------------------------------------------
// LocalBusiness — the physical/service-area business, for local search &
// the Google Business Profile knowledge panel.
// ---------------------------------------------------------------------------
const ALL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const localBusinessSchema = {
    // HomeAndConstructionBusiness is a subtype of LocalBusiness; we list both
    // so naive parsers that match the literal "LocalBusiness" string still
    // recognise the NAP node.
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${PUBLIC_HOSTNAME}/#localbusiness`,
    name: business.name,
    image: `${PUBLIC_HOSTNAME}${images.ogImage.url}`,
    url: PUBLIC_HOSTNAME || undefined,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    priceRange: "$$",
    address: postalAddress,
    geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
    },
    areaServed: business.serviceArea,
    sameAs: [business.google.cidUrl, ...socialLinks.map((s) => s.url)],
    hasMap: business.google.cidUrl,
    potentialAction: {
        "@type": "ReviewAction",
        target: business.google.writeReviewUrl,
    },
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
// Privacy page — BreadcrumbList (now that the site has more than one page) and
// a WebPage node describing the privacy policy itself.
// ---------------------------------------------------------------------------
export const privacyBreadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${PUBLIC_HOSTNAME}${pagesMeta.privacy.path}#breadcrumb`,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Forsíða",
            item: `${PUBLIC_HOSTNAME}/`,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: strings.privacy.heading,
            item: `${PUBLIC_HOSTNAME}${pagesMeta.privacy.path}`,
        },
    ],
};

export const privacyPageSchema = {
    "@type": "WebPage",
    "@id": `${PUBLIC_HOSTNAME}${pagesMeta.privacy.path}#webpage`,
    url: `${PUBLIC_HOSTNAME}${pagesMeta.privacy.path}`,
    name: pagesMeta.privacy.title,
    description: pagesMeta.privacy.description,
    inLanguage: "is",
    isPartOf: { "@id": `${PUBLIC_HOSTNAME}/#website` },
    about: { "@id": `${PUBLIC_HOSTNAME}/#organization` },
};

// ---------------------------------------------------------------------------
// Per-page bundle of schema nodes, combined into one @graph by Layout.tsx.
// Add a new key here when a new page/route is added (mirrors pagesMeta).
// ---------------------------------------------------------------------------
export const schemasByPage = {
    home: [
        organizationSchema,
        localBusinessSchema,
        websiteSchema,
        howToSchema,
        faqSchema,
    ],
    privacy: [
        organizationSchema,
        websiteSchema,
        privacyBreadcrumbSchema,
        privacyPageSchema,
    ],
};

export function buildJsonLd(schemas: object[]) {
    return {
        "@context": "https://schema.org",
        "@graph": schemas,
    };
}
