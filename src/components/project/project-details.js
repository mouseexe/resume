import { registerHtml } from 'tram-one'
import './project-details.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<li className="project-details">${children}</li>
	`
}
