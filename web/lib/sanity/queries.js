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

const merch = `
    name,
    slug, 
    description,
    shipping,
    currency,
    defaultSize,
    frameSizes,
    "price": defaultSize.price,
    "id" : _id, 
    "image": image.asset->url
`

export const indexQuery = `*[_type == 'artpiece']{${artWorkFields}}`

export const aboutMeQuery = `*[_type == 'aboutMe'][0]{${aboutMe}}`

export const socialQuery = `*[_type == 'socialLinks'][0]{${social}}`

export const merchQuery = `*[_type == 'merch']{${merch}}`

export const productQuery = (id) =>
  `*[_type == 'merch' && _id == "${id}"]{${merch}}`
