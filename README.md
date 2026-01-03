# internal Access Portal - Security Lab (CTF)

## Overview
This repository contains a containerized security challenge designed to test skills in **GraphQL exploration** and **JWT manipulation**. The lab simulates a common real-world vulnerability where weak cryptographic secrets lead to full system compromise.

##  Tech Stack
- **Engine:** Node.js (Apollo Server)
- **API Architecture:** GraphQL
- **Auth Protocol:** JSON Web Tokens (JWT)
- **Deployment:** Docker & Docker Compose

##  Challenge Objectives
1. **Reconnaissance:** Discover hidden mutations and queries via Introspection.
2. **Analysis:** Identify session management weaknesses and decode JWT structures.
3. **Exploitation:** Perform a brute-force attack on the JWT secret and forge a high-privilege token.
4. **Final Goal:** Access the administrative `getInternalFlag` query to retrieve the Flag.

##  Deployment Instructions
Ensure you have **Docker** installed, then execute:

```bash
docker-compose up --build
The server will be reachable at http://localhost:4000.
Challenge Level: Medium
Skills Required: API Pentesting, Cryptography, JWT Forgery.

Estimated Time: 30-45 minutes.
`ctf-challenge` | `graphql-security` | `jwt-exploitation` | `penetration-testing` | `dockerized` | `ec-council`
