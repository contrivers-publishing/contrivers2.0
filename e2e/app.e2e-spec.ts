import { FixmePage } from './app.po';

describe('fixme App', () => {
  let page: FixmePage;

  beforeEach(() => {
    page = new FixmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
