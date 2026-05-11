"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion, useReducedMotion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85";

const projectImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85"
];

const launchHighlights = [
  "Brand launch campaign",
  "VVIP branded flat visual",
  "Premium buyer experience",
  "Raj Nagar launch positioning"
];

const localities = [
  "Raj Nagar Extension",
  "Duhai",
  "NH-24",
  "Noida",
  "Delhi NCR",
  "Ghaziabad"
];

const highlights = [
  { value: "2/3/4 BHK", label: "Premium residences" },
  { value: "NH-24", label: "Fast NCR movement" },
  { value: "Duhai", label: "RapidX growth belt" },
  { value: "Raj Nagar", label: "High demand micro-market" }
];

const services = [
  "VVIP Raj Nagar project consultation",
  "Raj Nagar Extension property shortlist",
  "Duhai and NH-24 location guidance",
  "Home loan and documentation support",
  "Site visit and price sheet assistance",
  "Investor and end-user advisory"
];

const routes = [
  { title: "Raj Nagar Extension", detail: "Premium housing demand with schools, retail, and daily convenience close by." },
  { title: "Duhai", detail: "Emerging NCR growth pocket with strong future connectivity and buyer interest." },
  { title: "NH-24", detail: "Direct movement towards Noida, Delhi, Ghaziabad, and commercial hubs." },
  { title: "Noida and Delhi", detail: "Designed for families who want an NCR address without losing city access." }
];

const navItems = [
  { label: "Launch", href: "#launch" },
  { label: "Project", href: "#project" },
  { label: "Location", href: "#location" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "VVIP Raj Nagar",
  url: "https://vviprajnagar.example.com",
  telephone: "+91-99999-99999",
  email: "info@vvipestate.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raj Nagar Extension",
    addressRegion: "Ghaziabad",
    addressCountry: "IN"
  },
  areaServed: ["Raj Nagar Extension", "Duhai", "NH-24", "Noida", "Delhi NCR"],
  description:
    "Premium VVIP Raj Nagar real estate project advisory for Raj Nagar Extension, Duhai, NH-24, Noida, Delhi NCR and Ghaziabad buyers."
};

