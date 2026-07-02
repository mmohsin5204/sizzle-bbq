import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Your Cart 🛒</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <ShoppingBag size={64} className="text-gray-300" />
                  <div>
                    <p className="text-xl font-semibold text-gray-800">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Add some sizzling items!</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-primary font-bold">{item.price}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    navigate('/checkout');
                  }}
                  className="w-full bg-primary text-white rounded-2xl py-3 font-bold hover:opacity-90 transition-opacity"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
