import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  copy: [{ src: '../netlify/_redirects', dest: '_redirects' }],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
