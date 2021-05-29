import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import useContentful from './hooks/useContentful'
import './styles.css'
import * as components from './components'

const html = registerHtml({
	'college-name': components.collegeName,
	'college-section': components.collegeSection,
	'contact-info': components.contactInfo,
	'degree-completion': components.degreeCompletion,
	'degree-name': components.degreeName,
	'degree-section': components.degreeSection,
	'name-section': components.nameSection,
	'project-dates': components.projectDates,
	'project-details': components.projectDetails,
	'project-role': components.projectRole,
	'project-section': components.projectSection,
	'project-technologies': components.projectTechnologies,
	'project-title': components.projectTitle,
	'resume-name': components.resumeName,
	'section-break': components.sectionBreak,
})

const home = () => {
	console.log(components)
	const resumeContent = useContentful()

	// if resume content isn't ready yet, wait
	// this will usually be instantaneous
	if (!resumeContent.isLoaded) {
		return html`<div>Loading...</div>`
	}

	// if we errored, show an error message
	// this will happen if contentful is down or misconfigured
	if (resumeContent.isErrored) {
		return html`<code>An Error Occured</code>`
	}

	console.log(JSON.stringify(resumeContent))

	const resumeBlocks = resumeContent.content.content.map(section => {
		switch (section.contentfulType) {
			case 'resumeCollegeBlock':
				const degreeBlocks = section.degrees.map((degreeObject) =>
					html`
						<degree-section>
							<degree-name>${degreeObject.degree}</degree-name>
							<degree-completion>${degreeObject.degreeCompletion}</degree-completion>
						</degree-section>
					`
				)
				return html`
					<college-section>
						<college-name>${section.collegeName}</college-name>
						${degreeBlocks}
					</college-section>
				`

			case 'resumeProjectSection':
				return html`
					<project-section>
						<project-title>${section.title}</project-title>
						<project-role>${section.role}</project-role>
						<project-dates>${section.date}</project-dates>
						<project-details>
							${section.description}
						</project-details>
						<section-break light />
						<project-technologies>
							${section.technologies}
						</project-technologies>
					</project-section>
				`
		}
	})

	return html`
		<main>
			<name-section>
				<resume-name>${resumeContent.content.name}</resume-name>
				<contact-info>
					${resumeContent.content.contactInformation}
				</contact-info>
			</name-section>
			${resumeBlocks}
		</main>
	`
}

start(home, '#app')
