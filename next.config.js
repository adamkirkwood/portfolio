const PRODUCTION_MODE = process.env.NODE_ENV === 'production'

const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {

    config.resolve.extensions = (PRODUCTION_MODE
      ? ['.js', '.json', '.prod.js']
      : ['.js', '.json', '.dev.js'])

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s?css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: [
                'styles',
                'node_modules',
                'static'
              ]
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  }
}
