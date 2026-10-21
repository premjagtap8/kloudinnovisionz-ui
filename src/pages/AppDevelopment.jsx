import { useState } from 'react'
import './AppDevelopment.css'
import { Link } from 'react-router-dom'
import mobileApp from '../assets/mobileApp.webp'

const HIGHLIGHTS = [
  "We'll help you figure out what works best for your app using clever strategies.",
  'Make your app pop with content that really speaks to your audience.',
  "Your app isn't just a tool; it's a connection between your brand and your customers.",
]

const FAQS = [
  {
    question: 'Should I choose cross-platform (React Native/Flutter) or native development?',
    answer:
      'If you need the fastest time-to-market, a single shared codebase and cost-efficient scaling, React Native or Flutter is the best choice. If you need heavy AR/VR hardware work, low-level Bluetooth devices or graphics-intensive computing, native development (Swift/Kotlin) is recommended.',
  },
  {
    question: 'Do you manage the publishing process on the App Store and Google Play Store?',
    answer:
      'Yes. We handle all the review guidelines, developer account configuration, privacy manifests, screenshots and app approval pipelines for both the Apple App Store and Google Play Store.',
  },
  {
    question: 'How is offline mode handled in a mobile app?',
    answer:
      'We design an offline-first architecture with local persistent storage (such as MMKV, SQLite or WatermelonDB), so data automatically syncs with the backend once the network is restored.',
  },
  {
    question: 'What update and maintenance support do you offer after the app launches?',
    answer:
      'We provide dedicated maintenance retainers covering post-launch monitoring, OS version updates (iOS/Android), crash analytics and fast over-the-air (OTA) updates.',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="ad-btn__icon"
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
      className="ad-check__icon"
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
      className="ad-faq__icon"
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
      <path className="ad-faq__icon-bar" d="M12 5v14" />
    </svg>
  )
}

export default function AppDevelopment() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index))
  }

  return (
    <main className="appdev">
      {/* Hero */}
      <section className="ad-hero" aria-labelledby="ad-hero-title">
        <div className="ad-container ad-hero__inner">
          <span className="ad-eyebrow">Our Services</span>
          <h1 className="ad-hero__title" id="ad-hero-title">
            App <span className="ad-accent">Development</span>
          </h1>
          <p className="ad-hero__lead">Every business is shifting to the mobile world.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="ad-intro" aria-labelledby="ad-intro-title">
        <div className="ad-container ad-intro__grid">
          <div className="ad-intro__text">
            <h2 className="ad-h2" id="ad-intro-title">
              Grow your business with a customised <span className="ad-accent">mobile app</span>
            </h2>
            <p>
              Ever dreamt of having a mobile app for your business? Dream big, because we are here to make it
              happen. Let your imagination run wild and we will bring it to life: our team turns your ideas into
              a real, user-friendly mobile app.
            </p>

            <ul className="ad-checks" aria-label="What our app development includes">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              In today&rsquo;s digital world, a mobile app works like a superhero for your business. We help you
              navigate this landscape with a top-notch app, and our developers and designers work hand in hand
              to build one that is functional and easy on the eyes.
            </p>
            <p>
              Just like a website, a great app can boost your visibility in app stores and searches. Partner
              with us and let&rsquo;s create an app that is more than a tool: a game-changer for your brand.
            </p>

            <Link className="ad-btn" to="/contact-us">
              Get Quotation
              <ArrowIcon />
            </Link>
          </div>

          <figure className="ad-media">
            <img
              className="ad-media__img"
              src={mobileApp}
              alt="Mobile app screens designed and developed by Kloud Innovisionz"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* Story */}
      <section className="ad-story" aria-labelledby="ad-story-title">
        <div className="ad-container ad-story__inner">
          <h2 className="ad-h2" id="ad-story-title">
            An app that looks good and <span className="ad-accent">tells a story</span>
          </h2>
          <p>
            We place content carefully to keep users engaged and make sure your brand message shines through.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="ad-faq" aria-labelledby="ad-faq-title">
        <div className="ad-container ad-faq__inner">
          <header className="ad-faq__header">
            <span className="ad-eyebrow">FAQ</span>
            <h2 className="ad-h2" id="ad-faq-title">
              Mobile App <span className="ad-accent">Questions</span>
            </h2>
            <p>Answers to the questions we hear most often about building your mobile app.</p>
          </header>

          <div className="ad-faq__list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div className={`ad-faq__item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <h3 className="ad-faq__q">
                    <button
                      type="button"
                      className="ad-faq__trigger"
                      id={`ad-faq-trigger-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`ad-faq-panel-${idx}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="ad-faq__question">{faq.question}</span>
                      <span className="ad-faq__toggle">
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="ad-faq__panel"
                    id={`ad-faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`ad-faq-trigger-${idx}`}
                  >
                    <div className="ad-faq__panel-inner">
                      <p className="ad-faq__answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ad-cta" aria-labelledby="ad-cta-title">
        <div className="ad-container">
          <div className="ad-cta__box">
            <h2 className="ad-cta__title" id="ad-cta-title">
              Unlock the power of a customised app for your brand.
            </h2>
            <Link className="ad-btn ad-btn--light" to="/contact-us">
              Get Started
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
