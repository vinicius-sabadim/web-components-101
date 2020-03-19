const templateIncrementNumber = document.createElement('template')
templateIncrementNumber.innerHTML = `
  <style>
    div {
      align-items: center;
      display: flex;
    }

    p {
      align-items: center;
      background-color: coral;
      border-radius: 50%;
      color: white;
      display: flex;
      font-size: 2rem;
      height: 60px;
      justify-content: center;
      margin: 0 1.5rem 0 0;
      width: 60px;
    }

    button {
      background-color: purple;
      border: none;
      border-radius: .3rem;
      color: white;
      cursor: pointer;
      font-size: 1.5rem;
      padding: .5rem 1rem;
      transition: opacity .5s;
    }

    button:hover, button:focus {
      opacity: .7;
    }

    button:active {
      transform: scale(1.05);
    }
  </style>

  <div>
    <p>0</p>
    <button>Increment</button>
  </div>
`

class IncrementNumber extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(templateIncrementNumber.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', () => this.increment())
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener()
  }

  increment() {
    const count = this.shadowRoot.querySelector('p')
    count.innerText = parseInt(count.innerText, 10) + 1
  }
}

customElements.define('increment-number', IncrementNumber)
