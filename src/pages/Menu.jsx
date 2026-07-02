import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from '../data/menuData';
import { ShoppingCart, Star, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const categories = ['All', 'Burgers', 'Tikka', 'Kebabs', 'Fries', 'Drinks'];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemId, setAddedItemId] = useState(null);
  const { addToCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
      setSearchQuery('');
    }
  }, [location.search]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  const filteredMenu = menuData.filter(item => {
    const matchesSearch = searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-gray-900 mb-6"
          >
            Our <span className="text-primary">Masterly</span> Menu
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
            Hand-picked ingredients, slow-smoked to perfection.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat, idx) => (
              <button
                key={`cat-${idx}`}
                onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-rose-200' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Search your favorite BBQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-primary outline-none transition-all shadow-sm"
              />
            </div>
            <button 
              onClick={() => {}} 
              className="sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 bg-primary text-white px-4 py-3 sm:py-1.5 rounded-full text-sm font-bold hover:bg-rose-700 transition-all w-full sm:w-auto" 
            > 
              Search 
            </button> 
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs font-bold text-gray-900">4.8</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-extrabold text-primary">{item.price}</span>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className={`p-3 rounded-2xl transition-all shadow-sm ${
                        addedItemId === item.id 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-900 hover:bg-primary hover:text-white'
                      }`}
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No items found matching your search. Try another one!</p>
          </div>
        )}
      </div>
    </div>
  );
}
