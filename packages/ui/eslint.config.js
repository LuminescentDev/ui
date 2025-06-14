// eslint.config.mjs
import css from '@eslint/css';
import { tailwindSyntax } from "@eslint/css/syntax";
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['node_modules/*', 'dist/*', 'server/*', 'tmp/*']),
  css.configs.recommended,
  [
    // lint CSS files
    {
      files: ["**/*.css"],
      plugins: { css },
      language: "css/css",
      languageOptions: {
        customSyntax: tailwindSyntax,
      },
    },
  ]
);
