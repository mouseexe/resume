import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break'
import './project-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<div className="project-section">
			<section-break medium />
			<div className="project-content">
				${children}
			</div>
		</div>
	`
}
