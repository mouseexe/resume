import { registerHtml } from 'tram-one'
import './project-details.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<p className="project-details">${children}</p>
	`
}
