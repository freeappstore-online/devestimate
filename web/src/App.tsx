import { initApp } from '@freeappstore/sdk'
import { Shell, BuildInfo } from '@freeappstore/sdk/ui'
import { useState } from 'react'
import { AppShell } from './components/AppShell'
import { calculateEstimate } from './services/estimateServices'
import { getEstimate, clearEstimate, saveEstimate } from './services/storage'
import { EstimateForm } from './components/EstimateForm'
import { EstimateResult } from './components/EstimateResult'
import type { Estimate, EstimateFormValues } from './types'

const fas = initApp({ appId: 'devestimate' })

export default function App() {
  const [estimate, setEstimate] = useState<Estimate | null>(() => getEstimate())
  const [formKey, setFormKey] = useState(0)

  function handleCalculate(values: EstimateFormValues) {
    const newEstimate = calculateEstimate(values)
    setEstimate(newEstimate)
    saveEstimate(newEstimate)
  }

  function handleClear() {
    clearEstimate()
    setEstimate(null)
    setFormKey((key) => key + 1)
  }

  const formInitialValues = estimate
    ? {
        projectType: estimate.projectType,
        selectedFeatureIds: estimate.selectedFeatureIds,
        hourlyRate: estimate.hourlyRate,
      }
    : undefined

  return (
    <Shell app={fas} appName="DevEstimate">
      <AppShell>
        <div className="grid gap-6">
          <EstimateForm
            key={formKey}
            onCalculate={handleCalculate}
            {...(formInitialValues
              ? { initialValues: formInitialValues }
              : {})}
          />

          <EstimateResult
            estimate={estimate}
            onClear={handleClear}
          />
        </div>
      </AppShell>
      <BuildInfo />
    </Shell>
  )
}
