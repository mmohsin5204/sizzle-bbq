const db = require('../config/db');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.placeOrder = async (req, res) => {
  try {
    const { customer_name, phone, address, payment_method, total, items } = req.body;

    console.log("Incoming items:", items);

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, error: 'No items in order' });
    }

    const [result] = await db.execute(
      'INSERT INTO orders (customer_name, phone, address, payment_method, total) VALUES (?,?,?,?,?)',
      [customer_name, phone, address, payment_method, total]
    );
    const orderId = result.insertId;

    for (const item of items) {
      console.log("Inserting item:", item);
      await db.execute(
        'INSERT INTO order_items (order_id, item_name, item_price, quantity) VALUES (?,?,?,?)',
        [orderId, item.name, item.item_price, item.quantity]
      );
    }

    const message = `🔔 New Order #${orderId}
👤 ${customer_name}
📞 ${phone}
📍 ${address}
🧾 Items: ${items.map(i => `${i.name} x${i.quantity}`).join(', ')}
💰 Total: $${total}
💳 Payment: ${payment_method}`;

    try {
      await client.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM,
        to: process.env.OWNER_WHATSAPP,
        body: message
      });
    } catch (twilioErr) {
      console.error('Twilio error:', twilioErr.message);
    }

    res.json({ success: true, orderId });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const [orders] = await db.execute('SELECT * FROM orders ORDER BY created_at DESC');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await db.execute('UPDATE orders SET status=? WHERE id=?', [status, id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
