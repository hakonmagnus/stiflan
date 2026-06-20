import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import EmergencyBanner from "../components/EmergencyBanner";
import Services from "../components/Services";
import Process from "../components/Process";
import FinalCTA from "../components/FinalCTA";
import Booking from "../components/Booking";

const IndexPage: React.FC = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach((el) => revealObserver.observe(el));
    }, []);

    return (
        <Layout title="Stíflu og myndavélaþjónustan — Stífluhreinsun og myndavélaskoðun lagna á höfuðborgarsvæðinu">
            <Hero />
            <EmergencyBanner />
            <Services />
            <Process />
            <FinalCTA />
            <Booking />
        </Layout>
    )
}

export default IndexPage;
