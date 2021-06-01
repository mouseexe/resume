import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break/section-break'
import './project-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<section className="project-section">
			<section-break medium />
			<section className="project-content">
				${children}
			</section>
		</section>
	`
}
