/** Instructions:
 * To run all the tests in tests folder use npx playwright test
 * To run the js file go to JS-basico\Playwright\tests and run: node simpleTest.js
 */


(async() => {
    try{
        const {chromium} = require('playwright');
        const browser = await chromium.launch({headless:false, slowMo:100});
        const page = await browser.newPage();
        await page.goto('https://www.prospects.ac.uk');
        await page.click('a:has-text("Jobs and work experience")')
        await page.click('a:has-text("Search graduate jobs")', {delay:100});
        await page.click('#sectors-legend',{delay:100});
        const sectors = ['law', 'recruitment and HR'];
        for(let i =0; i<sectors.length; i++ ){
            await page.locator(`div input[id='Job sectors - ${sectors[i]}']`).check();
        }
        await browser.close();
    }
    catch(e){
        console.log('caught error', e)
    }
})();

