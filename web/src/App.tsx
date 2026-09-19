import { initApp } from '@freeappstore/sdk'
import { Shell, BuildInfo } from '@freeappstore/sdk/ui'
import { useState, useEffect } from 'react'
import { AppShell } from './components/AppShell'
import { calculateEstimate } from './services/estimateServices'
import { getEstimate,clearEstimate,saveEstimate } from './services/storage'
import { EstimateForm } from './components/EstimateForm'
import { EstimateResult } from './components/EstimateResult'
import type { Estimate,EstimateFormValues } from './types'



const fas = initApp({ appId: 'my-app' })

export default function App() {

  const [estimate, setEstimate] = useState<Estimate | null>(null)

  useEffect(()=>{
    const savedEstimate = getEstimate()
     if (savedEstimate){
      setEstimate(estimate)

     }

  },[])

  function handleCalculate(values: EstimateFormValues){
    const newEstimate = calculateEstimate(values)

    setEstimate(newEstimate)

    saveEstimate(newEstimate)


  }

  function handleClear(){
    clearEstimate()

    setEstimate(null)

  }


  return (
    <Shell app={fas} appName="DevEstimate">
      <AppShell>
      <div className="grid gap-6">
        <EstimateForm
          onCalculate={handleCalculate}
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
