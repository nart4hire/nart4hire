/**
 * My SonicJS Application
 *
 * Entry point for your SonicJS headless CMS application
 */

import { createSonicJSApp, registerCollections } from '@sonicjs-cms/core'
import type { SonicJSConfig } from '@sonicjs-cms/core'

// Import your collection configurations
// Add new collections here after creating them in src/collections/
import globsCollection from './collections/globs.collection'
import postsCollection from './collections/posts.collection'
import proficienciesCollection from './collections/proficiencies.collection'
import projectsCollection from './collections/projects.collection'
import qualificationsCollection from './collections/qualifications.collection'

// Register collections BEFORE creating the app
// This ensures they are synced to the database on startup
registerCollections([
  globsCollection,
  postsCollection,
  proficienciesCollection,
  projectsCollection,
  qualificationsCollection,
  // Add more collections here as you create them
])

// Application configuration
const config: SonicJSConfig = {
  collections: {
    autoSync: true
  },
  plugins: {
    directory: './src/plugins',
    autoLoad: false  // Set to true to auto-load custom plugins
  }
}

// Create and export the application
export default createSonicJSApp(config)
