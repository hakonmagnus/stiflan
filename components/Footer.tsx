import React from 'react';
import { strings, images, business, socialLinks, pagesMeta, PUBLIC_HOSTNAME } from "../content/site-content";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="footer-grid">
                    <div>
                        <a href={`${PUBLIC_HOSTNAME}/`} className="footer-logo-link" aria-label={strings.footer.callAriaLabel}>
                            <img className="footer-logo-img" src={`${PUBLIC_HOSTNAME}${images.footerLogo.url}`} alt={images.footerLogo.alt} />
                        </a>
                        <p>{strings.footer.tagline}</p>
                    </div>
                    <div>
                        <h4>{strings.footer.servicesHeading}</h4>
                        {strings.footer.serviceLinks.map((label) => (
                            <a href={`${PUBLIC_HOSTNAME}/#services`} key={label}>{label}</a>
                        ))}
                    </div>
                    <div>
                        <h4>{strings.footer.contactHeading}</h4>
                        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{strings.footer.addressLabel}</a>
                        <a href={business.phoneHref}>{strings.footer.phoneLabel}</a>
                        <a href={`mailto:${business.email}`}>{business.email}</a>
                        <a href={`${PUBLIC_HOSTNAME}/#booking`}>{strings.footer.sendInquiry}</a>
                        <a href={business.google.reviewUrl} target="_blank" rel="noopener noreferrer">{strings.footer.reviewLabel}</a>
                        <a href={`${PUBLIC_HOSTNAME}${pagesMeta.privacy.path}`}>{strings.footer.privacyLink}</a>
                        {socialLinks.length > 0 && (
                            <>
                                <h4 className="footer-follow">{strings.footer.followHeading}</h4>
                                {socialLinks.map((s) => (
                                    <a href={s.url} key={s.label} target="_blank" rel="noopener noreferrer">{s.label}</a>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>{strings.footer.copyright}</span>
                    <span>{strings.footer.areaLabel}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
