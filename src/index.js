import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import useContentful from './hooks/useContentful'
import './styles.css'
import * as components from './components'

// use content-example.js if you aren't using contentful
// import content from './hooks/content-example';

const html = registerHtml({
	'college-name': components.collegeName,
	'college-section': components.collegeSection,
	'contact-info': components.contactInfo,
	'degree-completion': components.degreeCompletion,
	'degree-name': components.degreeName,
	'degree-section': components.degreeSection,
	'name-section': components.nameSection,
	'objective-section': components.objectiveSection,
	'project-dates': components.projectDates,
	'project-details': components.projectDetails,
	'project-role': components.projectRole,
	'project-section': components.projectSection,
	'project-technologies': components.projectTechnologies,
	'project-title': components.projectTitle,
	'project-title-section': components.projectTitleSection,
	'resume-name': components.resumeName,
	'section-break': components.sectionBreak,
	'skill-section': components.skillSection,
})

const home = () => {
	console.log(components)

	// switch to content-example if you aren't using contentful
	// const resumeContent = content
	const resumeContent = useContentful()

	// if resume content isn't ready yet, wait
	// this will usually be instantaneous
	if (!resumeContent.isLoaded) {
		return html`<code>Loading...</code>`
	}

	// if we errored, show an error message
	// this will happen if contentful is down or misconfigured
	if (resumeContent.isErrored) {
		return html`<code>An Error Occured</code>`
	}

	console.log(JSON.stringify(resumeContent))

	const resumeBlocks = resumeContent.content.content.map(section => {
		switch (section.contentfulType) {
			case 'sectionBreak':
				return html`
					<section-break light>${section.sectionTitle}</section-break>
				`
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
				const descriptionParagraphs = section.description.split('\n');
				const descriptionBlocks = descriptionParagraphs.map(p => html`<project-details>${p}</project-details>`);
				return html`
					<project-section>
						<project-title-section>
						<project-title>${section.title}</project-title>
							<section>
							<project-role>${section.role}</project-role>
							<project-dates>${section.date}</project-dates>
							</section>
						</project-title-section>
						<ul>
							${descriptionBlocks}
						</ul>
					</project-section>
				`

			case 'resumeSkillsSection':
				const individualSkills = section.skills.split('\n');
				const skillItems = individualSkills.map(p => html`<li>${p}</li>`);
				return html`
					<skill-section>${skillItems}</skill-section>
				`
		}
	})

	return html`
		<article>
			<name-section>
				<resume-name>${resumeContent.content.name}</resume-name>
				<contact-info>
					${resumeContent.content.contactInformation}
				</contact-info>
			</name-section>
			<objective-section>
				${resumeContent.content.objective}
			</objective-section>
			${resumeBlocks}
		</article>
	`
}

start(home, '#app')
