import { registerHtml } from 'tram-one'
import './project-title-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="project-title-section">
			${children}
		</section>
	`
}
