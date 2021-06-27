const artWorkFields = `
    _id,
    title, 
    artwork,
    slug,
    description,
    "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
`

export const indexQuery = `*[_type == 'artpiece']{${artWorkFields}}[0...6]`
