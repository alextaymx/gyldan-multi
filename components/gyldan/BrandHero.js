"use client";

import Link from "next/link";

const BrandHero = ({ 
  headline, 
  subheadline, 
  cta, 
  ctaLink = "/contact",
  tag = null,
  stats = null 
}) => {
  return (
    <section className="hero-section hero-gyldan">
      <div className="hero-bg-pattern"></div>
      <div className="container">
        <div className="hero-content-gyldan">
          {tag && (
            <span className="hero-tag wow fadeInUp" data-wow-delay=".1s">
              {tag}
            </span>
          )}
          <h1 className="hero-headline wow fadeInUp" data-wow-delay=".2s">
            {headline}
          </h1>
          <p className="hero-subheadline wow fadeInUp" data-wow-delay=".4s">
            {subheadline}
          </p>
          {cta && (
            <div className="hero-cta wow fadeInUp" data-wow-delay=".6s">
              <Link href={ctaLink} className="theme-btn">
                <span>
                  {cta}
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          )}
          {stats && stats.length > 0 && (
            <div className="hero-stats wow fadeInUp" data-wow-delay=".8s">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="hero-stat-number">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
