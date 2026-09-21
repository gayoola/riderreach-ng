# RiderReach NG — Broad Prototype

RiderReach is a working prototype for a logistics coverage and capacity network.

## What this version demonstrates

- Consumer destination coverage search
- Local rider discovery
- DeliveryScore (seeded demo score)
- Rating, completed deliveries, completion/on-time metrics
- Response-time indicator
- WhatsApp handoff
- Logistics-company partner workflow
- Inter-state backhaul matching concept for trucks
- Operator/network directory
- Local browser lead capture

## Important prototype positioning

The operator and truck records are **seeded demo data**. They do not represent real rider signups or verified live performance.

In production, DeliveryScore should be calculated from verified platform activity and backed by identity, transaction, dispute and safety controls.

## Run

Open `index.html` in a browser or deploy the repository with GitHub Pages.

Tailwind is loaded from the CDN, so the deployed page needs internet access.
