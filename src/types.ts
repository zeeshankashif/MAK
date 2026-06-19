/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CapabilityItem {
  id: string; // e.g., "01"
  tag: string; // e.g., "DEV"
  title: string;
  description: string;
  detailedDesc?: string;
  latency?: string;
  benchmark?: string;
  category?: "MARKETING" | "DEVELOPMENT";
}

export interface PartnerLogo {
  name: string;
  id: string;
}

export interface FooterColumn {
  title: string;
  items: string[];
}

export interface AuditFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
}
