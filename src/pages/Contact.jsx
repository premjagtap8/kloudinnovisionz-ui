import React, { useState } from 'react';
import './Contact.css';

// Adjust these two paths if your Contact.jsx lives somewhere other than src/pages/
import contactHeroImage from '../assets/ContactHeroImage.png';
import aboutUsSunImage from '../assets/AboutUsSun.png';

// Enquiries from the form go to this number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919594865555';

const MAP_LINK =
  'https://www.bing.com/maps/directions?ty=0&v=2&sV=1&rtp=%7Epos.19.085493087768555_72.88911437988281__KlouD%2520InnoVisionZ%2520Private%2520Limited_&cp=19.085499%7E72.889114&lvl=16&style=r';

const EMPTY_FORM = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  requirements: ''
};

const SERVICE_LABELS = {
  consulting: 'Technology Consulting & Strategy',
  development: 'Custom Software Development',
  digital: 'Digital Transformation',
  cloud: 'Cloud & Infrastructure'
};

// Each FAQ now has its own answer (previously every item showed the same text).
// These are draft answers - edit them so they match what Kloud InnoVisionZ actually offers.
const FAQS = [
  {
    q: 'What kinds of businesses do you work with?',
    a: 'We work with businesses of all sizes, from ambitious startups to established enterprises, across industries such as manufacturing, real estate, education, healthcare, retail, hospitality and logistics.'
  },
  {
    q: 'How do we get started?',
    a: 'Share your goals through the form above or give us a call. We begin with a short conversation to understand your needs, then suggest practical next steps.'
  },
  {
    q: 'Do you provide consulting as well as implementation?',
    a: 'Yes. We can advise on strategy and architecture, and our team can also build, launch and support the solution.'
  },
  {
    q: 'Can you help us with digital marketing and SEO?',
    a: 'Yes. Digital growth is part of what we do, alongside the technology that supports it.'
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. We can run discovery calls and project delivery remotely, so location is not a barrier.'
  },
  {
    q: 'What happens after we submit the form?',
    a: 'WhatsApp opens with your enquiry pre-filled. Once you tap Send, our team reviews it and gets back to you.'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formStatus, setFormStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `*New Website Enquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Company:* ${formData.company || '-'}\n` +
      `*Phone:* ${formData.phone || '-'}\n` +
      `*Service:* ${SERVICE_LABELS[formData.service] || '-'}\n` +
      `*Requirements:* ${formData.requirements}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setFormStatus('WhatsApp is opening with your enquiry. Tap Send there to deliver it to our team.');
    setFormData(EMPTY_FORM);
  };

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-card');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="contact-page">
      {/* ============ Hero & Form ============ */}
      <section
        className="contact-hero-section"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
      >
        <div className="contact-hero-container">
          <div className="contact-left-content">
            <span className="section-tag">Contact Kloud</span>
            <h1 className="hero-title">
              Let’s Talk About <br />
              <span className="highlight-text">What’s Next.</span>
            </h1>
            <p className="hero-description">
              Tell us about your business goals, challenges or ideas. We’ll start with a
              conversation and explore how Kloud InnoVisionZ can support your next step.
            </p>

            <ul className="features-grid">
              <li className="feature-item">
                <span className="feature-icon-wrap" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="13" y2="13"></line></svg>
                </span>
                <span>Understand<br />your needs</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon-wrap" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </span>
                <span>Explore<br />practical options</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon-wrap" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <span>Involve the<br />right experts</span>
              </li>
              <li className="feature-item">
                <span className="feature-icon-wrap" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"></path></svg>
                </span>
                <span>Focus on<br />real outcomes</span>
              </li>
            </ul>
          </div>

          <div className="contact-right-form-card" id="contact-form-card">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">Share a few details and our team will get back to you.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    aria-label="Your name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email *"
                    aria-label="Business email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    aria-label="Company name"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    aria-label="Phone number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <select
                  name="service"
                  aria-label="How can we help you?"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={formData.service ? 'has-value' : ''}
                >
                  <option value="" disabled>How can we help you? *</option>
                  <option value="consulting">Technology Consulting &amp; Strategy</option>
                  <option value="development">Custom Software Development</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="cloud">Cloud &amp; Infrastructure</option>
                </select>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="requirements"
                  rows="4"
                  placeholder="Tell us about your requirements *"
                  aria-label="Your requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <span aria-hidden="true">→</span>
              </button>

              {formStatus && (
                <p className="form-status" role="status">{formStatus}</p>
              )}

              <p className="form-disclaimer">
                We respect your privacy. Your information will be used only to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============ Info Cards ============ */}
      <section className="info-cards-section">
        <div className="info-cards-container">
          {/* Office */}
          <div className="info-card">
            <div className="info-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="info-content">
              <h3>Our Office</h3>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link-block"
                title="Get directions"
              >
                <p className="info-office-name">Kloud InnoVisionZ Private Limited</p>
                {/* Replace with the full street address */}
                <p>Mumbai, India</p>
                <span className="info-sub">(Work from studio/office by appointment)</span>
                <span className="info-directions">Get directions →</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="info-card">
            <div className="info-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="info-content">
              <h3>Email Us</h3>
              <a href="mailto:info@kloudinnovisionz.com" className="info-email-link">
                info@kloudinnovisionz.com
              </a>
              <p className="info-sub">For business enquiries and project discussions.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="info-card">
            <div className="info-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="info-content">
              <h3>Call Us</h3>
              <a href="tel:+919594865555" className="info-phone-link">+91 95948 65555</a>
              <p>Monday – Sunday</p>
              <span className="info-sub">10:00 AM – 6:00 PM (IST)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <span className="section-tag">Frequent Questions</span>
            <h2>
              Before You <span className="highlight-text">Reach Out</span>
            </h2>
            <p>
              Here are some common questions. If you can’t find what you’re looking for, feel
              free to contact us.
            </p>
            <button className="view-faqs-btn" type="button" onClick={scrollToForm}>
              View All FAQs <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="faq-right">
            {FAQS.map(({ q, a }, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={q} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    id={`faq-q-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{q}</span>
                    <svg className="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-a-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA Banner ============ */}
      <section
        className="cta-banner-section"
        style={{ backgroundImage: `url(${aboutUsSunImage})` }}
      >
        <div className="cta-overlay" />
        <div className="cta-banner-content">
          <div className="cta-text">
            <span className="section-tag light">Your next step starts here</span>
            <h2>
              Every Business Has a Vision.
              <br />
              <span className="cta-highlight">Let’s Work Out What’s Next.</span>
            </h2>
            <p>
              Whether you have a specific project in mind or simply want to explore
              possibilities, we’d be glad to hear from you.
            </p>
          </div>
          <div className="cta-buttons">
            <button className="primary-cta-btn" type="button" onClick={scrollToForm}>
              Let’s Talk <span aria-hidden="true">→</span>
            </button>
            <a className="secondary-cta-btn" href="tel:+919594865555">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
