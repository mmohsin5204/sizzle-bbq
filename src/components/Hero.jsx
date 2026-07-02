import { motion } from 'motion/react';
import { ArrowRight, Flame, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background with patterns */}
      <div className="absolute inset-0 z-0 bg-white bg-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-primary px-4 py-2 rounded-full mb-6 border border-rose-100">
              <Flame size={18} />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold uppercase tracking-wider">Born from the Flame</span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-sm font-bold uppercase tracking-wider">Fastest Delivery in Town</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-extrabold text-gray-900 leading-[1.1] mb-6">
              Savor the <span className="text-primary italic">Smoky</span> Flavor of Real BBQ
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience the perfect blend of traditional spices and modern grilling techniques. From juicy burgers to sizzling tikka, we bring the pit to your table.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-rose-700 transition-all shadow-xl shadow-rose-100 transform hover:-translate-y-1">
                <span>View Full Menu</span>
                <ArrowRight size={20} />
              </button>
              <div className="flex -space-x-3 items-center">
                {[
                  { id: 11, name: "Ahmed Khan" },
                  { id: 12, name: "Sara Ali" },
                  { id: 13, name: "Omar Sheikh" },
                  { id: 14, name: "Fatima Malik" }
                ].map((customer) => (
                  <div key={`customer-${customer.id}`} className="w-10 h-10 border-2 border-white rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random&size=100`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => { 
                        e.target.onerror = null 
                        e.target.src = 'https://ui-avatars.com/api/?name=User&background=cccccc&color=333&size=100' 
                      }}
                    />
                  </div>
                ))}
                <span className="ml-4 text-sm font-medium text-gray-500">
                  <span className="text-gray-900 font-bold">1k+</span> Happy Customers
                </span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 pb-12 lg:pb-0">
               <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-tight">Open Hours</p>
                    <p className="text-sm font-bold text-gray-900">11 AM - 12 AM</p>
                  </div>
               </div>
               <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-tight">Our Location</p>
                    <p className="text-sm font-bold text-gray-900">Spice Street, NY</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:block"
          >
            <div className="relative z-10 w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80" 
                alt="Smoky BBQ Burger" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating UI Elements - Hidden on mobile for cleaner look */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:flex"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                   <Flame className="text-white" size={20} />
                </div>
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Today's Hot Deal</p>
                   <p className="text-md font-bold text-gray-900">Buy 1 Get 1 Free Kebab</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:flex"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="text-lg font-bold text-gray-900">4.9/5</p>
                  <p className="text-xs text-gray-500">Google Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
