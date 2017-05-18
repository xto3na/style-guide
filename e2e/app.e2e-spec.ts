import { STYLEGUIDEPage } from './app.po';

describe('style-guide App', () => {
  let page: STYLEGUIDEPage;

  beforeEach(() => {
    page = new STYLEGUIDEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
