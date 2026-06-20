import React from "react";

const Booking: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = (document.getElementById("bf-name") as HTMLInputElement).value;
        const phone = (document.getElementById("bf-phone") as HTMLInputElement).value;
        const msg = (document.getElementById("bf-msg") as HTMLTextAreaElement).value;

        const mailtoLink = `mailto:stiflan@stiflan.is?subject=Fyrirspurn frá ${name}&body=${msg}%0A%0A${phone}`;
        window.location.href = mailtoLink;
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
                    <div>
                        <label htmlFor="bf-name">Nafn</label>
                        <input type="text" id="bf-name" name="bf-name" placeholder="Fullt nafn" required />
                    </div>
                    <div>
                        <label htmlFor="bf-phone">Sími</label>
                        <input type="tel" id="bf-phone" name="bf-phone" placeholder="Símanúmer" required />
                    </div>
                    <div>
                        <label htmlFor="bf-msg">Lýsing á vandamáli</label>
                        <textarea id="bf-msg" name="bf-msg" placeholder="Lýstu vandanum" required></textarea>
                    </div>
                    <button type="submit">Senda fyrirspurn</button>
                    <p className="booking-note">Sendingin opnar tölvupóstforritið þitt með útfylltum skilaboðum til stiflan@stiflan.is.</p>
                </form>
            </div>
        </section>
    );
};

export default Booking;
