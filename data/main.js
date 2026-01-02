// Main domain content (gyldan.my)
export const mainContent = {
    // Hero Section
    hero: {
        headline: "Building Integrated Living, Property & Intelligence Platforms",
        subheadline: "A multi-brand group creating long-term value through focused ventures and disciplined execution."
    },

    // About Section - Card Based
    about: {
        cards: [
            {
                title: "What We Are",
                items: [
                    "Multi-brand operating group",
                    "Property, living, technology & advisory focus",
                    "Central governance, independent brands"
                ]
            },
            {
                title: "What We Do",
                items: [
                    "Incubate and scale specialised businesses",
                    "Build repeatable, professional systems",
                    "Align design, operations & strategy"
                ]
            },
            {
                title: "How We Operate",
                items: [
                    "Long-term mindset",
                    "Clear brand separation",
                    "Shared infrastructure & standards"
                ]
            }
        ]
    },

    // Group Brands Overview
    brands: [
        {
            id: "coliving",
            name: "Grandeur Coliving",
            description: "Modern shared living spaces designed for flexibility and community.",
            subdomain: "coliving",
            logo: "/assets/img/gyldan/brands/gyldan-coliving.png",
            cta: "Visit Grandeur Coliving"
        },
        {
            id: "properties",
            name: "Gyldan Properties",
            description: "Property development, asset management, and investment operations.",
            subdomain: "properties",
            logo: "/assets/img/gyldan/brands/gyldan-properties.png",
            cta: "Visit Gyldan Properties"
        },
        {
            id: "suites",
            name: "Grandeur Suites",
            description: "Serviced suites for short-term and extended stays.",
            subdomain: "suites",
            logo: "/assets/img/gyldan/brands/gyldan-suites.png",
            cta: "Visit Grandeur Suites"
        },
        {
            id: "intellex",
            name: "Gyldan Intellex",
            description: "Technology, data, and intelligence-driven solutions.",
            subdomain: "intellex",
            logo: "/assets/img/gyldan/brands/gyldan-intellex.png",
            cta: "Visit Gyldan Intellex"
        },
        {
            id: "studio",
            name: "Gyldan Studio",
            description: "Brand, design, and digital product studio.",
            subdomain: "studio",
            logo: "/assets/img/gyldan/brands/gyldan-studio.png",
            cta: "Visit Gyldan Studio"
        },
        {
            id: "advisory",
            name: "Gyldan Advisory",
            description: "Strategic and operational advisory for growing businesses.",
            subdomain: "advisory",
            logo: "/assets/img/gyldan/brands/gyldan-advisory.png",
            cta: "Visit Gyldan Advisory"
        }
    ],

    // Group Snapshot / Highlights
    highlights: {
        points: [
            "Multi-sector brand portfolio",
            "Integrated property & living ecosystem",
            "Intelligence-driven decision making",
            "Scalable, repeatable operating models"
        ],
        metrics: [
            { label: "Assets under management", value: "—" },
            { label: "Projects delivered", value: "—" },
            { label: "Years in operation", value: "—" },
            { label: "Markets served", value: "—" }
        ]
    },

    // Contact Section
    contact: {
        headline: "General Enquiries & Partnerships",
        description: "Reach out to the GYLDAN group team.",
        cta: "Get in Touch",
        email: "hello@gyldan.my"
    }
};

// Footer content (shared across all domains)
export const footerContent = {
    companyName: "GYLDAN",
    tagline: "A multi-brand group operating across property, living, intelligence, and advisory services.",
    brands: [
        { name: "Grandeur Coliving", subdomain: "coliving" },
        { name: "Gyldan Properties", subdomain: "properties" },
        { name: "Grandeur Suites", subdomain: "suites" },
        { name: "Gyldan Intellex", subdomain: "intellex" },
        { name: "Gyldan Studio", subdomain: "studio" },
        { name: "Gyldan Advisory", subdomain: "advisory" }
    ],
    copyright: `© ${new Date().getFullYear()} GYLDAN. All rights reserved.`
};
