const templateUserInfo = document.createElement('template')
templateUserInfo.innerHTML = `
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    div {
      background-color: white;
      border-left: 5px solid coral;
      border-radius: .5rem;
      box-shadow: 2px 2px 5px rgba(0,0,0,.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      height: 60px;
      width: 300px;
    }

    h3 {
      margin: 0 0 .5rem 0;
    }
  </style>

  <div>
    <h3><slot name="name"></h3>
    <p><slot name="email"></p>
  </div>
`

class UserInfo extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(templateUserInfo.content.cloneNode(true))
  }
}

customElements.define('user-info', UserInfo)
