/**
 * Single source of truth for all site copy, SEO metadata, and image alt text.
 * Edit this file to change what appears on the site — components read from here.
 */

// The site's own origin (e.g. "https://stiflan.is"), no trailing slash.
// Every consumer concatenates this directly with a leading-slash path
// (e.g. `${PUBLIC_HOSTNAME}/images/...`), so keep it origin-only here.
export const PUBLIC_HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || "";

export const business = {
    name: "Stíflu og myndavélaþjónustan",
    phoneDisplay: "860-0938",
    phoneHref: "tel:+3548600938",
    email: "stiflan@stiflan.is",
    kennitala: "690307-0570",
    serviceArea: "Höfuðborgarsvæðið",
};

// ---------------------------------------------------------------------------
// Every image on the site: URL (relative to /public), alt text, and where
// it's used. Keep alt text descriptive but concise (roughly under ~125 chars).
// ---------------------------------------------------------------------------
export const images = {
    headerLogo: {
        url: "/images/stiflan-logo-transp.png",
        alt: "Stíflu og myndavélaþjónustan",
        usedIn: "Header — logo, links to homepage",
    },
    footerLogo: {
        url: "/images/logo-footer-transp.png",
        alt: "Stíflu og myndavélaþjónustan — sími 860-0938",
        usedIn: "Footer — logo, links to homepage",
    },
    ogImage: {
        url: "/images/stiflu_og.jpg",
        alt: "Stíflu og myndavélaþjónustan — stíflur, lagnamyndun og skólpviðgerðir á höfuðborgarsvæðinu",
        usedIn: "Open Graph / social share preview (Facebook, LinkedIn, iMessage, Slack, etc.)"
    },
    // Unused elsewhere but present in /public/images — kept here for reference:
    // logo.png, logo_small.png, logo-footer.png, stiflan-logo.png (non-transparent variants, not currently referenced in code)
};

// ---------------------------------------------------------------------------
// Per-page SEO metadata. Add a new key here when a new page/route is added.
// ---------------------------------------------------------------------------
export const pagesMeta = {
    home: {
        path: "/",
        title: "Stíflu og myndavélaþjónustan — Stífluhreinsun og lagnamyndun á höfuðborgarsvæðinu",
        description: "Stíflu og myndavélaþjónustan leysir stíflur og sér um lagnamyndun, myndavélaskoðun og lagnaviðhald fyrir lagnir og skólp á höfuðborgarsvæðinu. Hringdu núna — við svörum allan sólarhringinn.",
        // Focus keywords lögn / lagnir / skólp / stíflur / lagnamyndun are split across ogTitle + ogDescription below.
        ogTitle: "Stíflu og myndavélaþjónustan — Stíflur, lagnamyndun og skólphreinsun",
        ogDescription: "Fagleg þjónusta fyrir lagnir og skólp á höfuðborgarsvæðinu: stífluhreinsun, lagnamyndun, lagnaviðhald og viðgerðir á lögn. Sama dags þjónusta, allan sólarhringinn.",
        ogImage: images.ogImage.url,
    },
};

// ---------------------------------------------------------------------------
// All UI copy, grouped by component/section.
// ---------------------------------------------------------------------------
export const strings = {
    header: {
        navServices: "Þjónusta",
        navProcess: "Ferlið",
        navContact: "Hafa samband",
        callButtonLabel: business.phoneDisplay,
        menuAriaLabel: "Opna valmynd",
        mobileEmailLabel: business.email,
    },

    hero: {
        eyebrow: "Stífluhreinsun, lagnamyndun & skólpþjónusta · Höfuðborgarsvæðið",
        headline: "Stíflur, lagnamyndanir og ",
        headlineAccent: "lagnahreinsun.",
        lead: "Hröð og fagleg þjónusta við lagnir og skólp fyrir heimili, húsfélög, fyrirtæki og stofnanir á höfuðborgarsvæðinu - Þjónusta samdægurs, allan sólarhringinn!",
        ctaPrimary: "Hringja núna",
        ctaSecondary: "Skoða þjónustu",
        trustNumber: "24/7",
        trustLabel: "Neyðarþjónusta allan sólarhringinn",
    },

    emergencyBanner: {
        text: "Er stíflað núna? Við svörum allan sólarhringinn.",
        subtext: "Útkall sama dag, hvenær sem er.",
        cta: "Hringja núna",
    },

    services: {
        eyebrow: "Þjónustuframboð",
        heading: "Allt sem lögnin þín þarf, frá bráðaútkalli til árlegs viðhalds.",
        intro: "Við hjá Stíflu og myndavélarþjónustunni bjóðum upp á örugga myndavélarþjónustu, stífluhreinsun og lagnaviðhald fyrir lagnir og skólp á höfuðborgarsvæðinu.",
        // "icon" must match a key in serviceIcons (components/Services.tsx).
        items: [
            {
                icon: "drain",
                title: "Stífluhreinsun",
                description: "Fljót lausn á stíflum í lögnum á baðherbergi, eldhúsi og utanhúss með háþrýstibúnaði og stangartækjum. Einnig bjóðum við upp á rótarhreinsun fyrir viðkvæmar lagnir.",
            },
            {
                icon: "camera",
                title: "Lagnamyndun",
                description: "Nákvæm lagnamyndun og stíflumyndun með myndavél sýnir raunverulegt ástand lagnanna — við sjáum vandann í stað þess að giska á hann.",
            },
            {
                icon: "droplet",
                title: "Lagnahreinsun",
                description: "Reglulegur háþrýstiþvottur á frárennslislögnum og lögnum sem hluti af fyrirbyggjandi lagnaviðhaldi — kemur í veg fyrir endurtekin stíflumál.",
            },
            {
                icon: "checklist",
                title: "Árlegur viðhaldssamningur",
                description: "Fast árlegt lagnaviðhald með skoðun, hreinsun og forgangsþjónustu í útkalli — vinsælt hjá húsfélögum sem vilja tryggja endingu lagnanna.",
            },
            {
                icon: "report",
                title: "PDF ástandsskýrsla",
                description: "Þú færð stíflumyndir og ítarlega ástandsskýrslu úr lagnamyndun — gagnleg fyrir fasteignasölu, kaup eða húsfélagsfundi.",
            },
            {
                icon: "wrench",
                title: "Skólpviðgerðir",
                description: "Viðgerðir á skólplögnum og frárennslislögnum í boði, eftir skoðun og samráði.",
            },
        ],
    },

    process: {
        eyebrow: "Ferlið",
        heading: "Þrjú skref, ein heimsókn.",
        steps: [
            {
                number: "01",
                title: "Þú hringir eða bókar",
                description: "Við spyrjum réttu spurninganna um lagnirnar þínar í síma svo réttur búnaður og fagmaður mæti í fyrstu heimsókn.",
            },
            {
                number: "02",
                title: "Við mætum og leysum",
                description: "Stífla fjarlægð á staðnum, lögn skoðuð með myndavél þegar þörf er á dýpri greiningu.",
            },
            {
                number: "03",
                title: "Þú færð skýrslu",
                description: "Stutt yfirlit yfir verkið, ástand lagna og hvort eitthvað kalli á eftirfylgni.",
            },
        ],
    },

    finalCTA: {
        heading: "Þarftu hjálp núna?",
        text: "Hringdu ef stífla er í lögninni þinni, eða sendu okkur fyrirspurn hér fyrir neðan og við svörum eins fljótt og hægt er.",
        ctaPrimary: "Hringja núna",
        ctaSecondary: "Senda fyrirspurn",
    },

    booking: {
        eyebrow: "Hafa samband",
        heading: "Lýstu vandanum, við hringjum til baka.",
        intro: "Ekkert bráðatilfelli? Sendu okkur línu og við finnum tíma sem hentar — venjulega svarað innan dags.",
        labels: {
            name: "Nafn",
            email: "Netfang",
            phone: "Sími",
            message: "Lýsing á vandamáli",
        },
        placeholders: {
            name: "Fullt nafn",
            email: "Netfang",
            phone: "Símanúmer",
            message: "Lýstu vandanum",
        },
        submitButton: "Senda fyrirspurn",
        successMessage: "Fyrirspurnin hefur verið send. Við munum hafa samband við þig sem fyrst.",
        errorPrefix: "Villa kom upp við að senda fyrirspurnina",
        errorSuffix: "Vinsamlegast reyndu aftur síðar.",
        emailSubjectPrefix: "Fyrirspurn frá",
        emailNameLabel: "Nafn:",
        emailPhoneLabel: "Sími:",
        emailMessageLabel: "Lýsing á vandamáli:",
    },

    faq: {
        eyebrow: "Spurt og svarað",
        heading: "Algengar spurningar um stíflur og lagnir",
        items: [
            {
                question: "Hvað geri ég ef það er stíflað hjá mér?",
                answer: "Hringdu strax í okkur — við erum með neyðarþjónustu allan sólarhringinn og bjóðum upp á útkall samdægurs, hvort sem stíflað er að degi eða nóttu.",
            },
            {
                question: "Hvaða svæði þjónustið þið?",
                answer: "Við þjónustum lagnir á heimilum, í húsfélögum, hjá fyrirtækjum og stofnunum á öllu höfuðborgarsvæðinu.",
            },
            {
                question: "Hvað er lagnamyndun og hvenær er hún notuð?",
                answer: "Lagnamyndun er myndavélaskoðun þar sem við tökum myndanir og stíflumyndir af lögninni með myndavél — svo við sjáum vandann í stað þess að giska á hann. Við notum líka stíflumyndun til að staðsetja nákvæmlega hvar vandinn liggur.",
            },
            {
                question: "Fæ ég skýrslu eftir skoðun á lögninni?",
                answer: "Já, að skoðun lokinni færðu skriflega PDF ástandsskýrslu með stíflumyndum úr lagnamyndun — gagnleg fyrir fasteignasölu, kaup eða húsfélagsfundi.",
            },
            {
                question: "Sinnið þið skólplögnum og skólpviðgerðum?",
                answer: "Já, við bjóðum upp á skólpviðgerðir eftir skoðun og samráði, auk hefðbundinnar stífluhreinsunar og lagnahreinsunar á lögnum og skólpi.",
            },
            {
                question: "Hvað felst í myndavélarþjónustunni ykkar?",
                answer: "Myndavélarþjónustan okkar felur í sér nákvæma lagnamyndun á lögnum og skólplögnum, ásamt ítarlegri ástandsskýrslu ef óskað er.",
            },
            {
                question: "Þarf ég reglulegt lagnaviðhald þó ekkert sé stíflað?",
                answer: "Já, við mælum með því. Við skoðum lagnir reglulega til að koma í veg fyrir stíflur — fyrirbyggjandi lagnaviðhald sparir bæði tíma og kostnað síðar meir.",
            },
            {
                question: "Er hægt að gera árlegan viðhaldssamning fyrir húsfélög?",
                answer: "Já, við bjóðum upp á fastan árlegan viðhaldssamning með skoðun, hreinsun og forgangsþjónustu í útkalli — vinsælt hjá húsfélögum.",
            },
        ],
    },

    footer: {
        tagline: "Stífluhreinsun, lagnamyndun og lagnaviðhald fyrir lagnir og skólp á höfuðborgarsvæðinu.",
        callAriaLabel: `Hringja í ${business.phoneDisplay}`,
        servicesHeading: "Þjónusta",
        serviceLinks: ["Stífluhreinsun", "Lagnamyndun", "Myndavélaskoðun", "Skólpviðgerðir", "Viðhaldssamningur"],
        contactHeading: "Samband",
        phoneLabel: `Sími: ${business.phoneDisplay}`,
        sendInquiry: "Senda fyrirspurn",
        copyright: `© 2026 ${business.name}. Kt. ${business.kennitala}. Allur réttur áskilinn.`,
        areaLabel: "Höfuðborgarsvæðið · Neyðarþjónusta allan sólarhringinn",
    },
};
