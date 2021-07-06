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
const social = `
    _id,
    instagram,
    email,
    dribbble,
    behance
`

export const indexQuery = `*[_type == 'artpiece']{${artWorkFields}}`

export const aboutMeQuery = `*[_type == 'aboutMe'][0]{${aboutMe}}`

export const socialQuery = `*[_type == 'socialLinks'][0]{${social}}`
