import type{ Estimate } from "../types";

export function saveEstimate(estimate: Estimate):void {
    localStorage.setItem('estimate',JSON.stringify(estimate))
}

export function getEstimate():Estimate | null{
    const storedEstimate = localStorage.getItem('estimate')
    
    if (!storedEstimate) return null

    try{
        return JSON.parse(storedEstimate) as Estimate
    } catch {
        return null
    }

}

export function clearEstimate(): void {
    localStorage.removeItem('estimate')
}

