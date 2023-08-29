import { browser, $, expect } from '@wdio/globals'


describe('Logged out - Amazon Account List Menu', () => {
    /*
   Criteria: When a user visits the amazon.com website in the logged out state 
   and clicks on the Watchlist menu item they are redirected to a login/signup page.
  */
    it('is redirected to signup/login page when clicking on Watchlist', async () => {
        await browser.url('https://www.amazon.com');
        
        let btn = $('#nav-link-accountList');
        await btn.moveTo();

        const watchListOption = await $('a=Watchlist');
        await watchListOption.click();

        const signInHeading = await $('h1=Sign in');
        await expect(signInHeading).toBeDisplayed()

        const createAccountBtn = await $("a[id='createAccountSubmit']")
        await expect(createAccountBtn).toBeDisplayed()
    });
  });
  