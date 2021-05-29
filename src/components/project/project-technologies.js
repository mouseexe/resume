import { registerHtml } from 'tram-one'
import './project-technologies.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div className="project-technologies">
			${children}
		</div>
	`
}
