import React, { useEffect } from "react";
import "./TermsAndConditions.css";

const PAGE_TITLE = "Privacy Policy";
const EMAIL = "kontact@kloudinnovisionz.com";

const MailLink = () => (
  <a href={`mailto:${EMAIL}`} className="terms__link">
    {EMAIL}
  </a>
);

const intro = [
  <>
    KlouD InnoVisionZ and its subsidiaries and affiliates (collectively,
    “KlouD InnoVisionZ”, “us” or “we”) understand that your privacy is important
    to you. We are committed to respecting your privacy and protecting your
    personal data, which is any information that is capable of identifying you
    as an individual. This Privacy Policy describes how we handle and protect
    your personal data in connection with our business activities, client
    services, websites, applications, and communications that link to this
    Privacy Policy (collectively, the “Sites”), in our capacity as data
    controllers.
  </>,
  <>
    KlouD InnoVisionZ operates in-house ERP systems, mobile applications, web
    development, web solutions, and digital marketing services (collectively,
    the “Services”). By using our Services, you agree to the collection and use
    of information in accordance with this policy. Unless otherwise defined in
    this Privacy Policy, terms used here have the same meanings as in our Terms
    and Conditions. We collect or access information that you voluntarily
    provide through direct contact, forms, or email. We use that information
    to respond to enquiries and provide or improve our Services.
  </>,
  <>
    We do not sell personal information to third parties. We may contact you by
    email about offers, products, services, or changes to this Privacy Policy
    where appropriate and permitted. You can opt out of promotional
    communications at any time.
  </>,
];

const sections = [
  {
    title: "Do you want to unsubscribe?",
    body: [
      <>
        If you want to unsubscribe from promotional communications, you can
        request this through our feedback form or by emailing us at{" "}
        <MailLink />. We will process your request within a reasonable period.
      </>,
    ],
  },
  {
    title: "Security policies",
    body: [
      <>
        We take reasonable precautions to help protect the personal information
        you submit to us. However, no method of transmission over the internet
        or electronic storage is completely secure, and we cannot guarantee
        absolute security. Please contact us if you believe your information
        may have been compromised.
      </>,
    ],
  },
  {
    title: "Changes in privacy policy",
    body: [
      <>
        If we update this Privacy Policy, we will publish the revised version
        on this website. Please review this page periodically to stay informed
        about how we handle personal information.
      </>,
    ],
  },
  {
    title: "User forums",
    body: [
      <>
        Information you disclose publicly online may be collected and used by
        others. KlouD InnoVisionZ is not responsible for the actions or
        policies of third parties who collect information that users publicly
        disclose in forums or other public areas of the Sites.
      </>,
    ],
  },
  {
    title: "Links to third-party sites",
    body: [
      <>
        Our Sites may provide links to third-party websites as a convenience.
        These links do not imply endorsement, sponsorship, or recommendation by
        KlouD InnoVisionZ. We are not responsible for the content, security, or
        privacy practices of external websites. If you follow a third-party
        link, its terms of use and privacy policy will apply.
      </>,
    ],
  },
  {
    title: "Data retention",
    body: [
      <>
        We retain personal data for as long as necessary for the relevant
        business relationship and for legitimate business purposes. We may
        retain information for longer where needed to comply with legal
        obligations, resolve disputes, protect against legal claims, or maintain
        business records. Where applicable law grants you a right to request
        deletion, you may contact us to make that request.
      </>,
    ],
  },
  {
    title: "Your rights",
    body: [
      <>
        Subject to applicable law, you may have the right to request access to
        personal data we hold about you, ask for inaccurate information to be
        corrected, request deletion, obtain a copy of your information, or
        object to or restrict certain processing.
      </>,
      <>
        To make a request or ask how we process personal data, contact us at{" "}
        <MailLink />. We may need to verify your request before responding.
      </>,
    ],
  },
  {
    title: "Children's privacy",
    body: [
      <>
        Our Services are not intended for children under the age of 7, and we
        do not knowingly collect personally identifiable information from
        children under 7. If you are a parent or guardian and believe a child
        has provided us with personal data, please contact us. If we learn that
        we have collected such information without appropriate consent, we will
        take reasonable steps to delete it.
      </>,
    ],
  },
  {
    title: "Changes to this privacy policy",
    body: [
      <>
        We may update this Privacy Policy from time to time. When changes are
        made, we will post the revised policy on this page and update the
        effective date where appropriate. For significant changes, we may also
        provide notice by email or through our Services. Changes take effect
        when posted unless stated otherwise.
      </>,
    ],
  },
  {
    title: "Social networking",
    body: [
      <>
        Our Sites may allow you to connect social network accounts, including
        LinkedIn, Facebook, and YouTube, or sign in using social network
        credentials. The availability of these features may depend on the
        service you choose to use.
      </>,
      <>
        If you connect a social network account or sign in through it, we may
        receive information that you authorize that network to share with us.
        The social network's own terms and privacy policy govern its handling
        of your information.
      </>,
    ],
  },
  {
    title: "Contact form",
    body: [
      <>
        If you would like KlouD InnoVisionZ to contact you, complete the online
        form with your details or email us directly at <MailLink />.
      </>,
    ],
  },
];

