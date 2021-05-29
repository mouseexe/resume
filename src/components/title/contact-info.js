import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<div className="contact-info">${children}</div>
	`
}
