const modulesFiles = require.context('./', true, /\.js$/)

export default modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    if (value.default) {
        modules[moduleName] = value.default
    }
    return modules
}, {})
