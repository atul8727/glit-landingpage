import { MapPin, Phone, Mail, Clock3, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'GLT Healthcare',
    detail: 'Your clinic address goes here',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
    detail: 'Available during clinic hours',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@glthealthcare.com',
    detail: "We'll get back to you",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold text-[#0759a8]">Contact Us</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
              Let's make your next
              <span className="text-[#0759a8]"> healthcare step easier.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
            Have a question or need a consultation? Get in touch with the GLT Healthcare team.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <h3 className="text-xl font-bold text-[#0b1f33]">Get in touch</h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Our team can help you with appointments, online consultations and general enquiries.
            </p>

            <div className="mt-7 divide-y divide-slate-100">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4 py-4 first:pt-0 last:pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef7ff] text-[#0759a8]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-400">{item.label}</p>

                      <p className="mt-1 text-sm font-semibold text-[#0b1f33]">{item.value}</p>

                      <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="mt-5 flex items-center gap-3">
              <Clock3 size={17} className="text-[#0759a8]" />

              <div className="text-xs">
                <span className="font-semibold text-[#0b1f33]">Clinic Hours</span>

                <span className="ml-2 text-slate-500">Mon – Sat · 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/910000000000" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0759a8]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf7ee]">
                <span className="text-[13px] font-bold text-[#25D366]">WA</span>
              </span>
              Chat with us on WhatsApp
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#f7fbff] p-6 sm:p-7 lg:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0759a8]">Enquiry</p>

              <h3 className="mt-2 text-xl font-bold text-[#0b1f33]">How can we help?</h3>

              <p className="mt-1 text-sm text-slate-500">Share your details and our team will contact you.</p>
            </div>

            <form className="mt-6">
              {/* Name + Mobile */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">Full Name</label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0759a8] focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">Mobile Number</label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0759a8] focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">Email Address</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0759a8] focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Consultation */}
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">Consultation Type</label>

                <select
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#0759a8] focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>
                    Select consultation type
                  </option>

                  <option value="clinic">Clinic Consultation</option>

                  <option value="online">Online Consultation</option>

                  <option value="followup">Follow-up Consultation</option>

                  <option value="general">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">Message</label>

                <textarea
                  rows="3"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0759a8] focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0759a8] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#064580]"
              >
                Send Enquiry
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
