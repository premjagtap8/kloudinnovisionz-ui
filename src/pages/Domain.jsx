import { useState } from 'react'
import './Domain.css'
import { Link } from 'react-router-dom'
 import domainImg from '../assets/domain-host.png'
 import hostingImg from '../assets/domain-name-registration.png'

/*
  Images: placeholders are shown until you add real ones.
  1. Put the image in src/assets (for example domain-host.webp)
  2. Uncomment the matching import below
  3. Set the constant to the imported image (DOMAIN_IMAGE = domainImg)
*/
// import domainImg from '../assets/domain-host.webp'
// import hostingImg from '../assets/domain-name-registration.webp'
const DOMAIN_IMAGE = domainImg
const HOSTING_IMAGE = hostingImg

function ArrowIcon() {
  return (
    <svg
      className="dn-btn__icon"
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

function GlobeIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z" />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m21 16-5-5-8 8" />
    </svg>
  )
}

/* Shows the real image when one is provided, otherwise a neat placeholder */
function MediaFigure({ src, alt, label }) {
  return (
    <figure className="dn-media">
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="dn-placeholder" role="img" aria-label={alt}>
          <ImageIcon />
          <span className="dn-placeholder__title">{label}</span>
          <span className="dn-placeholder__note">Placeholder image, replace with your own</span>
        </div>
      )}
    </figure>
  )
}

/* Shared props for the small feature-card icons */
const FEATURE_SVG = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

