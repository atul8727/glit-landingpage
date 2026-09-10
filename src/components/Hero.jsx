import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, CheckCircle2, ShieldCheck, Video, HeartPulse, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f5faff]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute left-[45%] top-[20%] h-32 w-32 rounded-full border border-blue-100/60" />

        <div className="absolute left-[47%] top-[22%] h-20 w-20 rounded-full border border-blue-100/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-12">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0759a8] text-white shadow-lg shadow-blue-900/10">
                <HeartPulse size={18} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0759a8]">GLT Healthcare</p>

                <p className="mt-0.5 text-[11px] text-slate-400">Digital Healthcare for Everyone</p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-[3.5rem] font-bold leading-[0.98] tracking-[-0.04em] text-[#0b1f33] sm:text-6xl lg:text-[4.8rem]">
              Healthcare
              <span className="block">that reaches</span>
              <span className="block text-[#0759a8]">every community.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-slate-500">
              Bringing trusted, accessible and digitally enabled healthcare closer to Rural Bharat — at the clinic or from wherever you are.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0759a8] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-900/15 transition duration-300 hover:-translate-y-1 hover:bg-[#064580]"
              >
                Book a Consultation
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href="#eclinic"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#0759a8]"
              >
                <Video size={17} />
                Explore E-Clinic
              </a>
            </div>

            {/* Trust */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-500" />

                <span className="text-xs font-medium text-slate-500">Trusted Care</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#0759a8]" />

                <span className="text-xs font-medium text-slate-500">Secure Records</span>
              </div>

              <div className="flex items-center gap-2">
                <Video size={17} className="text-[#0759a8]" />

                <span className="text-xs font-medium text-slate-500">Online Consultation</span>
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Large visual panel */}
            <div className="relative mx-auto max-w-[600px]">
              {/* Blue background shape */}
              <div className="absolute inset-x-5 bottom-0 top-8 rounded-[3rem] bg-[#0759a8]" />

              {/* Main image container */}
              <div className="relative mx-5 overflow-hidden rounded-[3rem] bg-[#dcebf5] shadow-2xl shadow-blue-900/15">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=90"
                  alt="Healthcare professional"
                  className="h-[470px] w-full object-cover object-top sm:h-[540px]"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06294d]/60 via-transparent to-transparent" />

                {/* Image content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-blue-100">GLT E-CLINIC</p>

                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">Care beyond boundaries.</h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0759a8] shadow-lg">
                      <ArrowRight size={19} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================ */}
              {/* Appointment card */}
              {/* ============================================ */}

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -left-1 top-16 z-20 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0759a8]">
                    <CalendarCheck size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Appointment</p>

                    <p className="mt-1 text-xs font-bold text-slate-800">Easy Consultation</p>

                    <div className="mt-1 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                      <span className="text-[10px] text-emerald-600">Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ============================================ */}
              {/* Secure records card */}
              {/* ============================================ */}

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-1 bottom-24 z-20 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">Secure Records</p>

                    <p className="mt-1 text-[10px] text-slate-400">Your healthcare information</p>
                  </div>
                </div>
              </motion.div>

              {/* ============================================ */}
              {/* Location badge */}
              {/* ============================================ */}

              <div className="absolute -bottom-5 left-8 z-20 flex items-center gap-2 rounded-full border border-white/70 bg-white px-4 py-2.5 shadow-xl sm:left-12">
                <MapPin size={15} className="text-[#0759a8]" />

                <span className="text-xs font-semibold text-slate-700">Care for Rural Bharat</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* Bottom stats */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 mt-4 border-t border-slate-200/80 py-6"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-[#0b1f33]">01</p>

              <p className="mt-1 text-xs text-slate-400">Connected Care</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#0b1f33]">24/7</p>

              <p className="mt-1 text-xs text-slate-400">Digital Access</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#0b1f33]">100%</p>

              <p className="mt-1 text-xs text-slate-400">Patient Focused</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#0b1f33]">Digital</p>

              <p className="mt-1 text-xs text-slate-400">Healthcare Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
