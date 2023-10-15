import { registerHtml } from 'tram-one'
import './degree-name.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span className="degree-name">${children}</span>
	`
}
