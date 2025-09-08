
# Product Requirements Document (PRD)

## Product Name
**The Fish Whistle**

## Domain
[https://thefishwhistle.app](https://thefishwhistle.app)

---

## Summary
"The Fish Whistle" is a web-based fishing tool (with future mobile app rollout) that provides real-time fishing reports, water conditions, historical records, and predictive insights. It’s designed for both casual and professional anglers, blending practical fishing data with a cheeky, stoner-inspired personality that makes the experience playful and memorable.

---

## Target Users
- **Primary:** Casual anglers, professional guides, and fishing enthusiasts.
- **Secondary:** Outdoor adventurers, stoner culture fans, and nature-focused hobbyists.

---

## Core Features

### 1. Real-Time Fishing Reports
- User-submitted and API-fed real-time updates
- Includes weather, fish activity, water clarity, flow rates, etc.

### 2. Waterbody Data
- Live data on:
  - Temperature
  - Flow rate
  - Clarity
  - Barometric pressure
  - River dam release schedules (where available)

### 3. Historical Catch Data
- Filterable historical logs for waterbodies
- Includes species, gear used, time of year, and conditions

### 4. Predictive Fishing Forecasts
- ML-driven insights into future bite conditions
- Based on weather patterns, moon phases, water data, and historical catches

### 5. Interactive Map
- Searchable, zoomable fishing map
- Color-coded icons for activity levels
- Tap to view reports, forecasts, and strain pairings

---

## Social & Account Features

### 6. User Accounts
- Optional sign-up/login
- Profile pages with:
  - Catch logs
  - Saved spots
  - Media uploads (images, videos)
  - Comments

### 7. Social Feed
- Location-based feed of:
  - Catch reports
  - Shared media
  - Guide tips
- Supports likes, comments, and re-shares
- Feed works like a hybrid of Instagram and Twitter

### 8. Report Submission
- Users can contribute reports
- Easy tagging of location, species, and gear
- Optional weed strain pairing when submitting

---

## Personality & Brand Touches

### 9. Weed Strain Pairings
- Each fishing location or report can suggest a weed strain
- Pairing includes:
  - Strain name
  - Cheeky/funny reason for pairing
  - E.g., "This slow bite calls for a mellow indica. Light up, cast out, and vibe."

### 10. UI Language & Humor
- Fun, irreverent copywriting
- Features like "Blow the Whistle" button to generate fresh data
- Easter eggs hidden in the interface

---

## Notifications
- Opt-in push notifications for:
  - Ideal fishing conditions
  - Perfect weather windows
  - Local hot streaks or Guide Reports
  - Gear drops or sales

---

## Monetization Strategy

### Free Tier (Ad-supported)
- Limited access to water data, historical info, and forecasts
- Can view feed but not post
- No weed pairing suggestions

### Premium Tier ($4.99/month or $49/year)
- Ad-free experience
- Full data and forecast access
- Weed pairing features
- Submit unlimited reports
- Push notifications
- Gear partner discounts

### Pro/Guide Tier ($14.99/month)
- All Premium features
- Enhanced analytics (heatmaps, trend charts)
- Verified "Guide Reports"
- Visibility boost in social feed
- Early feature access

---

## Data Sources & API Suggestions
- **Weather & Water Data**:
  - USGS (United States Geological Survey)
  - NOAA (National Oceanic and Atmospheric Administration)
  - OpenWeatherMap API
  - River flow APIs (e.g., TVA, Reclamation)
- **Fishing Data**:
  - Fishbrain API (if partnership is viable)
  - Angler’s Atlas
  - User-submitted data

---

## Platform Strategy

### Phase 1: Web App Launch
- Hosted at [https://thefishwhistle.app](https://thefishwhistle.app)
- Fully responsive for mobile/tablet
- All core features included

### Phase 2: Mobile App Rollout
- Native iOS and Android apps
- Enhanced performance and push notifications
- Offline caching for remote areas

---

## Recommended Technical Specifications

### Front-End
- **Framework:** Next.js (React-based, SEO-friendly, supports SSR and static export)
- **Styling:** Tailwind CSS for utility-first design
- **Map Integration:** Mapbox or Leaflet.js with OpenStreetMap tiles

### Back-End
- **Server Framework:** Node.js with Express or Fastify
- **API Layer:** GraphQL (Apollo) or REST (Express)

### Database
- **Primary:** PostgreSQL (scalable, relational, supports geospatial queries via PostGIS)
- **User-generated Content:** Cloudinary or Firebase Storage (for media uploads)

### Authentication & User Management
- Auth0 or Firebase Auth for secure, scalable login

### Hosting/Infrastructure
- **Vercel** (ideal for Next.js, fast global CDN)
- **AWS (ECS + RDS)** for scalable infrastructure once traffic exceeds limits
- **Cloudflare** for CDN, caching, and DDoS protection

### Notifications
- OneSignal or Firebase Cloud Messaging for push alerts

### Analytics & Monitoring
- Mixpanel or PostHog for user analytics
- Sentry for real-time error tracking

### Payment & Subscription
- Stripe for tiered subscriptions, including in-app purchases via Stripe Mobile SDKs later

### AI/ML Forecasting
- Custom ML model hosted on AWS SageMaker or Google Cloud AI Platform
- Optional fallback to simpler logic if ML cost is prohibitive at early stage

### DevOps & Scaling
- Use **Docker** for containerization
- **Kubernetes** for orchestration when scaling beyond 100K users
- CI/CD via GitHub Actions or GitLab CI

### Cost Scaling Philosophy
- Start lean with serverless deployments (Vercel, Firebase, Supabase)
- Modular system design for easy replacement of infrastructure as traffic grows
- Switchable components (e.g., Firebase → PostgreSQL, Vercel → AWS) without major refactor

---

## Future Considerations
- Integrate with wearable tech for water-based alerts
- Partner with cannabis brands for sponsored strains
- In-app purchases for digital gear packs or unlocks

---

## Success Metrics
- MAUs and DAUs (Monthly/Daily Active Users)
- User-generated reports per week
- Subscription conversion rate
- Engagement on social feed (likes, comments)
- Data accuracy improvement from user input

## Go-to-Market Strategy

### Phase 1: MVP Launch (Months 1-3)
- Deploy web app with core features
- Seed content with fishing guides and early adopters
- Focus on 3-5 key fishing regions for concentrated user base
- Influencer partnerships with fishing YouTubers/Instagram accounts

### Phase 2: Community Growth (Months 4-8)
- Implement user-generated content campaigns
- Partner with local fishing guides for verified content
- Cannabis brand partnerships for strain pairing content
- Referral program for organic growth

### Phase 3: Mobile & Scale (Months 9-12)
- Native mobile app development
- Expand to national coverage
- Advanced AI features and predictive