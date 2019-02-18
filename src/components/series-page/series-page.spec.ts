import { TestWindow } from '@stencil/core/testing';
import { SeriesPage } from './series-page';

describe('series-page', () => {
  it('should build', () => {
    expect(new SeriesPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSeriesPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SeriesPage],
        html: '<series-page></series-page>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
