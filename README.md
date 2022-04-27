# javaScriptPractice

Automation testing tools for e2e tests (functional testing), some considerations:

** TestCafe: based on node.js (run js on the server), it is an end-to-end solution for testing web apps. 

** Playwright: created by Microsoft, is an open source cross-browser automation framework for end-to-end testing.
They both run tests within a browser, rather than executing tests remotely like Selenium does. It is easy to install, configure and get started.
Can run your tests on any browser without having to download separate drivers for each browser

** Cypress: more widely used within JS community. Limitations around testing iFrames and multiple tabs. Built in waits. Running tests in parallel requires configuration effort.

** Selenium: preferred within Java/C#/Ruby developers. Can be used with multiple programming languages: Java, Python, Ruby, C#, JavaScript, Perl and PHP. It requires more effort for the setup. Tests could be a bit flaky if wait methods are not used properly. Cross browse testing and parallel execution available  


***** Playwright vs TestCafe *****

PLAYWRIGHT (2015)

1- Good output log when the test fails. It shows the reason of the failure and the line
2- Tests against the web engine for the most popular browsers. Runs on Chrome, WebKit, Edge and firefox. Does NOT support IE. WebKit is the web browser engine used by Safari.
3- With this command it takes you to a nice html report: npx playwright show-report my-report
4- Community is just growing, has more frequent updates and fewer dependencies.
5- Supports java, javascript, c# and python and has an alternative assertion libraries
6- Built in waiting mechanism
7- Playwright can intercept network activity to modify or mock, network requests during test scenarios.
8- Playwright leverages the DevTools protocol to write powerful, stable automated tests.
9- Supports parallel execution and cross browser testing
10- Test Runner Frameworks Supported: Mocha, Jest, Jasmine

Cons:
1- Community is not very big
2- Doesn't support IE
3- Safari support means there is Webkit support which is used inside Safari, but it doesn’t mean a 100% match, due to specific Safari features.
4- Uses desktop browsers to emulate mobile devices only.

TESTCAFE (2013)

1- Has a good output log when a test fails. It shows the failure, the reason and the line number
2- Runs on Chrome, Edge, IE(11+) and Firefox. It says can support safari but when I use this command to get the list of browsers is not coming up '--list-browsers' it is not coming up. Also it didnt work for me on ie. while running on different browsers
3- Has fewer open pull requests, so the community is not very active
4- Doesn't support any other language rather than js
5- Limited assertions
6- TestCafe can automate the browser on desktop or mobile.
7- Automated waiting mechanism, which automatically waits for changes to take place and retries with checkups.
8- Good for mobile web app testing, which is testing a web browser via IOS or Android devices, without any workaround to use Appium additionally.
9- Cannot open new tabs or new browser in incognito mode 
10- Will have issues with iframes
11- Hard to debug, you don’t know how actually a web page is parsed to inject automation scripts.
12- Supports parallel execution
13- It was created for running tests against older browser versions.
14- By default, TestCafe supports only CSS selectors.
15- Paid Test Café Studio

CONS:
1- Assertions are not particularly friendly, for example to get some text from an element and then compare it to another.
TestCafe supports built-in assertion libraries only: https://www.platformos.com/blog/post/we-are-switching-from-testcafe-to-codeceptjs-here-s-why
2- Community doesn't seem to grow 

  


Cypress:
1- Does not run in Safari, but supports cross browser testing with Chrome, Edge, Firefox
2- not multiple tabs or windows
3- Doesn’t support parallel testing on the same or multiple browsers.
5- Supports: e2e testing, unit testing, integration testing, API testing
6- Only supports javaScript
7- Cypress support for iframe is limited.
8- Cypress supports only Mocha, Chai assertion libraries. However these are sufficient for most test scripts.
9- Cypress Dashboard



***Conclusion:***
There is a great variety of tools for e2e testing. Deciding on what tool to use you will need to consider two main factors:
product/client requirements, and the knowledge and experience of the team.
Therefore, the requirements should be identified first, then the evalution on benefits and costs can be analyzed to make the final decision. 
For example: if you have to test your applications on old browsers versions, then TestCafe is a good option.
Playwright offers more flexibility with programing languages and assertions, the community keeps growing.
more widely used within JS community

Here, some interesting blogs comparing the most popular automation testing tools:

cypress vs testcafe:
https://www.browserstack.com/guide/testcafe-vs-cypress  (cypress doesnt support safari)

cypress vs selenium
https://www.browserstack.com/guide/cypress-vs-selenium
https://medium.com/codex/which-automation-tool-is-the-best-selenium-cypress-webdriverio-testcafe-playwright-c56c6f22df1f

playwright vs selenium
https://www.browserstack.com/guide/playwright-vs-selenium

general comparison 
https://medium.com/codex/which-automation-tool-is-the-best-selenium-cypress-webdriverio-testcafe-playwright-c56c6f22df1f

selenium vs test-cafe vs playwright
https://medium.com/codex/which-automation-tool-is-the-best-selenium-cypress-webdriverio-testcafe-playwright-c56c6f22df1f