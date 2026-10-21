import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ERP.css'
import erpDashboard from '../assets/erp-dashboard.jpg'
 import erpModules from '../assets/erp-modules.jpg'


/* --------------------------------------------------------------------------
   IMAGES
   Both images are placeholders for now (null = shows a dashed placeholder box).
   When you have the files, put them in src/assets, uncomment the imports
   below, and replace each `null` with the imported name.

   import erpDashboard from '../assets/erp-dashboard.webp'
   import erpModules from '../assets/erp-modules.webp'
   -------------------------------------------------------------------------- */
const INTRO_IMAGE = erpDashboard // erpDashboard
const SHOWCASE_IMAGE = erpModules

const CONTACT_ROUTE = '/contact-us'

/* --------------------------------------------------------------------------
   Icons (inline SVG, no extra package needed)
   -------------------------------------------------------------------------- */
function Icon({ size = 24, className, children }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function ArrowIcon() {
  return (
    <Icon size={18} className="erp-btn__icon">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

function CheckIcon() {
  return (
    <Icon size={22} className="erp-check__icon">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12.5 2.8 2.8L16 9.5" />
    </Icon>
  )
}

function ImageIcon() {
  return (
    <Icon size={32}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </Icon>
  )
}

/* --------------------------------------------------------------------------
   Content
   -------------------------------------------------------------------------- */
const INTRO_HIGHLIGHTS = [
  'Built around your own workflow, not a fixed template',
  'Sales, stock, billing and HR on one platform',
  'Your Excel data moved over safely',
]

const SHOWCASE_POINTS = [
  'The sales team sees every lead and deal stage',
  'The store team sees live stock and reorder alerts',
  'Management sees revenue and costs on one dashboard',
]

const MODULES = [
  {
    title: 'CRM and Lead Pipeline',
    desc: 'Customer profiles, visual deal stages, call and email logs, and automatic lead scoring in one place.',
    icon: (
      <Icon size={28}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
  },
  {
    title: 'Inventory and Supply Chain',
    desc: 'Live stock across warehouses, low-stock reorder alerts, purchase orders and supplier tracking.',
    icon: (
      <Icon size={28}>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </Icon>
    ),
  },
  {
    title: 'Finance, Billing and GST',
    desc: 'Recurring invoices, multi-currency accounts, payables and receivables, and GST-ready billing.',
    icon: (
      <Icon size={28}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M14 2v6h6M8 13h8M8 17h8M10 9H8" />
      </Icon>
    ),
  },
  {
    title: 'HRMS and Attendance',
    desc: 'Attendance tracking, leave approvals, salary slips and performance review cycles.',
    icon: (
      <Icon size={28}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: 'Executive Dashboards',
    desc: 'Role-based dashboards that show leadership revenue, operating costs and live alerts on bottlenecks.',
    icon: (
      <Icon size={28}>
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </Icon>
    ),
  },
  {
    title: 'Role-Based Access',
    desc: 'Detailed permissions so each department sees only the data it needs.',
    icon: (
      <Icon size={28}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
  },
]

const PHASES = [
  {
    title: 'Process Mapping and Blueprint',
    desc: 'We map your departments, workflows and how data moves between them.',
  },
  {
    title: 'Design and Integration',
    desc: 'We design the database, forms and reports, and connect tools you already use, such as WhatsApp and payment gateways.',
  },
  {
    title: 'Data Migration',
    desc: 'We move your data from Excel sheets or older software into the new system, with checks to keep it accurate.',
  },
  {
    title: 'Training and Launch',
    desc: 'We train each department and launch the system on a secure cloud server.',
  },
]

const FAQS = [
  {
    q: 'Can the ERP be changed to match our workflow?',
    a: 'Yes. We build to your workflow instead of using a fixed template, so forms, approvals and reports follow your company’s own rules.',
  },
  {
    q: 'How many users can log in at the same time?',
    a: 'The system is built in modules and can grow from a small team to a large workforce. Tell us your numbers and we will plan the setup for them.',
  },
  {
    q: 'How is our Excel data imported into the ERP?',
    a: 'We prepare validation scripts that clean your existing product, customer and ledger data, then load it into the new database.',
  },
]

/* --------------------------------------------------------------------------
   Image or placeholder
   -------------------------------------------------------------------------- */
function Picture({ src, alt, file }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" decoding="async" />
  }
  return (
    <div className="erp-placeholder" role="img" aria-label={`${alt} (placeholder)`}>
      <ImageIcon />
      <span className="erp-placeholder__label">Image placeholder</span>
      {file && <span className="erp-placeholder__file">{file}</span>}
    </div>
  )
}

/* --------------------------------------------------------------------------
   Page
   -------------------------------------------------------------------------- */
export default function ERP() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="erp">
      {/* Hero */}
      <section className="erp-hero" aria-labelledby="erp-hero-title">
        <div className="erp-container erp-hero__inner">
          <span className="erp-eyebrow">Our Services</span>
          <h1 className="erp-hero__title" id="erp-hero-title">
            <span className="erp-accent">ERP and CRM</span> Systems
          </h1>
          <p className="erp-hero__lead">Replace scattered spreadsheets with one connected system.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="erp-intro" aria-labelledby="erp-intro-title">
        <div className="erp-container erp-intro__grid">
          <div className="erp-intro__text">
            <h2 className="erp-h2" id="erp-intro-title">
              One System for Sales, Stock, Billing and <span className="erp-accent">People</span>
            </h2>
            <p>
              When sales, inventory, billing and HR live in different spreadsheets and tools, teams lose time
              and data goes out of date. We build one platform that connects them all.
            </p>

            <ul className="erp-checks">
              {INTRO_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Every system is designed around how your business already works, then rolled out department by
              department with training for your staff.
            </p>

            <Link className="erp-btn" to={CONTACT_ROUTE}>
              Schedule ERP Demo
              <ArrowIcon />
            </Link>
          </div>

          <figure className="erp-media">
            <Picture
              src={INTRO_IMAGE}
              alt="ERP dashboard shown on a laptop"
              file="erp-dashboard.jpg"
            />
          </figure>
        </div>
      </section>

      {/* Modules */}
      <section className="erp-section erp-section--wash" aria-labelledby="erp-modules-title">
        <div className="erp-container">
          <header className="erp-header">
            <h2 className="erp-h2" id="erp-modules-title">
              Centralized <span className="erp-accent">Enterprise</span> Management
            </h2>
            <p>Six connected modules that cover the daily work of your business.</p>
          </header>

          <div className="erp-grid">
            {MODULES.map((module) => (
              <article className="erp-module" key={module.title}>
                <span className="erp-module__icon">{module.icon}</span>
                <h3 className="erp-module__title">{module.title}</h3>
                <p className="erp-module__desc">{module.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="erp-section" aria-labelledby="erp-show-title">
        <div className="erp-container erp-show__grid">
          <figure className="erp-media">
            <Picture
              src={SHOWCASE_IMAGE}
              alt="CRM pipeline and inventory screens"
              file="erp-modules.webp"
            />
          </figure>

          <div className="erp-show__text">
            <h2 className="erp-h2" id="erp-show-title">
              Every Department on <span className="erp-accent">One Screen</span>
            </h2>
            <p>
              Everyone works from the same live data, so there is no waiting for reports and no mismatched
              numbers between teams.
            </p>

            <ul className="erp-checks">
              {SHOWCASE_POINTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="erp-section erp-section--wash" aria-labelledby="erp-phases-title">
        <div className="erp-container">
          <header className="erp-header">
            <h2 className="erp-h2" id="erp-phases-title">
              4-Phase <span className="erp-accent">Implementation</span> Cycle
            </h2>
            <p>A clear path from the first workshop to the day your team goes live.</p>
          </header>

          <ol className="erp-steps">
            {PHASES.map((phase, index) => (
              <li className="erp-step" key={phase.title}>
                <span className="erp-step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="erp-step__title">{phase.title}</h3>
                <p className="erp-step__desc">{phase.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="erp-section" aria-labelledby="erp-faq-title">
        <div className="erp-container erp-narrow">
          <header className="erp-header">
            <h2 className="erp-h2" id="erp-faq-title">
              ERP and CRM <span className="erp-accent">Questions</span>
            </h2>
          </header>

          <div className="erp-faq">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`erp-faq__item${isOpen ? ' is-open' : ''}`} key={faq.q}>
                  <h3 className="erp-faq__heading">
                    <button
                      type="button"
                      className="erp-faq__button"
                      aria-expanded={isOpen}
                      aria-controls={`erp-faq-panel-${index}`}
                      id={`erp-faq-button-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <Icon size={20} className="erp-faq__icon">
                        <path d="M5 12h14" />
                        {!isOpen && <path d="M12 5v14" />}
                      </Icon>
                    </button>
                  </h3>
                  <div
                    className="erp-faq__panel"
                    id={`erp-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`erp-faq-button-${index}`}
                    hidden={!isOpen}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="erp-cta" aria-labelledby="erp-cta-title">
        <div className="erp-container">
          <div className="erp-cta__box">
            <h2 className="erp-cta__title" id="erp-cta-title">
              Ready to replace your spreadsheets?
            </h2>
            <Link className="erp-btn erp-btn--light" to={CONTACT_ROUTE}>
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
