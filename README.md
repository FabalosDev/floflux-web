# 📦 FLOFLUX.DISTRO
> **Engineering Lab & Resource Distribution Node** > *Operated by Fabalos Engineering // Node_01*

Floflux is a highly-opinionated, industrial-aesthetic SvelteKit application serving as the "Lab" lane for Fabalos Engineering. It acts as a digital distribution point for interactive tools, raw workflows (n8n), and utility scripts (Python).

![System Status](https://img.shields.io/badge/SYSTEM-ONLINE-success?style=for-the-badge)
![Version](https://img.shields.io/badge/VERSION-2.0.4-orange?style=for-the-badge)
![Stack](https://img.shields.io/badge/STACK-SVELTEKIT%20%2B%20TAILWIND-black?style=for-the-badge)

---

## 🏗️ Architecture
This is not a marketing site. It is a **Control Room**.
The UI is designed to feel like a physical industrial interface:
* **Live Telemetry:** Simulates latency pings and system heartbeats.
* **Manifest Design:** Information is presented in "Shipping Label" formats.
* **X-Ray Mode:** Every tool has a "View_Source" toggle to inspect the underlying code logic.

### Tech Stack
* **Framework:** SvelteKit (Vite)
* **Styling:** Tailwind CSS (v4)
* **Icons:** None (Pure CSS / Text)
* **State:** Svelte Stores + Local Component State

---

## 📦 Inventory Manifest (Current Build)
The application currently serves 3 core engineering assets:

| ID | Name | Type | Description |
| :--- | :--- | :--- | :--- |
| **FLO-001** | `Pneumatic_Cylinder_Calc` | **Interactive App** | ISO 1219 compliant sizing tool. Inputs pressure/load; outputs bore & air consumption. |
| **FLO-002** | `Email_To_GTasks_Flow` | **n8n Workflow** | Universal HTTP-based JSON blueprint for parsing emails via Gemini 1.5 Flash. |
| **FLO-003** | `Jules_Script_Bin` | **Python CLI** | `jules.py` utility for CSV cleaning, PDF extraction, and image resizing. |

---

## ⚡ Quick Start

### 1. Initialize Node
```bash
git clone [https://github.com/fabalosdev/floflux-web.git](https://github.com/fabalosdev/floflux-web.git)
cd floflux-web
npm install