const express = require('express');
const client = require('prom-client');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

let tasks = [];

// ---------------- Prometheus ----------------
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

register.registerMetric(requestCounter);

// Middleware
app.use((req, res, next) => {
  res.on('finish', () => {
    requestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode,
    });
  });
  next();
});

// ---------------- Routes ----------------

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Get tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add task
app.post('/api/tasks', (req, res) => {
  const task = { id: Date.now(), text: req.body.text };
  tasks.push(task);
  res.status(201).json(task);
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(3000, () => console.log("Server running on port 3000"));
