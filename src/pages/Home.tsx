import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import Testimonials from '../components/Testimonials';
import { menuData } from '../data/menuData';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredItems = menuData.slice(0, 4);

  return (
    <div className="pt-0">
      <Hero />
      <TickerBar />
      
      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Featured Classics</span>
              <h2 className="text-4xl font-display font-extrabold text-gray-900">Our <span className="text-primary">Best Sellers</span></h2>
            </div>
            <Link to="/menu" className="text-primary font-bold flex items-center space-x-2 hover:translate-x-1 transition-transform">
              <span>View Full Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-extrabold">{item.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold text-gray-900 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Short About Preview */}
      <section className="py-24 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-6">Mastering the <span className="text-primary italic">Grill</span></h2>
                <p className="text-gray-600 mb-8 text-lg">We started Sizzle BBQ with a simple mission: to bring authentic pit BBQ flavors to the fast-casual scene. No compromises, just real fire and smoke.</p>
                <Link to="/about" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">Learn More About Us</Link>
             </div>
             <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200" alt="BBQ Grilling" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
