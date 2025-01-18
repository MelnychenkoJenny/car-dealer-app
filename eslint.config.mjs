import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'max-len': [
        'error',
        { code: 80, ignoreRegExpLiterals: true, ignoreStrings: true },
      ],
      'no-console': [
        'error',
        { allow: ['debug', 'error', 'info', 'trace', 'warn'] },
      ],
      'object-shorthand': ['error', 'always'],
      'quote-props': ['warn', 'consistent-as-needed'],
      'quotes': [
        'error',
        'single',
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      'react/jsx-curly-brace-presence': ['error', 'always'],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]

export default eslintConfig
