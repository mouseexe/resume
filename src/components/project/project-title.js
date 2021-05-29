import { registerHtml } from 'tram-one'
import './project-title.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div className="project-title">${children}</div>
	`
}
