import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://asiduo-enterprises-blush.vercel.app";
const SITE_IMAGE = `${SITE_URL}/icons/icon-512.png`;
const ORG_NAME = "Asiduo Enterprises";
const ORG_EMAIL = "info@asiduoenterprises.com";
const ORG_ADDRESS_LOCALITY = "Faridabad";
const ORG_ADDRESS_REGION = "Haryana";
const ORG_ADDRESS_COUNTRY = "IN";

const routeSeo = {
  "/": {
    title: "Asiduo Enterprises | Industrial Services and Projects",
    description:
      "Asiduo Enterprises delivers industrial instrumentation, project execution, metrology support, and dependable engineering services across India.",
  },
  "/about": {
    title: "About Asiduo Enterprises | Engineering Expertise",
    description:
      "Learn about Asiduo Enterprises, our mission, and our engineering approach for industrial and project-based services.",
  },
  "/clients": {
    title: "Clients | Asiduo Enterprises",
    description:
      "Explore the industries and organizations served by Asiduo Enterprises through reliable industrial and engineering support.",
  },
  "/services": {
    title: "Services | Asiduo Enterprises",
    description:
      "Discover Asiduo Enterprises services including instrumentation, operations support, and industrial project solutions.",
  },
  "/projects": {
    title: "Projects | Asiduo Enterprises",
    description:
      "Review project highlights and delivery capabilities from Asiduo Enterprises across industrial operations and execution.",
  },
  "/careers": {
    title: "Careers | Asiduo Enterprises",
    description:
      "Join Asiduo Enterprises. View career opportunities and grow with a team focused on precision and industrial excellence.",
  },
  "/news": {
    title: "News | Asiduo Enterprises",
    description:
      "Read the latest updates, announcements, and industry news from Asiduo Enterprises.",
  },
  "/testimonials": {
    title: "Testimonials | Asiduo Enterprises",
    description:
      "See what clients say about working with Asiduo Enterprises and our commitment to quality outcomes.",
  },
  "/contact": {
    title: "Contact Asiduo Enterprises",
    description:
      "Get in touch with Asiduo Enterprises for industrial services, project enquiries, and business support.",
  },
};

const ensureMetaByName = (name) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  return meta;
};

const ensureMetaByProperty = (property) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  return meta;
};

const ensureCanonical = () => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
};

const ensureStructuredDataScript = () => {
  let script = document.querySelector('script[data-seo="route-structured-data"]');
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-seo", "route-structured-data");
    document.head.appendChild(script);
  }
  return script;
};

const toHeadline = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const buildStructuredData = (path, seo) => {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: `${SITE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_IMAGE,
      },
    },
  };

  if (path === "/services") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        webPage,
        {
          "@type": "Service",
          name: "Industrial Engineering and Instrumentation Services",
          provider: {
            "@type": "Organization",
            name: ORG_NAME,
            url: SITE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          serviceType:
            "Instrumentation, metrology support, industrial operations assistance, and project execution",
        },
      ],
    };
  }

  if (path.startsWith("/services/")) {
    const slug = path.split("/")[2] || "service";
    return {
      "@context": "https://schema.org",
      "@graph": [
        webPage,
        {
          "@type": "Service",
          name: `${toHeadline(slug)} Service`,
          provider: {
            "@type": "Organization",
            name: ORG_NAME,
            url: SITE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },
      ],
    };
  }

  if (path === "/projects") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        webPage,
        {
          "@type": "CollectionPage",
          name: "Projects",
          description:
            "Project portfolio and delivery highlights by Asiduo Enterprises.",
          mainEntity: {
            "@type": "ItemList",
            name: "Industrial Projects",
            itemListOrder: "https://schema.org/ItemListUnordered",
          },
        },
      ],
    };
  }

  if (path === "/contact") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        webPage,
        {
          "@type": "ContactPage",
          name: "Contact Asiduo Enterprises",
          description: seo.description,
          mainEntity: {
            "@type": "Organization",
            name: ORG_NAME,
            url: SITE_URL,
            email: ORG_EMAIL,
            address: {
              "@type": "PostalAddress",
              addressLocality: ORG_ADDRESS_LOCALITY,
              addressRegion: ORG_ADDRESS_REGION,
              addressCountry: ORG_ADDRESS_COUNTRY,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: ORG_EMAIL,
              areaServed: "IN",
            },
          },
        },
      ],
    };
  }

  return webPage;
};

const getSeoForPath = (path) => {
  if (path.startsWith("/services/") && path !== "/services") {
    return {
      title: "Service Details | Asiduo Enterprises",
      description:
        "Detailed service information from Asiduo Enterprises for industrial engineering, instrumentation, and operations support.",
    };
  }

  if (path.startsWith("/admin")) {
    return {
      title: "Admin | Asiduo Enterprises",
      description: "Administrative access for Asiduo Enterprises.",
      noIndex: true,
    };
  }

  return (
    routeSeo[path] || {
      title: "Asiduo Enterprises",
      description:
        "Asiduo Enterprises offers reliable industrial solutions, instrumentation, and project support services.",
    }
  );
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = seo.title;

    ensureMetaByName("description").setAttribute("content", seo.description);
    ensureMetaByName("robots").setAttribute(
      "content",
      seo.noIndex ? "noindex, nofollow" : "index, follow"
    );

    ensureMetaByProperty("og:title").setAttribute("content", seo.title);
    ensureMetaByProperty("og:description").setAttribute("content", seo.description);
    ensureMetaByProperty("og:url").setAttribute("content", canonicalUrl);
    ensureMetaByProperty("og:image").setAttribute("content", SITE_IMAGE);
    ensureMetaByProperty("twitter:title").setAttribute("content", seo.title);
    ensureMetaByProperty("twitter:description").setAttribute(
      "content",
      seo.description
    );
    ensureMetaByProperty("twitter:image").setAttribute("content", SITE_IMAGE);

    ensureCanonical().setAttribute("href", canonicalUrl);

    const structuredDataScript = ensureStructuredDataScript();
    const structuredData = buildStructuredData(location.pathname, seo);
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [location.pathname]);

  return null;
};

export default SeoManager;