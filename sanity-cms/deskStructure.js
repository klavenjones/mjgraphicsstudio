import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('MJ Graphics')
    .items([
      S.listItem()
        .title('About Me')
        .child(S.document().schemaType('aboutMe').documentId('aboutMe')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['aboutMe'].includes(listItem.getId())
      )
    ])
