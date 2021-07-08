export default {
  title: 'Frame Size',
  name: 'merchVariant',
  type: 'object',
  fields: [
    { title: 'Size', name: 'size', type: 'string' },
    {
      title: 'Price',
      description:
        'For now, add cents as zeroes, ie 500 = $5, or 7550 = $75.50',
      name: 'price',
      type: 'number'
    }
  ]
}
