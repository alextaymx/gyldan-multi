"use client";

import { getBrandBySubdomain } from "@/data";
import {
  BrandHero,
  AboutCards,
  ServicesGrid,
  ShowcaseSection,
  BrandContact,
} from "@/components/gyldan";
import GydanLayout from "@/layouts/GyldanLayout";

export default function BrandPage({ tenant }) {
  const brand = getBrandBySubdomain(tenant);

  // Fallback if brand not found
  if (!brand) {
    return (
      <GydanLayout brandName="GYLDAN">
        <div className="container section-padding text-center">
          <h1>Brand Not Found</h1>
          <p>The requested brand could not be found.</p>
        </div>
      </GydanLayout>
    );
  }

  const { hero, about, services, showcase, contact, logo } = brand;

  return (
    <GydanLayout brandName={brand.name} brandLogo={logo}>
      {/* Hero Section */}
      <BrandHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        cta={contact.cta}
        ctaLink={`mailto:${contact.email}`}
      />

      {/* About Section */}
      <AboutCards
        cards={about.cards}
        sectionTitle={`About ${brand.name}`}
        sectionSubtitle="Who We Are"
      />

      {/* Services Section */}
      <ServicesGrid
        services={services}
        sectionTitle="Services & Offerings"
      />

      {/* Showcase Section */}
      <ShowcaseSection
        points={showcase.points}
        sectionTitle="Why Choose Us"
      />

      {/* Contact Section */}
      <BrandContact
        headline={contact.headline}
        description={contact.description}
        cta={contact.cta}
        email={contact.email}
      />
    </GydanLayout>
  );
}
