import coupon from './CoffeeCoupon.png'

function printOut() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <img src="${coupon}" id="button" class="coupon"/>
  </div>
`
  print()
}

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener('click', () => printOut())
}
