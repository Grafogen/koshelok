/** @type {import('next').NextConfig} */


module.exports = {
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        });

        config.module.rules.push({
            test: /\.js/,
            use: ['babel-loader', 'polyfill-loader'], // add polyfill-loader
            include: /node_modules/
        });

        return config;
    },
    reactStrictMode: true,
}

