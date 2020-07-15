	// Create a template
const template = document.createElement('template')
	// Set the content of the template
  template.innerHTML = `
    <style>
      .container {
			}
		h1 {
			color: purple;
			animation-name: slide;
			animation-duration: 5000ms;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
		@keyframes slide{
			0%{
				transform: translate3d(0, 0, 0);
			}
			100%{
				transform: translate3d(100%, 0, 0);				
			}
		}
    </style>
    <div class="container">
        <h1>Hello World</h1>
    </div>
	`

class TickerTape extends HTMLElement {
  constructor() {
    super();
		
		const tempNode = template.content.cloneNode(true)
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(tempNode)
		this._display = this._shadowRoot.querySelector('h1')

		this._display.innerHTML = this.innerHTML





	}



}

customElements.define('ticker-tape', TickerTape);

