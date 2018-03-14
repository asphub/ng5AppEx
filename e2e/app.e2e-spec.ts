import { AppPage } from './app.po';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ng5-app-ex App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
