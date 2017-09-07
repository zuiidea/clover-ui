const fs = require('fs')
const path = require('path')

if (fs.existsSync(path.join(__dirname, '../dist'))) {
  console.log('Building a entry less file to dist/cover-li.less')
  const componentsPath = path.join(process.cwd(), 'src')
  let componentsLessContent = ''

  // Build components in one file: lib/style/components.less
  fs.readdir(componentsPath, (err, files) => {
    files.forEach((file) => {
      if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
        componentsLessContent += `@import "../${path.join(file, 'style', 'index.less')}";\n`
      }
    })
    fs.writeFileSync(path.join(process.cwd(), 'lib', 'theme', 'components.less'), componentsLessContent)

    // Build less entry file: dist/antd.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'clover-ui.less'),
      '@import "../lib/theme/index.less";\n@import "../lib/theme/components.less";',
    )
  })
}
