const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple "Hello World" message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export the app for testing or importing in other files
module.exports = app;

// Start the server only when this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to see the Hello World message`);
  });
}
