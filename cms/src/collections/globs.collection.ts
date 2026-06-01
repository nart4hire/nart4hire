/**
 * Global Content Collection
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'globs',
  displayName: 'Global Content (i18n)',
  description: 'Manage site-wide text, hero sections, labels, and UI strings',
  icon: '🌐',

  schema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        title: 'Content Key (Identifier)',
        required: true,
        helpText: 'e.g., hero.title, footer.copyright, nav.about'
      },
      section: {
        type: 'select',
        title: 'Site Section',
        enum: ['hero', 'navigation', 'footer', 'about', 'buttons', 'seo'],
        enumLabels: ['Hero Section', 'Navigation', 'Footer', 'About Section', 'Button Labels', 'SEO / Meta'],
        required: true,
        default: 'hero'
      },
      value: {
        type: 'textarea',
        title: 'Text Content',
        required: true,
        helpText: 'The actual text to display on the site'
      },
      languageCode: {
        type: 'select',
        title: 'Language',
        enum: ['en', 'es', 'fr', 'de'], // Expand based on your needs
        enumLabels: ['English', 'Spanish', 'French', 'German'],
        default: 'en',
        required: true
      }
    },
    required:['key', 'section', 'value', 'languageCode']
  },

  listFields:['key', 'section', 'languageCode', 'value'],
  searchFields: ['key', 'value'],
  defaultSort: 'section',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig