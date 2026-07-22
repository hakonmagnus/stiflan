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
    address: {
        street: "Ármúla 21",
        locality: "Reykjavík",
        postalCode: "108",
        country: "IS",
        // One-line form for display (footer, etc.)
        display: "Ármúla 21, 108 Reykjavík",
    },
    // Google Maps share link — used for the clickable address & "get directions".
    mapsUrl: "https://maps.app.goo.gl/EASWussnef8Xs5kh6",
    geo: {
        latitude: 64.13653629468484,
        longitude: -21.878446512219753,
    },
    // Google Business Profile identifiers — from the g.page review short link,
    // which resolves to the real GBP listing (NOT the Ármúla 21 address pin).
    google: {
        cid: "13449748266225729812",
        placeId: "ChIJyTxCsqzPd0gRFIHPzskap7o",
        cidUrl: "https://www.google.com/maps?cid=13449748266225729812",
        // Short, branded review link straight from Google Business Profile.
        reviewUrl: "https://g.page/r/CRSBz87JGqe6EBM/review",
        // Long-form review link that carries the Place ID explicitly.
        writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJyTxCsqzPd0gRFIHPzskap7o",
    },
};

// Social / external profiles — single source of truth, also fed into
// Organization schema `sameAs` (content/schema.ts). Add more as you get them.
export const socialLinks = [
    {
        label: "Facebook",
        url: "https://www.facebook.com/p/Stíflu-og-myndavélaþjónustan-ehf-100083037016954/",
    },
    // { label: "Instagram", url: "https://www.instagram.com/..." },
];

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
        title: "Stífluhreinsun & lagnamyndun á höfuðborgarsvæðinu | Stíflan",
        description: "Stífluhreinsun, lagnamyndun og lagnaviðhald á höfuðborgarsvæðinu. Sama dags þjónusta allan sólarhringinn — hringdu núna í 860-0938.",
        // Focus keywords lögn / lagnir / skólp / stíflur / lagnamyndun are split across ogTitle + ogDescription below.
        ogTitle: "Stíflu og myndavélaþjónustan — Stíflur, lagnamyndun og skólphreinsun",
        ogDescription: "Fagleg þjónusta fyrir lagnir og skólp á höfuðborgarsvæðinu: stífluhreinsun, lagnamyndun, lagnaviðhald og viðgerðir á lögn. Sama dags þjónusta, allan sólarhringinn.",
        ogImage: images.ogImage.url,
    },
    privacy: {
        path: "/personavernd",
        title: "Persónuverndarstefna | Stíflu og myndavélaþjónustan",
        description: "Persónuverndarstefna Stíflu og myndavélaþjónustunnar — hvaða persónuupplýsingum við söfnum, í hvaða tilgangi þær eru unnar og hver réttindi þín eru.",
        ogTitle: "Persónuverndarstefna — Stíflu og myndavélaþjónustan",
        ogDescription: "Hvernig Stíflu og myndavélaþjónustan safnar og vinnur persónuupplýsingar, og hver réttindi þín eru samkvæmt persónuverndarlögum.",
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
        navAbout: "Um okkur",
        navReviews: "Umsagnir",
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

    about: {
        eyebrow: "Um fyrirtækið",
        heading: "Um okkur",
        paragraphs: [
            "Stíflu og myndavélaþjónustan er íslenskt þjónustufyrirtæki sem sérhæfir sig í stífluhreinsun, lagnamyndun og lagnaviðhaldi fyrir heimili, húsfélög, fyrirtæki og stofnanir á höfuðborgarsvæðinu.",
            "Við leggjum áherslu á fagleg vinnubrögð, snögga þjónustu og heiðarleg ráð. Með nákvæmri myndavélaskoðun sjáum við raunverulegt ástand lagnanna í stað þess að giska — og veitum neyðarþjónustu allan sólarhringinn, alla daga ársins.",
            `Fyrirtækið er með starfsstöð að ${business.address.display} (kt. ${business.kennitala}) og þjónustar allt höfuðborgarsvæðið.`,
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

    // -----------------------------------------------------------------------
    // Customer reviews — shown visibly for trust / AI citations only.
    // NOT marked up as review/aggregateRating JSON-LD: reviews about your own
    // business on your own site are "self-serving" under Google's structured-
    // data policy and can trigger a manual action. Text transcribed from the
    // business's Google Business Profile.
    // -----------------------------------------------------------------------
    reviews: {
        eyebrow: "Umsagnir",
        heading: "Það sem viðskiptavinir segja",
        summaryLabel: "á Google",
        ctaLabel: "Sjá umsagnir á Google",
        items: [
            {
                name: "Kary Björk",
                rating: 5,
                text: "Mjög góð þjónusta, kom sama dag og ég hringdi og var mjög almennilegur og sanngjarn í verði 😊",
            },
            {
                name: "Ingvar Ragnarsson",
                rating: 5,
                text: "Fagleg þjónusta og frábært viðmót. Brugðust skjótt við og leystu okkar vandamál hratt og örugglega. Mæli með.",
            },
            {
                name: "Steinar Bragi",
                rating: 5,
                text: "Frábær þjónusta, mæli með!",
            },
            {
                name: "Eyþór Eðvarðsson",
                rating: 5,
                text: "Frábær þjónusta! Leysti vandamálið með glæsibrag!",
            },
            {
                name: "Telma Björnsdóttir",
                rating: 5,
                text: "Ótrúlega liðleg og fagleg þjónusta. Kom með litlum fyrirvara og leysti málið skjótt og vel. Mæli 100% með þessu fyrirtæki.",
            },
            {
                name: "Guðjón Björgvinsson",
                rating: 5,
                text: "Topp þjónusta.",
            },
        ],
    },

    footer: {
        tagline: "Stífluhreinsun, lagnamyndun og lagnaviðhald fyrir lagnir og skólp á höfuðborgarsvæðinu.",
        callAriaLabel: `Hringja í ${business.phoneDisplay}`,
        servicesHeading: "Þjónusta",
        serviceLinks: ["Stífluhreinsun", "Lagnamyndun", "Myndavélaskoðun", "Skólpviðgerðir", "Viðhaldssamningur"],
        contactHeading: "Samband",
        followHeading: "Fylgdu okkur",
        addressLabel: business.address.display,
        phoneLabel: `Sími: ${business.phoneDisplay}`,
        sendInquiry: "Senda fyrirspurn",
        reviewLabel: "Umsagnir á Google",
        mapLabel: "Skoða á Google kortum",
        copyright: `© 2026 ${business.name}. Kt. ${business.kennitala}. Allur réttur áskilinn.`,
        areaLabel: "Höfuðborgarsvæðið · Neyðarþjónusta allan sólarhringinn",
        privacyLink: "Persónuverndarstefna",
    },

    // -----------------------------------------------------------------------
    // Privacy policy (/personavernd). Structured as sections so the page can
    // render it and the copy stays editable here. NOTE: reviewed for accuracy
    // against the site's actual data flows (contact form via EmailJS; GA4/GTM
    // + Vefheilsa analytics) but is not a substitute for legal review.
    // -----------------------------------------------------------------------
    privacy: {
        heading: "Persónuverndarstefna",
        intro: `${business.name} (hér eftir „við“ eða „fyrirtækið“) leggur áherslu á að vernda persónuupplýsingar þínar. Þessi stefna útskýrir hvaða upplýsingum við söfnum þegar þú notar vefinn stiflan.is eða hefur samband við okkur, í hvaða tilgangi þær eru unnar, og hver réttindi þín eru samkvæmt lögum nr. 90/2018 um persónuvernd og vinnslu persónuupplýsinga og almennu persónuverndarreglugerðinni (GDPR).`,
        lastUpdatedLabel: "Síðast uppfært",
        lastUpdated: "22. júlí 2026",
        sections: [
            {
                heading: "Ábyrgðaraðili",
                paragraphs: [
                    `Ábyrgðaraðili vinnslu persónuupplýsinga er ${business.name}, kt. ${business.kennitala}, ${business.address.display}.`,
                    `Netfang: ${business.email} · Sími: ${business.phoneDisplay}.`,
                ],
            },
            {
                heading: "Hvaða upplýsingum söfnum við",
                paragraphs: [
                    "Þegar þú sendir okkur fyrirspurn í gegnum samskiptaformið á vefnum söfnum við þeim upplýsingum sem þú lætur okkur í té:",
                ],
                list: [
                    "Nafn",
                    "Netfang",
                    "Símanúmer",
                    "Lýsing á vandamáli eða fyrirspurn",
                ],
                paragraphsAfter: [
                    "Auk þess safnast sjálfvirkt tæknilegar upplýsingar þegar þú heimsækir vefinn, svo sem IP-tala, gerð vafra og tækis, og upplýsingar um hvernig þú notar vefinn. Þessar upplýsingar eru unnar í gegnum vefgreiningartól (sjá „Vefkökur og vefgreining“ hér að neðan).",
                ],
            },
            {
                heading: "Í hvaða tilgangi og á hvaða grundvelli",
                paragraphs: [
                    "Við vinnum persónuupplýsingar í eftirfarandi tilgangi:",
                ],
                list: [
                    "Til að svara fyrirspurnum þínum og veita umbeðna þjónustu (grundvöllur: framkvæmd ráðstafana að þinni beiðni og lögmætir hagsmunir).",
                    "Til að reka, viðhalda og bæta vefinn og þjónustu okkar (grundvöllur: lögmætir hagsmunir).",
                    "Til að uppfylla lagaskyldur, t.d. bókhaldsskyldur (grundvöllur: lagaskylda).",
                ],
            },
            {
                heading: "Vinnsluaðilar og miðlun",
                paragraphs: [
                    "Við seljum ekki persónuupplýsingar þínar. Við notum áreiðanlega þjónustuaðila sem vinna upplýsingar fyrir okkar hönd:",
                ],
                list: [
                    "EmailJS — sendir fyrirspurnir úr samskiptaforminu til okkar í tölvupósti.",
                    "Google (Google Analytics og Google Tag Manager) — vefgreining og mæling á notkun vefsins.",
                    "Vefheilsa.is — mæling á frammistöðu og notkun vefsins.",
                ],
                paragraphsAfter: [
                    "Sumir þessara aðila kunna að vinna upplýsingar utan Evrópska efnahagssvæðisins. Í slíkum tilvikum er tryggt að viðeigandi verndarráðstafanir séu til staðar, svo sem staðlaðir samningsskilmálar Evrópusambandsins.",
                ],
            },
            {
                heading: "Vefkökur og vefgreining",
                paragraphs: [
                    "Vefurinn notar vefkökur (cookies) og sambærilega tækni til að greina umferð og bæta upplifun notenda. Þú getur stýrt eða eytt vefkökum í stillingum vafrans þíns. Ef þú slekkur á vefkökum kann virkni vefsins að skerðast.",
                ],
            },
            {
                heading: "Varðveislutími",
                paragraphs: [
                    "Við varðveitum persónuupplýsingar ekki lengur en nauðsynlegt er í þeim tilgangi sem þeim var safnað, eða eins lengi og lög krefjast. Fyrirspurnir eru varðveittar á meðan þær eru í vinnslu og í hæfilegan tíma þar á eftir vegna eftirfylgni og bókhalds.",
                ],
            },
            {
                heading: "Réttindi þín",
                paragraphs: [
                    "Þú átt rétt á að:",
                ],
                list: [
                    "Fá aðgang að þeim persónuupplýsingum sem við vinnum um þig.",
                    "Fá rangar eða ófullkomnar upplýsingar leiðréttar.",
                    "Fá upplýsingum eytt, að uppfylltum skilyrðum.",
                    "Takmarka eða andmæla vinnslu upplýsinga.",
                    "Fá afrit af upplýsingum þínum á aðgengilegu formi (gagnaflutningur).",
                ],
                paragraphsAfter: [
                    `Til að nýta réttindi þín, hafðu samband við okkur í ${business.email}. Þú átt einnig rétt á að leggja fram kvörtun hjá Persónuvernd (www.personuvernd.is) ef þú telur að vinnsla persónuupplýsinga brjóti gegn lögum.`,
                ],
            },
            {
                heading: "Breytingar á stefnunni",
                paragraphs: [
                    "Við kunnum að uppfæra þessa persónuverndarstefnu. Nýjasta útgáfan er ávallt aðgengileg á þessari síðu ásamt dagsetningu síðustu uppfærslu.",
                ],
            },
        ],
    },
};
