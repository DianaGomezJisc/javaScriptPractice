/** Instructions:
 * To run all the tests in tests folder use npx playwright test
 * To run a single test go to JS-basico\Playwright\tests run: npx playwright test tests/jobSearchMultipleBrowsers.spec.js
 */

const { test, expect} = require('@playwright/test');
test.describe.configure({mode:'parallel'})


test.describe('A traditional test', () => {

    test.beforeEach(async ({page}) => {
        await page.setViewportSize({width: 1600, height: 1200});
    });


    test('job search', async ({page}) => {
        await page.goto("https://www.prospects.ac.uk");
        await page.click('a:has-text("Jobs and work experience")');
        await page.click('a:has-text("Search graduate jobs")');

        const sectorsToSelect = ['law', 'sales'];
        await checkSectorsBySectorName(page,sectorsToSelect);

        const typeOfWorkToSelect = ['graduate job', 'graduate scheme'];
        await checkTypeOfWorkByName(page,typeOfWorkToSelect);

        const locationsToSelect = ['North West England', 'West Midlands'];
        await checkLocations(page,locationsToSelect);

        await checkSalary(page,"All");

        await page.type("#keyword", "Maths");

        await clickButton(page);

        await expect(page.locator('#results h2 span')).toContainText('There is');
    });

    test.afterEach(async ({page}) => {
        await page.close();
    });

})

    async function checkSectorsBySectorName(page,sectorsToSelect) {
        await page.click('#sectors-legend');
        for (let i = 0; i < sectorsToSelect.length; i++) {
            await page.check(`div input[id='Job sectors - ${sectorsToSelect[i]}']`);
        }
        await checkSectorByIndex(page, 3);
        await page.click('#sectors-legend');
    }


    async function checkSectorByIndex(page, index) {
        await page.check(`#sectors-region > div > div:nth-child(1) > div:nth-child(${index}) input[type='checkbox']`);
    }


    async function checkTypeOfWorkByName(page, typeOfWorkList) {
        await page.click('#typeOfWork-legend');
        for (let i = 0; i < typeOfWorkList.length; i++) {
            await page.check(`div input[id='Type of work - ${typeOfWorkList[i]}']`);
        }
        await page.click('#typeOfWork-legend');
    }

    async function checkLocations(page, locations) {
        await page.click('#locations-legend');
        for (let i = 0; i < locations.length; i++) {
            await page.check(`div input[id='Location - ${locations[i]}']`);
        }
        await page.click('#locations-legend');
    }

    async function checkSalary(page, salary) {
        await page.click('#salary-legend');
        await page.check(`div input[id='Salary - ${salary}']`);
        await page.click('#salary-legend');
    }


    async function clickButton(page) {
        await page.click("button[type='submit']", {delay: 50});
    }


/*  FOREACH DOESNT WORK ON FIREFOX
async function checkTypeOfWorkByName(typeOfWorkList) {
    await page.click('#typeOfWork-legend', {delay: 100});
    typeOfWorkList.forEach(typeOfWork => page.check(`div input[id='Type of work - ${typeOfWork}']`));
    await page.click('#typeOfWork-legend', {delay: 100});
}

async function checkLocations(locations) {
    await page.click('#locations-legend', {delay: 100});
    locations.forEach(location => page.check(`div input[id='Location - ${location}']`));
    await page.click('#locations-legend', {delay: 100});
}*/


