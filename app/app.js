const express = require('express');
const client = require('prom-client');

const app = express();
app.use(express.json());

// -----------------------------
// 🔹 Prometheus Setup
// -----------------------------
const register = new client.Registry();

// Default system metrics (CPU, memory, etc.)
client.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route'],
});

register.registerMetric(httpRequestCounter);
register.registerMetric(httpRequestDuration);

// -----------------------------
// 🔹 Middleware for Metrics
// -----------------------------
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();

  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode,
    });

    end({ method: req.method, route: req.path });
  });

  next();
});

// -----------------------------
// 🔹 Routes
// -----------------------------

// Health check (VERY IMPORTANT in production)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Main API
app.get('/', (req, res) => {
  res.json({ message: "🚀 Production Monitoring App Running" });
});

// Simulate load
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  // Simulate delay
  setTimeout(() => {
    res.json(users);
  }, Math.random() * 500);
});

// Simulate error endpoint
app.get('/api/error', (req, res) => {
  res.status(500).json({ error: "Something went wrong!" });
});

// -----------------------------
// 🔹 Metrics Endpoint
// -----------------------------
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// -----------------------------
// 🔹 Start Server
// -----------------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});
