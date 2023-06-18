import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'studio',
  projectId: 'qtut2ng4',
  dataset: 'production',
  basePath: 'site-sanity',
  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
