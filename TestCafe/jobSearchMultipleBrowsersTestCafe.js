/** tests must be organised into categories called fixtures
 *  A js, typescript or coffeescript file with TestCafe tests can contain 1 or more fixtures
 *  t is the test controller object, passed as a parameter exposes the API's methods and passing
 *  to each function that can run server-side test code.
 *  t is used to call test actions, handle browser dialogs, use the wait function, or execute assertions
 *  The test runner also uses the test controller to access the internal context required for the API to operate
 *  Run with command: testcafe chrome jobSearchMultipleBrowsersTestCafe.js
 *
 * /*****************************TestCafe*******************************
 - Never have to care about waiting for an element on the page to load
 - Multiple browsers using a command
 - Support the page object mode, BDD
 - Compatible with continuous integration systems like Jenkins, GitHubActions

 COMPONENTS
 - Client server
 - TestCafe API
 - Page proxying
 - Isolated tests: Isolate each test run from subsequent tests and tests that run in parallel.
 After the run TestCafe resets the browser state: deletes cookies, clears local and session storages,
 reloads the tested page.


 async function f(){   //async before a function means always returns a promise and wraps non-promises in it.
 return 1;
 }

 A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully,
 or an error if it does not complete successfully due to time out, network error, and so on.

 Await => makes JS wait until promises settles and then go on with the results. TestCafe handles js waits with await.
          The wait doesnt cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.

 RUN different browsers: firefox,chrome,edge  it doesn't run on safari
 testcafe firefox,chrome,edge jobSearchMultipleBrowsersTestCafe.js
 */


import { Selector } from 'testcafe';
import { t } from 'testcafe';

fixture ("Job search").page('https://www.prospects.ac.uk'); //organise the tests in categories


test("search criteria", async t => { //t will control the browser and exposes the test API's methods and passing to each function that can run server-side test code

        await t.click(Selector('a').withText("Jobs and work experience"));
        await t.click(Selector('a').withText("Search graduate jobs"));

        const sectorsToSelect = ['law', 'sales'];
        await checkSectorsBySectorName(sectorsToSelect);

        const typeOfWorkToSelect = ['graduate job', 'graduate scheme'];
        await checkTypeOfWorkByName(typeOfWorkToSelect);

        const locationsToSelect = ['North West England', 'West Midlands'];
        await checkLocations(locationsToSelect);

        await checkSalary("All");
        await t.typeText("#keyword", "Maths" );

        await clickButton();

        const content =  Selector('.result-no-matches');
        await t.expect(content.textContent).contains("No more");
        await t.expect(content.textContent).eql("No more matching jobs");
        //await t.expect(content.withText("No more matching jobs").exist).ok(); doesn't work
});

async function checkSectorsBySectorName(sectorsToSelect) {
    await t.click("#sectors-legend");
    for (let i = 0; i < sectorsToSelect.length; i++) {
        await t.click(`div input[id='Job sectors - ${sectorsToSelect[i]}']`);
    }
    await t.click("#sectors-legend");

}


async function checkTypeOfWorkByName(typeOfWorkList) {
    await t.click("#typeOfWork-legend");
    for (let i = 0; i < typeOfWorkList.length; i++) {
        await t.click(`div input[id='Type of work - ${typeOfWorkList[i]}']`);
    }
    await t.click("#typeOfWork-legend");
}

async function checkLocations(locations) {
    await t.click("#locations-legend");
    for (let i = 0; i < locations.length; i++) {
        await t.click(`div input[id='Location - ${locations[i]}']`);
    }
    await t.click("#locations-legend");
}

async function checkSalary(salary) {
    await t.click("#salary-legend");
    await t.click(`div input[id='Salary - ${salary}']`);
    await t.click("#salary-legend");
}

async function clickButton() {
    await t.click("button[type='submit']");
}

/** TOOK 23 sec to run on the 3 browsers
 *  It has a good log output info of Chrome version and OS
 *  Runs on: chrome, firefox, edge, opera and apparently safari
 *  This test failed on firefox and opera
 * */

