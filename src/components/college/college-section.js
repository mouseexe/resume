import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break'
import './college-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<div className="college-section">
			<div className="college-content">
				${children}
			</div>
		</div>
	`
}
