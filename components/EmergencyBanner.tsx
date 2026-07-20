import React from "react";
import { strings, business } from "../content/site-content";

const EmergencyBanner: React.FC = () => {
    return (
        <section className="emergency">
            <div className="wrap">
                <div className="emergency-text">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 9v4M12 17h.01M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
                    <span>{strings.emergencyBanner.text}<span className="small">{strings.emergencyBanner.subtext}</span></span>
                </div>
                <a className="btn-primary" href={business.phoneHref}>{strings.emergencyBanner.cta}</a>
            </div>
        </section>
    );
}

export default EmergencyBanner;
