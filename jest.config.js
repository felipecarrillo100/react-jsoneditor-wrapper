module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // This line is vital
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
