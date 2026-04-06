import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const copyByLanguage = {
  "English (USA)": {
    eyebrow: "Who We Work With",
    title: "Trusted by Public Infrastructure, Defence, and Enterprise Teams",
    intro:
      "A snapshot of organizations and institutions referenced in your portfolio, across electrical, fire safety, civil, CCTV, HVAC, and petroleum-related scopes.",
    activeTitle: "Active & Delivered Clients",
    targetTitle: "Actively Targeting",
    targetCopy:
      "With BPCL project exposure and multi-discipline compliance capability, we are positioned for empanelment with additional petroleum and energy leaders.",
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

const activeClients = [
  {
    code: "NMRC",
    name: "Noida Metro Rail Corporation",
    domains: ["Electrical", "Civil", "CCTV"],
  },
  {
    code: "IAF",
    name: "Indian Air Force - AFS Hindan, Ghaziabad",
    domains: ["Fire", "Civil", "Electrical"],
  },
  {
    code: "UPSC",
    name: "Union Public Service Commission",
    domains: ["HVAC/AC"],
  },
  {
    code: "MEITY",
    name: "Ministry of Electronics and Information Technology",
    domains: ["Fire Safety"],
  },
  {
    code: "BPCL",
    name: "Bharat Petroleum Corporation Limited",
    domains: ["Electrical", "Petroleum"],
  },
  {
    code: "SOI",
    name: "Survey of India, Dehradun",
    domains: ["Electrical", "HVAC/AC"],
  },
];

const targetAccounts = ["IOCL", "HPCL", "ONGC", "GAIL"];

const Clients = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage["English (USA)"];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <AnimatedHeadline
          text={copy.title}
          variant="drift-right"
          staggerMs={18}
          durationMs={740}
        />
        <p>{copy.intro}</p>
      </section>

      <section className="section clients-showcase">
        <div className="section-heading">
          <h2>{copy.activeTitle}</h2>
        </div>

        <div className="clients-grid">
          {activeClients.map((client) => (
            <article className="client-card" key={client.code}>
              <p className="client-code">{client.code}</p>
              <h3>{client.name}</h3>
              <div className="client-tags">
                {client.domains.map((domain) => (
                  <span key={`${client.code}-${domain}`}>{domain}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section clients-targets">
        <div className="clients-targets-card">
          <p className="eyebrow">{copy.targetTitle}</p>
          <p>{copy.targetCopy}</p>
          <div className="client-target-chips">
            {targetAccounts.map((account) => (
              <span key={account}>{account}</span>
            ))}
          </div>
          <p className="clients-targets-note">
            Plus other petroleum and energy majors as part of ongoing expansion.
          </p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="testimonial-grid">
          {activeClients.slice(0, 2).map((client) => (
            <div className="testimonial-card" key={`proof-${client.code}`}>
              <p>
                {client.name} project experience in {client.domains.join(", ")}.
              </p>
              <span>{client.code}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Clients;
