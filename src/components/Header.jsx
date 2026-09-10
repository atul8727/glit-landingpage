import { Menu, Phone, X, ShieldCheck, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/glt-logo.png';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Doctors', '#doctors'],
  ['E-Clinic', '#eclinic'],
  ['How It Works', '#how-it-works'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="GLT Healthcare" className="w-32 sm:w-36" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-[#0759a8]">
                {label}
              </a>
            ))}
          </div>

          {/* Login Buttons */}
          <div className="ml-2 flex items-center gap-2">
            {/* Admin Login */}
            <a
              href="/admin-login"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759a8]"
            >
              <ShieldCheck size={15} />
              Admin
            </a>

            {/* Doctor Login */}
            <a
              href="/doctor-login"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759a8]"
            >
              <Stethoscope size={15} />
              Doctor
            </a>
          </div>

          {/* Book Consultation */}
          <a href="#contact" className="rounded-xl bg-[#0759a8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#064580]">
            Book Consultation
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Call Now */}
          <a href="tel:+910000000000" className="hidden items-center gap-2 text-sm font-semibold text-[#0759a8] sm:flex lg:hidden">
            <Phone size={17} />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            {/* Navigation Links */}
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-[#0759a8]"
              >
                {label}
              </a>
            ))}

            {/* Mobile Login Buttons */}
            <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              {/* Admin */}
              <a
                href="/admin-login"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759a8]"
              >
                <ShieldCheck size={16} />
                Admin Login
              </a>

              {/* Doctor */}
              <a
                href="/doctor-login"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759a8]"
              >
                <Stethoscope size={16} />
                Doctor Login
              </a>
            </div>

            {/* Book Consultation */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-[#0759a8] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#064580]"
            >
              Book Consultation
            </a>

            {/* Mobile Call */}
            <a
              href="tel:+910000000000"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[#0759a8]"
            >
              <Phone size={17} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