export default function TermsAndConditions() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${PAGE_TITLE} | KlouD InnoVisionZ`;
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="terms">
      <header className="terms__hero">
        <div className="terms__hero-orb terms__hero-orb--one" aria-hidden="true" />
        <div className="terms__hero-orb terms__hero-orb--two" aria-hidden="true" />

        <div className="terms__container terms__hero-inner">
          <span className="terms__eyebrow">
            <span className="terms__eyebrow-dot" aria-hidden="true" />
            Legal information
          </span>

          <h1 className="terms__title">
            Privacy <span>Policy</span>
          </h1>

          <p className="terms__subtitle">
            Learn how KlouD InnoVisionZ handles and protects your information.
          </p>

          <div className="terms__hero-meta">
            <span className="terms__meta-icon" aria-hidden="true">✓</span>
            Clear information. Responsible handling.
          </div>
        </div>
      </header>

      <div className="terms__container terms__layout">
        <aside className="terms__sidebar" aria-label="Privacy policy overview">
          <div className="terms__sidebar-card">
            <span className="terms__sidebar-kicker">Privacy at a glance</span>
            <h2 className="terms__sidebar-title">Your information matters.</h2>
            <p>
              This policy explains how information is collected, used, retained,
              and protected when you interact with our services.
            </p>
            <a className="terms__sidebar-link" href={`mailto:${EMAIL}`}>
              Contact our team <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>

        <article className="terms__content">
          <div className="terms__article-intro">
            <span className="terms__article-label">Your privacy matters</span>
            <p className="terms__text">
              We aim to be transparent about the information we handle and the
              choices available to you.
            </p>
          </div>

          {intro.map((paragraph, index) => (
            <p className="terms__text" key={`intro-${index}`}>
              {paragraph}
            </p>
          ))}

          <div className="terms__section-list">
            {sections.map((section, index) => (
              <section className="terms__section" key={section.title}>
                <span className="terms__section-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="terms__section-body">
                  <h2 className="terms__heading">{section.title}</h2>
                  {section.body.map((paragraph, paragraphIndex) => (
                    <p
                      className="terms__text"
                      key={`${section.title}-${paragraphIndex}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="terms__contact">
            <div className="terms__contact-copy">
              <span className="terms__article-label">Questions about privacy?</span>
              <h2 className="terms__contact-title">We're here to help.</h2>
              <p className="terms__text">
                Contact our team if you would like to discuss this policy or
                make a privacy-related request.
              </p>
            </div>

            <a className="terms__contact-button" href={`mailto:${EMAIL}`}>
              Contact us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
