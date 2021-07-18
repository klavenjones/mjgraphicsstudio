export default {
  name: 'merch',
  title: 'Merch',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      description:
        "A slug will be apart of the url of the product description page. For example, Tupac digital poster's slug can be tupac, resulting in a link to that product which would be www.mjgraphics.design/products/tupac.",
      title: 'Product Slug',
      type: 'string'
    },
    { name: 'description', title: 'Product Description', type: 'text' },
    {
      name: 'currency',
      title: 'Currency',
      description: 'Enter the type of currency. My suggestion to keep it usd',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      title: 'Shipping',
      description:
        'For now, add cents as zeroes, ie 500 = $5, or 7550 = $75.50',
      name: 'shipping',
      type: 'number'
    },
    // {
    //   title: 'Price',
    //   description:
    //     'For now, add cents as zeroes, ie 500 = $5, or 7550 = $75.50',
    //   name: 'price',
    //   type: 'number'
    // },
    // {
    //   title: 'Size',
    //   description: 'Add frame size',
    //   name: 'size',
    //   type: 'string'
    // }
    { name: 'defaultSize', title: 'Default Frame Size', type: 'merchVariant' },
    {
      name: 'frameSizes',
      title: 'Frame Sizes',
      type: 'array',
      of: [{ title: 'Frame Sizes', type: 'merchVariant' }]
    }
  ]
}
