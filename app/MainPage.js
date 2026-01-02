"use client";

import { mainContent } from "@/data";
import {
  BrandHero,
  AboutCards,
  BrandsOverview,
  HighlightsSection,
  BrandContact,
} from "@/components/gyldan";
import GydanLayout from "@/layouts/GyldanLayout";

export default function MainPage() {
  const { hero, about, brands, highlights, contact } = mainContent;

  return (
    <GydanLayout>
      {/* Hero Section */}
      <BrandHero
        headline={hero.headline}
        subheadline={hero.subheadline}
        tag="Multi-Brand Operating Group"
        cta="Explore Our Brands"
        ctaLink="#brands"
      />

      {/* About Section */}
      <AboutCards
        cards={about.cards}
        sectionTitle="About GYLDAN"
        sectionSubtitle="Who We Are"
      />

      {/* Brands Overview */}
      <div id="brands">
        <BrandsOverview
          brands={brands}
          sectionTitle="Our Brands"
        />
      </div>

      {/* Highlights Section */}
      <HighlightsSection
        points={highlights.points}
        metrics={highlights.metrics}
        sectionTitle="Group Highlights"
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
