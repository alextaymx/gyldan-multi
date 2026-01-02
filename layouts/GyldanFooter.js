"use client";

import Link from "next/link";
import Image from "next/image";
import { footerContent } from "@/data";
import { getMainUrl, getSubdomainUrl } from "@/utility/urls";

const GyldanFooter = () => {
  return (
    <footer className="gyldan-footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-brand">
            <Link href={getMainUrl()} className="footer-logo">
              <Image
                src="/assets/img/gyldan/gyldan-rectangle.png"
                alt={footerContent.companyName}
                width={180}
                height={50}
                className="footer-logo-image"
              />
            </Link>
            <p className="footer-tagline">{footerContent.tagline}</p>
          </div>

          {/* Brand Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Brands</h4>
            <ul className="footer-nav">
              {footerContent.brands.map((brand) => (
                <li key={brand.subdomain}>
                  <Link href={getSubdomainUrl(brand.subdomain)}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <Link href="mailto:hello@gyldan.my">
                  <i className="far fa-envelope" />
                  hello@gyldan.my
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default GyldanFooter;
