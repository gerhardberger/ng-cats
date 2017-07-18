import { NgCatsPage } from './app.po';

describe('ng-cats App', function() {
  let page: NgCatsPage;

  beforeEach(() => {
    page = new NgCatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