export default function Home() {
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-rise",
        { opacity: 0, y: 42 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" }
      );
      gsap.to(".hero-media img", {
        scale: 1.08,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  function handleMouseMove(event) {
    if (!glowRef.current || shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    gsap.to(glowRef.current, {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      duration: 0.55,
      ease: "power3.out"
    });
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className={`site-header ${isMenuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#home" aria-label="VVIP Raj Nagar home">
          <span>VVIP</span> Raj Nagar
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home" ref={heroRef} onMouseMove={handleMouseMove}>
        <div className="hero-media" aria-hidden="true">
          <Image src={heroImage} alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-glow" ref={glowRef} aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow gsap-rise">Brand Launch in Raj Nagar Extension</p>
          <h1 className="gsap-rise">VVIP Raj Nagar</h1>
          <p className="hero-copy gsap-rise">
            Launching a premium real-estate brand for families and investors
            looking around Raj Nagar Extension, Duhai, NH-24, Noida and Delhi NCR.
          </p>
          <div className="hero-actions gsap-rise">
            <a className="btn primary" href="#contact">
              Book Site Visit
            </a>
            <a className="btn secondary" href="tel:+919999999999">
              Call Advisor
            </a>
          </div>
        </div>
      </section>

      <section className="locality-strip" aria-label="Target locations">
        <div>
          {localities.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="section launch-section" id="launch">
        <motion.div
          className="launch-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Grand Launch</p>
          <h2>A premium launch identity for VVIP Raj Nagar.</h2>
          <p>
            The website now feels like a brand launch: bold first impression,
            premium flat imagery, clear enquiry actions and locality-led
            messaging for Raj Nagar Extension, Duhai and NH-24 buyers.
          </p>
          <div className="launch-points">
            {launchHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="launch-visual"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <Image
            src="/vvip-launch-flat.svg"
            alt="VVIP Raj Nagar brand launch flat image with VVIP signage"
            width={1600}
            height={1050}
            unoptimized
          />
        </motion.div>
      </section>

      <section className="stats" aria-label="Project highlights">
        {highlights.map((item) => (
          <motion.div
            key={item.label}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="section project-intro"
        id="project"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-kicker">
          <p className="eyebrow">The Project</p>
          <h2>Premium living shaped for the Raj Nagar growth corridor.</h2>
        </div>
        <div className="intro-copy">
          <p>
            VVIP Raj Nagar is positioned for homebuyers searching for a refined
            address near Raj Nagar Extension, Duhai and NH-24 with everyday
            comfort, connectivity, and long-term location value.
          </p>
          <p>
            The website content is written naturally for search visibility
            around VVIP Raj Nagar, Raj Nagar Extension flats, Duhai property,
            NH-24 real estate, Noida connectivity and Delhi NCR buyers.
          </p>
        </div>
      </motion.section>

      <section className="visual-band" aria-label="VVIP Raj Nagar lifestyle">
        {projectImages.map((image, index) => (
          <motion.article
            className="visual-tile"
            key={image}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -8 }}
          >
            <Image
              src={image}
              alt={`VVIP Raj Nagar premium property view ${index + 1}`}
              width={1200}
              height={900}
              sizes="(max-width: 860px) 100vw, 33vw"
            />
            <div>
              <span>{index === 0 ? "Residences" : index === 1 ? "Lifestyle" : "Investment"}</span>
              <h3>
                {index === 0
                  ? "Elegant apartments"
                  : index === 1
                    ? "Modern amenities"
                    : "NCR growth address"}
              </h3>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="section location" id="location">
        <motion.div
          className="location-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Location Advantage</p>
          <h2>Built around the searches buyers already make.</h2>
          <p>
            Raj Nagar Extension, Duhai, NH-24, Noida and Delhi are highlighted
            across the page so search engines and ad traffic clearly understand
            the project area and buyer intent.
          </p>
        </motion.div>
        <div className="route-grid">
          {routes.map((route, index) => (
            <motion.article
              key={route.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{route.title}</h3>
              <p>{route.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section services" id="services">
        <motion.div
          className="section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="eyebrow">Services</p>
          <h2>Everything a buyer needs before visiting the site.</h2>
        </motion.div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -6 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="seo-band">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
        >
          <p className="eyebrow">SEO Focus</p>
          <h2>VVIP Raj Nagar for Raj Nagar Extension, Duhai and NH-24 buyers.</h2>
          <p>
            Search-ready content for people comparing property in Raj Nagar,
            flats near Duhai, homes near NH-24, and NCR connectivity towards
            Noida and Delhi.
          </p>
        </motion.div>
      </section>

      <section className="section contact" id="contact">
        <motion.div
          className="contact-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Contact Us</p>
          <h2>Plan your VVIP Raj Nagar site visit.</h2>
          <p>
            Share your requirement and our advisor will connect with project
            details, current pricing, availability, payment plan and visit slot.
          </p>
          <div className="contact-list">
            <a href="tel:+919999999999">+91 99999 99999</a>
            <a href="mailto:info@vvipestate.com">info@vvipestate.com</a>
            <a
              href="https://wa.me/919999999999?text=I%20want%20details%20for%20VVIP%20Raj%20Nagar"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp enquiry
            </a>
          </div>
        </motion.div>
        <motion.form
          className="contact-form"
          action="mailto:info@vvipestate.com"
          method="post"
          encType="text/plain"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <label>
            Full Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Phone Number
            <input name="phone" type="tel" placeholder="+91" required />
          </label>
          <label>
            Interested Area
            <select name="area" defaultValue="" required>
              <option value="" disabled>
                Select location
              </option>
              <option>Raj Nagar Extension</option>
              <option>Duhai</option>
              <option>NH-24</option>
              <option>Noida / Delhi NCR</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us your budget and preferred unit size"
            />
          </label>
          <button type="submit">Get Project Details</button>
        </motion.form>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home">
              <span>VVIP</span> Raj Nagar
            </a>
            <p>
              Premium real estate advisory for Raj Nagar Extension, Duhai,
              NH-24, Noida, Delhi NCR and Ghaziabad homebuyers.
            </p>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-links">
            <h3>Locations</h3>
            {localities.slice(0, 5).map((area) => (
              <a key={area} href="#location">
                {area}
              </a>
            ))}
          </div>
          <div className="footer-cta">
            <h3>Book a Visit</h3>
            <p>Get pricing, availability, payment plan and site visit slot.</p>
            <a href="tel:+919999999999">+91 99999 99999</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>VVIP Raj Nagar</span>
          <span>SEO ready for Raj Nagar Extension, Duhai and NH-24.</span>
        </div>
      </footer>
    </main>
  );
}
