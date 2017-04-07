import { EpicurldusPage } from './app.po';

describe('epicurldus App', function() {
  let page: EpicurldusPage;

  beforeEach(() => {
    page = new EpicurldusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
