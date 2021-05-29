import { registerHtml } from 'tram-one'
import './degree-completion.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span className="degree-completion">${children}</span>
	`
}
