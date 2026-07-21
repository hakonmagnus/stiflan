/**
 * Third-party analytics & tracking IDs — Google Analytics, any other
 * gtag.js-based tags, Google Tag Manager, and the Vefheilsa.is snippet.
 *
 * Leave a field empty/blank to disable that script — components/Analytics.tsx
 * only renders a tag once its ID/snippet is filled in here, so nothing
 * broken loads in the meantime.
 *
 * Note: gtag.js (Google Analytics / Google Ads tags) and Google Tag Manager
 * are two different ways of loading Google's tags. If you manage GA4 through
 * a GTM container, only fill in googleTagManagerId — setting both will load
 * GA4 twice and double-count events.
 */

export const analytics = {
    // Google Analytics 4 — Admin > Data Streams > Web > Measurement ID (starts with "G-")
    googleAnalyticsId: "G-286EHV642N",

    // Any other gtag.js-based tags to load alongside GA4 (Google Ads conversion IDs, etc.)
    googleTagIds: [] as string[],

    // Google Tag Manager container ID (starts with "GTM-") — see the note above.
    googleTagManagerId: "",

    // Vefheilsa.is gives either a <script src="..."> tag or an inline <script>...</script> snippet.
    vefheilsa: {
        scriptSrc: "https://vefheilsa.is/api/websites/426f91b8-0679-4bf3-94c9-b37d37bdd67d/rum-snippet",
    },
};