function DnsIcon() {
  return (
    <svg {...FEATURE_SVG}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg {...FEATURE_SVG}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg {...FEATURE_SVG}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function DriveIcon() {
  return (
    <svg {...FEATURE_SVG}>
      <path d="M22 12H2" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <path d="M6 16h.01" />
      <path d="M10 16h.01" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      className="dn-faq__icon"
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
      <path className="dn-faq__icon-bar" d="M12 5v14" />
    </svg>
  )
}

const FEATURES = [
  {
    title: 'Domain Management & DNS',
    icon: <DnsIcon />,
    text: 'Instant registration of .com, .in, .org and enterprise TLDs, DNS propagation within minutes, and privacy protection.',
  },
  {
    title: '99.99% Uptime SLA',
    icon: <ClockIcon />,
    text: 'Redundant cloud clusters and self-healing network routing for a zero-downtime commitment.',
  },
  {
    title: 'Active DDoS Protection',
    icon: <ShieldIcon />,
    text: 'Multi-layered real-time filtering that blocks volumetric cyber attacks right at the network edge.',
  },
  {
    title: 'Automated Off-Site Backups',
    icon: <DriveIcon />,
    text: 'Daily snapshots and 1-click restore make disaster recovery seamless.',
  },
]

const FAQS = [
  {
    question: 'Is website migration from my old host free?',
    answer:
      'Yes. Our server support team migrates all your data, databases and email accounts from your existing hosting for free, with no downtime.',
  },
  {
    question: 'Where are your server data centers located?',
    answer:
      'Our Tier-4 cloud data centers are available in India (Mumbai/Bangalore), Singapore, Frankfurt and the USA, so you can choose the location with the lowest latency for your visitors.',
  },
  {
    question: 'How is the free SSL certificate configured?',
    answer:
      "As soon as your domain is connected, a Let's Encrypt Wildcard SSL certificate is provisioned automatically and renews on its own.",
  },
]

export default function Domain() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index))
  }

  return (
    <main className="domain">
      {/* Hero */}
      <section className="dn-hero" aria-labelledby="dn-hero-title">
        <div className="dn-container dn-hero__inner">
          <span className="dn-hero__icon" aria-hidden="true">
            <GlobeIcon />
          </span>
          <span className="dn-eyebrow">Our Services</span>
          <h1 className="dn-hero__title" id="dn-hero-title">
            Domain &amp; <span className="dn-accent">Hosting</span>
          </h1>
          <p className="dn-hero__lead">
            If your company is still growing and does not think it can afford its own IT department, we have
            the perfect solution!
          </p>
        </div>
      </section>

      {/* Domain */}
      <section className="dn-section" aria-labelledby="dn-domain-title">
        <div className="dn-container dn-split">
          <div className="dn-split__text">
            <h5 className="dn-kicker">We Provide</h5>
            <h2 className="dn-h2 dn-h2--bar" id="dn-domain-title">
              <span className="dn-accent">Domain</span>
            </h2>
            <p>
              Domain name is an online identity of a website which allows users from around the world to locate
              and browse your website anytime, anywhere. Domain is any name registered in the DNS (domain name
              system) System. Registering a domain name is the first step in getting your business online.
              Domain is your unique identity on the internet and allows people to find you quickly and easily.
              You can register multiple domains under your name. Securing variations of your primary domain can
              help protect your brand. All our domain names are registered through our accredited provider. Many
              businesses and brands register their name with multiple extensions to protect their online
              identity, increase visibility and attract more visitors to their website. In today’s business
              world, a domain name and a web presence are a must. Your domain name is your online identity,
              which allows users from around the world to locate and browse your website 24 hours a day, seven
              days a week. So as the internet traffic increases, the businesses will realize that they can no
              longer ignore the internet. Internet is based on IP addresses, not on domain names, hence every
              Web server requires a Domain Name System (DNS) server to translate domain names into IP
              addresses.
            </p>

            <h3 className="dn-subhead">What is a domain name?</h3>
            <p>
              Domain names are used in URLs to identify particular Web pages. Organizations can choose a domain
              name that corresponds to their company/business name, helping Internet users to reach them
              easily. Every website is hosted on internet web server. Computer access these servers using an IP
              address- a string of bulky , confusing and difficult to remember numbers like 98.34.178.32. A
              Domain name converts an IP address to a more simple and easy-to-remember text-based version.
            </p>

            <Link className="dn-btn" to="/contact-us">
              Get Quotation
              <ArrowIcon />
            </Link>
          </div>

          <div className="dn-split__side">
            <MediaFigure src={DOMAIN_IMAGE} alt="Domain name registration" label="Domain image" />
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="dn-section dn-section--wash" aria-labelledby="dn-hosting-title">
        <div className="dn-container dn-split dn-split--flip">
          <div className="dn-split__text">
            <h2 className="dn-h2 dn-h2--bar" id="dn-hosting-title">
              <span className="dn-accent">Hosting</span>
            </h2>
            <p>
              A web hosting service is a type of Internet service that allows individuals and organizations to
              make their website visible on Web in simple words web hosting provide space on internet for
              websites. Web hosting services work by storing your website files in high-powered computers (web
              servers) connected to a very fast network. When someone types in your web address (such as
              www.whyhosting.com), the Internet connects to the web server holding your website files and then
              transfers your website information back to their computer. From there they can surf and view the
              pages of your website. Single page hosting is generally sufficient for personal web pages. A
              complex site calls for a more comprehensive package that provides database support and
              application development platforms (e.g. PHP, Java, Ruby on Rails, ColdFusion, or ASP.NET). These
              facilities allow customers to write or install scripts for applications like forums and content
              management. Also, Secure Sockets Layer (SSL) is typically used for e-commerce. Our hosting plans
              have everything you need to develop your website and to help you or your business on the internet
              in no time. Each plan has a different feature depending on the complexity of your website. Our web
              hosting solutions can help build a strong online presence for your business. We have complete
              hosting package including expert support team, as well as features to enhance your personal or
              business website.
            </p>
          </div>

          <div className="dn-split__side">
            <MediaFigure src={HOSTING_IMAGE} alt="Web hosting servers" label="Hosting image" />
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="dn-why" aria-label="Domain and hosting features">
        <div className="dn-container">
          <ul className="dn-features">
            {FEATURES.map((feature) => (
              <li className="dn-feature" key={feature.title}>
                <span className="dn-feature__icon">{feature.icon}</span>
                <h3 className="dn-feature__title">{feature.title}</h3>
                <p className="dn-feature__text">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="dn-faq" aria-labelledby="dn-faq-title">
        <div className="dn-container dn-faq__inner">
          <header className="dn-faq__header">
            <span className="dn-eyebrow">FAQ</span>
            <h2 className="dn-h2" id="dn-faq-title">
              Server &amp; Hosting <span className="dn-accent">Questions</span>
            </h2>
            <p>Answers to the questions we hear most often about domains and hosting.</p>
          </header>

          <div className="dn-faq__list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div className={`dn-faq__item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <h3 className="dn-faq__q">
                    <button
                      type="button"
                      className="dn-faq__trigger"
                      id={`dn-faq-trigger-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`dn-faq-panel-${idx}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="dn-faq__question">{faq.question}</span>
                      <span className="dn-faq__toggle">
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="dn-faq__panel"
                    id={`dn-faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`dn-faq-trigger-${idx}`}
                  >
                    <div className="dn-faq__panel-inner">
                      <p className="dn-faq__answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dn-cta" aria-labelledby="dn-cta-title">
        <div className="dn-container">
          <div className="dn-cta__box">
            <h2 className="dn-cta__title" id="dn-cta-title">
              Ready to get your business online with the right domain and hosting?
            </h2>
            <Link className="dn-btn dn-btn--light" to="/contact-us">
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
