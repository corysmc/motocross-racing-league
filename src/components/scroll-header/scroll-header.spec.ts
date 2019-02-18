import { TestWindow } from '@stencil/core/testing';
import { ScrollHeader } from './scroll-header';

describe('scroll-header', () => {
  it('should build', () => {
    expect(new ScrollHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLScrollHeaderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ScrollHeader],
        html: '<scroll-header></scroll-header>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
