import { motion } from 'motion/react';
import { ShieldCheck, Zap, Heart, Utensils, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://binzahidmarket.com/cdn/shop/files/premium-cylinder-charcoal-bbq-smoker-grill-with-wooden-handle-948.png?v=1777977610&width=1000" 
          alt="BBQ Background" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4"
          >
            The Sizzle <span className="text-primary italic">Story</span>
          </motion.h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">Passion for fire, smoke, and unforgettable flavors since 2014.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Where the Pit Meets the Plate</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Sizzle BBQ wasn't born in a boardroom; it was born in a backyard. Our founder, a BBQ enthusiast with a dream, spent years traveling the BBQ belt, learning the secrets of the smoke.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Today, we bring those traditional techniques to our fast-paced world, ensuring that every customer gets that authentic, slow-cooked taste without the wait.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                 <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-3xl font-bold text-primary mb-1">20+</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Outlets</p>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-3xl font-bold text-primary mb-1">50k+</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Happy Fans</p>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-3xl font-bold text-primary mb-1">100%</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Natural</p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://binzahidmarket.com/cdn/shop/files/premium-cylinder-charcoal-bbq-smoker-grill-with-wooden-handle-948.png?v=1777977610&width=1000" 
                alt="Grill Master" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Quality First", desc: "No frozen patties, no artificial smoke. Just real wood and fresh meat." },
              { icon: Award, title: "Award Winning", desc: "Voted Best BBQ Fast Food three years in a row by Flavor Magazine." },
              { icon: Users, title: "Community", desc: "We support local farmers and give back to the neighborhoods we serve." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-rose-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
