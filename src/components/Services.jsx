import { Stethoscope, Video, ClipboardPlus, HeartPulse, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Stethoscope,
    title: 'Doctor Consultation',
    description: 'Consult with a healthcare professional at the clinic based on your healthcare needs.',
  },
  {
    icon: Video,
    title: 'Online Consultation',
    description: 'Attend a scheduled consultation with your doctor through GLT E-Clinic.',
  },
  {
    icon: ClipboardPlus,
    title: 'Digital Prescription',
    description: 'Receive your prescription digitally after consultation and download or print it when needed.',
  },
  {
    icon: HeartPulse,
    title: 'Follow-up Care',
    description: 'Access previous consultation details and prescriptions to support continued care.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-[#0759a8]">Our Services</p>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
              Healthcare made
              <span className="text-[#0759a8]"> simpler.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
            Essential healthcare services designed to make consultation, prescriptions and follow-up care easier to manage.
          </p>
        </motion.div>

        {/* Main Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-9 grid overflow-hidden rounded-3xl bg-[#eef7ff] lg:grid-cols-[1fr_1fr]"
        >
          {/* Image */}
          <div className="relative h-[280px] lg:h-[330px]">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90"
              alt="Doctor consulting with patient"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062c4d]/70 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0b1f33] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#0759a8]" />
                Patient-focused care
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0759a8]">In-person & digital care</p>

            <h3 className="mt-3 max-w-lg text-2xl font-bold leading-tight text-[#0b1f33] sm:text-3xl">
              The care you need,
              <span className="text-[#0759a8]"> when you need it.</span>
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
              GLT Healthcare brings clinic consultations and online care together, making it easier for patients to connect with doctors and manage
              important healthcare information.
            </p>

            <a href="#contact" className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0759a8]">
              Book a Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group border-t border-slate-200 py-5"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef7ff] text-[#0759a8] transition group-hover:bg-[#0759a8] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-[#0b1f33]">{service.title}</h3>

                      <ArrowRight size={15} className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0759a8]" />
                    </div>

                    <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-500">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
