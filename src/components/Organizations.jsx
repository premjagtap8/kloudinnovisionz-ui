import React from "react";
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
import paiwala from '../assets/images/paiwalainteriors.webp'
import pawpaa from '../assets/images/pawpaa.webp'
import urbenAcers from '../assets/images/urban_acres.png'

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

const CLIENTS = [
  { src: dockair, name: "dockair" },
  { src: biologo, name: "biologo" },
  { src: aceWFM, name: "aceWFM" },
  { src: bookyourresearch, name: "bookyourresearch" },
  { src: caudate, name: "caudate" },
  { src: communicare, name: "communicare" },
  { src: dclLogo, name: "dclLogo" },
  { src: dhLogo, name: "dhLogo" },
  { src: dolocevita, name: "dolocevita" },
  { src: Mpower, name: "Mpower" },
  { src: navHealth, name: "navHealth" },
  { src: pawpaa, name: "pawpaa" },
  { src: urbenAcers, name: "urbenAcers" },
  { src: SahanaHome, name: "SahanaHomes" },
  { src: bollywoodfest, name: "bollywoodfest" },
  { src: organicharvest, name: "organicharvest" },
  // { src: sanjivani, name: "Sanjivani Group" },
  // { src: hijama, name: "Hijama" },
  // { src: justbookus, name: "Just Book Us" },
  // { src: reSound, name: "Re Sound" },
  // { src: rishta, name: "Rishta" },
  // { src: shifa, name: "Shifa" },
  // { src: parkar, name: "Parkar" },
  // { src: vhalimos, name: "VHA Limos" },
  // { src: paiwala, name: "Paiwala" },
  // { src: logo22, name: "Client" },
];

// Logos whose text is white on a transparent background.
// They get a dark outline in CSS so the text is readable on the light section.
const LIGHT_TEXT_LOGOS = ["caudate", "aceWFM"];

// Logos whose text is tiny or thin inside the image.
// They are enlarged and given a little extra contrast in CSS.
const ZOOM_LOGOS = ["dhLogo", "dolocevita", "navHealth"];

const SECONDS_PER_LOGO = 4;

const LOOP = [...CLIENTS, ...CLIENTS];

function Organizations() {
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
          <ul
            className="organizations__track"
            style={{ "--org-duration": `${CLIENTS.length * SECONDS_PER_LOGO}s` }}
            role="list"
          >
            {LOOP.map((client, i) => {
              const isCopy = i >= CLIENTS.length;
              return (
                <li
                  className="organizations__item"
                  key={`${client.name}-${i}`}
                  aria-hidden={isCopy ? "true" : undefined}
                >
                  <img
                    src={client.src}
                    alt={isCopy ? "" : `${client.name} logo`}
                    className={
                      [
                        LIGHT_TEXT_LOGOS.includes(client.name) && "logo-light-text",
                        ZOOM_LOGOS.includes(client.name) && "logo-zoom",
                      ]
                        .filter(Boolean)
                        .join(" ") || undefined
                    }
                    width={211}
                    height={116}
                    loading="lazy"
                    decoding="async"
                  />
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
