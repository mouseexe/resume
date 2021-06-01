import { registerHtml } from 'tram-one'
import './project-title.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<h2 className="project-title">${children}</h2>
	`
}
