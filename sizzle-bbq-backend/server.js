const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/orders', require('./routes/orders'));
app.use('/api/menu', require('./routes/menu'));
app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});
