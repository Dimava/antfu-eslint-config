import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    filesTypeAware: ['never'],
    tsconfigPath: 'tsconfig.json',
  },
})
