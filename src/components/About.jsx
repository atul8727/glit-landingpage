import { motion } from 'framer-motion';
import { ArrowRight, Check, Stethoscope, Video, FileText } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'In-Clinic Care',
    text: 'Consult with a doctor at the clinic for your healthcare needs.',
  },
  {
    icon: Video,
    title: 'Online Care',
    text: 'Attend a scheduled consultation through GLT E-Clinic.',
  },
  {
    icon: FileText,
    title: 'Digital Records',
    text: 'Keep consultation details and prescriptions organized.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f7fbff] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-[#0759a8]">About GLT Healthcare</p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
            Better access to healthcare,
            <span className="text-[#0759a8]"> wherever you are.</span>
          </h2>
        </motion.div>

        {/* Main */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                alt="Healthcare consultation"
                className="h-[400px] w-full object-cover sm:h-[460px]"
              />
            </div>

            {/* Vision */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-xl sm:bottom-6 sm:left-6">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0759a8]">Our Vision</p>

              <p className="mt-1 text-sm font-bold text-[#0b1f33]">Care of Rural Bharat.</p>

              <p className="text-xs text-slate-400">New India · Digital India</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-lg font-semibold leading-8 text-[#0b1f33] sm:text-xl">
              GLT Healthcare brings clinical care and digital healthcare together to make the patient journey simpler.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Healthcare should not become difficult because of distance, technology or complicated processes. GLT Healthcare is designed to make
              consultation and healthcare information easier to access and manage.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Patients can consult at the clinic or attend a scheduled online consultation through the E-Clinic. Doctors and healthcare teams can
              maintain consultation details and prescriptions in an organized system.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0759a8] shadow-sm ring-1 ring-slate-100">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#0b1f33]">{feature.title}</h3>

                      <p className="mt-1 text-sm leading-5 text-slate-500">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0759a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#064580]"
            >
              Explore Our Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Simple bottom statement */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Check size={15} className="text-[#0759a8]" />
            Clinic consultation
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Check size={15} className="text-[#0759a8]" />
            Online consultation
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Check size={15} className="text-[#0759a8]" />
            Digital prescriptions
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Check size={15} className="text-[#0759a8]" />
            Organized patient records
          </div>
        </div>
      </div>
    </section>
  );
}
