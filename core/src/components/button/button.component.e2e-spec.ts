import { HousingPage } from './button.po';

describe('ButtonComponent', function() {
  let page: HousingPage;

  beforeEach(() => {
    page = new HousingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Housing Application');
  });
});
