/**
 * @name ConfigAutoComponentsPlugin
 * @description 按需加载，自动引入组件
 */

import type { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VarletImportResolver } from '@varlet/import-resolver'

export const ConfigAutoComponentsPlugin = (): Plugin => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue', 'md'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [VarletImportResolver()]
  }) as Plugin
}
