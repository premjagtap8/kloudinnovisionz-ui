import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // swap for the arrow icon you already use in WebDevelopment.jsx
import marketingImg from "../assets/digitalMarketing.webp";
import seoImg from "../assets/SEO.png";
import smoImg from "../assets/smo.webp"; // change to "../assets/SMO.png" when you have the SMO image
import semImg from "../assets/sem.webp";
import ppcImg from "../assets/ppc.webp";
import emailImg from "../assets/email-marketing.webp";
import "./DigitalMarketing.css";

const CONTACT_ROUTE = "/contact-us"; // change to "/contact" if that is your route

const SEO_ADVANTAGES = [
  "Definite Increase in Traffic.",
  "Higher Brand Credibility, People Trust Google",
  "Take Your Business to the Next Level",
];

const SMO_ADVANTAGES = [
  "Website’s visibility.",
  "Communication channel",
  "Sharing quick updates.",
  "Close relationship with customers.",
];

const FAQS = [
  {
    question: "How long does it take to see measurable results from SEO?",
    answer:
      "In a competitive search landscape, visible keyword ranking gains and sustained organic traffic growth typically start to compound within 3 to 6 months.",
  },
  {
    question: "Which ad account is the paid campaign budget spent from?",
    answer:
      "You keep full control through your own verified ad account. Billing goes directly to Google or Meta, while we handle the agency management and optimization.",
  },
  {
    question: "Do you also cover landing page design and copywriting?",
    answer:
      "Yes. High-converting copywriting, UI layout design and conversion-optimized development are a standard part of our marketing sprint.",
  },
];

function CircleArrowIcon() {
  return (
    <svg
      className="dm-list__icon"
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
      <path d="M8 12h8M13 8l4 4-4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="dm-faq__icon"
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
      <path className="dm-faq__icon-bar" d="M12 5v14" />
    </svg>
  );
}

