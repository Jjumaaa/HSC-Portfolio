"use client";

import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiGlobe, FiCheckCircle, FiInfo } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { validateForm, sanitizeInput, MESSAGE_MAX } from "@/utils/validateForm";
import { contact, person } from "@/data/portfolio";

const socialIcons = { LinkedIn: FiLinkedin, X: FiTwitter, Twitter: FiTwitter, Facebook: FiFacebook };
const emptyForm = { name: "", email: "", organisation: "", enquiry: "", message: "" };
const fieldOrder = ["name", "email", "enquiry", "message"];

const inputClass =
  "w-full rounded-sm border bg-navy-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-gold focus:outline-none focus-visible:outline-2 focus-visible:outline-gold";

function FieldError({ name, message }) {
  if (!message) return null;
  return (
    <p id={`${name}-error`} className="mt-2 text-sm text-red-300">
      {message}
    </p>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | unavailable
  const formRef = useRef(null);

  const socials = contact.socials.filter((s) => s.href);

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    // After the first submit attempt, re-validate live so errors clear as they are fixed.
    if (submitted) setErrors(validateForm(next));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    const firstInvalid = fieldOrder.find((field) => validationErrors[field]);
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    if (!contact.email) {
      setStatus("unavailable");
      return;
    }

    const clean = Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, sanitizeInput(v)]));
    const subject = `${clean.enquiry}: enquiry from ${clean.name}`;
    const body = [
      clean.message,
      "",
      "—",
      `Name: ${clean.name}`,
      `Email: ${clean.email}`,
      clean.organisation ? `Organisation: ${clean.organisation}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    // No server is involved: this opens the visitor's own email app with the
    // message pre-filled. See README → "Connecting the contact form".
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    setFormData(emptyForm);
    setSubmitted(false);
  }

  function fieldProps(name) {
    return {
      id: name,
      name,
      value: formData[name],
      onChange: handleChange,
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      className: `${inputClass} ${errors[name] ? "border-red-400" : "border-white/15"}`,
    };
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-navy-950 px-4 py-24 text-white sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="contact-heading" eyebrow={contact.eyebrow} heading={contact.heading} intro={contact.intro} tone="dark" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Direct contact details */}
          <Reveal as="aside" aria-label="Contact details" className="space-y-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FiMail className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Email</p>
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`} className="break-all text-lg hover:text-gold-light">
                      {contact.email}
                    </a>
                  ) : (
                    <p className="text-lg text-slate-300">Available on request</p>
                  )}
                </div>
              </li>
              {contact.phone && (
                <li className="flex items-start gap-4">
                  <FiPhone className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Phone</p>
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-lg hover:text-gold-light">
                      {contact.phone}
                    </a>
                  </div>
                </li>
              )}
              {contact.office && (
                <li className="flex items-start gap-4">
                  <FiMapPin className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Office</p>
                    <p className="text-lg">{contact.office}</p>
                  </div>
                </li>
              )}
            </ul>

            {socials.length > 0 && (
              <div>
                <p className="mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Follow</p>
                <ul className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = socialIcons[social.platform] || FiGlobe;
                    return (
                      <li key={social.platform}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.fullName} on ${social.platform} (opens in new tab)`}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 hover:border-gold hover:text-gold-light"
                        >
                          <Icon aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.1}>
            {status === "success" ? (
              <div role="status" className="flex items-start gap-3 border border-kenya-green bg-kenya-green/20 p-6">
                <FiCheckCircle className="mt-0.5 shrink-0 text-green-300" size={20} aria-hidden="true" />
                <div>
                  <p className="font-semibold">Your email app has opened with the message ready to send.</p>
                  <p className="mt-1 text-sm text-slate-300">
                    If nothing opened, write directly to{" "}
                    <a className="underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-gold-light underline">
                    Write another message
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-note">
                <p id="form-note" className="text-sm text-slate-400">
                  Fields marked <span aria-hidden="true">*</span>
                  <span className="sr-only">with an asterisk</span> are required.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input type="text" autoComplete="name" required {...fieldProps("name")} />
                    <FieldError name="name" message={errors.name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email address <span aria-hidden="true">*</span>
                    </label>
                    <input type="email" autoComplete="email" required {...fieldProps("email")} />
                    <FieldError name="email" message={errors.email} />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="organisation" className="mb-2 block text-sm font-medium">
                      Organisation
                    </label>
                    <input type="text" autoComplete="organization" {...fieldProps("organisation")} />
                  </div>
                  <div>
                    <label htmlFor="enquiry" className="mb-2 block text-sm font-medium">
                      Type of enquiry <span aria-hidden="true">*</span>
                    </label>
                    <select required {...fieldProps("enquiry")}>
                      <option value="">Select…</option>
                      {contact.enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <FieldError name="enquiry" message={errors.enquiry} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea rows={6} required maxLength={MESSAGE_MAX} {...fieldProps("message")} />
                  <div className="mt-1 flex justify-between gap-4">
                    <FieldError name="message" message={errors.message} />
                    <p className="ml-auto mt-2 text-xs text-slate-400">
                      {formData.message.length} / {MESSAGE_MAX}
                    </p>
                  </div>
                </div>

                {status === "unavailable" && (
                  <div role="status" className="flex items-start gap-3 border border-gold/50 bg-gold/10 p-4 text-sm">
                    <FiInfo className="mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />
                    <p>Online enquiries are not yet connected. Please check back soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-sm bg-gold px-6 py-3.5 font-semibold text-navy-950 transition-colors hover:bg-gold-light sm:w-auto"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
