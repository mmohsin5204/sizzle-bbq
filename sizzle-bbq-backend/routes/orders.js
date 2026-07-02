const express = require('express');
const router = express.Router();
const { placeOrder, getAllOrders, updateOrderStatus } = require('../controllers/orderController');

router.post('/', placeOrder);
router.get('/', getAllOrders);
router.patch('/:id/status', updateOrderStatus);

module.exports = router;
