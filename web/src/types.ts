// web/src/types.ts

export type ProjectType =
  | "portfolio"
  | "business"
  | "ecommerce"
  | "saas"
  | "dashboard"
  | "landing";

export interface ProjectBaseHours {
  min: number;
  max: number;
}

export interface FeatureOption {
  id: string;
  name: string;
  description: string;
  minHours: number;
  maxHours: number;
}

export interface Estimate {
  projectType: ProjectType;

  selectedFeatureIds: string[];

  hourlyRate: number;

  minHours: number;
  maxHours: number;

  minCost: number;
  maxCost: number;

  createdAt: string;
}