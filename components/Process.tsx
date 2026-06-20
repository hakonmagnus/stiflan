import React from "react";

const Process: React.FC = () => {
    return (
        <section id="process" className="on-dark">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">Ferlið</span>
                    <h2>Þrjú skref, ein heimsókn.</h2>
                </div>
                <div className="process-list">
                    <div className="process-step reveal">
                        <div className="step-number">01</div>
                        <h3>Þú hringir eða bókar</h3>
                        <p>Við spyrjum réttu spurninganna í síma svo réttur búnaður og fagmaður mæti í fyrstu heimsókn.</p>
                    </div>
                    <div className="process-step reveal">
                        <div className="step-number">02</div>
                        <h3>Við mætum og leysum</h3>
                        <p>Stífla fjarlægð á staðnum, lögn skoðuð með myndavél þegar þörf er á dýpri greiningu.</p>
                    </div>
                    <div className="process-step reveal">
                        <div className="step-number">03</div>
                        <h3>Þú færð skýrslu</h3>
                        <p>Stutt yfirlit yfir verkið, ástand lagna og hvort eitthvað kalli á eftirfylgni.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
