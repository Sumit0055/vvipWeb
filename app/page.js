"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import comingSoon from "../public/comingSoon.jpg"
// import img from "public/comingSoon.jpg"

const heroImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85";

const projectImages = [
  "https://images.unsplash.com/photo-1604151364473-02e3e26124a6?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604151364473-02e3e26124a6?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604151364473-02e3e26124a6?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const whatsappLink =
  "https://wa.me/919289619386";
const instagramLink = "https://www.instagram.com/dutt_estate/";
const facebookLink = "https://www.facebook.com/profile.php?id=61590352808268";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Price List", href: "#price-list" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" }
];

const highlights = [
  { value: "5 Acre", label: "Approx Project Area" },
  { value: "800", label: "Approx Flats" },
  { value: "G + 30", label: "Tower Heights" },
  { value: "7500/sq.ft.", label: "Net Effective Rate" }
];

const amenities = [
  "Clubhouse",
  "Swimming Pool",
  "Gymnasium",
  "Landscaped Gardens",
  "Jogging Tracks",
  "Children Play Area",
  "Advanced Security",
  "Ample Parking",
  "Power Backup"
];

const priceList = [
  { type: "2 BHK + 2T", area: "1250 sq.ft", price: "PRICE ON REQUEST" },
  { type: "3 BHK + 3T", area: "1800 sq. ft.", price: "PRICE ON REQUEST" },
  { type: "4 BHK + Pooja + 4T", area: "2400 sq. ft.", price: "PRICE ON REQUEST" }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "VVIP New Project Raj Nagar Extension",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Madhuban Bapudham, NH-58",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  description:
    "VVIP New Project Raj Nagar Extension, Madhuban Bapudham NH-58, near RRTS Duhai Metro Station with 2, 3 and 4 BHK premium residences."
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const formRef = useRef(null);
  const modalFormRef = useRef(null);

  function sendEmail(event, activeFormRef = formRef) {
    event.preventDefault();

    if (!activeFormRef.current || isSending) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm("Sumit@2002", "template_n9pkkmp", activeFormRef.current, "Y2yW7BciaGf8UxFfM")
      .then(
        () => {
          activeFormRef.current.reset();
          setIsModalOpen(false);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark"
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark"
          });
        }
      )
      .finally(() => setIsSending(false));
  }

  return (
    <main style={{ fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif" }}>
      <ToastContainer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {isModalOpen && (
        <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="modal-close" type="button" onClick={() => setIsModalOpen(false)} aria-label="Close enquiry form">
              X
            </button>
            <div className="modal-copy">
              <p className="eyebrow">Quick Enquiry</p>
              <h2 id="enquiry-title">VVIP New Project Raj Nagar Extension</h2>
              <p>Get price details, floor plans, availability and site visit options.</p>
            </div>
            <ContactForm
              formRef={modalFormRef}
              isSending={isSending}
              onSubmit={(event) => sendEmail(event, modalFormRef)}
            />
          </motion.div>
        </div>
      )}

      <header className={`site-header ${isMenuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#home" aria-label="VVIP New Project">
          <span>VVIP</span> Project
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">Book Visit</a>
        </nav>
      </header>

      <div className="sticky-social" aria-label="Quick contact links">
        <a className="sticky-wa" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Open WhatsApp enquiry">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Open Instagram">
          <InstagramIcon />
        </a>
        <a href={facebookLink} target="_blank" rel="noreferrer" aria-label="Open Facebook">
          <FacebookIcon />
        </a>
      </div>

      <section className="hero" id="home">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroImage} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Madhuban Bapudham NH-58 | Near RRTS Duhai Metro Station</p>
            <h1>VVIP New Project Raj Nagar Extension</h1>
            <p className="hero-copy">
              Premium residential development in Ghaziabad designed for modern living,
              comfort, connectivity and long-term value.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Book Site Visit</a>
              <a className="btn secondary" href="#price-list">View Price List</a>
              <a className="btn wa" href={whatsappLink} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <span>RERA Number: Coming Soon</span>
              <span>Exclusive Pre-Launch Offer</span>
              <span>Limited Units</span>
            </div>
          </div>

          <motion.div className="hero-project-card" variants={fadeUp} initial="hidden" animate="visible">
            <div className="vvip-logo" aria-label="VVIP project logo">
              <span>VVIP</span>
              <strong>Pre-Launch</strong>
            </div>
            <div className="hero-flat-frame">
              <Image
                src={projectImages[0]}
                alt="Premium VVIP project apartment"
                width={900}
                height={650}
                priority
              />
            </div>
            <div className="hero-card-foot">
              <div>
                <span>Starting Offer</span>
                <strong>7500/sq. ft. + Other Charges + GST</strong>
              </div>
              <a href="#contact">Get Details</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="premium-strip" id="highlights" aria-label="Project highlights">
        {highlights.map((item, index) => (
          <div key={item.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="section project-intro" id="overview">
        <motion.div className="section-kicker" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="line-reveal" style={{ height: 3, background: "var(--gold)", marginBottom: 24, display: "block" }} />
          <p className="eyebrow">Project Overview</p>
          <h2>Luxury residences by North India&apos;s leading listed developer.</h2>
        </motion.div>
        <motion.div className="intro-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>
            VVIP New Project Raj Nagar Extension, Madhuban Bapudham (NH-58) is a
            premium residential development in Ghaziabad. It offers thoughtfully
            designed apartments with spacious layouts, contemporary interiors and
            high-quality finishes.
          </p>
          <p>
            Large balconies and wide windows allow abundant natural light and
            ventilation, creating bright and airy living spaces with a blend of
            luxury, functionality and privacy for modern families.
          </p>
          <div className="project-tags">
            {["Madhuban Bapudham NH-58", "Near RRTS Duhai Metro Station", "Premium Lifestyle", "Strong Investment Potential"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="visual-band" aria-label="Project lifestyle">
        {[
          { label: "Residences", title: "Spacious Luxury Apartments" },
          { label: "Lifestyle", title: "Modern Family Amenities" },
          { label: "Connectivity", title: "Fast NCR Access" }
        ].map((item, index) => (
          <motion.article key={item.title} className="visual-tile scroll-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="tile-img-wrap">
              <Image
                src={projectImages[index]}
                alt={item.title}
                width={1200}
                height={900}
                sizes="(max-width: 860px) 100vw, 33vw"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="tile-body">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="section location" id="location">
        <motion.div className="location-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="line-reveal" style={{ height: 3, background: "var(--gold)", marginBottom: 24, display: "block" }} />
          <p className="eyebrow">Location Advantage</p>
          <h2>Excellent accessibility near RRTS Duhai Metro Station.</h2>
          <p>
            The project is strategically located near the upcoming Regional Rapid
            Transit System, ensuring fast connectivity to Delhi, Meerut and other
            key NCR locations. Seamless access to NH-58 and major road networks
            enhances daily convenience.
          </p>
          <div className="location-map-placeholder">
            <div className="map-pin-anim">Location</div>
            <p style={{ margin: "12px 0 0", opacity: 0.7, fontSize: 14 }}>
              Raj Nagar Extension, Madhuban Bapudham (NH-58), Ghaziabad
            </p>
          </div>
        </motion.div>
        <div className="route-grid">
          {[
            { num: "01", title: "RRTS Duhai Metro Station", detail: "Fast regional connectivity toward Delhi, Meerut and NCR." },
            { num: "02", title: "NH-58 Access", detail: "Smooth daily movement through a major Ghaziabad road corridor." },
            { num: "03", title: "Schools & Hospitals", detail: "Established social infrastructure around the project location." },
            { num: "04", title: "Shopping Hubs", detail: "Convenience, retail and lifestyle options within reachable distance." }
          ].map((route) => (
            <motion.article key={route.num} className="route-card scroll-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="route-num">{route.num}</div>
              <h3>{route.title}</h3>
              <p>{route.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section services" id="price-list">
        <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="line-reveal" style={{ height: 3, background: "var(--gold)", marginBottom: 24, display: "block" }} />
          <p className="eyebrow">Price List</p>
          <h2>Exclusive pre-launch offer with limited units.</h2>
          <p className="section-subcopy">
            Net Effective Rate: 7500/sq. ft. + Other Charges + GST
          </p>
        </motion.div>
        <div className="price-table" role="table" aria-label="VVIP New Project price list">
          <div className="price-row price-head" role="row">
            <span role="columnheader">Type</span>
            <span role="columnheader">Super Area</span>
            <span role="columnheader">Price*</span>
          </div>
          {priceList.map((item) => (
            <div className="price-row" role="row" key={item.type}>
              <span role="cell">{item.type}</span>
              <span role="cell">{item.area}</span>
              <button
                className="price-enquiry-btn"
                type="button"
                role="cell"
                onClick={() => setIsModalOpen(true)}
              >
                {item.price}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section amenities-section">
        <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="line-reveal" style={{ height: 3, background: "var(--gold)", marginBottom: 24, display: "block" }} />
          <p className="eyebrow">Amenities</p>
          <h2>Modern amenities for a comfortable lifestyle.</h2>
        </motion.div>
        <div className="amenity-grid">
          {amenities.map((item) => (
            <motion.div className="amenity-chip" key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <motion.div className="contact-copy" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="line-reveal" style={{ height: 3, background: "var(--gold)", marginBottom: 24, display: "block" }} />
          <p className="eyebrow">Contact Us</p>
          <h2>Request details for VVIP New Project Raj Nagar Extension.</h2>
          <p>
            Share your requirement to receive pricing, floor plans, availability
            and site visit options.
          </p>
          <div className="contact-list">
            <a href="tel:+919289619386" className="contact-link"><span>+91 92896 19386</span><ArrowIcon /></a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>WhatsApp Enquiry</span><ArrowIcon />
            </a>
          </div>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactFields isSending={isSending} />
        </motion.form>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home"><span>VVIP</span> Project</a>
            <p>
              VVIP New Project Raj Nagar Extension, Madhuban Bapudham NH-58,
              near RRTS Duhai Metro Station.
            </p>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-links">
            <h3>Project</h3>
            {["2 BHK + 2T", "3 BHK + 3T", "4 BHK + Pooja + 4T", "RERA Coming Soon"].map((area) => (
              <a key={area} href="#price-list">{area}</a>
            ))}
          </div>
          <div className="footer-cta">
            <h3>Book a Site Visit</h3>
            <p>Get pricing, availability, payment plan and visit slot.</p>
            <a href="tel:+919289619386">+91 92896 19386</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ marginTop: 8 }}>WhatsApp Now</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>(c) 2026 VVIP New Project Raj Nagar Extension</span>
          <span>RERA Number: Coming Soon</span>
        </div>
      </footer>
    </main>
  );
}

function ContactForm({ formRef, isSending, onSubmit }) {
  return (
    <form ref={formRef} onSubmit={onSubmit} className="contact-form modal-form">
      <ContactFields isSending={isSending} />
    </form>
  );
}

function ContactFields({ isSending }) {
  return (
    <>
      <div className="form-header">
        <p className="eyebrow">Free Consultation</p>
        <h3>VVIP New Project Raj Nagar Extension</h3>
      </div>

      <label htmlFor="user_name">Full Name :</label>
      <input id="user_name" name="user_name" type="text" placeholder="Full Name" required />

      <label htmlFor="user_email">Email :</label>
      <input id="user_email" name="user_email" type="email" placeholder="Email Address" required />

      <label htmlFor="phone">Phone :</label>
      <input id="phone" name="phone" type="tel" placeholder="Enter Phone Number" required />

      <label htmlFor="subject">Subject :</label>
      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="Enter Subject"
        defaultValue="VVIP New Project Enquiry"
        required
      />

      <label htmlFor="message">Message :</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="BHK preference, timeline, any queries..."
        required
      />

      <button type="submit" className="submit-btn" disabled={isSending}>
        {isSending ? "Sending..." : "Send Message"}
        <span className="btn-arrow">-&gt;</span>
      </button>

      <p className="form-note">100% Free | No spam | Expert callback within 2 hours</p>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.94L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.77 14.16c-.24.68-1.4 1.3-1.95 1.34-.5.04-1.13.06-1.82-.11-.42-.1-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.01-2.41c.27-.29.58-.36.77-.36h.56c.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.12.63-.07.19-.22.72-.84.91-1.13.19-.29.39-.24.66-.14.27.1 1.72.81 2.02.96.29.14.49.22.56.34.07.12.07.72-.17 1.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.5V6.8c0-.82.55-1.01.94-1.01h2.39V2.13L14.24 2.1c-3.65 0-4.48 2.73-4.48 4.48V8.5H7.47v3.79h2.29V22h4.44v-9.71h3.02l.4-3.79H14.2Z" />
    </svg>
  );
}
