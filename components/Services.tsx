import React from "react";

const Services: React.FC = () => {
    return (
        <section id="services">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">Þjónustuframboð</span>
                    <h2>Allt sem lögnin þín þarf, frá bráðaútkalli til árlegs viðhalds.</h2>
                    <p>Við hjá Stíflu og myndavélarþjónustunni bjóðum upp á örugga og vandaða þjónustu.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7a5 5 0 1 0 5 5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg></div>
                        <h3>Stífluhreinsun</h3>
                        <p>Lausn á stíflum í baðherbergi, eldhúsi og lögnum utanhúss með háþrýstibúnaði og stangartækjum. Einnig bjóðum við upp á rótarhreinsun.</p>
                    </div>
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.2"/></svg></div>
                        <h3>Myndavélaskoðun</h3>
                        <p>Nákvæm greining á ástandi lagna með myndavél — við sjáum vandann í stað þess að giska á hann.</p>
                    </div>
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 3c3 4 5 6.6 5 9.5a5 5 0 1 1-10 0C7 9.6 9 7 12 3z"/></svg></div>
                        <h3>Lagnahreinsun</h3>
                        <p>Reglulegur háþrýstiþvottur á frárennslislögnum til að koma í veg fyrir endurtekin stíflumál.</p>
                    </div>
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M7 3v4M17 3v4"/><path d="M8.5 14.5l2 2 5-5"/></svg></div>
                        <h3>Árlegur viðhaldssamningur</h3>
                        <p>Föst árleg skoðun og hreinsun og forgangsþjónusta í útkalli — vinsælt hjá húsfélögum.</p>
                    </div>
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 16.5h6"/></svg></div>
                        <h3>PDF ástandsskýrsla</h3>
                        <p>Skrifleg skýrsla með myndum eftir skoðun — gagnleg fyrir fasteignasölu, kaup eða húsfélagsfundi.</p>
                        </div>
                    <div className="service-card reveal">
                        <div className="icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2 2-2-1-1-2 2-2z"/></svg></div>
                        <h3>Skólpviðgerðir</h3>
                        <p>Í boði ef þess er óskað, eftir skoðun og samráði.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
