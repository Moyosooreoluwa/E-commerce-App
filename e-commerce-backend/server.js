import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`server runnng at http://localhost:${port}`);
});
