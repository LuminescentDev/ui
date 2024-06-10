
/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  "files": "src/**",
  "targets": [
    "react",
    "svelte",
    "qwik",
    "vue",
  ],
  "dest": "packages",
  "commonOptions": {
    "typescript": true
  },
  "options": {
    "react": {
      "stylesType": "style-tag"
    },
    "svelte": {},
    "qwik": {}
  }
}