import React, { useEffect } from "react";

const Header: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");
            header?.classList.toggle("scrolled", window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        const mobilePanel = document.getElementById("mobilePanel");
        mobilePanel?.classList.toggle("open");
    }

    return (
        <header id="header">
            <div className="header-inner">
                <a href="#hero" className="logo">
                    <img className="logo-icon" src="/images/logo_small.png" alt="Stíflu og myndavélaþjónustan" />
                    <span className="word"><span className="line1">Stíflu og</span><span className="line2">myndavélaþjónustan</span></span>
                </a>
                <nav className="main-nav">
                    <a href="#services">Þjónusta</a>
                    <a href="#process">Ferlið</a>
                    <a href="#booking">Hafa samband</a>
                </nav>
                <div className="header-actions">
                    <a className="call-btn" href="tel:+3548600938">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
                        860-0938
                    </a>
                    <button className="menu-toggle" id="menuToggle" aria-label="Opna valmynd" aria-expanded="false" onClick={toggleMenu}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                    </button>
                </div>
            </div>
            <div className="mobile-panel" id="mobilePanel">
                <a href="#services">Þjónusta</a>
                <a href="#process">Ferlið</a>
                <a href="#booking">Hafa samband</a>
                <a href="mailto:stiflan@stiflan.is">stiflan@stiflan.is</a>
            </div>
        </header>
    );
};

export default Header;
