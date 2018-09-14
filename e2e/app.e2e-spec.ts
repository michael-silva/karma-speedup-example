import { KarmaSpeedupExamplePage } from './app.po';

describe('karma-speedup-example App', () => {
  let page: KarmaSpeedupExamplePage;

  beforeEach(() => {
    page = new KarmaSpeedupExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
