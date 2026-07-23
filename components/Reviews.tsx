import React from "react";
import { strings, business } from "../content/site-content";

const Stars: React.FC<{ rating: number }> = ({ rating }) => (
    <span className="review-stars" aria-label={`${rating} af 5 stjörnum`}>
        {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8-5.1-4.7 6.9-.8L12 2z" />
            </svg>
        ))}
    </span>
);

// First letter of the name, for a lightweight avatar (no external images).
const initial = (name: string) => name.trim().charAt(0).toUpperCase();

const Reviews: React.FC = () => {
    const { items } = strings.reviews;
    const count = items.length;
    const averageNum = items.reduce((sum, r) => sum + r.rating, 0) / count;
    const average = averageNum.toFixed(1).replace(".", ",");

    return (
        <section id="reviews" className="reviews">
            <div className="wrap">
                <div className="reviews-head reveal">
                    <span className="eyebrow">{strings.reviews.eyebrow}</span>
                    <h2>{strings.reviews.heading}</h2>
                    <div className="reviews-summary">
                        <Stars rating={Math.round(averageNum)} />
                        <span className="reviews-summary-score">{average}</span>
                        <span className="reviews-summary-count">· {count} umsagnir {strings.reviews.summaryLabel}</span>
                    </div>
                </div>

                <div className="reviews-grid">
                    {items.map((review) => (
                        <figure className="review-card reveal" key={review.name}>
                            <div className="review-top">
                                <span className="review-avatar" aria-hidden="true">{initial(review.name)}</span>
                                <div>
                                    <figcaption className="review-name">{review.name}</figcaption>
                                    <span className="review-source">Umsögn á Google</span>
                                </div>
                            </div>
                            <Stars rating={review.rating} />
                            <blockquote className="review-text">{review.text}</blockquote>
                        </figure>
                    ))}
                </div>

                <a className="reviews-cta" href={business.google.cidUrl} target="_blank" rel="noopener noreferrer">
                    {strings.reviews.ctaLabel}
                </a>
            </div>
        </section>
    );
};

export default Reviews;
