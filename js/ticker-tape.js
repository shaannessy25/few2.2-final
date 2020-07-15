	// Create a template
const template = document.createElement('template')
	// Set the content of the template
  template.innerHTML = `
    <style>
      .container {
				margin: 3px;
				display: flex;
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

		this._leftButton = this._shadowRoot.querySelector('.left')
		this._rightButton = this._shadowRoot.querySelector('.right')
		this._display = this._shadowRoot.querySelector('.display')

		this._value = 0
		this._step = 1
		this._max = 10
		this._min = 0

		this._update()

		this._increment = this._increment.bind(this)
		this._decrement = this._decrement.bind(this)

	}
	
	_increment(e) {
		const newValue = this._value + this._step
		if (newValue <= this._max) {
			this._value = newValue
		}
		this._update()
	}

	_decrement(e) {
		const newValue = this._value - this._step
		if (newValue >= this._min) {
			this._value = newValue
		}
		this._update()
	}

	_update() {
		this._display.innerHTML = this._value
		this.dispatchEvent(new Event('change'))
	}


  // Tell this component it should look for changes to time
  static get observedAttributes() {
    return ['value', 'min', 'max', 'step'];
  }  


}

customElements.define('ticker-tape', TickerTape);


/*
- Challenge - 1 - 
You need to include this component in your framework. 
It needs to have a style that matches the styles of your 
framework. 
Modify the styles in code here to styles that would fit your framework. 
*/