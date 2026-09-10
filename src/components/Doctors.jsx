import { ArrowRight, CalendarCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'General Physician',
    qualification: 'MBBS, MD',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Women & Family Health',
    qualification: 'MBBS, MD',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dr. Amit Verma',
    specialty: 'Internal Medicine',
    qualification: 'MBBS, MD',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=85',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-[#f8fbff] py-12 lg:py-16">
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
            <p className="text-sm font-semibold text-[#0759a8]">Our Doctors</p>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl">
              Meet the people
              <span className="text-[#0759a8]"> behind your care.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
            Connect with healthcare professionals for consultations and continued care.
          </p>
        </motion.div>

        {/* Doctors */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              className="group overflow-hidden rounded-2xl bg-white"
            >
              {/* Image */}
              <div className="relative h-[270px] overflow-hidden bg-[#eaf5ff]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />

                {/* Experience */}
                <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0759a8] shadow-md">
                  {doctor.experience}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#0b1f33]">{doctor.name}</h3>

                    <p className="mt-1 text-sm font-semibold text-[#0759a8]">{doctor.specialty}</p>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef7ff] text-[#0759a8]">
                    <GraduationCap size={16} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-400">{doctor.qualification}</p>

                <a
                  href="#contact"
                  className="group/link mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-[#0759a8]"
                >
                  <CalendarCheck size={16} />
                  Book Consultation
                  <ArrowRight size={15} className="ml-auto transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
