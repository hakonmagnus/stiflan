import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import EmergencyBanner from "../components/EmergencyBanner";
import Services from "../components/Services";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Booking from "../components/Booking";
import { pagesMeta } from "../content/site-content";
import { schemasByPage } from "../content/schema";

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
        <Layout meta={pagesMeta.home} schemas={schemasByPage.home}>
            <Hero />
            <EmergencyBanner />
            <Services />
            <Process />
            <FAQ />
            <FinalCTA />
            <Booking />
        </Layout>
    )
}

export default IndexPage;
