import { registerHtml } from 'tram-one'
import './skill-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<ul className="skill-section">
			${children}
		</ul>
	`
}
