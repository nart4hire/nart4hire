/**
 * Proficiencies Collection
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'proficiencies', // Updated name
  displayName: 'Proficiencies', // Updated display name
  description: 'Manage your technical stack, tools, languages, and core skills.',
  icon: '🛠️',

  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Proficiency Name',
        required: true,
        maxLength: 100
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 100
      },
      type: {
        type: 'select',
        title: 'Category',
        enum:['infrastructure', 'containerization', 'ci-cd', 'language', 'database', 'os'],
        enumLabels:['Infrastructure as Code', 'Containerization & Orchestration', 'CI/CD', 'Programming Language', 'Database', 'Operating System'],
        required: true,
        default: 'infrastructure'
      },
      focusLevel: {
        type: 'select',
        title: 'Focus Level',
        enum:['main', 'side', 'learning'],
        enumLabels:['Main (Daily Driver)', 'Side (Familiar)', 'Currently Learning'],
        required: true,
        default: 'main',
        helpText: 'Used to visually size or group nodes in the UI tree/marquee'
      },
      icon: {
        type: 'media',
        title: 'Logo / Icon',
        helpText: 'Upload SVG or PNG logo'
      },
      shortDescription: {
        type: 'textarea',
        title: 'Context',
        maxLength: 200,
        helpText: 'How you use this (e.g., "Used for cluster orchestration")'
      },
      displayOrder: {
        type: 'number',
        title: 'Display Order',
        default: 0
      }
    },
    required:['name', 'slug', 'type', 'focusLevel']
  },

  listFields: ['name', 'type', 'focusLevel', 'displayOrder'],
  searchFields: ['name', 'shortDescription'],
  defaultSort: 'displayOrder',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig