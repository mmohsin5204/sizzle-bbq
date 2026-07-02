import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923001234567?text=Hi%20Sizzle%20BBQ!%20I%20want%20to%20place%20an%20order%20from%20your%20menu%20%F0%9F%94%A5"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center font-sans"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-10 h-10"
      />
    </motion.a>
  );
}
