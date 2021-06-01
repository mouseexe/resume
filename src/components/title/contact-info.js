import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="contact-info">${children}</section>
	`
}
