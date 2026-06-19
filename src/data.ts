/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CapabilityItem, PartnerLogo, FooterColumn } from "./types";

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "01",
    tag: "DEV",
    title: "Website Development",
    description: "Full-stack architectural delivery & premium layouts.",
    category: "DEVELOPMENT",
    latency: "14ms Fast edge hydration",
    benchmark: "99/100 Core Web Vitals score",
    detailedDesc: "ENGINEERED WITH MODERN RUNTIMES DEV DIRECTIVES. SUPPORTS DYNAMIC SERVER-SIDE STREAMING, OPTIMISTIC UI RENDERING, AND TAILWIND STYLING PIPELINES. COMPLETELY COMPILED WITH ZERO CLIENT-SIDE OVERHEAD."
  },
  {
    id: "02",
    tag: "MKTG",
    title: "Digital Marketing",
    description: "High-performance customer tracking and continuous conversion funnels.",
    category: "MARKETING",
    latency: "Real-time user flow parsing",
    benchmark: "2.4x standard conversion lift",
    detailedDesc: "ADVANCED MULTI-CHANNEL PIXEL RE-ROUTING WITH SERVER-SIDE METRICS STABILITY. DISPATCHES VISITOR ENGAGEMENT EVENT LOGS DIRECTLY BYPASSING BROWSER SCRIPTS BLOCKERS."
  },
  {
    id: "03",
    tag: "SOFT",
    title: "Custom Software",
    description: "Scalable enterprise engines tailored to modern workflows.",
    category: "DEVELOPMENT",
    latency: "<8ms Database retrieval speed",
    benchmark: "100% thread safety index",
    detailedDesc: "MUTABLE DATABASES, FAULT-TOLERANT RETRY LOGS, AND COMPACT COMPILED BINARIES FOR ENTERPRISE ERP SYNC AND INVENTORY TRACKER DEPOTS."
  },
  {
    id: "04",
    tag: "DSGN",
    title: "Graphic Designing",
    description: "High-fidelity brand identities and digital system design.",
    category: "DEVELOPMENT",
    latency: "Vector-optimized delivery",
    benchmark: "0px rendering layout deviation",
    detailedDesc: "BRAND SYSTEM DEFINITIONS, ULTRA-HIGH CONTRAST COLOR STRATEGIES, AND RUGGED MINIMAL GEOMETRY CONVENTIONS DESIGNED TO CAPTURE ENTERPRISE DOMINANCE."
  },
  {
    id: "05",
    tag: "MAIL",
    title: "E-mail Marketing",
    description: "Data-driven lifecycle retention and high-impact newsletter pipelines.",
    category: "MARKETING",
    latency: "Sub-second batch dispatches",
    benchmark: "42% average open-rate threshold",
    detailedDesc: "LIFECYCLE CAMPAIGNS AUTOMATED BY INTERACTION HEURISTICS. BUILDS RELIABLE DOMAIN REPUTATION CREDENTIALS ACCORDING TO RFC COMPILATION STANDARDS."
  },
  {
    id: "06",
    tag: "VID",
    title: "Video Editing",
    description: "Premium narrative-driven media production and motion graphics.",
    category: "MARKETING",
    latency: "Uncompressed ProRes exports",
    benchmark: "60fps seamless timeline lock",
    detailedDesc: "AGGRESSIVE COMMERCIAL CLIPS WITH NARRATIVE-DRIVEN HIGH-SPEED ENGAGEMENT CUT PATTERNS. DEVELOPED SPECIFICALLY TO DRIVE SOCIAL TO CONVERSION FUNNELS."
  },
  {
    id: "07",
    tag: "SYS",
    title: "ERP & CRM Architecture",
    description: "Unified backend operations, automation workflows, and internal data tooling.",
    category: "DEVELOPMENT",
    latency: "Instant multi-regional sync",
    benchmark: "99.999% system availability",
    detailedDesc: "CENTRAL DATA AGGREGATORS LINKING PRODUCTION PIPELINES, LEAD INTAKE METRICS, AND INTERNAL INVENTORY DATA IN SECURE DIRECT ROUTING PASSWORDS SYSTEM."
  },
  {
    id: "08",
    tag: "SEM",
    title: "Search Engine Marketing",
    description: "Targeted paid placement networks optimized for high-intent customer acquisition.",
    category: "MARKETING",
    latency: "Continuous bid updates",
    benchmark: "3.8x baseline return on ad spend",
    detailedDesc: "HIGH-INTENSITY BID MATCHING AND MATHEMATIC AUDIENCE SEGMENTATION ROOTED IN REAL-TIME CUSTOMER ACQUISITION COST REDUCTIONS."
  },
  {
    id: "09",
    tag: "SEO",
    title: "Search Engine Optimization",
    description: "Advanced algorithmic authority building and structural visibility indexing.",
    category: "MARKETING",
    latency: "Accelerated index delivery",
    benchmark: "#1 rankings across core keywords",
    detailedDesc: "HIGH-FIDELITY STRUCTURAL INGESTION PATHWAYS DESIGNED TO GUARANTEE DOMINANCE ON SEARCH INDEX ENGINES. GENERATES FAST ORGANIC CONVERSION."
  },
  {
    id: "10",
    tag: "COMM",
    title: "E-commerce Development",
    description: "High-conversion checkout architecture, payment systems, and headless storefronts.",
    category: "DEVELOPMENT",
    latency: "120ms total checkout delay",
    benchmark: "48% cart recovery escalation",
    detailedDesc: "FULLY DECOUPLED STATICS INGESTION AND STRIPE INTEGRATED CHECKOUT GATEWAYS DESIGNED TO ENTIRELY ELIMINATE LOAD TIME CONSTRAINTS."
  },
  {
    id: "11",
    tag: "MOB",
    title: "Mobile App Development",
    description: "Native iOS and Android architectures built with performance and speed at the core.",
    category: "DEVELOPMENT",
    latency: "60fps responsive state locks",
    benchmark: "Zero crash telemetry",
    detailedDesc: "HIGHLY STABILIZED REACT NATIVE COGNITIVE FRAMEWORKS WITH HARDWARE-ACCELERATED TRANSITIONS AND OFFLINE CACHERS INDEPENDENT LIFECYCLES."
  },
  {
    id: "12",
    tag: "WP",
    title: "WordPress Development",
    description: "Custom headless CMS deployments, theme engineering, and optimized frameworks.",
    category: "DEVELOPMENT",
    latency: "Under 250ms paint index",
    benchmark: "100% security hardness scores",
    detailedDesc: "RE-ENGINEERED COMPILER PIPELINES FOR WORDPRESS, SEPARATING HEAVY DATABASES FROM SECURED HIGH-SPEED EDGE DELIVERY SERVERS."
  }
];

export const PARTNERS: PartnerLogo[] = [
  { name: "Google Cloud Partner", id: "google-cloud" },
  { name: "Meta Business Partners", id: "meta" },
  { name: "Google Partner", id: "google" },
  { name: "Shopify Partner", id: "shopify" },
  { name: "TikTok Marketing Partners", id: "tiktok" }
];

export const SOLUTIONS_COLUMN: FooterColumn = {
  title: "Solutions",
  items: [
    "Paid search marketing",
    "Email marketing",
    "Social Media Marketing",
    "Influencer marketing",
    "Search engine optimization",
    "Conversion rate optimization",
    "Google shopping",
    "Software Development Services"
  ]
};

export const ABOUT_COLUMN: FooterColumn = {
  title: "About",
  items: [
    "About",
    "Blog",
    "Careers",
    "Team",
    "Success Stories",
    "Awards",
    "Contact"
  ]
};
