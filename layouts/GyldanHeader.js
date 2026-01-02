"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { footerContent } from "@/data";
import { getMainUrl, getSubdomainUrl } from "@/utility/urls";

const GyldanHeader = ({ brandName = "GYLDAN", brandLogo = null }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use brand-specific logo if provided, otherwise use main GYLDAN logo
  const logoSrc = brandLogo || "/assets/img/gyldan/gyldan-rectangle.png";

  return (
    <header className="gyldan-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="header-logo">
            <Link href={brandLogo ? getSubdomainUrl(brandName.toLowerCase().split(' ').pop()) : getMainUrl()}>
              <Image
                src={logoSrc}
                alt={brandName}
                width={160}
                height={45}
                className="logo-image"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav d-none d-lg-flex">
            <ul className="nav-list">
              <li>
                <Link href={getMainUrl()}>Group</Link>
              </li>
              {footerContent.brands.map((brand) => (
                <li key={brand.subdomain}>
                  <Link href={getSubdomainUrl(brand.subdomain)}>
                    {brand.name.replace('Gyldan ', '').replace('Grandeur ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="header-actions d-none d-lg-flex">
            <Link href="mailto:hello@gyldan.my" className="theme-btn">
              <span>
                Contact
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle d-lg-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu d-lg-none">
            <ul className="mobile-nav-list">
              <li>
                <Link href={getMainUrl()} onClick={() => setMobileMenuOpen(false)}>
                  GYLDAN Group
                </Link>
              </li>
              {footerContent.brands.map((brand) => (
                <li key={brand.subdomain}>
                  <Link
                    href={getSubdomainUrl(brand.subdomain)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
              <li className="mobile-contact">
                <Link href="mailto:hello@gyldan.my" className="theme-btn">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default GyldanHeader;
