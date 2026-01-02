"use client";

import Link from "next/link";

const BrandContact = ({ headline, description, cta, email, tag = "Get in Touch" }) => {
  return (
    <section className="contact-section-gyldan section-padding">
      <div className="container">
        <div className="contact-cta-box wow fadeInUp">
          <span className="contact-tag">{tag}</span>
          <h2 className="contact-headline">{headline}</h2>
          <p className="contact-description">{description}</p>
          <div className="contact-actions">
            <Link href={`mailto:${email}`} className="theme-btn">
              <span>
                {cta}
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
            {email && (
              <a href={`mailto:${email}`} className="contact-email">
                <i className="far fa-envelope" />
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandContact;
