module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    }
    // 禁用 px 转 vw，直接使用 px 单位
    // 'cnjm-postcss-px-to-viewport': {
    //   unitToConvert: 'px',
    //   viewportWidth: 375,
    //   unitPrecision: 6,
    //   propList: ['*'],
    //   viewportUnit: 'vw',
    //   fontViewportUnit: 'vw',
    //   minPixelValue: 1,
    //   mediaQuery: true,
    //   replace: true,
    //   landscape: false,
    //   landscapeUnit: 'rem',
    //   landscapeWidth: 1134,
    //   include: [],
    //   exclude: [],
    // },
  }
}
