import React from "react";
import { strings } from "../content/site-content";

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="wrap about-wrap reveal">
                <span className="eyebrow">{strings.about.eyebrow}</span>
                <h2>{strings.about.heading}</h2>
                {strings.about.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
        </section>
    );
};

export default About;
