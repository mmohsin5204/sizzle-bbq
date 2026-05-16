import { motion } from 'motion/react';
import { testimonials } from '../data/menuData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
             >
               Testimonials
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-5xl font-display font-extrabold text-gray-900"
             >
               What Our <span className="text-primary">Happy</span> Clients Say
             </motion.h2>
          </div>
          <div className="flex space-x-2">
             <div className="px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-2">
                <span className="text-2xl font-bold">4.9</span>
                <div className="flex text-yellow-400">
                   {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <div className="absolute -top-4 right-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-200">
                <Quote size={20} />
              </div>
              
              <div>
                <div className="flex text-yellow-400 mb-6">
                   {[...Array(t.rating)].map((_, i) => (
                     <Star key={`${t.id}-star-${i}`} size={16} fill="currentColor" />
                   ))}
                </div>
                <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{t.content}"</p>
              </div>

              <div className="flex items-center space-x-4 border-t pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${t.id + 20}`} 
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                   <h4 className="text-gray-900 font-bold">{t.name}</h4>
                   <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
