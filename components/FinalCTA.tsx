import React from "react";
import { strings, business } from "../content/site-content";

const FinalCTA: React.FC = () => {
    return (
        <section className="final-cta">
            <div className="wrap">
                <h2>{strings.finalCTA.heading}</h2>
                <p>{strings.finalCTA.text}</p>
                <div className="hero-ctas">
                    <a className="btn-primary" href={business.phoneHref}>{strings.finalCTA.ctaPrimary}</a>
                    <a className="btn-secondary" href="#booking">{strings.finalCTA.ctaSecondary}</a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
