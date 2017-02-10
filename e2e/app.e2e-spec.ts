import { FaithAffirmPage } from './app.po';

describe('faith-affirm App', function() {
  let page: FaithAffirmPage;

  beforeEach(() => {
    page = new FaithAffirmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
