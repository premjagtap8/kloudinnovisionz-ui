import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

/* Set VITE_CONTACT_API_URL in your .env to POST the form to your backend.
   If it is not set, the form falls back to opening the visitor's email app. */
const API_URL = import.meta.env.VITE_CONTACT_API_URL || ''
const FALLBACK_EMAIL = 'kontact@kloudinnovisionz.com'

const SERVICES = [
  'Web Design & Development',
  'Graphic Designing',
  'Mobile App Development',
  'Software Development',
  'Digital Marketing',
  'Domain & Hosting',
  'ERP & CRM',
]

const OFFICES = [
  {
    id: 'india',
    country: 'India',
    tag: 'Home Office',
    address: ['UGB 88, Phoenix Paragon Plaza', 'L.B.S. Marg, Kurla (West)', 'Mumbai - 400070'],
    email: 'kontact@kloudinnovisionz.com',
    phone: '+91 959486 5555',
    tel: '+919594865555',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.47205814509!2d72.88764361485158!3d19.08693605658878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c2d9496781%3A0x21fa39f59f2571d6!2sKlouD%20InnoVisionZ!5e0!3m2!1sen!2sin!4v1569570535096!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=KlouD+InnoVisionZ+Kurla+Mumbai',
  },
  {
    id: 'france',
    country: 'France',
    tag: 'Paris Office',
    address: ['2 Rue Emile Zola', 'La Courneuve, Paris', 'France - 93120'],
    email: 'HR@kloudinnovisionz.com',
    phone: '+33 605 620 573',
    tel: '+33605620573',
    mapQuery: '2 Rue Emile Zola, La Courneuve, 93120, France',
  },
  {
    id: 'hungary',
    country: 'Hungary',
    tag: 'Budapest Office',
    address: ['Taksony U.S', 'Budapest', 'Hungary'],
    email: 'info@kloudinnovisionz.com',
    phone: '+36 20 619 8338',
    tel: '+36206198338',
    mapQuery: 'Taksony, Budapest, Hungary',
  },
]

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/KloudinnovisionzOfficial/' },
  { label: 'X (Twitter)', href: 'https://twitter.com/KlouDinoVisionZ' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCAtKcZFDA-6aNuXzIbWGvFw?view_as=subscriber' },
  { label: 'Instagram', href: 'https://www.instagram.com/kloudinnovisionzofficial/' },
  { label: 'Pinterest', href: 'https://in.pinterest.com/Kloudinnovisionz/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kloud-innovisionz-0a8a2112b/' },
]

const getMapSrc = (office) =>
  office.mapSrc ||
  `https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=m&z=15&output=embed`

