import { registerHtml } from 'tram-one'
import './project-technologies.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="project-technologies">
			${children}
		</section>
	`
}
