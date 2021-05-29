import { registerHtml } from 'tram-one'
import './project-dates.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<span className="project-dates">${children}</span>
	`
}
