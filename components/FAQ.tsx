import React from "react";
import { strings } from "../content/site-content";

const FAQ: React.FC = () => {
    return (
        <section id="faq">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">{strings.faq.eyebrow}</span>
                    <h2>{strings.faq.heading}</h2>
                </div>
                <div className="faq-list">
                    {strings.faq.items.map((item) => (
                        <details className="faq-item reveal" key={item.question}>
                            <summary>{item.question}</summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