export default function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <main className="digital-marketing">
      {/* ---------------- Hero ---------------- */}
      <section className="dm-hero">
        <div className="dm-container dm-hero__inner">
          <span className="dm-hero__icon" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M8 20h8M12 16v4" />
              <path d="M9.5 8.5 7.5 10l2 1.5M14.5 8.5l2 1.5-2 1.5" />
            </svg>
          </span>

          <span className="dm-eyebrow">Our Services</span>

          <h1 className="dm-hero__title">
            Digital <span className="dm-accent">Marketing</span>
          </h1>

          <p className="dm-hero__lead">
            A brand is no longer what we tell the consumer it is – it is what
            consumers tell each other it is.
          </p>
          <p className="dm-hero__author">(Scott Cook)</p>
        </div>
      </section>

      {/* ---------------- Digital Marketing ---------------- */}
      <section className="dm-intro">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h5 className="dm-kicker">Our Services in</h5>
            <h2 className="dm-h2 dm-h2--bar">
              Digital <span className="dm-accent">Marketing</span>
            </h2>
            <p>
              We believe in getting you results through a full spectrum of
              marketing services, from strategic planning to creative campaigns
              and innovative development concepts. Through our Kloudii Think
              process, we deliver a strategy that will get you the results.
            </p>

            <h2 className="dm-h2 dm-h2--bar dm-h2--spaced">
              Why Digital <span className="dm-accent">Marketing</span> ?
            </h2>
            <p>
              It is the modern way of reaching your potential customers with
              your products. It is the most effective factor in modern days to
              boost your business and earn a good reputation in the market,
              along with a good upscale in your sales.
            </p>
            <p>
              It helps you overcome business difficulties with ease and has
              answers for your online business queries. It has the potential to
              reach a huge number of people in no time, which means you can
              target your product to any group of people living in any part of
              the world. It has valuable features which can track every online
              movement of your business. It can enhance your business with its
              dynamic components such as <strong>SEO</strong> (search engine
              marketing services), <strong>SMO</strong> (social media
              optimization), <strong>PPC</strong> (pay per click) and{" "}
              <strong>SMM</strong> (social media management).
            </p>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={marketingImg}
                alt="Digital marketing strategies"
                loading="lazy"
              />
            </figure>

            <Link to={CONTACT_ROUTE} className="dm-btn dm-btn--full">
              Get Quotation
              <ArrowRight className="dm-btn__icon" size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SEO ---------------- */}
      <section className="dm-intro dm-intro--wash">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h5 className="dm-kicker">We are into</h5>
            <h2 className="dm-h2 dm-h2--bar">
              <span className="dm-accent">SEO</span>
            </h2>
            <p>
              We at KlouD InnoVisionZ Pvt. Ltd. provide Search Engine
              Optimization services from Mumbai, India. SEO is one of the best
              web marketing services, as almost 75 to 90% of the web traffic
              that reaches websites today starts from search engines. When
              deployed correctly, SEO is significantly more powerful than any
              other type of online marketing. What is SEO? It is short for
              Search Engine Optimization. What does SEO do? It is the strategy
              of analyzing and building individual web pages, as well as entire
              sites, so that they can be found, analyzed and then indexed by
              search engines. We provide the best SEO services.
            </p>
            <p>
              SEO refers to search engine marketing concepts. An SEO strategy is
              used to make your website rank higher in the Google search engine,
              and to rank higher you need to make appropriate use of SEO
              techniques. There are two types:
            </p>
            <p>
              <strong>1. Onsite SEO</strong> refers to whatever updates or
              changes we make within the website so that the Google crawler can
              easily fetch information about it and show it in the results
              whenever a person searches on Google.
            </p>
            <p>
              <strong>2. Offsite SEO</strong> means whatever activities we do
              off the page to make your website more reliable in Google search.
              Off-page SEO is all about building backlinks to your website, and
              building them in large numbers can boost your ranking and bring a
              huge amount of traffic. Some methods to create backlinks are
              directory submission, article submission, blog commenting and
              bookmarking.
            </p>

            <h4 className="dm-subhead">Advantages</h4>
            <ul className="dm-list">
              {SEO_ADVANTAGES.map((item) => (
                <li key={item}>
                  <CircleArrowIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={seoImg}
                alt="Search engine optimization"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- SMO ---------------- */}
      <section className="dm-intro dm-intro--plain">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h2 className="dm-h2 dm-h2--bar">
              <span className="dm-accent">SMO</span>
            </h2>
            <p>
              We respect both web-based social media marketing and social media
              optimization as extremely important capabilities for your brand’s
              web presence. Our team of experts uses every tool available and
              analyzes data gathered from every platform to find the best
              solutions for your brand’s visibility and reach. Our relationships
              with reputed influencers and communities across different channels
              and categories enable us to create campaigns that best serve your
              brand’s interests on social media.
            </p>
            <p>
              Our SMO services help increase the awareness of your brand, its
              products, services or events by using a number of social media
              outlets and communities to generate viral publicity.
            </p>
            <p>
              SMO is one of the most effective features of digital marketing and
              is used to bring traffic from social media to our website. Social
              media is a great platform to showcase your various products or
              blogs, either by sharing them across all social media platforms or
              by creating paid Facebook campaigns, which add the potential to
              reach more customers.
            </p>

            <h4 className="dm-subhead">Advantages</h4>
            <ul className="dm-list">
              {SMO_ADVANTAGES.map((item) => (
                <li key={item}>
                  <CircleArrowIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={smoImg}
                alt="Social media optimization"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- SEM ---------------- */}
      <section className="dm-intro dm-intro--wash">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h2 className="dm-h2 dm-h2--bar">
              <span className="dm-accent">SEM</span>
            </h2>
            <p>
              PPC, SEM and Google Ads (pay per click campaigns) are all one and
              the same. PPC refers to the sponsored ads shown on Google’s SERPs
              at the top and bottom, marked with an “Ad” label. Google recently
              announced the removal of right-hand side ads on SERPs worldwide.
              Just as the market for SEM is becoming popular, the pay per click
              market is also growing rapidly. We provide the best SEM services
              in Mumbai. Nowadays, not only is the market growing, but the Cost
              Per Click (CPC) is also increasing considerably. CPC refers to the
              cost incurred each time a user clicks on your ads.
            </p>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={semImg}
                alt="Search engine marketing and pay per click"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- PPC ---------------- */}
      <section className="dm-intro dm-intro--plain">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h2 className="dm-h2 dm-h2--bar">
              <span className="dm-accent">PPC</span>
            </h2>
            <p>
              Pay per click (PPC) is a widely used approach to digital
              advertising in which a business places ads in top search engine
              positions to promote its business, product or service online.
              Rates are determined by the number of viewers who click on the
              advertisement and are then redirected to the promoted landing
              page. PPC drives an immediate response and is especially
              beneficial for those looking to increase traffic to a website over
              a short period of time. Using the best industry-specific keywords
              and ad copy is critical to driving the right viewers to click
              through and learn more. PPC is often used to support digital
              marketing campaigns and specific products or services, and runs
              in parallel with an SEO strategy to support the early stages of
              website traffic generation. Search engine advertising is one of
              the most common forms of PPC, with ads labeled “Ad” in keyword
              search results, driving interested viewers to a website.
            </p>
            <p>
              By leveraging our pay-per-click marketing services, KlouD
              InnoVisionZ can help your website or campaign reach the next
              level. We create a customized strategy and reporting system
              tailored to your needs and business objectives, so that your
              measure of success is our primary goal. We support and guide you
              while managing your ad campaigns, maximizing the return on your
              investment by increasing leads, traffic to your site, or brand
              awareness, with measurable results.
            </p>
            <p>
              PPC advertising (pay per click) is a form of paid advertisement
              offered by Google to website owners to showcase their products.
              We create an ad set in a Google Ads account, and Google charges
              according to the filters and options we choose while creating the
              ad campaign. Google then shows the campaign to the audience
              categories and keywords we added to it.
            </p>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={ppcImg}
                alt="Pay per click advertising"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- Email Marketing ---------------- */}
      <section className="dm-intro dm-intro--wash">
        <div className="dm-container dm-intro__grid">
          <div className="dm-intro__text">
            <h2 className="dm-h2 dm-h2--bar">
              Email <span className="dm-accent">Marketing</span>
            </h2>
            <p>
              Email Marketing – An overall strategy and business plan to market
              products and services with the use of email channels for making
              good profit and reaching our goals. Email marketing services allow
              you to create specific marketing for each segment of your
              audience. These services let you spread news about your products,
              services and your company and bring in new customers in a
              resourceful and reportable way. This is powerful Strategy to build
              your audience, mobile friendly. It’s a direct marketing make a use
              of electronic mail services to communicate more audience at the
              same time.
            </p>
          </div>

          <div className="dm-intro__side">
            <figure className="dm-intro__media">
              <img
                src={emailImg}
                alt="Email marketing"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="dm-faq" aria-labelledby="dm-faq-title">
        <div className="dm-container dm-faq__inner">
          <header className="dm-faq__header">
            <span className="dm-eyebrow">FAQ</span>
            <h2 className="dm-h2 dm-faq__title" id="dm-faq-title">
              Digital Marketing <span className="dm-accent">Questions</span>
            </h2>
            <p>Answers to the questions we hear most often about our marketing services.</p>
          </header>

          <div className="dm-faq__list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`dm-faq__item${isOpen ? " is-open" : ""}`} key={faq.question}>
                  <h3 className="dm-faq__q">
                    <button
                      type="button"
                      className="dm-faq__trigger"
                      id={`dm-faq-trigger-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`dm-faq-panel-${idx}`}
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="dm-faq__question">{faq.question}</span>
                      <span className="dm-faq__toggle">
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="dm-faq__panel"
                    id={`dm-faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`dm-faq-trigger-${idx}`}
                  >
                    <div className="dm-faq__panel-inner">
                      <p className="dm-faq__answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
