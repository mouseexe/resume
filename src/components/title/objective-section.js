import { registerHtml } from 'tram-one'
import './objective-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="objective-section">
			${children}
		</section>
	`
}
