import React, { useEffect, useRef } from "react";
import "./Organizations.css";

import dockair from '../assets/images/dockair.webp'
import biologo from "../assets/images/bio-logo-image-removebg-preview.png";
import SahanaHome from '../assets/images/SahanaHomes.webp'
import aceWFM from '../assets/images/Ace-WFM-Logo-Final-removebg-preview-1.png'
import bookyourresearch from '../assets/images/bookyourresearch.webp'
import caudate from '../assets/images/caudate.webp'
import communicare from '../assets/images/communicure.jpg'
import dclLogo from '../assets/images/dclogo.webp'
import dhLogo from '../assets/images/DH.png'
import dolocevita from '../assets/images/dolocevita.png'
import Mpower from '../assets/images/Mpower Logo-04.svg'
import navHealth from '../assets/images/navHealthClinic.png'
// import paiwala from '../assets/images/paiwalainteriors.webp' // unused (see commented client below)
import pawpaa from '../assets/images/pawpaa.webp'
import urbenAcers from '../assets/images/urban_acres.png'

// New logos added in src/assets/images
import zaidLogo from '../assets/images/zaidlogo-light.png'
import sahanaShelters from '../assets/images/sahanashelterss.jpg'
// Paiwala Group: transparent logo (replaces the old paiwalaGroup.jpg that had a white box)
import paiwalaGroup from '../assets/images/paiwala-logo-2.png'

// Latest logos added in src/assets/images
import lifecareTrust from '../assets/images/lifecaretrustt.webp'
import msvMaring from '../assets/images/msvmaringlogo.png'
import webrand from '../assets/images/webrandlogo.webp'
import manuxNano from '../assets/images/manubioceuticals.png'
import greenCloset from '../assets/images/greencloset.webp'
import fab40 from '../assets/images/fab40.webp'

// New logos (located directly in src/assets)
import bollywoodfest from "../assets/bollywoodfest.png";
import organicharvest from "../assets/organicharvest.png";

// import desividesi from "../assets/desividesi.webp";
// import qrslogo from "../assets/qrslogo.webp";
// import meraveg from "../assets/meraveg.webp";
// import marine from "../assets/marine.webp";
// import yaaymina from "../assets/yaaymina-logo.webp";
// import organic from "../assets/organic.webp";
// import digitalID from "../assets/digitalID.webp";
// import nexus from "../assets/nexus.webp";
// import zainnew from "../assets/zainnew.webp";
// import tikona from "../assets/tikona.webp";
// import sigma from "../assets/sigma.webp";
// import sanjivani from "../assets/sanjivani_group_logo_white_bg.webp";
// import hijama from "../assets/hijama.webp";
// import justbookus from "../assets/justbookus.webp";
// import reSound from "../assets/re_sound.webp";
// import rishta from "../assets/rishta.webp";
// import shifa from "../assets/shifa.webp";
// import parkar from "../assets/parkar.webp";
// import vhalimos from "../assets/VHALimos.webp";
// import logo22 from "../assets/Logo22.webp";

// `url` is the client's website. Set it to null for a logo with no link
// (the logo is then shown without being clickable).
const CLIENTS = [
  { src: dockair, name: "dockair", url: "https://dockairexiim.com/" },
  { src: biologo, name: "biologo", url: "https://www.biohackingindia.in/" },
  { src: aceWFM, name: "aceWFM", url: "https://www.acewfm.com/" },
  { src: bookyourresearch, name: "bookyourresearch", url: "https://www.bookyourresearch.com/" },
  { src: caudate, name: "caudate", url: "https://www.caudatetech.com/" },
  { src: communicare, name: "communicare", url: "https://www.communicure.com/" },
  { src: dclLogo, name: "dclLogo", url: "https://www.dcaipl.com/" },
  { src: dhLogo, name: "dhLogo", url: "https://www.thediethubbysayantani.in/" },
  { src: dolocevita, name: "dolocevita", url: "https://www.dolcevitaevents.gr/" },
  { src: Mpower, name: "Mpower", url: "https://www.mpowerminds.com/" },
  { src: navHealth, name: "navHealth", url: "https://www.navhealthclinic.com/" },
  { src: pawpaa, name: "pawpaa", url: "https://www.pawpaa.com/" },
  { src: urbenAcers, name: "urbenAcers", url: "https://www.urbanacres.in/" },
  { src: SahanaHome, name: "SahanaHomes", url: "https://www.sahanahomes.in/" },
  { src: zaidLogo, name: "zaidInfotech", url: "https://zaidinfotech.in/" },
  { src: sahanaShelters, name: "sahanaShelters", url: "https://staging.sahanashelters.com/home/" }, // staging URL - replace with live site
  { src: paiwalaGroup, name: "paiwalaGroup", url: "https://www.paiwalagroup.com/" },
  { src: bollywoodfest, name: "bollywoodfest", url: "https://www.bollywoodfest.com/" },
  { src: organicharvest, name: "organicharvest", url: null }, // add link when available
  { src: lifecareTrust, name: "lifecareTrust", url: "https://www.lifecarecharitable.org/" },
  { src: msvMaring, name: "msvMaring", url: "https://msv-marine.com/" },
  { src: webrand, name: "webrand", url: "https://www.webrandustry.com/" },
  { src: manuxNano, name: "manuxNanoBioCeuticals", url: "https://manuxnbc.com/" },
  { src: greenCloset, name: "theGreenCloset", url: "https://thegreencloset.in/" },
  { src: fab40, name: "fabulous40sPlus", url: "https://fabulous40splus.com/" },
  // { src: sanjivani, name: "Sanjivani Group", url: null },
  // { src: hijama, name: "Hijama", url: null },
  // { src: justbookus, name: "Just Book Us", url: null },
  // { src: reSound, name: "Re Sound", url: null },
  // { src: rishta, name: "Rishta", url: null },
  // { src: shifa, name: "Shifa", url: null },
  // { src: parkar, name: "Parkar", url: null },
  // { src: vhalimos, name: "VHA Limos", url: null },
  // { src: paiwala, name: "Paiwala", url: "https://www.paiwalainteriors.com/" },
  // { src: logo22, name: "Client", url: null },
];

