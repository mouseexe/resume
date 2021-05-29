import { registerHtml } from 'tram-one'
import './project-role.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span className="project-role">${children}</span>
	`
}
