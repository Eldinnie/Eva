import { EvaPage } from './app.po';

describe('eva App', () => {
  let page: EvaPage;

  beforeEach(() => {
    page = new EvaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
