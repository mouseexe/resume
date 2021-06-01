import { registerHtml } from 'tram-one'
import './section-break.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<hr className="section-break" ${props} />
	`
}
