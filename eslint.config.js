import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}

export default [{ files: ['**/*.{js,mjs,cjs,ts}'] }, { languageOptions: { globals: globals.browser } }, pluginJs.configs.recommended, ...tseslint.configs.recommended]
