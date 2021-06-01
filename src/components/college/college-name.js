import { registerHtml } from 'tram-one'
import './college-name.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<h2 className="college-name">${children}</h2>
	`
}