const getMapLink = (office) =>
  office.mapLink ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`

/* ---------- Icons ---------- */
const iconProps = {
  width: 44,
  height: 44,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
)

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5.9 5.9l1.4-2.2L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-4.9A8.5 8.5 0 1 1 21 11.5Z" />
  </svg>
)

const HeadsetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const INITIAL_FORM = { name: '', email: '', phone: '', business: '', services: [], website: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return // honeypot: bots fill this hidden field

    setStatus({ state: 'sending', message: '' })

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      business: form.business.trim(),
      services: form.services,
    }

    try {
      if (API_URL) {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus({ state: 'success', message: 'Thank you! We have received your message and will get back to you shortly.' })
      } else {
        const body = [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Mobile: ${payload.phone}`,
          `Business: ${payload.business}`,
          `Services: ${payload.services.join(', ') || 'Not specified'}`,
        ].join('\n')
        window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
          'Website enquiry from ' + payload.name,
        )}&body=${encodeURIComponent(body)}`
        setStatus({ state: 'success', message: 'Your email app should open with the details filled in. Just press send.' })
      }
      setForm(INITIAL_FORM)
    } catch {
      setStatus({
        state: 'error',
        message: `Something went wrong. Please try again or email us at ${FALLBACK_EMAIL}.`,
      })
    }
  }

  return (
    <main className="ct">
      {/* ---------- Hero + form ---------- */}
      <section className="ct-hero">
        <div className="ct-hero__inner">
          <span className="ct-hero__icon">
            <HeadsetIcon />
          </span>
          <h1 className="ct-hero__title">Contact Us</h1>
          <p className="ct-hero__subtitle">Take one chance to transform your business</p>

          <form className="ct-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="ct-field">
              <label htmlFor="ct-name" className="ct-sr">Name</label>
              <input id="ct-name" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required autoComplete="name" />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-email" className="ct-sr">Email</label>
              <input id="ct-email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required autoComplete="email" />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-phone" className="ct-sr">Mobile number</label>
              <input id="ct-phone" name="phone" type="tel" inputMode="tel" placeholder="Mobile No." value={form.phone} onChange={handleChange} required pattern="[0-9 +]{7,16}" title="Enter a valid mobile number (digits, spaces and + only)" autoComplete="tel" />
            </div>
            <div className="ct-field">
              <label htmlFor="ct-business" className="ct-sr">Your business name</label>
              <input id="ct-business" name="business" type="text" placeholder="Your Business Name" value={form.business} onChange={handleChange} required autoComplete="organization" />
            </div>

            {/* Honeypot field, hidden from real visitors */}
            <div className="ct-hp" aria-hidden="true">
              <label htmlFor="ct-website">Website</label>
              <input id="ct-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
            </div>

            <fieldset className="ct-services">
              <legend className="ct-sr">Which service do you want?</legend>
              {SERVICES.map((service) => (
                <label className="ct-check" key={service}>
                  <input type="checkbox" checked={form.services.includes(service)} onChange={() => toggleService(service)} />
                  <span className="ct-check__box" aria-hidden="true" />
                  <span className="ct-check__label">{service}</span>
                </label>
              ))}
            </fieldset>

            <button className="ct-submit" type="submit" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending...' : 'Send'}
            </button>

            <p className={`ct-status ct-status--${status.state}`} role="status" aria-live="polite">
              {status.message}
            </p>
          </form>
        </div>
      </section>

      {/* ---------- Get in touch strip ---------- */}
      <section className="ct-cta">
        <div className="ct-cta__inner">
          <h2 className="ct-cta__title">Let&rsquo;s talk and start your success</h2>
          <div className="ct-cta__side">
            <p>You can connect with us anytime. Schedule a consultation call with us for more details&hellip;</p>
            <Link to="/services" className="ct-link">
              Our Services
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Contact cards ---------- */}
      <section className="ct-cards">
        <div className="ct-cards__inner">
          <article className="ct-card">
            <span className="ct-card__icon"><MailIcon /></span>
            <h3 className="ct-card__title">Send a Message</h3>
            <ul className="ct-card__list">
              {OFFICES.map((o) => (
                <li key={o.id}>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </li>
              ))}
            </ul>
          </article>

          <article className="ct-card ct-card--featured">
            <span className="ct-card__icon"><PhoneIcon /></span>
            <h3 className="ct-card__title">Talk to Us</h3>
            <ul className="ct-card__list">
              {OFFICES.map((o) => (
                <li key={o.id}>
                  <a href={`tel:${o.tel}`}>
                    {o.phone} <small>({o.country})</small>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="ct-card">
            <span className="ct-card__icon"><ChatIcon /></span>
            <h3 className="ct-card__title">Chat with Us</h3>
            <ul className="ct-card__list ct-card__list--socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ---------- Offices + maps ---------- */}
      <section className="ct-offices">
        <div className="ct-offices__inner">
          <h2 className="ct-offices__title">Our Offices</h2>
          <div className="ct-offices__grid">
            {OFFICES.map((office) => (
              <article className="ct-office" key={office.id}>
                <div className="ct-office__map">
                  <iframe
                    title={`${office.country} office map`}
                    src={getMapSrc(office)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="ct-office__body">
                  <div className="ct-office__head">
                    <h3>{office.country}</h3>
                    <span className="ct-office__tag">{office.tag}</span>
                  </div>
                  <address>
                    {office.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                  <a className="ct-office__dir" href={getMapLink(office)} target="_blank" rel="noopener noreferrer">
                    <PinIcon />
                    Open in Maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
