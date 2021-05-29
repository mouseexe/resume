import { registerHtml } from 'tram-one'
import './college-name.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div className="college-name">${children}</div>
	`
}
