import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';

const app = express();

app.use(express.static("public"));
app.get("*", (req,res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=false, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <link rel="stylesheet" href="/css/main.css">
      <script src="/bundle.js" defer></script>
      <title>React Server Rendering</title>
    </head>
    <body>
      <div id="root">${renderToString(<App />)}</div>
    </body>
    </html>
  `)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
