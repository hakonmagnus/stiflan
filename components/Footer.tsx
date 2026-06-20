import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="footer-grid">
                    <div>
                        <a href="tel:+3548600938" className="footer-logo-link" aria-label="Hringja í 860-0938">
                            <img className="footer-logo-img" src="/images/logo.png" alt="Stíflu og myndavélaþjónustan — sími 860-0938" />
                        </a>
                        <p>Stífluhreinsun, myndavélaskoðun og lagnaviðhald á höfuðborgarsvæðinu — því allt losnar að lokum.</p>
                    </div>
                    <div>
                        <h4>Þjónusta</h4>
                        <a href="/#services">Stífluhreinsun</a>
                        <a href="/#services">Myndavélaskoðun</a>
                        <a href="/#services">Viðhaldssamningur</a>
                    </div>
                    <div>
                        <h4>Samband</h4>
                        <a href="tel:+3548600938">Sími: 860-0938</a>
                        <a href="mailto:info@stiflan.is">stiflan@stiflan.is</a>
                        <a href="/#booking">Senda fyrirspurn</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 Stíflu og myndavélaþjónustan. Kt. 690307-0570. Allur réttur áskilinn.</span>
                    <span>Höfuðborgarsvæðið &middot; Neyðarþjónusta allan sólarhringinn</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
