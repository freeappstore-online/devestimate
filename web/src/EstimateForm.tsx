import { featureOptions, projectTypeOptions } from "./data/estimateOptions";
import type { ProjectType } from "./types";
import { useState } from "react";

interface EstimateFormValues{
    projectType: ProjectType;
    selectedFeatures: string[];
    hourlyRate: number;
}

interface EstimateFormProps{
    onCalculate: (values:EstimateFormValues)=> void
}

export function EstimateForm({
    onCalculate
}:EstimateFormProps){
    const [projectType, setprojectType] = useState<ProjectType>("portfolio")
    
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const [hourlyRate, sethourlyRate] = useState<number>(50)

    const [error, setError] = useState("")

    function handleFeatureToggle(featureId: string){
        setSelectedFeatures((currentFeatures)=>{
            const isSelected = currentFeatures.includes(featureId)

            if (isSelected){
                return currentFeatures.filter((id)=>id !== featureId)
            }

            return [...currentFeatures, featureId]

        })
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if (hourlyRate <= 0){
            setError("Hourly rate must be greater than 0")
            return;
        }

        setError("")

        onCalculate({
            projectType,
            selectedFeatures,
            hourlyRate
        })

    }  
    return (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-[var(--ink)]"
        >
          {/* Project Type Selection */}
          <section className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-6 backdrop-blur-md shadow-[var(--shadow-card)]">
            <h2 className="mb-1 text-xl font-semibold tracking-tight">
              Select Project Type
            </h2>
    
            <p className="mb-4 text-sm text-[var(--muted)]">
              Choose the type of project you want to estimate.
            </p>
    
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projectTypeOptions.map((option) => {
                const isSelected = projectType === option.value;
    
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setprojectType(option.value)}
                    className={`group rounded-xl border p-4 text-left transition ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                        : "border-[var(--line)] bg-[var(--glass-soft)] hover:border-[var(--line-strong)] hover:bg-[var(--glass-hover)]"
                    }`}
                  >
                    <div
                      className={`font-semibold ${
                        isSelected ? "text-[var(--accent-deep)]" : ""
                      }`}
                    >
                      {option.label}
                    </div>
    
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      {option.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
    
          {/* Feature Selection */}
          <section className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-6 backdrop-blur-md shadow-[var(--shadow-card)]">
            <div className="mb-4">
              <h2 className="text-xl font-semibold tracking-tight">
                Select Features
              </h2>
    
              <p className="text-sm text-[var(--muted)]">
                Choose the features your project needs.
              </p>
            </div>
    
            <div className="grid gap-3 md:grid-cols-2">
              {featureOptions.map((feature) => {
                const isSelected = selectedFeatures.includes(feature.id);
    
                return (
                  <label
                    key={feature.id}
                    className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition ${
                      isSelected
                        ? "border-[var(--sky)] bg-[var(--sky-soft)]"
                        : "border-[var(--line)] bg-[var(--glass-soft)] hover:border-[var(--line-strong)] hover:bg-[var(--glass-hover)]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="mt-0.5 h-4 w-4 rounded border-[var(--line-strong)] accent-[var(--sky)] focus:ring-2 focus:ring-[var(--sky)]"
                    />
    
                    <div className="flex-1">
                      <div className="flex justify-between gap-4">
                        <span
                          className={`font-medium ${
                            isSelected ? "text-[var(--sky-deep)]" : ""
                          }`}
                        >
                          {feature.name}
                        </span>
    
                        <span className="text-sm font-medium text-[var(--muted)]">
                          {feature.minHours} - {feature.maxHours} hrs
                        </span>
                      </div>
    
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {feature.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
    
          {/* Hourly Rate */}
          <section className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-6 backdrop-blur-md shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-semibold tracking-tight">
              Hourly Rate
            </h2>
    
            <p className="mb-4 text-sm text-[var(--muted)]">
              Enter the hourly rate used to calculate cost.
            </p>
    
            <label className="block max-w-xs">
              <span className="mb-2 block text-sm font-medium">
                Rate per hour ($)
              </span>
    
              <input
                type="number"
                min="1"
                value={hourlyRate}
                onChange={(event) =>
                  sethourlyRate(Number(event.target.value))
                }
                className="w-full rounded-xl border border-[var(--line-strong)] bg-[var(--surface-2)] px-4 py-3 text-[var(--ink-strong)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
              />
            </label>
    
            {error && (
              <p className="mt-3 text-sm font-medium text-[var(--error)]">
                {error}
              </p>
            )}
          </section>
    
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--accent)] px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-[var(--accent-hover)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:w-auto"
          >
            Calculate Estimate
          </button>
        </form>
      );
    }


