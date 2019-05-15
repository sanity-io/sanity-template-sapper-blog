import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  ![].includes(listItem.getId())

export default () =>
  S.list()
    .title('Clean')
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
