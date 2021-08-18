/**
 * Required by jest.
 * This config can break build, use it for the jest tests only
 */
module.exports = (api) => {
    const isTest = api.env('test');

    if (!isTest) return {};

    return {
        presets: [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
        ]
    }
};