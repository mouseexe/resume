import { useGlobalStore, useEffect } from 'tram-one'
import * as contentful from 'contentful'

// helper function to pull out fields and the type of the object
const entryToObjects = (entry) => {
	// first validate that we are looking at an entry (this could be just a normal field or something)
	const isEntry = entry && entry.sys && entry.sys.contentType

	// or it could be an array of entries! We need to check for sure
	const isArray = Array.isArray(entry)

	// if it's not an entry object or an array of something, return whatever we are looking at
	if (!isEntry && !isArray) {
		return entry
	}

	// if it's an array, process each element as if it might be an entry
	if (isArray) {
		return entry.map(entryToObjects)
	}

	// if it's just a single object, pull out the type and fields
	const contentfulType = entry.sys.contentType.sys.id
	const processedFieldsEntries = Object.entries(entry.fields).map(([fieldName, fieldValue]) => [fieldName, entryToObjects(fieldValue)])
	const processedFieldsObject = Object.fromEntries(processedFieldsEntries)
	return { contentfulType, ...processedFieldsObject }
}

export default () => {
	const contentStore = useGlobalStore('contentful', { isLoaded: false, isErrored: false })
	useEffect(async () => {
		const client = contentful.createClient({
			// This is the space ID. A space is like a project folder in Contentful terms
			space: 'qm0m3o9vsa8h',
			// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
			accessToken: 'vtiw5E9wlv4_uCw4zZsc7cwdIFDv1RuQzuD7fSsha7E'
		});
		// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
		const resumeEntry = '10Oa9cbH8pFnog1KeYk0Vy'
		let resumeContent = null
		try {
			resumeContent = await client.getEntry(resumeEntry, {include: 3})
		} catch (error) {
			console.error(error)
			contentStore.isErrored = true
			contentStore.isLoaded = true
		}
		contentStore.content = entryToObjects(resumeContent)
		contentStore.isLoaded = true
	})
	return contentStore
}
