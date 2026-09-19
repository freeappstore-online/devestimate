import { featureOptions } from "../data/estimateOptions";
import type { Estimate } from "../types";

interface EstimateResultProps {
    estimate: Estimate | null;
    onClear: () => void


}
export function EstimateResult({ estimate, onClear }: EstimateResultProps) {
    if (!estimate) {
        return (
            <section className="rounded-[1.25rem] border border-dashed border-[var(--line)] bg-[var(--panel)] p-8 text-center">
                <h2 className="text-xl font-semibold">
                    No estimate yet
                </h2>

                <p className="mt-2 text-sm text-[var(--muted)]">
                    Choose a project type, select your features and calculate your first
                    estimate.
                </p>
            </section>
        );


    }

     // Get the full feature objects using the IDs stored in the estimate
     const selectedFeatures = featureOptions.filter((feature)=>estimate.selectedFeatureIds.includes(feature.id))
        
     return (
        <section className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                Estimate Result
              </h2>
    
              <p className="text-sm text-[var(--muted)]">
                Your latest project estimate.
              </p>
            </div>
    
            <button
              type="button"
              onClick={onClear}
              className="rounded-xl border border-[var(--line)] px-4 py-2"
            >
              Clear
            </button>
          </div>
    
          {/* Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Hours */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-sm text-[var(--muted)]">
                Total Hours
              </p>
    
              <p className="mt-2 text-xl font-bold">
                {estimate.minHours} - {estimate.maxHours} hrs
              </p>
            </div>
    
            {/* Estimated Cost */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-sm text-[var(--muted)]">
                Estimated Cost
              </p>
    
              <p className="mt-2 text-xl font-bold">
                ${estimate.minCost.toLocaleString()} - $
                {estimate.maxCost.toLocaleString()}
              </p>
            </div>
    
            {/* Project Type */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-sm text-[var(--muted)]">
                Project Type
              </p>
    
              <p className="mt-2 text-xl font-bold capitalize">
                {estimate.projectType}
              </p>
            </div>
    
            {/* Features */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <p className="text-sm text-[var(--muted)]">
                Features Selected
              </p>
    
              <p className="mt-2 text-xl font-bold">
                {estimate.selectedFeatureIds.length}
              </p>
            </div>
          </div>
    
          {/* Main Result Area */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
            {/* Detailed Feature Breakdown */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <div>
                <h3 className="font-semibold">
                  Detailed Breakdown
                </h3>
    
                <p className="text-sm text-[var(--muted)]">
                  Estimated time and cost for each selected feature.
                </p>
              </div>
    
              {selectedFeatures.length === 0 ? (
                <p className="mt-4 text-sm text-[var(--muted)]">
                  No additional features selected.
                </p>
              ) : (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[600px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-[var(--line)]">
                        <th className="px-3 py-3 font-medium">
                          Feature
                        </th>
    
                        <th className="px-3 py-3 font-medium">
                          Time
                        </th>
    
                        <th className="px-3 py-3 font-medium">
                          Cost
                        </th>
                      </tr>
                    </thead>
    
                    <tbody>
                      {selectedFeatures.map((feature) => {
                        const featureMinCost =
                          feature.minHours * estimate.hourlyRate;
    
                        const featureMaxCost =
                          feature.maxHours * estimate.hourlyRate;
    
                        return (
                          <tr
                            key={feature.id}
                            className="border-b border-[var(--line)] last:border-b-0"
                          >
                            {/* Feature Name */}
                            <td className="px-3 py-3 font-medium">
                              {feature.name}
                            </td>
    
                            {/* Feature Hours */}
                            <td className="px-3 py-3 text-[var(--muted)]">
                              {feature.minHours} - {feature.maxHours} hrs
                            </td>
    
                            {/* Feature Cost */}
                            <td className="px-3 py-3 text-[var(--muted)]">
                              ${featureMinCost.toLocaleString()} - $
                              {featureMaxCost.toLocaleString()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
    
            {/* Estimation Summary */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <h3 className="font-semibold">
                Estimation Summary
              </h3>
    
              <div className="mt-4 space-y-4">
                {/* Project Type */}
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-[var(--muted)]">
                    Project Type
                  </p>
    
                  <p className="font-medium capitalize">
                    {estimate.projectType}
                  </p>
                </div>
    
                {/* Number of Features */}
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-[var(--muted)]">
                    Features
                  </p>
    
                  <p className="font-medium">
                    {estimate.selectedFeatureIds.length}
                  </p>
                </div>
    
                {/* Total Hours */}
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-[var(--muted)]">
                    Total Hours
                  </p>
    
                  <p className="font-medium">
                    {estimate.minHours} - {estimate.maxHours} hrs
                  </p>
                </div>
              </div>
    
              {/* Pricing Breakdown */}
              <div className="mt-6 border-t border-[var(--line)] pt-4">
                <h3 className="font-semibold">
                  Pricing Breakdown
                </h3>
    
                <div className="mt-4 space-y-4">
                  {/* Hourly Rate */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-[var(--muted)]">
                      Hourly Rate
                    </p>
    
                    <p className="font-medium">
                      ${estimate.hourlyRate}/hr
                    </p>
                  </div>
    
                  {/* Minimum Cost */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-[var(--muted)]">
                      Minimum Cost
                    </p>
    
                    <p className="font-medium">
                      ${estimate.minCost.toLocaleString()}
                    </p>
                  </div>
    
                  {/* Maximum Cost */}
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-[var(--muted)]">
                      Maximum Cost
                    </p>
    
                    <p className="font-medium">
                      ${estimate.maxCost.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

      


