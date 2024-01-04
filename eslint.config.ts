import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  overrides: {
    typescript: {
      'node/prefer-global/process': ['error', 'always'],
    },
  },
})
