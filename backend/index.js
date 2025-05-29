const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let designers = [
  {
    id: 1,
    name: "Epic Designs",
    rating: 4,
    description: "Team of 4 from Bangalore with 4 years experience.",
    projects: 57,
    years: 8,
    price: "$$",
    phone1: "+91 - 984532853",
    phone2: "+91 - 984532854"
  },
  {
    id: 2,
    name: "Studio - D3",
    rating: 5,
    description: "Team of 4 from Bangalore with 4 years experience.",
    projects: 43,
    years: 6,
    price: "$$$",
    phone1: "+91 - 984532853",
    phone2: "+91 - 984532854"
  }
];

// GET /api/designers
app.get('/api/designers', (req, res) => {
  res.json(designers);
});

// POST /api/designers
app.post('/api/designers', (req, res) => {
  const newDesigner = {
    ...req.body,
    id: Date.now()
  };
  designers.push(newDesigner);
  res.status(201).json({ message: 'Designer added', data: newDesigner });
});

// Serve index.html from /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
