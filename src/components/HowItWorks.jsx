import { UserPlus, UserRoundCheck, Video, FileText, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Registration',
    description: 'Your basic details are recorded and your patient profile is created.',
  },
  {
    number: '02',
    icon: UserRoundCheck,
    title: 'Doctor Assignment',
    description: 'The appropriate doctor is assigned for your consultation.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Consultation',
    description: 'Consult your doctor at the clinic or through scheduled Google Meet.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Prescription',
    description: 'Your consultation details and digital prescription are recorded.',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Continued Care',
    description: 'Your consultation history remains organized for future care.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold text-[#0759a8]">How It Works</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
            A simpler journey to
            <span className="text-[#0759a8]"> better care.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            From registration to consultation and follow-up, GLT Healthcare keeps your care journey simple and organized.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-10 lg:mt-12">
          {/* Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="relative text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-[#0759a8] text-white shadow-md">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  {/* Step */}
                  <p className="mt-4 text-[10px] font-bold tracking-[0.16em] text-[#0759a8]">STEP {step.number}</p>

                  {/* Title */}
                  <h3 className="mt-1.5 text-base font-bold text-[#0b1f33]">{step.title}</h3>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[210px] text-xs leading-5 text-slate-500">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Small bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 border-t border-slate-100 pt-5 text-center"
        >
          <p className="text-sm text-slate-500">
            From your first consultation to continued care,
            <span className="font-semibold text-[#0759a8]"> GLT Healthcare keeps everything connected.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
