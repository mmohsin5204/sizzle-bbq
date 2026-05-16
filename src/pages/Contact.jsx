import { motion } from 'motion/react';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Contact Free Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-gray-900 mb-6"
          >
            We're Here to <span className="text-primary">Help</span>
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Whether you're craving for BBQ or have a question about our ingredients, reach out to us!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Phone, title: "Phone", info: "+1 (234) 567 8910", subInfo: "Mon-Sun, 11am-12pm" },
            { icon: Mail, title: "Email", info: "hello@sizzlebbq.com", subInfo: "24/7 Support" },
            { icon: MapPin, title: "Location", info: "123 BBQ Avenue, NY", subInfo: "Get Directions" }
          ].map((item, idx) => (
            <motion.div
              key={`contact-item-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{item.info}</p>
              <p className="text-sm text-gray-500">{item.subInfo}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden"
          >
            <h2 className="text-4xl font-display font-bold mb-8">Ready to start an order?</h2>
            <p className="text-rose-100 mb-12 text-lg">Our quick order via WhatsApp is the fastest way to get your BBQ fix. Click below to chat with us directly!</p>
            
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Order on WhatsApp</span>
            </a>

            <div className="mt-16 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-rose-200 text-xs font-bold uppercase tracking-widest">Typical Response Time</p>
                <p className="text-xl font-bold font-display">Under 2 Minutes</p>
              </div>
            </div>
            
            {/* Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Drop us a line</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary outline-none text-gray-900 transition-all" />
                 <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary outline-none text-gray-900 transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary outline-none text-gray-900 transition-all" />
              <textarea rows={5} placeholder="How can we help?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary outline-none text-gray-900 transition-all resize-none"></textarea>
              <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-black transition-all shadow-xl">
                 <Send size={20} />
                 <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
