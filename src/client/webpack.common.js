const path = require('path')

module.exports = {
    // entry: './src/client/client.ts',
    entry: './src/client/main.js',
    // entry: './src/client/physics1.js',
    // entry: './src/client/raycast.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client'),
    },
}