import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run projectA:serve',
        production: 'nx run projectA:preview',
      },
      ciWebServerCommand: 'nx run projectA:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
