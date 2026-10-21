import { useId, useState } from 'react'
import './SoftwareDevelopment.css'
import { Link } from 'react-router-dom'
import softwareDevelopment from '../assets/softwareDevelopment.webp'

const HIGHLIGHTS = [
  'Software planned around how your team actually works.',
  'Clean, maintainable code that grows with your business.',
  'Clear communication and regular demos from kickoff to launch.',
]

const USE_CASES = [
  'Content management',
  'Inventory management',
  'Customer management',
  'Human resource management',
]

const METHODOLOGY = [
  'Analyzing the problem',
  'Market research',
  'Gathering requirements for the proposed business solution',
  'Devising a plan or design for the software solution',
  'Implementation (coding) of the software',
  'Testing the software',
  'Deployment',
  'Maintenance and bug fixing',
]

const FAQS = [
  {
    question: 'What are the benefits of custom software over off-the-shelf software?',
    answer:
      'Custom software is built around your exact business workflows. It avoids unnecessary SaaS subscription costs, you keep ownership of the IP, and you never run into the limitations of a third-party tool as you scale.',
  },
  {
    question: 'How is downtime managed when migrating an old legacy monolithic system?',
    answer:
      "We use the 'Strangler Fig Pattern', where core modules are moved to microservices step by step without shutting down the legacy system, so business operations keep running uninterrupted.",
  },
  {
    question: 'How are data security and tenant separation ensured in enterprise systems?',
    answer:
      'We deploy strict schema-level or database-level multi-tenancy, JWT-based RBAC permissions, encrypted storage (AES-256) and SSL/TLS-encrypted in-transit pipelines.',
  },
  {
    question: 'What documentation and training does the team receive after software handover?',
    answer:
      'We provide comprehensive technical documentation, OpenAPI/Swagger specifications, architectural diagrams, deployment runbooks and structured handoff sessions for your in-house IT team.',
  },
]

function HospitalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
    </svg>
  )
}

function HotelIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18V6" />
      <path d="M3 14h18v4" />
      <path d="M21 14v-2a3 3 0 0 0-3-3h-7v5" />
      <circle cx="7" cy="11" r="1.5" />
    </svg>
  )
}

