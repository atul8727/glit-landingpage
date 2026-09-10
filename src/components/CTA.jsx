import { ArrowRight, Phone, Video, MessageCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = ['Clinic consultation', 'Online consultation', 'Digital prescription'];

export default function CTA() {
  return (
    <section className="bg-white px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0759a8]"
        >
          {/* Subtle background elements */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative grid lg:grid-cols-[1fr_380px]">
            {/* Main content */}
            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                GLT Healthcare
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your health deserves
                <span className="block text-blue-100">the right care.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                Whether you need an in-clinic consultation or prefer to speak with your doctor online, GLT Healthcare makes it easier to take the next
                step in your care.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-xs font-medium text-white">
                    <Check size={14} className="text-blue-200" />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0759a8] transition hover:bg-blue-50"
                >
                  Book a Consultation
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Contact panel */}
            <div className="border-t border-white/10 bg-[#064f95] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Prefer to contact us?</p>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Our team can help you with consultation enquiries and guide you through the next step.
              </p>

              <div className="mt-7 space-y-3">
                {/* Call */}
                <a href="tel:+910000000000" className="group flex items-center gap-4 rounded-2xl bg-white p-4 transition hover:bg-blue-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0759a8]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0b1f33]">Call Us</p>
                    <p className="mt-0.5 text-xs text-slate-500">Speak with our team</p>
                  </div>

                  <ArrowRight size={16} className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0759a8]" />
                </a>

                {/* Online */}
                <a
                  href="#eclinic"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0759a8]">
                    <Video size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">Online Consultation</p>
                    <p className="mt-0.5 text-xs text-blue-200">Learn about GLT E-Clinic</p>
                  </div>

                  <ArrowRight size={16} className="ml-auto text-blue-200 transition group-hover:translate-x-1" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/910000000000"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0759a8]">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">WhatsApp Us</p>
                    <p className="mt-0.5 text-xs text-blue-200">Send us your enquiry</p>
                  </div>

                  <ArrowRight size={16} className="ml-auto text-blue-200 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
