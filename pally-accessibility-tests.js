const pa11y = require('pa11y');

//TODO: Move it to no gravity tool
(async () => {
  const storiesMap = [];
  let stories = await require('./storybook-static/stories.json');

  Object.values(stories.stories).forEach((story) => {
    storiesMap.push({
      kind: story.kind,
      name: story.name,
      url: `http://localhost:6006/iframe.html?id=${story.id}`,
      id: story.id,
    });

    return storiesMap;
  }, []);

  for (let story of storiesMap) {
    const pa11yResult = await pa11y(story.url, {
      runners: ['axe', 'htmlcs'],
    });
    console.log('\x1b[37m', `Getting pa11y results for ${story.url}\n`);
    if (pa11yResult?.issues?.length > 0) {
      console.log(
        '\x1b[31m',
        `Pa11y result for ${story.kind}: ${pa11yResult.issues.length} issues`,
      );
      pa11yResult.issues.forEach((issue, index) => {
        console.log(
          '\x1b[31m',
          `\n--------------------\nIssue ${index + 1}:`,
          '\x1b[31m',
          `${issue.message}. ${issue.runnerExtras.description || ''}\n--------------------\n`,
        );
      });
      process.exit(1);
    } else {
      console.log('\x1b[32m', `Pa11y result for ${story.name}: 0 issues`);
    }
  }
  process.exit(0);
})();
