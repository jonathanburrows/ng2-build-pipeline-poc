import { HousingPage } from './app.po';

describe('housing App', function() {
  let page: HousingPage;

  beforeEach(() => {
    page = new HousingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Housing Application');
  });
});
