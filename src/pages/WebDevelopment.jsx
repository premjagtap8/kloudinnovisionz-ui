import { useState } from 'react'
import './WebDevelopment.css'
import { Link } from 'react-router-dom'
import desividesi from '../assets/desividesi (1).webp'
import paiwala from '../assets/Capture.webp'
import rishta from '../assets/rishta (2).webp'
import marinejewels from '../assets/marinejewels.webp'
import organic from '../assets/organic (2).webp'
import hospital from '../assets/hospital (1).webp'
import webOne from '../assets/webOne.webp'

const CATEGORY_LABELS = {
  static: 'Static',
  dynamic: 'Dynamic',
  ecommerce: 'Ecommerce',
  webapp: 'Web App',
}

// Only 6 projects on this page. Swap any entry for another project from Projects.jsx.
const PROJECTS = [
  { id: 1, title: 'Desividesi', url: 'https://desividesi.in/', categories: ['ecommerce', 'dynamic'], image: desividesi },
  { id: 2, title: 'Paiwala Interiors', url: 'http://paiwalainteriors.com/', categories: ['dynamic', 'webapp'], image: paiwala },
  { id: 3, title: 'Rishta Mubarak', url: 'https://rishtamubarak.com/', categories: ['dynamic', 'webapp'], image: rishta },
  { id: 4, title: 'Marine Jewels', url: 'http://marinejewels.in/', categories: ['static'], image: marinejewels },
  { id: 5, title: 'Organic Harvest', url: 'http://organicharvestarabia.com/', categories: ['ecommerce', 'dynamic'], image: organic },
  { id: 6, title: 'Hospital', url: 'https://kloudinnovisionz.com/hospital/', categories: ['dynamic', 'webapp'], image: hospital },
]

const HIGHLIGHTS = [
  'Developing and executing data-driven strategies',
  'Take your brand to new heights with compelling content',
  'Designed to connect your brand with your target audience',
]

const FAQS = [
  {
    question: 'Which tech stack do you recommend for enterprise web applications?',
    answer:
      'We primarily utilize React/Next.js for blazing fast frontend experiences, coupled with Node.js/Express or Python microservices and PostgreSQL/MongoDB databases to guarantee scalability, security, and developer productivity.',
  },
  {
    question: 'Do you build custom platforms or use templates?',
    answer:
      'Every solution we deliver is custom-engineered from the ground up according to your specific functional requirements, user journeys, and brand identity, without relying on bloated generic templates.',
  },
  {
    question: 'How do you ensure responsiveness and mobile optimization?',
    answer:
      'We adopt a mobile-first philosophy using modern CSS grids, Tailwind layouts, and automated viewport testing across smartphones, tablets, laptops, and ultra-wide screens.',
  },
  {
    question: 'Do you offer post-launch maintenance and feature updates?',
    answer:
      'Yes, we provide flexible SLA-backed maintenance packages covering real-time server monitoring, bug fixes, routine security audits, and continuous iterative development.',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="wd-btn__icon"
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
      className="wd-check__icon"
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

function PlusIcon() {
  return (
    <svg
      className="wd-faq__icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path className="wd-faq__icon-bar" d="M12 5v14" />
    </svg>
  )
}

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index))
  }

  return (
    <main className="webdev">
      {/* Hero */}
      <section className="wd-hero" aria-labelledby="wd-hero-title">
        <div className="wd-container wd-hero__inner">
          <span className="wd-eyebrow">Our Services</span>
          <h1 className="wd-hero__title" id="wd-hero-title">
            Web <span className="wd-accent">Development</span>
          </h1>
          <p className="wd-hero__lead">Digital presence starts with being found on Google.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="wd-intro" aria-labelledby="wd-intro-title">
        <div className="wd-container wd-intro__grid">
          <div className="wd-intro__text">
            <h2 className="wd-h2" id="wd-intro-title">
              Your Business Presence with a <span className="wd-accent">Website</span> on the Internet
            </h2>
            <p>
              We create what you dare to imagine. Dare simply means thinking big and taking the first step
              toward what you want, and we are here to build it around your ideas.
            </p>

            <ul className="wd-checks">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              A website is the first and best digital marketing tool. Our web development and web design teams
              work together to give you a strong digital presence and a better user experience.
            </p>
            <p>
              Some companies shy away from new or unusual requirements. We take your challenges on and build to
              your brief. We specialise in responsive, user-friendly and stable websites with a simple backend,
              and good development is also a big part of ranking higher on Google and other search engines.
            </p>

            <Link className="wd-btn" to="/contact-us">
              Get Quotation
              <ArrowIcon />
            </Link>
          </div>

          <figure className="wd-intro__media">
            <img
              src={webOne}
              alt="Web development team building a responsive website"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* Portfolio */}
      <section className="wd-work" aria-labelledby="wd-work-title">
        <div className="wd-container">
          <header className="wd-work__header">
            <h2 className="wd-h2" id="wd-work-title">
              Web <span className="wd-accent">Portfolio</span>
            </h2>
            <p>Trending designs with engaging content placement and search-engine-friendly builds.</p>
          </header>

          <div className="wd-grid">
            {PROJECTS.map((project) => (
              <article className="wd-card" key={project.id}>
                <div className="wd-card__media">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="wd-card__tags">
                    {project.categories.map((c) => (
                      <span className="wd-card__tag" key={c}>
                        {CATEGORY_LABELS[c]}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="wd-card__body">
                  <h3 className="wd-card__title">{project.title}</h3>
                  <a
                    className="wd-btn wd-btn--full"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live (opens in a new tab)`}
                  >
                    View Live
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="wd-work__more">
            <Link className="wd-btn wd-btn--ghost" to="/projects">
              View All Projects
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wd-faq" aria-labelledby="wd-faq-title">
        <div className="wd-container wd-faq__inner">
          <header className="wd-faq__header">
            <span className="wd-eyebrow">FAQ</span>
            <h2 className="wd-h2" id="wd-faq-title">
              Frequently Asked <span className="wd-accent">Questions</span>
            </h2>
            <p>Answers to the questions we hear most often about building your website.</p>
          </header>

          <div className="wd-faq__list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div className={`wd-faq__item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <h3 className="wd-faq__q">
                    <button
                      type="button"
                      className="wd-faq__trigger"
                      id={`wd-faq-trigger-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`wd-faq-panel-${idx}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="wd-faq__question">{faq.question}</span>
                      <span className="wd-faq__toggle">
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="wd-faq__panel"
                    id={`wd-faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`wd-faq-trigger-${idx}`}
                  >
                    <div className="wd-faq__panel-inner">
                      <p className="wd-faq__answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wd-cta" aria-labelledby="wd-cta-title">
        <div className="wd-container">
          <div className="wd-cta__box">
            <h2 className="wd-cta__title" id="wd-cta-title">Ready to build a website that works for your business?</h2>
            <Link className="wd-btn wd-btn--light" to="/contact-us">
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
