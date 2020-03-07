module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 按需加载组件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
