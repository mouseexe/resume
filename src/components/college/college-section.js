import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break/section-break'
import './college-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<section className="college-section">
			<section className="college-content">
				${children}
			</section>
		</section>
	`
}
