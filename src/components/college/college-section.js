import { registerHtml } from 'tram-one'
import './college-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="college-section">
			<section className="college-content">
				${children}
			</section>
		</section>
	`
}
