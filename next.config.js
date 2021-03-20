const path = require('path');

module.exports = {
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: 'http://localhost:4000/',
            },
        ];
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'sass')],
        prependData: `@import "${path.join(__dirname, './sass')}/1-helpers/_1-helpers.sass"`
    },
};