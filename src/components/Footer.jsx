import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logo from '../assets/glt-logo.png';

const quickLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Doctors', '#doctors'],
  ['E-Clinic', '#eclinic'],
  ['How It Works', '#how-it-works'],
  ['Contact', '#contact'],
];

const services = ['Doctor Consultation', 'Online Consultation', 'Digital Prescription', 'Follow-up Care', 'Patient Care'];

export default function Footer() {
  return (
    <footer className="bg-[#071a2d] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block rounded-lg bg-white px-3 py-2">
              <img src={logo} alt="GLT Healthcare" className="w-36" />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Making healthcare more accessible, connected and convenient for every community through professional and digitally enabled care.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-300">Care of Rural Bharat. New India – Digital India.</p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-slate-400 transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Our Services</h3>

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <a key={service} href="#services" className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white">
                  {service}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />

                <p className="text-sm leading-6 text-slate-400">
                  GLT Healthcare
                  <br />
                  Your clinic address goes here
                </p>
              </div>

              {/* Phone */}
              <a href="tel:+910000000000" className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
                <Phone size={17} className="shrink-0 text-blue-400" />
                +91 XXXXX XXXXX
              </a>

              {/* Email */}
              <a href="mailto:info@glthealthcare.com" className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
                <Mail size={17} className="shrink-0 text-blue-400" />
                info@glthealthcare.com
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0759a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a68c4]"
            >
              Book Consultation
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} GLT Healthcare. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-slate-300">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-slate-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
