exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
     resolve: {
        fallback: {
            "http": require.resolve('stream-http'),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve('stream-browserify'),
            "zlib": require.resolve("browserify-zlib"),
            "assert": require.resolve("assert/")
        },
      },
    })
}