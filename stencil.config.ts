import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  copy: [{ src: '../netlify/_redirects', dest: '_redirects' }],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
