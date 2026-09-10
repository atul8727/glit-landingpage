import { Stethoscope, Video, FileText, History, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    number: '01',
    icon: Stethoscope,
    title: 'Consult a Doctor',
    text: 'Get the right care through an in-clinic consultation.',
  },
  {
    number: '02',
    icon: Video,
    title: 'Consult Online',
    text: 'Connect with your doctor through a scheduled E-Clinic consultation.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Get Your Prescription',
    text: 'Receive your digital prescription after your consultation.',
  },
  {
    number: '04',
    icon: History,
    title: 'Continue Your Care',
    text: 'Keep consultation history and prescriptions organized.',
  },
];

export default function QuickHighlights() {
  return (
    <section className="bg-white py-10 lg:py-14">
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
            <p className="text-sm font-semibold text-[#0759a8]">How GLT Healthcare Helps</p>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#0b1f33] sm:text-4xl">
              Care made
              <span className="text-[#0759a8]"> simpler.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
            From consultation to follow-up, GLT Healthcare brings the essential parts of your care journey together.
          </p>
        </motion.div>

        {/* Journey */}
        <div className="mt-9 grid gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-[#f8fbff] sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className={`relative p-6 lg:p-7 ${index !== 0 ? 'border-t border-slate-200 sm:border-l sm:border-t-0' : ''} ${
                  index === 2 ? 'lg:border-l lg:border-t-0' : ''
                }`}
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0759a8] shadow-sm ring-1 ring-slate-100">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-bold tracking-wider text-slate-300">{item.number}</span>
                </div>

                {/* Content */}
                <h3 className="mt-5 text-base font-bold text-[#0b1f33]">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>

                {/* Arrow */}
                {index < highlights.length - 1 && (
                  <div className="mt-5 hidden text-slate-300 lg:block">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
