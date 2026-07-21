import React from "react";
import Script from "next/script";
import { analytics } from "../content/analytics";

const gtagIds = [analytics.googleAnalyticsId, ...analytics.googleTagIds].filter(Boolean);

const Analytics: React.FC = () => {
    return (
        <>
            {gtagIds.length > 0 && (
                <>
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}`} strategy="afterInteractive" />
                    <Script id="gtag-init" strategy="afterInteractive">
                        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${gtagIds.map((id) => `gtag('config', '${id}');`).join("\n")}`}
                    </Script>
                </>
            )}
            {analytics.googleTagManagerId && (
                <Script id="gtm-init" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${analytics.googleTagManagerId}');`}
                </Script>
            )}
            {analytics.vefheilsa.scriptSrc && (
                <Script src={analytics.vefheilsa.scriptSrc} strategy="afterInteractive" />
            )}
        </>
    );
};

export default Analytics;
