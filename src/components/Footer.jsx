import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
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
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block rounded-lg bg-white px-3 py-2">
              <img src={logo} alt="GLT Healthcare" className="w-36" />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              Making healthcare more accessible, connected and convenient for every community through professional and digitally enabled care.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-300">Care of Rural Bharat. New India – Digital India.</p>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <Facebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <Instagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-blue-400 hover:bg-white/5 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>

            <div className="mt-6 space-y-3">
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

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <a key={service} href="#services" className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white">
                  {service}
                  <ArrowUpRight size={12} className="opacity-0 transition group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />

                <p className="text-sm leading-6 text-slate-400">
                  GLT Healthcare
                  <br />
                  Your clinic address goes here
                </p>
              </div>

              <a href="tel:+910000000000" className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
                <Phone size={17} className="text-blue-400" />
                +91 XXXXX XXXXX
              </a>

              <a href="mailto:info@glthealthcare.com" className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
                <Mail size={17} className="text-blue-400" />
                info@glthealthcare.com
              </a>
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0759a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a68c4]"
            >
              Book Consultation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
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
