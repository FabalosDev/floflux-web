# Changelog
All notable changes to the Floflux Distribution Node will be documented in this file.

## [1.0.0] - 2026-01-16
### 🚀 Released
- **FLO-001 (Pneumatic Cylinder Calc):** ISO 1219 compliant web utility for bore sizing and air consumption.
- **FLO-002 (Email -> GTasks):** Universal n8n workflow using HTTP Request for Gemini 1.5 Flash (Idempotent).
- **FLO-003 (Jules Script Bin):** Single-file Python CLI (`jules.py`) for CSV/PDF automation.

### ✨ Added
- **Telemetry Deck:** Live UTC clock, local operator time, and simulated latency ticker.
- **X-Ray Mode:** "View Source" toggle added to all product pages for code inspection.
- **Universal Loader:** Dynamic routing via `/pkg/[id]` to handle both Apps and Files.
- **Manifest System:** Centralized `inventory.js` as the single source of truth for assets.

### 🔧 Fixed
- **FLO-002:** Downgraded from "Gemini Node" to "HTTP Request" to fix "Unknown Node" error on older n8n instances.
- **UI:** Fixed invisible download button (white-on-white text) in dark mode states.
- **Security:** Moved `package.json` import to Server Load (`+page.server.js`) to prevent Vite Allow List errors.

---
## [0.0.1] - 2026-01-12
### 🌱 Initialized
- Project scaffolding (SvelteKit + Tailwind).
- Basic "Shipping Manifest" layout.