const INDUSTRIES = [
  {
    title: 'Hospitals',
    icon: <HospitalIcon />,
    text: 'Store patient records and retrieve them any time. Doctors and their assistants can share patient details over a network, and blood groups kept in the hospital database make finding a suitable match quick. Billing software for dispensaries and clinics is included too.',
  },
  {
    title: 'Schools',
    icon: <SchoolIcon />,
    text: 'Keep student admission details, issue Transfer Certificates, track academic progress, manage the full library inventory and handle billing, all in one place.',
  },
  {
    title: 'Hotels / Resorts',
    icon: <HotelIcon />,
    text: 'Hotel management systems designed for hospitality businesses of all sizes, built to cut the work of running them. We combine booking, billing, marketing, reporting and global distribution in one system.',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="sd-btn__icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="sd-check__icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12.5 2.8 2.8L16 9.5" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function AccordionItem({ baseId, index, title, isOpen, onToggle, children }) {
  const buttonId = `${baseId}-btn-${index}`
  const panelId = `${baseId}-panel-${index}`

  return (
    <div className={`sd-acc__item${isOpen ? ' is-open' : ''}`}>
      <h3 className="sd-acc__heading">
        <button
          type="button"
          className="sd-acc__trigger"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
        >
          <span>{title}</span>
          <span className="sd-acc__chev">
            <ChevronIcon />
          </span>
        </button>
      </h3>
      <div className="sd-acc__panel" id={panelId} role="region" aria-labelledby={buttonId}>
        <div className="sd-acc__panel-inner">
          <div className="sd-acc__body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function SoftwareDevelopment() {
  const accId = useId()
  // 1 = the industries panel starts open; -1 means everything closed
  const [openIndex, setOpenIndex] = useState(1)
  // FAQ accordion: -1 = all questions start closed
  const [openFaq, setOpenFaq] = useState(-1)

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? -1 : index))
  }

  // Arrow Up/Down, Home and End move focus between accordion headers (WAI-ARIA accordion pattern)
  const handleAccordionKeys = (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    const trigger = event.target.closest('.sd-acc__trigger')
    if (!trigger) return

    const triggers = Array.from(event.currentTarget.querySelectorAll('.sd-acc__trigger'))
    const current = triggers.indexOf(trigger)
    let next = current

    if (event.key === 'ArrowDown') next = (current + 1) % triggers.length
    if (event.key === 'ArrowUp') next = (current - 1 + triggers.length) % triggers.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = triggers.length - 1

    event.preventDefault()
    triggers[next].focus()
  }

  return (
    <main className="softdev">
      {/* Hero */}
      <section className="sd-hero" aria-labelledby="sd-hero-title">
        <div className="sd-container sd-hero__inner">
          <span className="sd-eyebrow">Our Services</span>
          <h1 className="sd-hero__title" id="sd-hero-title">
            Software <span className="sd-accent">Development</span>
          </h1>
          <p className="sd-hero__lead">Smart software that helps your business run better.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="sd-intro" aria-labelledby="sd-intro-title">
        <div className="sd-container sd-intro__grid">
          <div className="sd-intro__text">
            <h2 className="sd-h2" id="sd-intro-title">
              Build reliable <span className="sd-accent">software</span> made for your business
            </h2>
            <p>
              Every business works differently, and off-the-shelf tools rarely fit. At Kloud Innovisionz we
              listen first, then design and build software that fits your goals, your team and your budget.
            </p>

            <ul className="sd-checks" aria-label="What our software development includes">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Our developers and designers work together, so what we build is fast, secure and simple to use.
              From a first idea to launch and long-term support, we stay with you at every step.
            </p>

            <Link className="sd-btn" to="/contact-us">
              Get Quotation
              <ArrowIcon />
            </Link>
          </div>

          <figure className="sd-media">
            <img
              className="sd-media__img"
              src={softwareDevelopment}
              alt="Custom software development by Kloud Innovisionz"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* Bespoke software + accordion */}
      <section className="sd-details" aria-labelledby="sd-details-title">
        <div className="sd-container sd-details__grid">
          <div className="sd-details__text">
            <h2 className="sd-h2" id="sd-details-title">
              Bespoke software, <span className="sd-accent">tailor made</span> for your organization
            </h2>
            <p>
              We build bespoke (tailor-made) software and CRM systems for a specific organization or team.
              Unlike software packages made for the mass market, what we deliver fits your business
              preferences and expectations.
            </p>
            <p>
              Kloud Innovisionz follows an iterative process, so every nuance and hidden risk is taken into
              account, including issues that were missing from the original requirements. Our approach
              involves many departments in your company, from marketing and engineering to research and
              development and general management.
            </p>
            <p>
              Large organizations and SMEs use our custom software for critical functions, or to fill the
              gaps left by existing software packages:
            </p>
            <ul className="sd-tags" aria-label="Common uses of custom software">
              {USE_CASES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sd-acc" onKeyDown={handleAccordionKeys}>
            <AccordionItem
              baseId={accId}
              index={0}
              title="Our methodology, from analysis to maintenance"
              isOpen={openIndex === 0}
              onToggle={handleToggle}
            >
              <ol className="sd-steps">
                {METHODOLOGY.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </AccordionItem>

            <AccordionItem
              baseId={accId}
              index={1}
              title="Custom software for hospitals, schools and hotels"
              isOpen={openIndex === 1}
              onToggle={handleToggle}
            >
              <ul className="sd-industries">
                {INDUSTRIES.map((item) => (
                  <li key={item.title}>
                    <span className="sd-industry__icon">{item.icon}</span>
                    <div>
                      <h4 className="sd-industry__title">{item.title}</h4>
                      <p className="sd-industry__text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sd-faq" aria-labelledby="sd-faq-title">
        <div className="sd-container sd-faq__inner">
          <header className="sd-faq__header">
            <span className="sd-eyebrow">FAQ</span>
            <h2 className="sd-h2" id="sd-faq-title">
              Software Development <span className="sd-accent">Questions</span>
            </h2>
            <p>Answers to the questions we hear most often about building custom software.</p>
          </header>

          <div className="sd-acc" onKeyDown={handleAccordionKeys}>
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                baseId={`${accId}-faq`}
                index={idx}
                title={faq.question}
                isOpen={openFaq === idx}
                onToggle={toggleFaq}
              >
                <p className="sd-faq__answer">{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta" aria-labelledby="sd-cta-title">
        <div className="sd-container">
          <div className="sd-cta__box">
            <h2 className="sd-cta__title" id="sd-cta-title">
              Ready to turn your idea into working software?
            </h2>
            <Link className="sd-btn sd-btn--light" to="/contact-us">
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
