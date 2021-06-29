const artWorkFields = `
    _id,
    title, 
    artwork,
    slug,
    description,
    "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
`
const aboutMe = `
    _id,
    title,
    body,
    selfie
`

export const indexQuery = `*[_type == 'artpiece']{${artWorkFields}}`

export const aboutMeQuery = `*[_type == 'aboutMe'][0]{${aboutMe}}`
