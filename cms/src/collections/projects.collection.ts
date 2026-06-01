/**
 * Projects Collection
 */

import type { CollectionConfig, FieldType } from '@sonicjs-cms/core'

export default {
  name: 'projects',
  displayName: 'Projects',
  description: 'Manage portfolio projects and homelab architectures',
  icon: '🚀',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Project Title',
        required: true,
        maxLength: 150
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 150
      },
      excerpt: {
        type: 'textarea',
        title: 'Excerpt',
        maxLength: 300,
        helpText: 'Short summary for project cards'
      },
      content: {
        type: 'quill' as FieldType,
        title: 'Detailed Content',
        required: true,
        helpText: 'Full case study, architecture details, and challenges overcome'
      },
      featuredImage: {
        type: 'media',
        title: 'Architecture Diagram / Featured Image'
      },
      repositoryUrl: {
        type: 'string',
        title: 'Repository URL',
        helpText: 'Link to GitHub/GitLab'
      },
      liveUrl: {
        type: 'string',
        title: 'Live URL',
        helpText: 'Link to live demo if applicable'
      },
      toolsUsed: {
        type: 'string',
        title: 'Tools Used',
        helpText: 'Comma-separated list of tools (e.g., Docker, Nginx, Ansible)'
      },
      isFeatured: {
        type: 'select',
        title: 'Featured Project?',
        enum: ['yes', 'no'],
        enumLabels: ['Yes', 'No'],
        default: 'no',
        helpText: 'Highlight this project on the homepage'
      }
    },
    required: ['title', 'slug', 'content']
  },

  listFields: ['title', 'isFeatured', 'repositoryUrl'],
  searchFields: ['title', 'excerpt', 'toolsUsed'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig