import { Video, CalendarDays, Link2, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Schedule',
    text: 'Choose a convenient time for your online consultation.',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Join',
    text: 'Use the Google Meet link provided for your consultation.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Consult',
    text: 'Connect with your doctor from wherever you are.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Receive',
    text: 'Get your digital prescription after the consultation.',
  },
];

export default function EClinic() {
  return (
    <section id="eclinic" className="overflow-hidden bg-[#f5faff] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-[#0759a8]">GLT E-Clinic</p>

            <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
              Healthcare that comes
              <span className="text-[#0759a8]"> closer to you.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
            Attend a scheduled online consultation with your doctor without needing to be physically present at the clinic.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[360px] overflow-hidden rounded-3xl sm:h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90"
              alt="Online healthcare consultation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061d32]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                <Video size={19} />
              </div>

              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">E-Clinic Consultation</h3>

              <p className="mt-1.5 max-w-md text-sm leading-5 text-slate-200">Connect with your doctor through a scheduled online consultation.</p>
            </div>

            {/* Status */}
            <div className="absolute right-5 top-5 rounded-xl bg-white px-3 py-2.5 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0759a8]">
                  <Video size={15} />
                </div>

                <div>
                  <p className="text-[9px] font-medium text-slate-400">CONSULTATION</p>

                  <p className="text-[11px] font-bold text-slate-800">Online & Scheduled</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-6 sm:p-8 lg:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0759a8]">How it works</p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-[#0b1f33]">
              Simple online care,
              <span className="text-[#0759a8]"> step by step.</span>
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Your consultation is scheduled in advance, giving you the information you need to connect with your doctor online.
            </p>

            {/* Steps */}
            <div className="mt-7 space-y-5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef7ff] text-[#0759a8]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-300">{step.number}</span>

                        <h4 className="text-sm font-bold text-[#0b1f33]">{step.title}</h4>
                      </div>

                      <p className="mt-0.5 text-xs leading-5 text-slate-500">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0759a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#064580]"
            >
              Book Online Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
