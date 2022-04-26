// in node_modules create a folder called models models/Search.js
const BasePage = require('./Base.page');

class JobSearchPagePage extends BasePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        super(page);
        //selectors
        this.jobAndWorkExperienceMenu = 'a:has-text("Jobs and work experience")';
        this.graduateJobsOption = 'a:has-text("Search graduate jobs")';
    }

    async navigate() {
        await super.navigate("https://www.prospects.ac.uk");
        await this.page.click(this.jobAndWorkExperienceMenu);
        await this.page.click(this.graduateJobsOption);
    }
    async search(text) {
        await this.page.fill('[aria-label="Enter your search term"]', text);
    }

    async checkSectorsBySectorName(sectorsToSelect) {
        await this.page.click('#sectors-legend');
        for (let i = 0; i < sectorsToSelect.length; i++) {
            await this.page.check(`div input[id='Job sectors - ${sectorsToSelect[i]}']`);
        }
        await this.page.click('#sectors-legend');
    }
}

module.exports = { JobSearchPage: JobSearchPagePage };