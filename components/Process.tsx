import React from "react";
import { strings } from "../content/site-content";

const Process: React.FC = () => {
    return (
        <section id="process" className="on-dark">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">{strings.process.eyebrow}</span>
                    <h2>{strings.process.heading}</h2>
                </div>
                <div className="process-list">
                    {strings.process.steps.map((step) => (
                        <div className="process-step reveal" key={step.number}>
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
