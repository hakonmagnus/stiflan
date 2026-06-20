import React from "react";

const FinalCTA: React.FC = () => {
    return (
        <section className="final-cta">
            <div className="wrap">
                <h2>Þarftu hjálp núna?</h2>
                <p>Hringdu og fáðu fagmann í útkall, eða sendu okkur fyrirspurn hér fyrir neðan og við svörum eins fljótt og hægt er.</p>
                <div className="hero-ctas">
                    <a className="btn-primary" href="tel:+3548600938">Hringja núna</a>
                    <a className="btn-secondary" href="#booking">Senda fyrirspurn</a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
