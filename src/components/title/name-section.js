import { registerHtml } from 'tram-one'
import sectionBreak from '../section-break/section-break'
import './name-section.css'

const html = registerHtml({
	'section-break': sectionBreak
})

export default (props, children) => {
	return html`
		<header className="name-section">
			<section className="name-content">
				${children}
			</section>
			<section-break dark>Summary</section-break>
		</header>
	`
}
