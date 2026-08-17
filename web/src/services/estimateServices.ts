// web/src/services/calculateEstimate.ts

import { featureOptions, projectBaseHours } from "../data/estimateOptions";
import type { Estimate, ProjectType } from "../types";

interface CalculateEstimateInput {
  projectType: ProjectType;
  selectedFeatureIds: string[];
  hourlyRate: number;
}

export function calculateEstimate({
  projectType,
  selectedFeatureIds,
  hourlyRate,
}: CalculateEstimateInput): Estimate {
  const baseHours = projectBaseHours[projectType];

  const selectedFeatures = featureOptions.filter((feature) =>
    selectedFeatureIds.includes(feature.id),
  );

  const featureMinHours = selectedFeatures.reduce(
    (total, feature) => total + feature.minHours,
    0,
  );

  const featureMaxHours = selectedFeatures.reduce(
    (total, feature) => total + feature.maxHours,
    0,
  );

  const minHours = baseHours.min + featureMinHours;
  const maxHours = baseHours.max + featureMaxHours;

  const minCost = minHours * hourlyRate;
  const maxCost = maxHours * hourlyRate;

  return {
    projectType,
    selectedFeatureIds,
    hourlyRate,

    minHours,
    maxHours,

    minCost,
    maxCost,

    createdAt: new Date().toISOString(),
  };
}