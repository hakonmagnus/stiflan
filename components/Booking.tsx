import React, { useState } from "react";
import emailjs from "emailjs-com";
import { strings } from "../content/site-content";

const EMAILJS_SERVICE_ID = 'service_f4y1134';
const EMAILJS_TEMPLATE_ID = 'template_tcvc3xl';
const EMAILJS_PUBLIC_KEY = 'bm6Uv4UrRpPLVVS-t';

const Booking: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailHtml = `<h2>${strings.booking.emailSubjectPrefix} ${name}</h2>
<p><strong>${strings.booking.emailNameLabel}</strong> ${name}</p>
<p><strong>${strings.booking.emailPhoneLabel}</strong> ${phone}</p>
<p><strong>${strings.booking.emailMessageLabel}</strong></p>
<p>${msg}</p>`;

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            message: emailHtml,
            name: name,
            email: email,
            time: new Date().toISOString(),
        }, EMAILJS_PUBLIC_KEY)
        .then((response) => {
            setHasSubmitted(true);
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            setError(`${strings.booking.errorPrefix}: ${error?.text || error?.message || error}. ${strings.booking.errorSuffix}`);
        });
    };

    return (
        <section id="booking" className="booking">
            <div className="wrap booking-grid">
                <div className="reveal">
                    <span className="eyebrow">{strings.booking.eyebrow}</span>
                    <h2>{strings.booking.heading}</h2>
                    <p>{strings.booking.intro}</p>
                </div>
                <form className="booking-form reveal" id="bookingForm" onSubmit={handleSubmit}>
                    {!hasSubmitted && <>
                        <div>
                            <label htmlFor="bf-name">{strings.booking.labels.name}</label>
                            <input type="text" id="bf-name" name="bf-name" placeholder={strings.booking.placeholders.name} value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-email">{strings.booking.labels.email}</label>
                            <input type="email" id="bf-email" name="bf-email" placeholder={strings.booking.placeholders.email} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-phone">{strings.booking.labels.phone}</label>
                            <input type="tel" id="bf-phone" name="bf-phone" placeholder={strings.booking.placeholders.phone} value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-msg">{strings.booking.labels.message}</label>
                            <textarea id="bf-msg" name="bf-msg" placeholder={strings.booking.placeholders.message} value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                        </div>
                        <button type="submit">{strings.booking.submitButton}</button>
                    </>}
                    {hasSubmitted && <p className="booking-note">{strings.booking.successMessage}</p>}
                    {error && <p className="booking-error">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Booking;
