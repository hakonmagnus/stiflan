import React from "react";
import Layout from "../components/Layout";
import { pagesMeta, strings, PUBLIC_HOSTNAME } from "../content/site-content";
import { schemasByPage } from "../content/schema";

const PrivacyPage: React.FC = () => {
    const p = strings.privacy;

    return (
        <Layout meta={pagesMeta.privacy} schemas={schemasByPage.privacy}>
            <article className="legal">
                <div className="wrap legal-wrap">
                    <nav className="legal-breadcrumb" aria-label="Brauðmolar">
                        <a href={`${PUBLIC_HOSTNAME}/`}>Forsíða</a>
                        <span aria-hidden="true">/</span>
                        <span>{p.heading}</span>
                    </nav>

                    <h1>{p.heading}</h1>
                    <p className="legal-updated">{p.lastUpdatedLabel}: {p.lastUpdated}</p>
                    <p className="legal-intro">{p.intro}</p>

                    {p.sections.map((section) => (
                        <section key={section.heading}>
                            <h2>{section.heading}</h2>
                            {section.paragraphs?.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            {"list" in section && section.list && (
                                <ul>
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {"paragraphsAfter" in section && section.paragraphsAfter?.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </section>
                    ))}
                </div>
            </article>
        </Layout>
    );
};

export default PrivacyPage;
