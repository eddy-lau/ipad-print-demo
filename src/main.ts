import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="button">Print</button>
  </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#button')!)
