import React from "react";
import { strings, business, PUBLIC_HOSTNAME } from "../content/site-content";

const Hero: React.FC = () => {
    return (
        <section className="hero" id="hero">
            <div className="wrap hero-grid">
                <div>
                    <span className="eyebrow">{strings.hero.eyebrow}</span>
                    <h1>{strings.hero.headline}<span className="accent">{strings.hero.headlineAccent}</span></h1>
                    <p className="lead">{strings.hero.lead}</p>
                    <div className="hero-ctas">
                        <a className="btn-primary" href={business.phoneHref}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
                            {strings.hero.ctaPrimary}
                        </a>
                        <a className="btn-secondary" href={`${PUBLIC_HOSTNAME}#services`}>{strings.hero.ctaSecondary}</a>
                    </div>
                    <div className="trust-strip">
                        <div className="trust-item"><div className="num">{strings.hero.trustNumber}</div><div className="label">{strings.hero.trustLabel}</div></div>
                    </div>
                </div>
                <div className="hero-schematic" aria-hidden="true">
                    <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 30 L40 140 Q40 170 70 170 L260 170 Q290 170 290 200 L290 300" fill="none" stroke="#D17B43" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M150 30 L150 90 Q150 110 170 110 L340 110 Q360 110 360 130 L360 350" fill="none" stroke="#EDEAE0" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <circle cx="40" cy="140" r="7" fill="#D17B43"/>
                    <circle cx="260" cy="170" r="7" fill="#D17B43"/>
                    <circle cx="290" cy="300" r="7" fill="#D17B43"/>
                    <circle cx="150" cy="90" r="6" fill="#EDEAE0" opacity="0.5"/>
                    <circle cx="340" cy="110" r="6" fill="#EDEAE0" opacity="0.5"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
