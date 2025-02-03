// api-server.js
import http from 'http';
import { createMockEmails } from './mock-api.js';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS for local development

  if (req.url === '/emails') {
    const emails = createMockEmails(20); // Generate 20 mock emails
    res.statusCode = 200;
    res.end(JSON.stringify(emails));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Resource not found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://${hostname}:${port}/\`);
});
