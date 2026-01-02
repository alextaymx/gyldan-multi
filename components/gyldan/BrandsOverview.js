"use client";

import Link from "next/link";
import Image from "next/image";
import { getSubdomainUrl } from "@/utility/urls";

const BrandsOverview = ({ brands, sectionTitle = "Our Brands" }) => {

  return (
    <section className="brands-section-gyldan section-padding section-bg-light">
      <div className="container">
        <div className="section-header-gyldan text-center">
          <h2 className="section-title wow fadeInUp">{sectionTitle}</h2>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={getSubdomainUrl(brand.subdomain)}
              className="brand-card wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.1}s`}
            >
              {brand.logo && (
                <div className="brand-logo-wrapper">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={40}
                    className="brand-logo"
                  />
                </div>
              )}
              <p className="brand-description">{brand.description}</p>
              <span className="brand-link">
                {brand.cta}
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsOverview;
