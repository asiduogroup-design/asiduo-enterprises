import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const details = [
  { key: "company", value: "Abhishek Singh Contractors" },
  { key: "proprietor", value: "Abhishek Singh" },
  { key: "registration", value: "Proprietorship" },
  { key: "baseLocation", value: "Faridabad, Haryana" },
  { key: "operations", value: "Pan India Operations" },
  { key: "disciplines", value: "Electrical, Fire Safety, Civil, CCTV" },
  { key: "approvals", value: "CPWD / DMRC / NMRC Approved" },
  { key: "license", value: "Electrical Contractor License (HT/LT Works)" },
  { key: "compliance", value: "GST, ESI and PF Compliant" },
  { key: "standards", value: "IS/BIS Standards and NFPA 13/72 Familiarity" },
  { key: "defence", value: "IAF Hindan, South Block and Ex PM Bungalows" },
  { key: "target", value: "Pursuing PESO Empanelment for Petroleum Sector" },
];

const copyByLanguage = {
  "English (USA)": {
    title: "About Us",
    paragraphs: [
      "Abhishek Singh Contractors is a multi-discipline execution partner delivering Electrical, Fire Safety, Civil, and CCTV works for critical infrastructure projects.",
      "We are built for demanding environments where compliance is non-negotiable. Work execution follows CPWD, DMRC, and BIS/IS specifications with safety-first site practices.",
      "With defence and high-security project exposure and Pan India mobilization capability, we support government and enterprise clients with accountable end-to-end delivery.",
    ],
    facts: "Credentials and Compliance",
    labels: {
      company: "Company",
      proprietor: "Proprietor",
      registration: "Registration Type",
      baseLocation: "Base Location",
      operations: "Operating Coverage",
      disciplines: "Core Disciplines",
      approvals: "Government Approvals",
      license: "License",
      compliance: "Statutory Compliance",
      standards: "Technical Standards",
      defence: "Defence Project Experience",
      target: "Current Sector Focus",
    },
  },
  "English (India)": null,
  Italian: null,
  Spanish: null,
  German: null,
};
copyByLanguage["English (India)"] = copyByLanguage["English (USA)"];
copyByLanguage.Italian = copyByLanguage["English (USA)"];
copyByLanguage.Spanish = copyByLanguage["English (USA)"];
copyByLanguage.German = copyByLanguage["English (USA)"];

const About = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page about-page">
      <section className="section about-profile">
        <div className="about-section-block">
          <AnimatedHeadline
            className="about-section-title"
            text={copy.title}
            variant="reveal-left"
            staggerMs={26}
            durationMs={760}
          />
          <div className="about-copy-card">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-section-block">
          <h2 className="about-section-title">{copy.facts}</h2>
          <div className="about-facts-card">
            <div className="about-facts-grid">
              {details.map((detail) => (
                <article className="about-fact" key={detail.key}>
                  <div className="about-fact-copy">
                    <span>{copy.labels[detail.key]}</span>
                    <strong>{detail.value}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
