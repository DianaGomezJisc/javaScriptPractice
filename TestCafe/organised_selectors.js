
import { Selector } from 'testcafe';
import { t } from 'testcafe';

fixture.meta('version', '1') ("Job search organised").page("https://www.prospects.ac.uk");
const jobsAndWorkExperience = Selector("a").withText("Jobs and work experience");
const searchGraduateJobs = Selector("a").withText("Search graduate jobs");
const selectSector = Selector("#sectors-legend");
const h2Selector = Selector("#results h2 span");
const buttonSelector = Selector("button[type='submit']");


test.meta('env','production').page("https://www.prospects.ac.uk/graduate-jobs")("search criteria", async t => {

    await t.click(jobsAndWorkExperience);
    await t.click(searchGraduateJobs);

    const sectorsToSelect = ['law', 'sales'];
    await checkSectorsBySectorName(sectorsToSelect);

    await clickButton();

    const content =  Selector(h2Selector);
    await t.expect(content.withText("There are ").exists).ok();
});

async function checkSectorsBySectorName(sectorsToSelect) {
    await t.click(selectSector);
    for (let i = 0; i < sectorsToSelect.length; i++) {
        await t.click(`div input[id='Job sectors - ${sectorsToSelect[i]}']`);
    }
    await t.click(selectSector);

}

async function clickButton() {
    await t.click(buttonSelector);
}

/** TOOK 9 sec to run
 *  It has a good log output info of Chrome version and OS
 *
 * */

