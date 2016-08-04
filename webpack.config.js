module.exports = {
  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['react', 'es2015'],
      },
    }],
  },
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      umd: 'react',
    },
  },
};
