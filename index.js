const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple "Hello World" message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the Hello World message`);
});

module.exports = app;
