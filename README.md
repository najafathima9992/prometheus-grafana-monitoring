# 🚀 Infrastructure & Container Monitoring using Prometheus & Grafana

## 📌 Project Overview

This project demonstrates a **production-style monitoring system** for infrastructure and Docker containers using Prometheus and Grafana.

It focuses on **observability**, enabling real-time insights into system performance and container behavior.

---

## 🏗️ Architecture

```text
Docker Host (Linux Server)
   ├── Node Exporter (System Metrics)
   ├── cAdvisor (Container Metrics)
   ├── Prometheus (Metrics Collection)
   └── Grafana (Visualization & Alerts)
```

---

## 🛠️ Tech Stack

### 📊 Monitoring Tools

* Prometheus → Metrics collection & storage
* Grafana → Dashboards & alerting

### 📦 Exporters

* Node Exporter → System-level metrics
* cAdvisor → Container-level metrics

### 🐳 DevOps Tools

* Docker
* Docker Compose

---

## 📦 Containers Overview

| Container     | Purpose                   | Port |
| ------------- | ------------------------- | ---- |
| prometheus    | Collects & stores metrics | 9090 |
| grafana       | Visualizes metrics        | 3001 |
| node-exporter | System metrics            | 9100 |
| cadvisor      | Container metrics         | 8080 |

👉 Total Containers Running: **4**

---

##  Node Exporter

Node Exporter is a Prometheus exporter that collects **system-level metrics** from the host machine.

### 📊 Metrics include:

* CPU usage
* Memory usage
* Disk I/O
* Network statistics

📍 Endpoint:

```bash
http://<server-ip>:9100/metrics
```

👉 Used for monitoring the **server/host machine**

---

##  cAdvisor

cAdvisor (Container Advisor) monitors **Docker containers**.

### 📊 Metrics include:

* Container CPU usage
* Memory usage
* Network traffic
* Filesystem usage

📍 Endpoint:

```bash
http://<server-ip>:8080/metrics
```

👉 Used for monitoring **container performance**

---

## 🔗 Monitoring Flow

```text
Node Exporter ─┐
               ├──► Prometheus ───► Grafana ───► Alerts
cAdvisor ──────┘
```

---

## 📊 Features

* 📈 Real-time system monitoring
* 📦 Container-level monitoring
* 📊 Custom Grafana dashboards
* 🚨 Alerting system (CPU threshold)
* 🔍 PromQL-based querying
* 🐳 Fully containerized setup

---


## 🌐 Access URLs

| Service       | URL                   |
| ------------- | --------------------- |
| Grafana       | http://<server-ip>3001 |
| Prometheus    | http://<server-ip>9090 |
| Node Exporter | http://<server-ip>9100 |
| cAdvisor      | http://<server-ip>8080 |

---

## 🔐 Grafana Login

* Username: `admin`
* Password: `admin`

👉 Change password after first login

---

## 📊 Prometheus Queries

### CPU Usage

```promql
100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)
```

### Memory Usage

```promql
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100
```

### Service Health

```promql
up
```

---

## 🚨 Alerting

Configured alerts in Grafana:

* CPU usage > 80%
* Email notifications via SMTP

---

## 🎯 Use Cases

* Infrastructure monitoring
* Docker container monitoring
* Performance analysis
* Alerting & incident detection

---

## 💼 Real-World Relevance

This project reflects how organizations monitor:

* Cloud servers
* Containers (Docker/Kubernetes)
* Infrastructure performance

---

## 🧠 Key Learnings

* Prometheus metrics & PromQL
* Grafana dashboards & alerting
* Exporters (Node Exporter & cAdvisor)
* Docker-based monitoring setup
* Observability principles

---
