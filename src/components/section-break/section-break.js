import { registerHtml } from 'tram-one'
import './section-break.css'

const html = registerHtml()

export default (props, children) => {
	return html`
	<div className="section-break-container">
		<hr className="section-break" ${props} />
		${children}
		<hr className="section-break" ${props} />
	</div>
	`
}
