/**
 * Qualifications Collection
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'qualifications',
  displayName: 'Qualifications',
  description: 'Manage academic degrees, professional certifications, and training.',
  icon: '🎓',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Qualification Title',
        required: true,
        maxLength: 200
      },
      institution: {
        type: 'string',
        title: 'Issuing Authority',
        required: true,
        helpText: 'e.g., University of Tech, Linux Foundation, AWS'
      },
      recordType: {
        type: 'select',
        title: 'Type',
        enum: ['degree', 'certification', 'course'],
        enumLabels:['Academic Degree', 'Professional Certification', 'Training Course'],
        required: true,
        default: 'certification'
      },
      issueDate: {
        type: 'datetime',
        title: 'Issue Date',
        required: true
      },
      expirationDate: {
        type: 'datetime',
        title: 'Expiration Date',
        helpText: 'Important for IT certs; leave blank if it does not expire'
      },
      credentialId: {
        type: 'string',
        title: 'Credential ID',
        helpText: 'For verifying certs'
      },
      credentialUrl: {
        type: 'string',
        title: 'Credential URL',
        helpText: 'Link to verification badge'
      },
      description: {
        type: 'textarea',
        title: 'Description',
        maxLength: 500,
        helpText: 'Key takeaways or achievements'
      }
    },
    required:['title', 'institution', 'recordType', 'issueDate']
  },

  listFields:['title', 'institution', 'recordType', 'issueDate'],
  searchFields: ['title', 'institution', 'description'],
  defaultSort: 'issueDate',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig