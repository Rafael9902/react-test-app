import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { data } from './data.js';

const app = express();

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.use(express.json());
app.use(cors());

app.get('/products',  (req, res) => {
  const search = req.query.search || '';

  const response = [...data].filter(({ about, name, tags }) => {
    const lowerSearch = search.toLowerCase();

    return name.toLowerCase().includes(lowerSearch) ||
           about.toLowerCase().includes(lowerSearch) ||
           tags.find(tag => tag.toLowerCase().includes(lowerSearch))
  });

  res.send(response);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const response = [...data].find(({_id}) => _id === id);

  if(!response || response.length === 0) res.status(400).send('Product Not Found');

  res.send(response);
});

app.listen(PORT, () => console.log(`[Server running on ${HOSTNAME}:${PORT}]`));

