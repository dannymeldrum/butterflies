module.exports = {
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '../_assets/css/dev/style.css': './src/sass/style.scss'
            }
        }
    }
}