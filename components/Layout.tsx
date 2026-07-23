import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { pagesMeta, PUBLIC_HOSTNAME } from "../content/site-content";
import { buildJsonLd } from "../content/schema";

interface LayoutProps {
    meta: typeof pagesMeta[keyof typeof pagesMeta];
    schemas?: object[];
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ meta, schemas, children }) => {
    const canonicalUrl = `${PUBLIC_HOSTNAME}${meta.path}`;
    // Escape "<" so a stray "</script>" inside any field can't break out of the tag.
    const jsonLd = schemas?.length
        ? JSON.stringify(buildJsonLd(schemas)).replace(/</g, "\\u003c")
        : null;

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={meta.description} />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hrefLang="is" href={canonicalUrl} />
                <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta.ogTitle} />
                <meta property="og:description" content={meta.ogDescription} />
                <meta property="og:image" content={`${PUBLIC_HOSTNAME}${meta.ogImage}`} />
                <meta property="og:url" content={canonicalUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.ogTitle} />
                <meta name="twitter:description" content={meta.ogDescription} />
                <meta name="twitter:image" content={`${PUBLIC_HOSTNAME}${meta.ogImage}`} />
                {jsonLd && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
                )}
            </Head>
            <a href="#main" className="skip-link">Fara í efni</a>
            <Header />
            <main id="main">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
