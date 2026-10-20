import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import logoMark from "../assets/KloudLogoMark.png";
import "./WhatsAppWidget.css";

// -----------------------------------------------------------------------------
// Settings (edit these)
// -----------------------------------------------------------------------------

// Country code + number, digits only (no +, spaces or dashes)
const WHATSAPP_NUMBER = "919594865555";
const AGENT_NAME = "KlouD InnoVisionZ";
const AGENT_STATUS = "Typically replies in minutes";
const PREFILLED_MESSAGE = "Hi KlouD InnoVisionZ, I would like to know more about your services.";

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

// -----------------------------------------------------------------------------
// Component (Default Export)
// -----------------------------------------------------------------------------

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(getTime());
  const wrapRef = useRef(null);

  // Refresh the time each time the popup opens
  useEffect(() => {
    if (open) setTime(getTime());
  }, [open]);

  // Close on Escape or when clicking outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  const startChat = () => {
    window.open(chatUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="wa" ref={wrapRef}>
      {/* Popup */}
      <div
        className={`wa__popup ${open ? "wa__popup--open" : ""}`}
        role="dialog"
        aria-label="Chat on WhatsApp"
        aria-hidden={!open}
      >
        <div className="wa__header">
          <div className="wa__avatar">
            <img src={logoMark} alt="" />
            <span className="wa__online" aria-hidden="true" />
          </div>
          <div className="wa__who">
            <strong>{AGENT_NAME}</strong>
            <span>{AGENT_STATUS}</span>
          </div>
          <button
            type="button"
            className="wa__close"
            aria-label="Close chat popup"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <X size={18} />
          </button>
        </div>

        <div className="wa__chat">
          <div className="wa__bubble">
            <span className="wa__bubble-name">{AGENT_NAME}</span>
            <p>
              Hi there <span aria-hidden="true">👋</span>
            </p>
            <p className="wa__bubble-strong">How can I help you?</p>
            <span className="wa__time">{time}</span>
          </div>
        </div>

        <div className="wa__footer">
          <button
            type="button"
            className="wa__start"
            onClick={startChat}
            tabIndex={open ? 0 : -1}
          >
            <FaWhatsapp size={20} aria-hidden="true" />
            <span>Start Chat</span>
          </button>
        </div>
      </div>

      {/* Floating Help button */}
      <button
        type="button"
        className="wa__fab"
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        onClick={() => setOpen((v) => !v)}
      >
        <FaWhatsapp size={26} aria-hidden="true" />
        <span>Help</span>
        {!open && <i className="wa__badge" aria-hidden="true" />}
      </button>
    </div>
  );
}