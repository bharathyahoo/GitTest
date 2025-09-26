const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a styled "Hello World" message
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
                font-family: Arial, sans-serif;
            }
            h1 {
                font-size: 4rem;
                color: #333;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
  `);
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
