import React, { useState } from "react";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = '';
const EMAILJS_PUBLIC_KEY = '';

const Booking: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailHtml = `<h2>Fyrirspurn frá ${name}</h2>
<p><strong>Nafn:</strong> ${name}</p>
<p><strong>Sími:</strong> ${phone}</p>
<p><strong>Lýsing á vandamáli:</strong></p>
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
            setError(`Villa kom upp við að senda fyrirspurnina: ${error?.text || error?.message || error}. Vinsamlegast reyndu aftur síðar.`);
        });
    };

    return (
        <section id="booking" className="booking">
            <div className="wrap booking-grid">
                <div className="reveal">
                    <span className="eyebrow">Hafa samband</span>
                    <h2>Lýstu vandanum, við hringjum til baka.</h2>
                    <p>Ekkert bráðatilfelli? Sendu okkur línu og við finnum tíma sem hentar — venjulega svarað innan dags.</p>
                </div>
                <form className="booking-form reveal" id="bookingForm" onSubmit={handleSubmit}>
                    {!hasSubmitted && <>
                        <div>
                            <label htmlFor="bf-name">Nafn</label>
                            <input type="text" id="bf-name" name="bf-name" placeholder="Fullt nafn" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-email">Netfang</label>
                            <input type="email" id="bf-email" name="bf-email" placeholder="Netfang" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-phone">Sími</label>
                            <input type="tel" id="bf-phone" name="bf-phone" placeholder="Símanúmer" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="bf-msg">Lýsing á vandamáli</label>
                            <textarea id="bf-msg" name="bf-msg" placeholder="Lýstu vandanum" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                        </div>
                        <button type="submit">Senda fyrirspurn</button>
                    </>}
                    {hasSubmitted && <p className="booking-note">Fyrirspurnin hefur verið send. Við munum hafa samband við þig sem fyrst.</p>}
                    {error && <p className="booking-error">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Booking;
