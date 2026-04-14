# 🚀 Full Stack Monitoring System with Prometheus & Grafana

## 📌 Project Overview

This project demonstrates a **production-style monitoring system** for a containerized full-stack application. It includes system-level and container-level monitoring using Prometheus and Grafana, along with a modern frontend and backend application.

---

## 🏗️ Architecture

```
Frontend (HTML, CSS, JavaScript)
        ↓
Backend (Node.js + Express API)
        ↓
Docker Containers
        ↓
----------------------------------
Monitoring Stack:
----------------------------------
Node Exporter → System Metrics
cAdvisor → Container Metrics
Prometheus → Data Collection
Grafana → Visualization & Alerts
```

---

## 🛠️ Tech Stack

### 💻 Application

* HTML, CSS, JavaScript (Frontend)
* Node.js + Express (Backend)

### 📊 Monitoring

* Prometheus
* Grafana
* Node Exporter
* cAdvisor

### 🐳 DevOps

* Docker
* Docker Compose

---

## 📦 Services & Containers

| Service       | Description                     | Port |
| ------------- | ------------------------------- | ---- |
| App (Node.js) | Full-stack application          | 3000 |
| Prometheus    | Metrics collection              | 9090 |
| Grafana       | Visualization & dashboards      | 3001 |
| Node Exporter | System metrics (CPU, RAM, Disk) | 9100 |
| cAdvisor      | Container metrics               | 8080 |

👉 Total Containers Running: **5**

---

##  Node Exporter

Node Exporter is a Prometheus exporter that collects **system-level metrics** such as:

* CPU usage
* Memory usage
* Disk usage
* Network statistics

It exposes metrics at:

```
http://<server-ip>:9100/metrics
```

👉 Used to monitor the **host machine (server)**

---

##  cAdvisor

cAdvisor (Container Advisor) monitors **Docker containers** and provides:

* Container CPU usage
* Memory consumption
* Network usage
* Disk I/O

It exposes metrics at:

```
http://<server-ip>:8080/metrics
```

👉 Used to monitor **individual containers**

---

## 🔗 Monitoring Flow

```
Node Exporter → System Metrics
cAdvisor → Container Metrics
        ↓
Prometheus (Scrapes Data)
        ↓
Grafana (Dashboards & Alerts)
```

---

## 📊 Features

* 📈 Real-time CPU, Memory, Disk monitoring
* 📦 Container-level monitoring
* 🛍️ Full-stack e-commerce style application
* 🔐 Authentication (JWT-based)
* 🚨 Alerting (CPU > 80%)
* 📊 Custom dashboards in Grafana


## 🌐 Access URLs

| Service       | URL                     |
| ------------- | ---------------------   |
| Application   | http://<server-ip>:3000 |
| Grafana       | http://<server-ip>:3001 |
| Prometheus    | http://<server-ip>:9090 |
| Node Exporter | http://<server-ip>:9100 |
| cAdvisor      | http://<server-ip>:8080 |

---

## 🔐 Grafana Login

* Username: `admin`
* Password: `admin`

👉 Change password after first login

---

## 📊 Prometheus Queries (Examples)

### CPU Usage

```
100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)
```

### Memory Usage

```
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100
```

### Request Rate

```
rate(http_requests_total[1m])
```

---

## 🚨 Alerting

Configured alerts in Grafana:

* CPU usage > 80%
* Email notifications via SMTP

---

## 🐳 Docker Compose Highlights

* Multi-container architecture
* Isolated services
* Scalable design
* Easy deployment

---

## 💼 Real-World Use Case

This project simulates how companies monitor:

* Cloud servers
* Microservices
* Containerized applications

---

## 🎯 Key Learnings

* Prometheus metrics collection
* Grafana dashboard creation
* Docker-based deployments
* Full-stack application integration
* Monitoring & alerting setup

---

