import { registerHtml } from 'tram-one'
import './project-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="project-section">
			<section className="project-content">
				${children}
			</section>
		</section>
	`
}
