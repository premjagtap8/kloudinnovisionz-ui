import React from "react";
import "./Organizations.css";

import zocales from "../assets/zocales.webp";
import desividesi from "../assets/desividesi.webp";
import qrslogo from "../assets/qrslogo.webp";
import meraveg from "../assets/meraveg.webp";
import marine from "../assets/marine.webp";
import yaaymina from "../assets/yaaymina-logo.webp";
import organic from "../assets/organic.webp";
import bollywoodfest from "../assets/bollywoodfest.webp";
import digitalID from "../assets/digitalID.webp";
import nexus from "../assets/nexus.webp";
import zainnew from "../assets/zainnew.webp";
import tikona from "../assets/tikona.webp";
import sigma from "../assets/sigma.webp";
import sanjivani from "../assets/sanjivani_group_logo_white_bg.webp";
import hijama from "../assets/hijama.webp";
import justbookus from "../assets/justbookus.webp";
import reSound from "../assets/re_sound.webp";
import rishta from "../assets/rishta.webp";
import shifa from "../assets/shifa.webp";
import parkar from "../assets/parkar.webp";
import vhalimos from "../assets/VHALimos.webp";
import paiwala from "../assets/paiwala.webp";
import logo22 from "../assets/Logo22.webp";

// Replace the names with the real client names (used as alt text).
// "Client" for Logo22 is a placeholder: give it the real company name.
const CLIENTS = [
  { src: zocales, name: "Zocales" },
  { src: desividesi, name: "Desi Videsi" },
  { src: qrslogo, name: "QRS" },
  { src: meraveg, name: "Mera Veg" },
  { src: marine, name: "Marine" },
  { src: yaaymina, name: "Yaaymina" },
  { src: organic, name: "Organic" },
  { src: bollywoodfest, name: "Bollywood Fest" },
  { src: digitalID, name: "Digital ID" },
  { src: nexus, name: "Nexus" },
  { src: zainnew, name: "Zain" },
  { src: tikona, name: "Tikona" },
  { src: sigma, name: "Sigma" },
  { src: sanjivani, name: "Sanjivani Group" },
  { src: hijama, name: "Hijama" },
  { src: justbookus, name: "Just Book Us" },
  { src: reSound, name: "Re Sound" },
  { src: rishta, name: "Rishta" },
  { src: shifa, name: "Shifa" },
  { src: parkar, name: "Parkar" },
  { src: vhalimos, name: "VHA Limos" },
  { src: paiwala, name: "Paiwala" },
  { src: logo22, name: "Client" },
];

// Seconds each logo takes to pass by. The total loop time is derived from the number
// of logos, so adding or removing clients never changes the scrolling speed.
const SECONDS_PER_LOGO = 4;

// The set is rendered twice so the loop restarts without a jump.
// Built once, outside the component (it never changes between renders).
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
            role="list" /* Safari drops list semantics when list-style is none */
          >
            {LOOP.map((client, i) => {
              const isCopy = i >= CLIENTS.length; // second set: visual only
              return (
                <li
                  className="organizations__item"
                  key={`${client.name}-${i}`}
                  aria-hidden={isCopy ? "true" : undefined}
                >
                  <img
                    src={client.src}
                    alt={isCopy ? "" : `${client.name} logo`}
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
