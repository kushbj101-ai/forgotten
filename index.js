
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<h1>Welcome to My Node.js Server!</h1><p>Server is running successfully.</p>');
});

// Set port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
