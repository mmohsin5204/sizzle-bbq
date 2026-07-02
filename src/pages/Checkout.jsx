import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, User, ChevronRight, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', address: '', paymentMethod: 'COD' });
  const { cartItems, cartTotal, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    // Validate all fields are filled
    if (!form.name || !form.phone || !form.address) {
      alert('Please fill in all required fields');
      return;
    }
    const orderData = {
      customer_name: form.name,
      phone: form.phone,
      address: form.address,
      payment_method: form.paymentMethod,
      total: parseFloat((cartTotal + 0.99).toFixed(2)),
      items: cartItems.map(item => ({
        name: item.name,
        item_price: parseFloat(item.price.replace('$','')),
        quantity: item.quantity
      }))
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      const data = await response.json();
      if (data.success) {
        setOrderNumber(data.orderId);
        setOrderPlaced(true);
        clearCart();
      } else {
        alert('Order failed. Please try again.');
      }
    } catch (err) {
      alert('Cannot connect to server. Please try again.');
    }
  };

  const grandTotal = cartTotal + 0.99; // Rs. 99 delivery fee

  if (orderPlaced) {
    return (
      <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Order Placed! 🎉</h1>
            <p className="text-xl text-gray-600 mb-4">Your order #{orderNumber} has been received</p>
            <p className="text-lg text-gray-500 mb-8">Estimated delivery: 30–45 minutes</p>
            <button
              onClick={() => window.location.href = '/menu'}
              className="bg-primary text-white rounded-2xl py-4 px-8 font-bold hover:opacity-90 transition-opacity"
            >
              Back to Menu
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4"
          >
            Checkout
          </motion.h1>
          <p className="text-gray-600 text-lg">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary outline-none"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary outline-none"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                <textarea
                  placeholder="Delivery Address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-primary outline-none resize-none"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Method</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: 'COD' })}
                    className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                      form.paymentMethod === 'COD' ? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, paymentMethod: 'Mobile' })}
                    className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                      form.paymentMethod === 'Mobile' ? 'bg-primary text-white' : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    JazzCash / Easypaisa
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white rounded-2xl py-4 font-bold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <span>Place Order</span>
                <ChevronRight size={20} />
              </button>
            </form>
          </div>

          {/* Right side - Order Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold text-gray-900">$0.99</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-lg font-bold text-gray-900">Grand Total</span>
                <span className="text-xl font-bold text-primary">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
