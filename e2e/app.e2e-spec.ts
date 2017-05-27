import { ItChallengesPlayerPage } from './app.po';

describe('it-challenges-player App', () => {
  let page: ItChallengesPlayerPage;

  beforeEach(() => {
    page = new ItChallengesPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
