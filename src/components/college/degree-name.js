import { registerHtml } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span className="degree-name">${children}</span>
	`
}
