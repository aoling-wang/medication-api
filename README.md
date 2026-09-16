# Medication API

### A containerized NestJS REST API exploring how Docker fits into modern application development, testing, and deployment.

> **Portfolio Project · Javascript/Typescript · NodeJS · Jest · NestJS · Docker · GitHub Actions · CI/CD**

---

## Overview

**Medication API** is a small REST API built with **NestJS and TypeScript** that provides structured medication information through a simple interface.

<p align="center">
  <img width="655" height="400" alt="image" src="https://github.com/user-attachments/assets/520a35a7-2c76-4826-b62c-2f8e458c3cea" />
</p>

The application itself is intentionally straightforward. The focus of this project is what surrounds the application: **containerization, testing, automation, and reproducible development environments**.

I built this project to explore a common question in modern software development:

> **Once an application works, how do we make it easier to build, test, share, and run consistently?**

That led me to Docker.

Rather than treating Docker as an isolated technology, this project explores where **containerization fits into the larger development workflow** — from writing and testing code to creating a reproducible application environment and automatically validating that environment through GitHub Actions.

---

## What Can It Do?

The API provides structured medication information through a simple REST interface.

<div align="center">

<table>
<tr>
<td align="center"><strong>Medication Name</strong><br><sub>Identifies the medication</sub></td>
<td align="center"><strong>Dosage</strong><br><sub>Available dosage information</sub></td>
<td align="center"><strong>Administration Route</strong><br><sub>How the medication is administered</sub></td>
</tr>
<tr>
<td align="center"><strong>Clinical Role</strong><br><sub>Primary therapeutic purpose</sub></td>
<td align="center"><strong>Category</strong><br><sub>Medication classification</sub></td>
<td align="center"><strong>Chemical Formula</strong><br><sub>Molecular composition</sub></td>
</tr>
<tr>
<td align="center"><strong>Drug Interactions</strong><br><sub>Known interaction information</sub></td>
</tr>
</table>

</div>

## Docker and CI in the Development Process

A major goal of this project was understanding **where Docker fits into the development lifecycle**, rather than treating containerization as a standalone technology.

Docker provides a consistent environment for running the application, while GitHub Actions provides an automated environment for validating that application.

> **Application Code  →  Automated Tests  →  Docker Build  →  GitHub Actions  →  Validated Application  →  Deployable Artifact**

This creates a workflow where changes can be tested and packaged consistently before they move toward deployment.

The project therefore uses Docker not only as a way to run the application, but as part of a larger workflow involving **development, testing, automation, and deployment preparation**.

## What I Learned

* **REST API development** — creating a modular backend with NestJS
* **TypeScript** — using strict typing to improve maintainability and reliability
* **Docker** — packaging an application and its runtime into a reproducible environment
* **Multi-stage builds** — separating build dependencies from the production runtime
* **Containerized development** — running the application in a consistent environment
* **Automated testing** — validating application behavior with Jest
* **GitHub Actions** — automating tests and Docker builds
* **CI/CD concepts** — understanding how application code moves toward a deployable artifact
* **Reproducible environments** — reducing differences between development and CI environments

## The Stack

| Technology         | Purpose                                |
| ------------------ | -------------------------------------- |
| **TypeScript**     | Application language and strict typing |
| **Node.js**        | Server runtime                         |
| **NestJS**         | REST API framework                     |
| **Docker**         | Application containerization           |
| **GitHub Actions** | CI automation                          |
| **Jest**           | Automated testing                      |
| **npm**            | Package management                     |

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

#### Development

```bash
npm run start
```

#### Watch Mode

```bash
npm run start:dev
```

## Docker

Build the Docker image:

```bash
docker build -t medication-api .
```

Run the container:

```bash
docker run -p 3000:3000 medication-api
```

The API will then be available at:

```text
http://localhost:3000
```

## Run Tests

```bash
npm run test
```

## Next Steps

### Container Registry

Push the Docker image to **GitHub Container Registry (GHCR)** to create a versioned, distributable application artifact.

### Database Integration

Replace the current in-memory medication data with a persistent database to explore:

* PostgreSQL
* TypeORM
* Database migrations
* Persistent container storage

### Deployment

Deploy the containerized API to a cloud platform and explore the transition from:

**Local Development → CI → Container Registry → Cloud Deployment**

### API Documentation

Add Swagger/OpenAPI documentation to make the API easier for other developers to discover and consume.

---

**Project Goal:** Use a small backend application as a practical way to understand how **Docker, testing, CI/CD, and deployment workflows fit around application development**.
