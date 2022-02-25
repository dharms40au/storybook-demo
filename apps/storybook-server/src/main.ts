/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.get('/petstore/?*', (req, res) => {
  // res.send({ message: 'Welcome to storybook-server!' });
  res.sendFile(path.join(__dirname, '..', 'petstore', 'index.html'));
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
