const { FuseBox, JSONPlugin, BabelPlugin, SassPlugin, CSSPlugin } = require('fuse-box')
const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  experimentalFeatures: true,
  useJsNext: true,
  plugins: [
    BabelPlugin(),
    [
      SassPlugin(),
      CSSPlugin()
    ],
    JSONPlugin()
  ]
})

fuse.dev({ port: 4445, httpServer: false })

fuse.bundle('server/bundle')
  .watch('server/**')
  .instructions(' > server/index.js')
  .completed(proc => proc.start())

fuse.bundle('index')
  .watch('**')
  .hmr()
  .instructions(' > index.js')

fuse.run()
