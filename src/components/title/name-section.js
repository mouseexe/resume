import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break'
import './name-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<div className="name-section">
			<div className="name-content">
				${children}
			</div>
			<section-break dark />
		</div>
	`
}
