import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import payload from 'payload';



const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        express: app,
        config: path.resolve(__dirname, './payload.config.ts'), // 👈 Add this line
        onInit: () => {
          console.log('Payload Admin URL:', payload.getAdminURL());
        },
      });
      

  app.listen(PORT, () => {
    console.log(`Server is now listening on http://localhost:${PORT}`);
  });
};

start();
