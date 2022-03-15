/** to call the test go to the folder where the test lives and run: npx playwright test tests/pageObjectModel/specs/jobSearchTest.spec.js
 * */
const { chromium} = require('playwright');
const { test, expect} = require('@playwright/test');

const { JobSearchPage } = require('../pages/JobSearchPage.page.js');
let browser = null;
let context = null;
let page = null;


test('job search', async () => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    const jobSearchPage = new JobSearchPage(page);
    await jobSearchPage.navigate();
    const sectorsToSelect = ['law', 'sales'];
    await jobSearchPage.checkSectorsBySectorName(page, sectorsToSelect);
});
