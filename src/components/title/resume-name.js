import { registerHtml } from 'tram-one'
import './resume-name.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div className="resume-name">${children}</div>
	`
}
