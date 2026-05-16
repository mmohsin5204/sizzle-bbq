import { Flame, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-rose-100">
                  <Flame className="text-white" size={24} />
                </div>
                <span className="text-2xl font-display font-bold text-gray-900">
                  SIZZLE<span className="text-primary">BBQ</span>
                </span>
             </div>
             <p className="text-gray-500 mb-8 leading-relaxed">
               Bringing you the most authentic Pit-to-Table BBQ experience. Quality ingredients, traditional spices, and real charcoal flame.
             </p>
             <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <a key={`social-${idx}`} href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all">
                    <Icon size={20} />
                  </a>
                ))}
             </div>
          </div>

          <div>
             <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center uppercase tracking-wider">Useful Links</h4>
             <ul className="space-y-4">
                {['Home', 'Menu', 'About Us', 'Catering', 'Careers', 'Privacy Policy'].map((link, idx) => (
                  <li key={`useful-${idx}`}>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center uppercase tracking-wider">Top Menu</h4>
             <ul className="space-y-4">
                {['Flame-Grilled Burgers', 'Skewered Kebabs', 'Chicken Tikka', 'Masala Fries', 'Mint Margaritas', 'Platter Specials'].map((link, idx) => (
                  <li key={`top-menu-${idx}`}>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center uppercase tracking-wider">Contact Us</h4>
             <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                   <MapPin className="text-primary flex-shrink-0" size={20} />
                   <span className="text-gray-500">123 BBQ Avenue, New York, NY 10001</span>
                </li>
                <li className="flex items-center space-x-4">
                   <Phone className="text-primary flex-shrink-0" size={20} />
                   <span className="text-gray-500">+1 (234) 567 8910</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-medium text-gray-400">
           <p>© 2026 Sizzle BBQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
