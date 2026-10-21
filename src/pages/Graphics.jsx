import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Graphics.css'
 import GraphicOne from '../assets/graphicOne.webp'
 import logoDesign from '../assets/logo-design.jpg'
 import poster from '../assets/poster.jpg'
 import socialMedia from '../assets/social-media.jpg'
 import brochure from '../assets/brochure.jpg'
 import packaging from '../assets/packaging.jpg'
    import uiDesign from '../assets/ui-design.jpg'

/* --------------------------------------------------------------------------
   IMAGES
   All 7 images are placeholders for now (null = shows a dashed placeholder box).
   When you have the files, put them in src/assets, uncomment the imports
   below, and replace each `null` with the imported name.

   import graphicOne from '../assets/graphicOne.webp'
   import logoDesign from '../assets/logo-design.webp'
   import poster from '../assets/poster.webp'
   import socialMedia from '../assets/social-media.webp'
   import brochure from '../assets/brochure.webp'
   import packaging from '../assets/packaging.webp'
   import uiDesign from '../assets/ui-design.webp'
   -------------------------------------------------------------------------- */
const INTRO_IMAGE = graphicOne

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
    <Icon size={18} className="gd-btn__icon">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

function CheckIcon() {
  return (
    <Icon size={22} className="gd-check__icon">
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
const HIGHLIGHTS = [
  'Custom designs, never templates',
  'Consistent look across web, social and print',
  'Print-ready and web-ready files delivered',
]

const SERVICES = [
  {
    title: 'Brand Identity and Logo',
    desc: 'Logo design, brand guidelines, color palettes and typography.',
    icon: (
      <Icon size={28}>
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </Icon>
    ),
  },
  {
    title: 'UI/UX and Digital Assets',
    desc: 'Website and app screens, prototypes, icons and illustrations.',
    icon: (
      <Icon size={28}>
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </Icon>
    ),
  },
  {
    title: 'Social Media Creatives',
    desc: 'Posts, ads and campaign banners made to get clicks.',
    icon: (
      <Icon size={28}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </Icon>
    ),
  },
  {
    title: 'Print and Corporate Collateral',
    desc: 'Brochures, pitch decks, catalogs, banners and stationery.',
    icon: (
      <Icon size={28}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </Icon>
    ),
  },
  {
    title: 'Packaging and Merchandise',
    desc: 'Box and label layouts, 3D renders and branded merchandise.',
    icon: (
      <Icon size={28}>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </Icon>
    ),
  },
  {
    title: 'Infographics',
    desc: 'Complex data turned into clear, easy-to-read visuals.',
    icon: (
      <Icon size={28}>
        <path d="M3 3v18h18" />
        <path d="M7 16v-5M12 16V7M17 16v-3" />
      </Icon>
    ),
  },
]

// image: null = placeholder. `file` is the suggested file name shown inside the placeholder.
const PROJECTS = [
  { id: 1, title: 'Bluewave Studio', tag: 'Logo', file: 'logo-design.webp', image: logoDesign  },
  { id: 2, title: 'Event Poster', tag: 'Poster', file: 'poster.webp', image: poster },
  { id: 3, title: 'Social Media Pack', tag: 'Social Media', file: 'social-media.webp', image: socialMedia },
  { id: 4, title: 'Corporate Brochure', tag: 'Brochure', file: 'brochure.webp', image: brochure },
  { id: 5, title: 'Product Packaging', tag: 'Packaging', file: 'packaging.webp', image: packaging },
  { id: 6, title: 'Dashboard Design', tag: 'UI/UX', file: 'ui-design.webp', image: uiDesign },
]

const STEPS = [
  {
    title: 'Discovery',
    desc: 'We learn about your brand, audience and competitors.',
  },
  {
    title: 'Concept',
    desc: 'We share moodboards and design directions for your feedback.',
  },
  {
    title: 'Craft',
    desc: 'We refine the chosen concept into pixel-perfect final designs.',
  },
  {
    title: 'Delivery',
    desc: 'You receive print-ready and web-ready files, plus editable source files.',
  },
]

const TOOLS = [
  { area: 'Interface design', list: 'Figma, Adobe XD, Sketch' },
  { area: 'Vector and illustration', list: 'Adobe Illustrator, CorelDRAW' },
  { area: 'Photo editing', list: 'Adobe Photoshop, Lightroom' },
  { area: '3D and motion', list: 'Blender, Adobe After Effects' },
]

const FAQS = [
  {
    q: 'Do you deliver editable source files?',
    a: 'Yes. Once the design is approved, we send editable files (.AI, .PSD, .FIG) along with web-ready (SVG, WebP, PNG) and print-ready PDF files.',
  },
  {
    q: 'Can you refresh our existing logo without losing recognition?',
    a: 'Yes. We keep what your customers already know and modernize the typography, colors and layout.',
  },
  {
    q: 'How long does a full branding package take?',
    a: 'Usually 2 to 3 weeks, including revision rounds.',
  },
  {
    q: 'Do you offer monthly design support?',
    a: 'Yes. We offer monthly plans for regular banners, social posts, decks and UI updates.',
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
    <div className="gd-placeholder" role="img" aria-label={`${alt} (placeholder)`}>
      <ImageIcon />
      <span className="gd-placeholder__label">Image placeholder</span>
      {file && <span className="gd-placeholder__file">{file}</span>}
    </div>
  )
}

/* --------------------------------------------------------------------------
   Page
   -------------------------------------------------------------------------- */
export default function Graphics() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="graphics">
      {/* Hero */}
      <section className="gd-hero" aria-labelledby="gd-hero-title">
        <div className="gd-container gd-hero__inner">
          <span className="gd-eyebrow">Our Services</span>
          <h1 className="gd-hero__title" id="gd-hero-title">
            Graphic <span className="gd-accent">Design</span>
          </h1>
          <p className="gd-hero__lead">Great design makes your brand impossible to ignore.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="gd-intro" aria-labelledby="gd-intro-title">
        <div className="gd-container gd-intro__grid">
          <div className="gd-intro__text">
            <h2 className="gd-h2" id="gd-intro-title">
              Your Brand Identity, <span className="gd-accent">Designed</span> to Stand Out
            </h2>
            <p>
              We turn your business story into clear, consistent visuals. From logos and social media posts to
              brochures and app screens, every design is made to build trust and bring in customers.
            </p>

            <ul className="gd-checks">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Our designers work closely with your team so every piece looks like it belongs to one brand,
              whether it is on a screen or in print.
            </p>

            <Link className="gd-btn" to={CONTACT_ROUTE}>
              Get Quotation
              <ArrowIcon />
            </Link>
          </div>

          <figure className="gd-intro__media">
            <Picture
              src={INTRO_IMAGE}
              alt="Designer workspace with brand design work"
              file="graphicOne.webp"
            />
          </figure>
        </div>
      </section>

      {/* Services */}
      <section className="gd-section gd-section--wash" aria-labelledby="gd-services-title">
        <div className="gd-container">
          <header className="gd-header">
            <h2 className="gd-h2" id="gd-services-title">
              What We <span className="gd-accent">Design</span>
            </h2>
            <p>Brand, digital and print design from one team.</p>
          </header>

          <div className="gd-services">
            {SERVICES.map((service) => (
              <article className="gd-service" key={service.title}>
                <span className="gd-service__icon">{service.icon}</span>
                <h3 className="gd-service__title">{service.title}</h3>
                <p className="gd-service__desc">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="gd-section" aria-labelledby="gd-work-title">
        <div className="gd-container">
          <header className="gd-header">
            <h2 className="gd-h2" id="gd-work-title">
              Design <span className="gd-accent">Portfolio</span>
            </h2>
            <p>A selection of the brand, print and digital work we create.</p>
          </header>

          <div className="gd-grid">
            {PROJECTS.map((project) => (
              <article className="gd-card" key={project.id}>
                <div className="gd-card__media">
                  <Picture src={project.image} alt={`${project.title} design preview`} file={project.file} />
                  <span className="gd-card__tag">{project.tag}</span>
                </div>
                <div className="gd-card__body">
                  <h3 className="gd-card__title">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gd-section gd-section--wash" aria-labelledby="gd-process-title">
        <div className="gd-container">
          <header className="gd-header">
            <h2 className="gd-h2" id="gd-process-title">
              Our <span className="gd-accent">Process</span>
            </h2>
            <p>From first conversation to final files in four clear steps.</p>
          </header>

          <ol className="gd-steps">
            {STEPS.map((step, index) => (
              <li className="gd-step" key={step.title}>
                <span className="gd-step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="gd-step__title">{step.title}</h3>
                <p className="gd-step__desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="gd-section" aria-labelledby="gd-tools-title">
        <div className="gd-container gd-narrow">
          <header className="gd-header">
            <h2 className="gd-h2" id="gd-tools-title">
              Tools We <span className="gd-accent">Use</span>
            </h2>
          </header>

          <dl className="gd-tools">
            {TOOLS.map((tool) => (
              <div className="gd-tools__row" key={tool.area}>
                <dt>{tool.area}</dt>
                <dd>{tool.list}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="gd-section gd-section--wash" aria-labelledby="gd-faq-title">
        <div className="gd-container gd-narrow">
          <header className="gd-header">
            <h2 className="gd-h2" id="gd-faq-title">
              Frequently Asked <span className="gd-accent">Questions</span>
            </h2>
          </header>

          <div className="gd-faq">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`gd-faq__item${isOpen ? ' is-open' : ''}`} key={faq.q}>
                  <h3 className="gd-faq__heading">
                    <button
                      type="button"
                      className="gd-faq__button"
                      aria-expanded={isOpen}
                      aria-controls={`gd-faq-panel-${index}`}
                      id={`gd-faq-button-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <Icon size={20} className="gd-faq__icon">
                        <path d="M5 12h14" />
                        {!isOpen && <path d="M12 5v14" />}
                      </Icon>
                    </button>
                  </h3>
                  <div
                    className="gd-faq__panel"
                    id={`gd-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`gd-faq-button-${index}`}
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
      <section className="gd-cta" aria-labelledby="gd-cta-title">
        <div className="gd-container">
          <div className="gd-cta__box">
            <h2 className="gd-cta__title" id="gd-cta-title">
              Need visuals that set your brand apart?
            </h2>
            <Link className="gd-btn gd-btn--light" to={CONTACT_ROUTE}>
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
