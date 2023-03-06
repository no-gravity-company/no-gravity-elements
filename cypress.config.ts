import { defineConfig } from 'cypress';

export default defineConfig({
    chromeWebSecurity: false,
    screenshotsFolder: 'e2e-snapshots/local',
    video: false,
    retries: {
        runMode: 0,
        openMode: 0,
    },
    e2e: {
        specPattern: 'packages/components/*/*/*.integration.spec.ts',
        supportFile: false,
        baseUrl: 'http://localhost:6006',
    },
    component: {
        devServer(cypressConfig: any) {
            // return devServer instance or a promise that resolves to
            // a dev server here
            return {
                port: 1234,
                close: () => {},
            };
        },
    },
});