// Logos whose text is white on a transparent background.
// They get a dark outline in CSS so the text is readable on the light section.
const LIGHT_TEXT_LOGOS = ["caudate", "aceWFM"];

// Logos that look small because the image has tiny/thin text or a lot of
// empty space around the artwork. The number is how much bigger the logo
// is drawn (1 = normal size). The logo's SLOT grows with it, so a bigger
// logo can never overlap its neighbours.
//   Try 1.2 - 1.6. Change a number here to make that one logo bigger/smaller.
//   If a new logo looks small, add it here, e.g.  webrand: 1.3,
const LOGO_ZOOM = {
  dhLogo: 1.35,
  dolocevita: 1.35,
  navHealth: 1.35,
  sahanaShelters: 1.45,
  paiwalaGroup: 1.4,
  manuxNanoBioCeuticals: 1.5,
  lifecareTrust: 1.3,
  msvMaring: 1.25,
  webrand: 1.3,
};

// Scroll speed in pixels per second. The animation duration is calculated
// from the real track width, so the speed is the same on every screen size
// and stays the same when logos are added or removed.
const SPEED_DESKTOP = 55;
const SPEED_MOBILE = 40;
const MOBILE_QUERY = "(max-width: 768px)";

const LOOP = [...CLIENTS, ...CLIENTS];

function Organizations() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const updateDuration = () => {
      // The track holds two identical sets, and the animation moves it by
      // exactly one set (-50%), so distance = half of the track width.
      const distance = track.scrollWidth / 2;
      if (!distance) return;

      const speed = window.matchMedia(MOBILE_QUERY).matches
        ? SPEED_MOBILE
        : SPEED_DESKTOP;

      track.style.setProperty("--org-duration", `${distance / speed}s`);
    };

    updateDuration();

    // Re-calculate when the track width changes (resize, rotate, fonts...).
    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="organizations" aria-labelledby="organizations-title">
      <div className="organizations__inner">
        <h2 className="organizations__label" id="organizations-title">
          Trusted by
          <br />
          forward-thinking
          <br />
          organizations
        </h2>

        <div className="organizations__divider" aria-hidden="true" />

        <div className="organizations__viewport">
          <ul className="organizations__track" ref={trackRef} role="list">
            {LOOP.map((client, i) => {
              const isCopy = i >= CLIENTS.length;
              const zoom = LOGO_ZOOM[client.name];

              const img = (
                <img
                  src={client.src}
                  alt={isCopy ? "" : `${client.name} logo`}
                  className={
                    [
                      LIGHT_TEXT_LOGOS.includes(client.name) && "logo-light-text",
                      zoom && "is-zoomed",
                    ]
                      .filter(Boolean)
                      .join(" ") || undefined
                  }
                  width={211}
                  height={116}
                  // No loading="lazy": the logos are small, and lazy images
                  // inside a clipped, moving track pop in late.
                  decoding="async"
                  draggable="false"
                />
              );

              return (
                <li
                  className="organizations__item"
                  // --zoom makes the slot (the li) and the image grow together.
                  style={zoom ? { "--zoom": zoom } : undefined}
                  key={`${client.name}-${i}`}
                  aria-hidden={isCopy ? "true" : undefined}
                >
                  {client.url ? (
                    <a
                      className="organizations__link"
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${client.name} website (opens in a new tab)`}
                      // The duplicate set is hidden from screen readers,
                      // so keep it out of the keyboard tab order too.
                      tabIndex={isCopy ? -1 : undefined}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Organizations;
