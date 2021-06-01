import { registerHtml } from 'tram-one'
import './degree-section.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="degree-section">${children}</section>
	`
}
