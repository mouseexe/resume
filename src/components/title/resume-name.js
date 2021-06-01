import { registerHtml } from 'tram-one'
import './resume-name.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<h1 className="resume-name">${children}</h1>
	`
}
