const express = require('express');
const path = require('path');
const app = express();

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', async (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});


app.get('/contact-me', async (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res) => {
  res.status(404).send('404 Error');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})